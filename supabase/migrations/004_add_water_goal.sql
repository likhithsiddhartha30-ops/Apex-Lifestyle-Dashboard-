alter table clients
  add column if not exists water_goal_ml numeric default 4000;
