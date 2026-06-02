-- ============================================================
-- Fix: grant RLS access to BOTH anon and authenticated roles.
-- Logged-in coaches/clients use the `authenticated` role; the
-- original policies only granted `anon`, so writes were blocked.
-- Safe to re-run.
-- ============================================================

do $$
declare
  t text;
begin
  foreach t in array array[
    'clients','coaches','workouts','nutrition_logs',
    'check_ins','meals','personal_records','water_logs'
  ]
  loop
    -- only touch tables that actually exist
    if exists (select 1 from information_schema.tables
               where table_schema = 'public' and table_name = t) then

      execute format('alter table %I enable row level security', t);

      -- drop the old anon-only policy if present
      execute format('drop policy if exists anon_all on %I', t);
      -- drop our new policy if re-running
      execute format('drop policy if exists all_access on %I', t);

      -- recreate for public (covers anon AND authenticated)
      execute format(
        'create policy all_access on %I for all to public using (true) with check (true)', t
      );
    end if;
  end loop;
end $$;
