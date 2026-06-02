-- Per-exercise weight logging by clients
create table if not exists exercise_logs (
  id         uuid primary key default gen_random_uuid(),
  client_id  uuid references clients(id) on delete cascade not null,
  date       date not null,
  exercise   text not null,
  weight     numeric,
  unit       text not null default 'kg',
  created_at timestamptz default now(),
  unique(client_id, date, exercise)
);

alter table exercise_logs enable row level security;

do $$ begin
  if not exists (
    select 1 from pg_policies
    where tablename = 'exercise_logs' and policyname = 'all_access'
  ) then
    create policy all_access on exercise_logs for all to public using (true) with check (true);
  end if;
end $$;

create index if not exists idx_exercise_logs_client_date
  on exercise_logs(client_id, date);
