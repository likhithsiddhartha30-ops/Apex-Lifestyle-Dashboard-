-- Allow logging measured lean muscle mass (e.g. from a DEXA / InBody scan).
-- When set, it overrides the value computed from weight × body-fat.
alter table check_ins
  add column if not exists lean_mass numeric;
