-- Client can leave a session note on their workout (difficulty, pain, wins).
-- Coaches and admins can read it.
ALTER TABLE workouts ADD COLUMN IF NOT EXISTS client_note TEXT;
