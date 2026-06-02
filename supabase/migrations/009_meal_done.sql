-- Track whether the client has eaten / completed each meal
alter table meals
  add column if not exists done boolean not null default false;
