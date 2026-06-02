-- ============================================================
-- ApexLifestyle — Full Schema Setup
-- Run this in Supabase → SQL Editor to create all tables.
-- Safe to re-run (uses CREATE TABLE IF NOT EXISTS).
-- ============================================================

-- ── clients ─────────────────────────────────────────────────
create table if not exists clients (
  id         uuid primary key default gen_random_uuid(),
  name       text not null,
  email      text unique not null,
  goal       text,
  start_date date,
  created_at timestamptz default now()
);

-- ── coaches ─────────────────────────────────────────────────
create table if not exists coaches (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  email       text unique not null,
  specialty   text,
  joined_date date,
  created_at  timestamptz default now()
);

-- ── workouts ────────────────────────────────────────────────
create table if not exists workouts (
  id         uuid primary key default gen_random_uuid(),
  client_id  uuid references clients(id) on delete cascade not null,
  date       date not null,
  notes      text,
  created_at timestamptz default now()
);

-- ── nutrition_logs (legacy aggregate logs) ──────────────────
create table if not exists nutrition_logs (
  id         uuid primary key default gen_random_uuid(),
  client_id  uuid references clients(id) on delete cascade not null,
  date       date not null,
  calories   numeric,
  protein    numeric,
  carbs      numeric,
  fats       numeric,
  notes      text,
  created_at timestamptz default now()
);

-- ── check_ins ───────────────────────────────────────────────
create table if not exists check_ins (
  id         uuid primary key default gen_random_uuid(),
  client_id  uuid references clients(id) on delete cascade not null,
  date       date not null,
  weight     numeric,
  body_fat   numeric,
  photos     text,
  created_at timestamptz default now()
);

-- ── meals (per-meal tracking) ────────────────────────────────
create table if not exists meals (
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
);

-- ── personal_records ────────────────────────────────────────
create table if not exists personal_records (
  id         uuid primary key default gen_random_uuid(),
  client_id  uuid references clients(id) on delete cascade not null,
  exercise   text not null,
  weight     numeric not null,
  unit       text not null default 'lbs',
  date       date not null default current_date,
  notes      text,
  created_at timestamptz default now()
);

-- ── Row-Level Security (permissive — anon key has full access)
alter table clients          enable row level security;
alter table coaches          enable row level security;
alter table workouts         enable row level security;
alter table nutrition_logs   enable row level security;
alter table check_ins        enable row level security;
alter table meals            enable row level security;
alter table personal_records enable row level security;

do $$ begin
  -- clients
  if not exists (select 1 from pg_policies where tablename='clients' and policyname='anon_all') then
    create policy anon_all on clients for all to anon using (true) with check (true);
  end if;
  -- coaches
  if not exists (select 1 from pg_policies where tablename='coaches' and policyname='anon_all') then
    create policy anon_all on coaches for all to anon using (true) with check (true);
  end if;
  -- workouts
  if not exists (select 1 from pg_policies where tablename='workouts' and policyname='anon_all') then
    create policy anon_all on workouts for all to anon using (true) with check (true);
  end if;
  -- nutrition_logs
  if not exists (select 1 from pg_policies where tablename='nutrition_logs' and policyname='anon_all') then
    create policy anon_all on nutrition_logs for all to anon using (true) with check (true);
  end if;
  -- check_ins
  if not exists (select 1 from pg_policies where tablename='check_ins' and policyname='anon_all') then
    create policy anon_all on check_ins for all to anon using (true) with check (true);
  end if;
  -- meals
  if not exists (select 1 from pg_policies where tablename='meals' and policyname='anon_all') then
    create policy anon_all on meals for all to anon using (true) with check (true);
  end if;
  -- personal_records
  if not exists (select 1 from pg_policies where tablename='personal_records' and policyname='anon_all') then
    create policy anon_all on personal_records for all to anon using (true) with check (true);
  end if;
end $$;

-- ── Performance indexes ──────────────────────────────────────
create index if not exists idx_workouts_client_date         on workouts(client_id, date);
create index if not exists idx_nutrition_logs_client_date   on nutrition_logs(client_id, date);
create index if not exists idx_check_ins_client_date        on check_ins(client_id, date);
create index if not exists idx_meals_client_date            on meals(client_id, date);
create index if not exists idx_personal_records_client      on personal_records(client_id, exercise);
