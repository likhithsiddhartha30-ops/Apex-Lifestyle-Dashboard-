-- Coach-set target: workout days per week
alter table clients
  add column if not exists workout_goal numeric default 5;
