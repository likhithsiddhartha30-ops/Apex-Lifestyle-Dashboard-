import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Pool } from "https://deno.land/x/postgres@v0.17.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const TABLES: { name: string; sql: string }[] = [
  {
    name: "clients",
    sql: `create table if not exists clients (
      id         uuid primary key default gen_random_uuid(),
      name       text not null,
      email      text unique not null,
      goal       text,
      start_date date,
      created_at timestamptz default now()
    )`,
  },
  {
    name: "coaches",
    sql: `create table if not exists coaches (
      id          uuid primary key default gen_random_uuid(),
      name        text not null,
      email       text unique not null,
      specialty   text,
      joined_date date,
      created_at  timestamptz default now()
    )`,
  },
  {
    name: "workouts",
    sql: `create table if not exists workouts (
      id         uuid primary key default gen_random_uuid(),
      client_id  uuid references clients(id) on delete cascade not null,
      date       date not null,
      notes      text,
      created_at timestamptz default now()
    )`,
  },
  {
    name: "nutrition_logs",
    sql: `create table if not exists nutrition_logs (
      id         uuid primary key default gen_random_uuid(),
      client_id  uuid references clients(id) on delete cascade not null,
      date       date not null,
      calories   numeric,
      protein    numeric,
      carbs      numeric,
      fats       numeric,
      notes      text,
      created_at timestamptz default now()
    )`,
  },
  {
    name: "check_ins",
    sql: `create table if not exists check_ins (
      id         uuid primary key default gen_random_uuid(),
      client_id  uuid references clients(id) on delete cascade not null,
      date       date not null,
      weight     numeric,
      body_fat   numeric,
      photos     text,
      created_at timestamptz default now()
    )`,
  },
  {
    name: "weekly_checkins",
    sql: `create table if not exists weekly_checkins (
      id               uuid primary key default gen_random_uuid(),
      client_id        uuid references clients(id) on delete cascade not null,
      date             date not null,
      full_name        text,
      week_overall     text,
      feeling          text,
      stress           int,
      missed_diet      text,
      missed_diet_note text,
      steps_done       text,
      energy_crash     text,
      strength_up      text,
      train_days       int,
      train_note       text,
      weight_mon       numeric,
      weight_tue       numeric,
      weight_wed       numeric,
      weight_thu       numeric,
      weight_fri       numeric,
      weight_sat       numeric,
      weight_sun       numeric,
      photo_shared     text,
      created_at       timestamptz default now()
    )`,
  },
  {
    name: "meals",
    sql: `create table if not exists meals (
      id          uuid primary key default gen_random_uuid(),
      client_id   uuid references clients(id) on delete cascade not null,
      date        date not null default current_date,
      name        text not null,
      time        text,
      calories    numeric default 0,
      protein     numeric default 0,
      carbs       numeric default 0,
      fats        numeric default 0,
      ingredients text,
      created_at  timestamptz default now()
    )`,
  },
  {
    name: "personal_records",
    sql: `create table if not exists personal_records (
      id         uuid primary key default gen_random_uuid(),
      client_id  uuid references clients(id) on delete cascade not null,
      exercise   text not null,
      weight     numeric not null,
      unit       text not null default 'lbs',
      date       date not null default current_date,
      notes      text,
      created_at timestamptz default now()
    )`,
  },
];

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const dbUrl = Deno.env.get("SUPABASE_DB_URL");
    if (!dbUrl) throw new Error("SUPABASE_DB_URL not available");

    const pool = new Pool(dbUrl, 1, true);
    const conn = await pool.connect();

    const results: { table: string; status: string }[] = [];

    for (const { name, sql } of TABLES) {
      try {
        // Create table
        await conn.queryArray(sql);

        // Enable RLS
        await conn.queryArray(`alter table ${name} enable row level security`);

        // Create anon policy — ignore if already exists
        try {
          await conn.queryArray(
            `create policy anon_all on ${name} for all to anon using (true) with check (true)`
          );
        } catch (_) { /* policy already exists — fine */ }

        results.push({ table: name, status: "ok" });
      } catch (err) {
        results.push({ table: name, status: `error: ${err}` });
      }
    }

    conn.release();
    await pool.end();

    const allOk = results.every((r) => r.status === "ok");

    return new Response(
      JSON.stringify({ success: allOk, tables: results }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200 }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: String(err) }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 500 }
    );
  }
});
