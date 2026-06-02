-- Photos / videos on community posts
alter table posts
  add column if not exists media_url  text,
  add column if not exists media_type text;          -- 'image' | 'video'

-- allow text-less posts (photo/video only)
alter table posts alter column body drop not null;

-- ── Storage bucket for community media (100 MB cap) ──
insert into storage.buckets (id, name, public, file_size_limit)
values ('community', 'community', true, 104857600)
on conflict (id) do update set file_size_limit = 104857600;

-- Public read + write on this bucket's objects
do $$ begin
  if not exists (select 1 from pg_policies
    where schemaname='storage' and tablename='objects' and policyname='community_read') then
    create policy community_read on storage.objects
      for select to public using (bucket_id = 'community');
  end if;
  if not exists (select 1 from pg_policies
    where schemaname='storage' and tablename='objects' and policyname='community_write') then
    create policy community_write on storage.objects
      for insert to public with check (bucket_id = 'community');
  end if;
  if not exists (select 1 from pg_policies
    where schemaname='storage' and tablename='objects' and policyname='community_delete') then
    create policy community_delete on storage.objects
      for delete to public using (bucket_id = 'community');
  end if;
end $$;
