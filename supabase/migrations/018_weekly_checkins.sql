-- ── weekly_checkins ─────────────────────────────────────────
-- The "How Was Your Week?" weekly survey. One row per client per
-- check-in date. Clients submit it; coaches/admins review all of it.
create table if not exists weekly_checkins (
  id               uuid primary key default gen_random_uuid(),
  client_id        uuid references clients(id) on delete cascade not null,
  date             date not null,
  full_name        text,
  -- Mental & stress
  week_overall     text,          -- Q3 free text
  feeling          text,          -- Q4 inner state
  stress           int,           -- Q5  1 (calm) – 10 (stressed)
  -- Diet & lifestyle
  missed_diet      text,          -- Q7  yes / no
  missed_diet_note text,          -- Q7  optional detail
  steps_done       text,          -- Q8  yes / no
  -- Training
  energy_crash     text,          -- Q9  yes / no
  strength_up      text,          -- Q10 yes / no
  train_days       int,           -- Q11 days trained
  train_note       text,          -- Q11 which days missed & why
  -- Body stats — daily empty-stomach weight (kg)
  weight_mon       numeric,
  weight_tue       numeric,
  weight_wed       numeric,
  weight_thu       numeric,
  weight_fri       numeric,
  weight_sat       numeric,
  weight_sun       numeric,
  -- Q13 shared Monday progress photo
  photo_shared     text,          -- yes / no
  created_at       timestamptz default now()
);

-- RLS — public (covers both anon and authenticated), matching every other table.
alter table weekly_checkins enable row level security;
drop policy if exists all_access on weekly_checkins;
create policy all_access on weekly_checkins for all to public using (true) with check (true);

create index if not exists idx_weekly_checkins_client_date on weekly_checkins(client_id, date desc);
create index if not exists idx_weekly_checkins_date        on weekly_checkins(date desc);
