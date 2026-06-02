-- Per-client per-day water intake tracking
create table if not exists water_logs (
  id         uuid primary key default gen_random_uuid(),
  client_id  uuid references clients(id) on delete cascade not null,
  date       date not null,
  water_ml   numeric default 0,
  created_at timestamptz default now(),
  unique(client_id, date)
);

alter table water_logs enable row level security;

do $$ begin
  if not exists (
    select 1 from pg_policies
    where tablename = 'water_logs' and policyname = 'anon_all'
  ) then
    create policy anon_all on water_logs for all to anon using (true) with check (true);
  end if;
end $$;
