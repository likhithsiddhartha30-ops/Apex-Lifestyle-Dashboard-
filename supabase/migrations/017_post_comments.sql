-- Comments on community posts
create table if not exists post_comments (
  id           uuid primary key default gen_random_uuid(),
  post_id      uuid not null references posts(id) on delete cascade,
  author_name  text not null,
  author_role  text,
  author_email text,
  body         text not null,
  created_at   timestamptz default now()
);

alter table post_comments enable row level security;

do $$ begin
  if not exists (
    select 1 from pg_policies where tablename = 'post_comments' and policyname = 'all_access'
  ) then
    create policy all_access on post_comments for all to public using (true) with check (true);
  end if;
end $$;

create index if not exists idx_post_comments_post on post_comments(post_id, created_at);
