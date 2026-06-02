/* ================================================
   APEX LIFESTYLE — SUPABASE DATA LAYER
   Set your project URL and anon key below.
   ================================================ */

// Returns "YYYY-MM-DD" for the current date in IST (UTC+5:30)
function getTodayIST() {
  return new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Kolkata' });
}

// Returns a Date object whose .getDay() / .getDate() reflect IST local time
function getNowIST() {
  return new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
}

const SUPABASE_URL  = 'https://wszbaifxmumabkxudnet.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndzemJhaWZ4bXVtYWJreHVkbmV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk5NzQ2NjEsImV4cCI6MjA5NTU1MDY2MX0.H80M4Okt__3VZ1hsWA0Rt-SCon-l_b3zfla0pYNic1U';

const db = supabase.createClient(SUPABASE_URL, SUPABASE_ANON);

const getClientId = ()   => localStorage.getItem('apex_cid');
const setClientId = (id) => localStorage.setItem('apex_cid', String(id));

async function loadClients() {
  try {
    const { data, error } = await db.from('clients').select('*').order('name');
    if (error) throw error;
    return data || [];
  } catch (e) {
    console.warn('[Supabase] loadClients:', e.message);
    return [];
  }
}

async function loadWorkouts(clientId, limit = 10) {
  try {
    const { data, error } = await db.from('workouts')
      .select('*').eq('client_id', clientId)
      .order('date', { ascending: false }).limit(limit);
    if (error) throw error;
    return data || [];
  } catch (e) {
    console.warn('[Supabase] loadWorkouts:', e.message);
    return [];
  }
}

async function loadWorkoutByDate(clientId, date) {
  try {
    const { data, error } = await db.from('workouts')
      .select('*').eq('client_id', clientId).eq('date', date);
    if (error) throw error;
    return data?.[0] || null;
  } catch (e) {
    console.warn('[Supabase] loadWorkoutByDate:', e.message);
    return null;
  }
}

async function saveWorkout(clientId, date, notes) {
  try {
    const existing = await loadWorkoutByDate(clientId, date);
    if (existing) {
      const { error } = await db.from('workouts').update({ notes }).eq('id', existing.id);
      if (error) throw error;
    } else {
      const { error } = await db.from('workouts').insert({ client_id: clientId, date, notes });
      if (error) throw error;
    }
  } catch (e) {
    console.warn('[Supabase] saveWorkout:', e.message);
    throw e;
  }
}

async function saveClientNote(clientId, date, note) {
  try {
    const existing = await loadWorkoutByDate(clientId, date);
    if (!existing) return;
    const { error } = await db.from('workouts').update({ client_note: note }).eq('id', existing.id);
    if (error) throw error;
  } catch (e) {
    console.warn('[Supabase] saveClientNote:', e.message);
    throw e;
  }
}

async function deleteWorkout(id) {
  try {
    const { error } = await db.from('workouts').delete().eq('id', id);
    if (error) throw error;
  } catch (e) {
    console.warn('[Supabase] deleteWorkout:', e.message);
    throw e;
  }
}

async function loadExerciseLogs(clientId, date) {
  try {
    const { data, error } = await db.from('exercise_logs')
      .select('exercise, weight, unit, done')
      .eq('client_id', clientId).eq('date', date);
    if (error) throw error;
    // key by exercise name for quick lookup
    const map = {};
    for (const row of data || []) map[row.exercise] = { weight: row.weight, unit: row.unit, done: row.done };
    return map;
  } catch (e) {
    console.warn('[Supabase] loadExerciseLogs:', e.message);
    return {};
  }
}

// payload: { weight, unit, done } — upsert replaces the row, so pass full state
async function saveExerciseLog(clientId, date, exercise, payload = {}) {
  try {
    const row = {
      client_id: clientId, date, exercise,
      weight: payload.weight ?? null,
      unit:   payload.unit   || 'kg',
      done:   payload.done   || false,
    };
    const { error } = await db.from('exercise_logs')
      .upsert(row, { onConflict: 'client_id,date,exercise' });
    if (error) throw error;
  } catch (e) {
    console.warn('[Supabase] saveExerciseLog:', e.message);
    throw e;
  }
}

async function saveNutritionLog(clientId, date, payload) {
  try {
    const existing = await loadNutritionLog(clientId, date);
    if (existing) {
      const { error } = await db.from('nutrition_logs').update(payload).eq('id', existing.id);
      if (error) throw error;
    } else {
      const { error } = await db.from('nutrition_logs').insert({ client_id: clientId, date, ...payload });
      if (error) throw error;
    }
  } catch (e) {
    console.warn('[Supabase] saveNutritionLog:', e.message);
    throw e;
  }
}

async function loadNutritionLog(clientId, date) {
  try {
    const { data, error } = await db.from('nutrition_logs')
      .select('*').eq('client_id', clientId).eq('date', date);
    if (error) throw error;
    return data?.[0] || null;
  } catch (e) {
    console.warn('[Supabase] loadNutritionLog:', e.message);
    return null;
  }
}

async function loadLatestNutritionLog(clientId) {
  try {
    const { data, error } = await db.from('nutrition_logs')
      .select('*').eq('client_id', clientId)
      .order('date', { ascending: false }).limit(1);
    if (error) throw error;
    return data?.[0] || null;
  } catch (e) {
    console.warn('[Supabase] loadLatestNutritionLog:', e.message);
    return null;
  }
}

async function loadCheckIns(clientId, limit = 30) {
  try {
    const { data, error } = await db.from('check_ins')
      .select('*').eq('client_id', clientId)
      .order('date', { ascending: false }).limit(limit);
    if (error) throw error;
    return data || [];
  } catch (e) {
    console.warn('[Supabase] loadCheckIns:', e.message);
    return [];
  }
}

// Save (or update) a day's check-in. Merges into the existing row for that date.
async function saveCheckIn(clientId, date, payload) {
  try {
    const { data: existing } = await db.from('check_ins')
      .select('id').eq('client_id', clientId).eq('date', date).limit(1);
    if (existing && existing.length) {
      const { error } = await db.from('check_ins').update(payload).eq('id', existing[0].id);
      if (error) throw error;
    } else {
      const { error } = await db.from('check_ins')
        .insert({ client_id: clientId, date, ...payload });
      if (error) throw error;
    }
  } catch (e) {
    console.warn('[Supabase] saveCheckIn:', e.message);
    throw e;
  }
}

async function loadCoaches() {
  try {
    const { data, error } = await db.from('coaches').select('*').order('name');
    if (error) throw error;
    return data || [];
  } catch (e) {
    console.warn('[Supabase] loadCoaches:', e.message);
    return [];
  }
}

async function loadMeals(clientId, date) {
  try {
    const { data, error } = await db.from('meals')
      .select('*')
      .eq('client_id', clientId)
      .eq('date', date)
      .order('created_at', { ascending: true });
    if (error) throw error;
    return data || [];
  } catch (e) {
    console.warn('[Supabase] loadMeals:', e.message);
    return [];
  }
}

async function saveMeal(clientId, date, payload) {
  try {
    const { data, error } = await db.from('meals')
      .insert({ client_id: clientId, date, ...payload })
      .select().single();
    if (error) throw error;
    return data;
  } catch (e) {
    console.warn('[Supabase] saveMeal:', e.message);
    throw e;
  }
}

async function updateMeal(id, payload) {
  try {
    const { error } = await db.from('meals').update(payload).eq('id', id);
    if (error) throw error;
  } catch (e) {
    console.warn('[Supabase] updateMeal:', e.message);
    throw e;
  }
}

async function deleteMeal(id) {
  try {
    const { error } = await db.from('meals').delete().eq('id', id);
    if (error) throw error;
  } catch (e) {
    console.warn('[Supabase] deleteMeal:', e.message);
    throw e;
  }
}

async function loadPersonalRecords(clientId) {
  try {
    const { data, error } = await db.from('personal_records')
      .select('*')
      .eq('client_id', clientId)
      .order('exercise', { ascending: true })
      .order('weight',   { ascending: false });
    if (error) throw error;

    const groups = new Map();
    for (const row of data || []) {
      if (!groups.has(row.exercise)) {
        groups.set(row.exercise, { best: row, previous: null });
      } else if (!groups.get(row.exercise).previous) {
        groups.get(row.exercise).previous = row;
      }
    }
    return Array.from(groups.values());
  } catch (e) {
    console.warn('[Supabase] loadPersonalRecords:', e.message);
    return [];
  }
}

async function savePersonalRecord(clientId, exercise, weight, unit, date) {
  try {
    const { error } = await db.from('personal_records')
      .insert({ client_id: clientId, exercise, weight, unit, date });
    if (error) throw error;
  } catch (e) {
    console.warn('[Supabase] savePersonalRecord:', e.message);
    throw e;
  }
}

async function setupDatabase() {
  try {
    const { data, error } = await db.functions.invoke('setup-db');
    if (error) throw error;
    return data;
  } catch (e) {
    console.warn('[Supabase] setupDatabase:', e.message);
    throw e;
  }
}

async function loadWaterLog(clientId, date) {
  try {
    const { data, error } = await db.from('water_logs')
      .select('water_ml').eq('client_id', clientId).eq('date', date).single();
    if (error && error.code !== 'PGRST116') throw error;
    return data ? Number(data.water_ml) : 0;
  } catch (e) {
    console.warn('[Supabase] loadWaterLog:', e.message);
    return 0;
  }
}

async function saveWaterLog(clientId, date, waterMl) {
  try {
    const { error } = await db.from('water_logs')
      .upsert({ client_id: clientId, date, water_ml: waterMl },
               { onConflict: 'client_id,date' });
    if (error) throw error;
  } catch (e) {
    console.warn('[Supabase] saveWaterLog:', e.message);
  }
}

async function updateClientGoals(clientId, goals) {
  try {
    const { error } = await db.from('clients').update(goals).eq('id', clientId);
    if (error) throw error;
  } catch (e) {
    console.warn('[Supabase] updateClientGoals:', e.message);
    throw e;
  }
}

// Per-date goals (override the per-client defaults)
async function loadDailyGoals(clientId, date) {
  try {
    const { data, error } = await db.from('daily_goals')
      .select('cal_goal, protein_goal, carbs_goal, fat_goal, water_goal_ml')
      .eq('client_id', clientId).eq('date', date).maybeSingle();
    if (error) throw error;
    return data || null;
  } catch (e) {
    console.warn('[Supabase] loadDailyGoals:', e.message);
    return null;
  }
}

async function saveDailyGoals(clientId, date, payload) {
  try {
    const { error } = await db.from('daily_goals')
      .upsert({ client_id: clientId, date, ...payload }, { onConflict: 'client_id,date' });
    if (error) throw error;
  } catch (e) {
    console.warn('[Supabase] saveDailyGoals:', e.message);
    throw e;
  }
}

// ── Community: posts feed ──────────────────────────────────
async function loadPosts(limit = 30) {
  try {
    const { data, error } = await db.from('posts')
      .select('*').order('created_at', { ascending: false }).limit(limit);
    if (error) throw error;
    return data || [];
  } catch (e) {
    console.warn('[Supabase] loadPosts:', e.message);
    return [];
  }
}

// Upload a photo/video to the community storage bucket → returns { url, type }
async function uploadPostMedia(file) {
  const ext  = (file.name.split('.').pop() || 'bin').toLowerCase().replace(/[^a-z0-9]/g, '');
  const path = `posts/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
  const { error } = await db.storage.from('community')
    .upload(path, file, { upsert: false, contentType: file.type || undefined });
  if (error) throw error;
  const { data } = db.storage.from('community').getPublicUrl(path);
  return { url: data.publicUrl, type: file.type.startsWith('video/') ? 'video' : 'image' };
}

async function savePost(authorName, authorRole, body, media, authorEmail) {
  try {
    const row = { author_name: authorName, author_role: authorRole, body: body || '' };
    if (authorEmail) row.author_email = authorEmail;
    if (media && media.url) { row.media_url = media.url; row.media_type = media.type; }
    const { data, error } = await db.from('posts').insert(row).select().single();
    if (error) throw error;
    return data;
  } catch (e) {
    console.warn('[Supabase] savePost:', e.message);
    throw e;
  }
}

// ── Social: directory, follows, DMs ────────────────────────
async function loadDirectory() {
  try {
    const [c, co] = await Promise.all([
      db.from('clients').select('name,email,avatar_url').order('name'),
      db.from('coaches').select('name,email,avatar_url').order('name'),
    ]);
    const list = [];
    (c.data  || []).forEach(x => x.email && list.push({ name: x.name, email: x.email, role: 'Client', avatar_url: x.avatar_url || null }));
    (co.data || []).forEach(x => x.email && list.push({ name: x.name, email: x.email, role: 'Coach',  avatar_url: x.avatar_url || null }));
    return list;
  } catch (e) {
    console.warn('[Supabase] loadDirectory:', e.message);
    return [];
  }
}

async function saveUserAvatar(email, avatarUrl) {
  try {
    const { data: coach } = await db.from('coaches').select('id').eq('email', email).maybeSingle();
    if (coach) { await db.from('coaches').update({ avatar_url: avatarUrl }).eq('id', coach.id); return; }
    const { data: client } = await db.from('clients').select('id').eq('email', email).maybeSingle();
    if (client) { await db.from('clients').update({ avatar_url: avatarUrl }).eq('id', client.id); }
  } catch (e) {
    console.warn('[Supabase] saveUserAvatar:', e.message);
  }
}

async function loadFollowing(email) {
  try {
    const { data, error } = await db.from('follows').select('following_email').eq('follower_email', email);
    if (error) throw error;
    return new Set((data || []).map(r => r.following_email));
  } catch (e) {
    console.warn('[Supabase] loadFollowing:', e.message);
    return new Set();
  }
}

async function followUser(follower, following) {
  try {
    const { error } = await db.from('follows')
      .upsert({ follower_email: follower, following_email: following }, { onConflict: 'follower_email,following_email' });
    if (error) throw error;
  } catch (e) { console.warn('[Supabase] followUser:', e.message); throw e; }
}

async function unfollowUser(follower, following) {
  try {
    const { error } = await db.from('follows').delete()
      .eq('follower_email', follower).eq('following_email', following);
    if (error) throw error;
  } catch (e) { console.warn('[Supabase] unfollowUser:', e.message); throw e; }
}

async function loadConversation(me, other) {
  try {
    const { data, error } = await db.from('messages').select('*')
      .or(`and(sender_email.eq.${me},recipient_email.eq.${other}),and(sender_email.eq.${other},recipient_email.eq.${me})`)
      .order('created_at', { ascending: true }).limit(300);
    if (error) throw error;
    return data || [];
  } catch (e) {
    console.warn('[Supabase] loadConversation:', e.message);
    return [];
  }
}

async function sendMessage(from, to, body) {
  try {
    const { error } = await db.from('messages').insert({ sender_email: from, recipient_email: to, body });
    if (error) throw error;
  } catch (e) { console.warn('[Supabase] sendMessage:', e.message); throw e; }
}

async function likePost(id, likes) {
  try {
    const { error } = await db.from('posts').update({ likes }).eq('id', id);
    if (error) throw error;
  } catch (e) {
    console.warn('[Supabase] likePost:', e.message);
  }
}

// Members ranked by workouts logged (sessions) — for leaderboard / top athletes
async function loadCommunityRanking() {
  try {
    const [{ data: clients }, { data: workouts }] = await Promise.all([
      db.from('clients').select('id, name, avatar_url'),
      db.from('workouts').select('client_id'),
    ]);
    const counts = {};
    for (const w of workouts || []) counts[w.client_id] = (counts[w.client_id] || 0) + 1;
    return (clients || [])
      .map(c => ({ id: c.id, name: c.name, sessions: counts[c.id] || 0, avatar_url: c.avatar_url || null }))
      .sort((a, b) => b.sessions - a.sessions);
  } catch (e) {
    console.warn('[Supabase] loadCommunityRanking:', e.message);
    return [];
  }
}

async function requireAuth() {
  const { data: { session } } = await db.auth.getSession();
  if (!session) { window.location.href = 'login.html'; return null; }
  return session;
}

async function signOut() {
  try { localStorage.removeItem('apex_avatar'); } catch (_) {}
  await db.auth.signOut();
  window.location.href = 'login.html';
}

/* ════════════════════════════════════════════════════════════
   PORTALS — each role gets an isolated portal: its own home,
   its own sidebar nav, and a hard guard against entering another
   portal's pages.
   ════════════════════════════════════════════════════════════ */
const APEX_PORTAL = {
  admin: {
    home: 'admin.html',
    nav: [
      { page: 'admin-index.html',      label: 'Dashboard',  icon: 'grid' },
      { page: 'admin-training.html',   label: 'Training',   icon: 'zap' },
      { page: 'admin-nutrition.html',  label: 'Nutrition',  icon: 'utensils' },
      { page: 'admin-biometrics.html', label: 'Biometrics', icon: 'trending' },
      { page: 'admin-community.html',  label: 'Community',  icon: 'users' },
      { page: 'admin.html',            label: 'Management', icon: 'settings' },
    ],
  },
  coach: {
    home: 'coach-index.html',
    nav: [
      { page: 'coach-index.html',      label: 'Dashboard',  icon: 'grid' },
      { page: 'coach-training.html',   label: 'Training',   icon: 'zap' },
      { page: 'coach-nutrition.html',  label: 'Nutrition',  icon: 'utensils' },
      { page: 'coach-biometrics.html', label: 'Biometrics', icon: 'trending' },
      { page: 'coach-community.html',  label: 'Community',  icon: 'users' },
    ],
  },
  client: {
    home: 'client-index.html',
    nav: [
      { page: 'client-index.html',      label: 'Dashboard',  icon: 'grid' },
      { page: 'client-training.html',   label: 'Training',   icon: 'zap' },
      { page: 'client-nutrition.html',  label: 'Nutrition',  icon: 'utensils' },
      { page: 'client-biometrics.html', label: 'Biometrics', icon: 'trending' },
      { page: 'client-community.html',  label: 'Community',  icon: 'users' },
    ],
  },
};
window.APEX_PORTAL = APEX_PORTAL;

function apexCurrentPage() {
  return (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
}

// Determine which portal an authenticated user belongs to + their home page.
async function getUserPortal(email) {
  try {
    const { data: coach } = await db.from('coaches').select('id').eq('email', email).maybeSingle();
    if (coach) return 'coach';
    const { data: client } = await db.from('clients').select('id').eq('email', email).maybeSingle();
    if (client) return 'client';
  } catch (_) {}
  return 'admin'; // owner / no coach|client row
}

// Render the role's sidebar nav and guard the current page.
// Returns false if it redirected (caller should stop).
function renderPortalNav(role) {
  const cfg = APEX_PORTAL[role];
  if (!cfg) return true;

  const cur          = apexCurrentPage();
  const alwaysOk     = ['profile.html', 'settings.html', 'debug.html'];
  const allowedPages = cfg.nav.map(n => n.page).concat(alwaysOk);

  // Guard — bounce to this portal's home if the page isn't part of it
  if (!allowedPages.includes(cur)) {
    window.location.replace(cfg.home);
    return false;
  }

  const navEl = document.querySelector('.sb-nav');
  if (navEl) {
    navEl.innerHTML = cfg.nav.map(n =>
      `<a class="nav-item${n.page === cur ? ' active' : ''}" href="${n.page}" data-page="${n.page}">` +
      `<span class="nav-icon">${window.icon ? window.icon(n.icon) : ''}</span>${n.label}</a>`
    ).join('');

    // Wire PJAX navigation on the freshly-built nav items
    navEl.querySelectorAll('.nav-item[data-page]').forEach(item => {
      item.addEventListener('click', e => {
        const dest = item.getAttribute('href');
        if (!dest || item.classList.contains('active')) return;
        e.preventDefault();
        if (typeof apexNavigate === 'function') apexNavigate(dest);
        else window.location.href = dest;
      });
    });
  }
  return true;
}

async function initSidebar() {
  // In PJAX mode the sidebar DOM is persistent — skip full re-init
  if (window._apexSidebarReady) return;

  // Pre-populate from cache instantly so sidebar never flashes "—" on navigation
  try {
    const cached = JSON.parse(sessionStorage.getItem('apex_sidebar') || 'null');
    if (cached) {
      const nameEl = document.getElementById('sb-admin-name');
      const roleEl = document.getElementById('sb-admin-role');
      if (nameEl) nameEl.textContent = cached.name;
      if (roleEl) roleEl.textContent = cached.role;
    }
  } catch (_) {}

  const { data: { user } } = await db.auth.getUser();
  if (!user) return;

  const m    = user.user_metadata || {};
  const name = m.full_name || m.display_name || m.name
             || (user.email
                 ? user.email.split('@')[0].charAt(0).toUpperCase() + user.email.split('@')[0].slice(1)
                 : 'User');
  const nameEl = document.getElementById('sb-admin-name');
  if (nameEl) nameEl.textContent = name;

  // Detect role: check if email belongs to a coach or client
  const { data: coachRow } = await db.from('coaches').select('id').eq('email', user.email).maybeSingle();

  if (coachRow) {
    // ── Coach ──────────────────────────────────────────────────────────────
    window._apexRole = 'coach';
    const roleEl = document.getElementById('sb-admin-role');
    if (roleEl) roleEl.textContent = 'Coach';
    sessionStorage.setItem('apex_sidebar', JSON.stringify({ name, role: 'Coach' }));

    // Coach portal: own nav + guard against admin pages
    if (!renderPortalNav('coach')) return;

    const clients = await loadClients();
    const sel     = document.getElementById('client-select');
    if (!sel) return;

    clients.forEach(c => {
      const o       = document.createElement('option');
      o.value       = c.id;
      o.textContent = c.name;
      sel.appendChild(o);
    });

    const saved = getClientId();
    if (saved && clients.find(c => String(c.id) === saved)) {
      sel.value = saved;
    } else if (clients.length) {
      setClientId(clients[0].id);
      sel.value = String(clients[0].id);
    }

    sel.addEventListener('change', () => {
      setClientId(sel.value);
      window.location.reload();
    });

  } else {
    const { data: clientRow } = await db.from('clients').select('id').eq('email', user.email).maybeSingle();

    if (!clientRow) {
      // ── Admin (owner) ───────────────────────────────────────────────────
      window._apexRole = 'admin';

      const roleEl = document.getElementById('sb-admin-role');
      if (roleEl) roleEl.textContent = 'Admin';
      sessionStorage.setItem('apex_sidebar', JSON.stringify({ name, role: 'Admin' }));

      // Admin portal: full nav incl. Management
      if (!renderPortalNav('admin')) return;

      const clients = await loadClients();
      const sel     = document.getElementById('client-select');
      if (!sel) return;

      clients.forEach(c => {
        const o       = document.createElement('option');
        o.value       = c.id;
        o.textContent = c.name;
        sel.appendChild(o);
      });

      const saved = getClientId();
      if (saved && clients.find(c => String(c.id) === saved)) {
        sel.value = saved;
      } else if (clients.length) {
        setClientId(clients[0].id);
        sel.value = String(clients[0].id);
      }

      sel.addEventListener('change', () => {
        setClientId(sel.value);
        window.location.reload();
      });

    } else {
      // ── Client ───────────────────────────────────────────────────────────
      window._apexRole = 'client';

      const roleEl = document.getElementById('sb-admin-role');
      if (roleEl) roleEl.textContent = 'Client';
      sessionStorage.setItem('apex_sidebar', JSON.stringify({ name, role: 'Client' }));

      setClientId(clientRow.id);

      // Client portal: own nav + guard against admin pages
      if (!renderPortalNav('client')) return;

      // Clients only see their own data — hide the client selector
      const clientLabel = document.querySelector('.sb-client-label');
      const clientSel   = document.getElementById('client-select');
      if (clientLabel) clientLabel.style.display = 'none';
      if (clientSel)   clientSel.style.display   = 'none';
    }
  }
  window._apexSidebarReady = true;
}
