-- Add per-client macro targets to clients table
alter table clients
  add column if not exists cal_goal     numeric,
  add column if not exists protein_goal numeric,
  add column if not exists carbs_goal   numeric,
  add column if not exists fat_goal     numeric;
