-- Community activity feed
create table if not exists posts (
  id          uuid primary key default gen_random_uuid(),
  author_name text not null,
  author_role text,
  body        text not null,
  likes       integer not null default 0,
  created_at  timestamptz default now()
);

alter table posts enable row level security;

do $$ begin
  if not exists (
    select 1 from pg_policies where tablename = 'posts' and policyname = 'all_access'
  ) then
    create policy all_access on posts for all to public using (true) with check (true);
  end if;
end $$;

create index if not exists idx_posts_created on posts(created_at desc);
