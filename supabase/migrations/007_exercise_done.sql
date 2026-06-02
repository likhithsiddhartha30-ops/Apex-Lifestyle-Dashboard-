-- Track whether the client has completed each exercise
alter table exercise_logs
  add column if not exists done boolean not null default false;
