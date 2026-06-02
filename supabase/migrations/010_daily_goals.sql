-- Per-date macro/calorie/water goals (overrides the per-client defaults
-- stored on the clients table). Lets the coach set goals for a day and
-- extend them to further days alongside the meal plan.
create table if not exists daily_goals (
  id            uuid primary key default gen_random_uuid(),
  client_id     uuid references clients(id) on delete cascade not null,
  date          date not null,
  cal_goal      numeric,
  protein_goal  numeric,
  carbs_goal    numeric,
  fat_goal      numeric,
  water_goal_ml numeric,
  created_at    timestamptz default now(),
  unique(client_id, date)
);

alter table daily_goals enable row level security;

do $$ begin
  if not exists (
    select 1 from pg_policies
    where tablename = 'daily_goals' and policyname = 'all_access'
  ) then
    create policy all_access on daily_goals for all to public using (true) with check (true);
  end if;
end $$;

create index if not exists idx_daily_goals_client_date on daily_goals(client_id, date);
