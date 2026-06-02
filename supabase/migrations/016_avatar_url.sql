-- Persist avatar URLs in the shared tables so other users can see them.
ALTER TABLE clients ADD COLUMN IF NOT EXISTS avatar_url TEXT;
ALTER TABLE coaches ADD COLUMN IF NOT EXISTS avatar_url TEXT;

-- Store the author's email on posts so we can resolve their avatar.
ALTER TABLE posts ADD COLUMN IF NOT EXISTS author_email TEXT;
