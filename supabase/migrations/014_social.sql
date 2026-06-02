-- ── Follows ──────────────────────────────────────────────
create table if not exists follows (
  id              uuid primary key default gen_random_uuid(),
  follower_email  text not null,
  following_email text not null,
  created_at      timestamptz default now(),
  unique(follower_email, following_email)
);
alter table follows enable row level security;
do $$ begin
  if not exists (select 1 from pg_policies where tablename='follows' and policyname='all_access') then
    create policy all_access on follows for all to public using (true) with check (true);
  end if;
end $$;
create index if not exists idx_follows_follower  on follows(follower_email);
create index if not exists idx_follows_following on follows(following_email);

-- ── Direct messages ──────────────────────────────────────
create table if not exists messages (
  id              uuid primary key default gen_random_uuid(),
  sender_email    text not null,
  recipient_email text not null,
  body            text not null,
  read            boolean not null default false,
  created_at      timestamptz default now()
);
alter table messages enable row level security;
do $$ begin
  if not exists (select 1 from pg_policies where tablename='messages' and policyname='all_access') then
    create policy all_access on messages for all to public using (true) with check (true);
  end if;
end $$;
create index if not exists idx_messages_pair on messages(sender_email, recipient_email, created_at);
