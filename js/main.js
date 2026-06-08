/* ================================================
   APEX LIFESTYLE — SHARED JS
   ================================================ */

/* ── Clean line-icon system (replaces all emoji) ──────────── */
window.APEX_ICONS = {
  grid:    '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>',
  mail:    '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  zap:     '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  utensils:'<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>',
  trending:'<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
  users:   '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"/>',
  search:  '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  bell:    '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
  user:    '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  droplet: '<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>',
  edit:    '<path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
  trash:   '<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
  heart:   '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  moon:    '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
  send:    '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
  target:  '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  award:   '<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>',
  flame:   '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
  dumbbell:'<path d="m6.5 6.5 11 11"/><path d="m21 21-1-1"/><path d="m3 3 1 1"/><path d="m18 22 4-4"/><path d="m2 6 4-4"/><path d="m3 10 7-7"/><path d="m14 21 7-7"/>',
  thumbsUp:'<path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/>',
  message: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  play:    '<polygon points="5 3 19 12 5 21 5 3"/>',
  share:   '<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',
  logout:  '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>',
  key:     '<circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/>',
  clipboard:'<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M9 12h6"/><path d="M9 16h4"/>',
};

window.icon = (name) =>
  `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${window.APEX_ICONS[name] || ''}</svg>`;

window.renderIcons = (root = document) => {
  const navMap = {
    'index.html': 'grid', 'training.html': 'zap', 'nutrition.html': 'utensils',
    'biometrics.html': 'trending', 'community.html': 'users', 'admin.html': 'settings',
    'form-videos.html': 'play',
  };

  // Explicit [data-icon="name"] markers
  root.querySelectorAll('[data-icon]').forEach(el => { el.innerHTML = window.icon(el.dataset.icon); });

  // Sidebar nav — mapped by destination page
  root.querySelectorAll('.nav-item[data-page]').forEach(item => {
    const ico = item.querySelector('.nav-icon');
    if (ico && navMap[item.dataset.page]) ico.innerHTML = window.icon(navMap[item.dataset.page]);
  });

  // Topbar chrome
  root.querySelectorAll('.search-icon').forEach(el => { el.innerHTML = window.icon('search'); });
  root.querySelectorAll('.tb-right .icon-btn').forEach(el => {
    const dot = el.querySelector('.notif-dot');
    el.innerHTML = window.icon(dot ? 'bell' : 'settings');
    if (dot) el.appendChild(dot);
  });
  root.querySelectorAll('.avatar').forEach(el => { el.innerHTML = window.icon('user'); });
};

/* ── requestIdleCallback shim ── */
const _ric = window.requestIdleCallback
  ? (cb) => requestIdleCallback(cb, { timeout: 500 })
  : (cb) => setTimeout(cb, 1);

/* ── Shared chart animation — called on page load AND after PJAX swap ──
   Pass instant=true (PJAX navigations) to snap charts straight to their final
   state with no entrance animation, so switching pages stays calm/jerk-free. ── */
window.initAnimations = function(root, instant) {
  root = root || document;

  /* bars: set actual height, then scale up from bottom (GPU compositor) */
  root.querySelectorAll('[data-h]').forEach((bar, i) => {
    bar.style.height = bar.dataset.h;
    if (instant) { bar.style.transition = 'none'; bar.style.transform = 'scaleY(1)'; return; }
    bar.style.transform = 'scaleY(0)';
    bar.style.transition = `transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94) ${i * 55}ms`;
    requestAnimationFrame(() => { bar.style.transform = 'scaleY(1)'; });
  });

  /* ring strokes: HTML already sets dashoffset = circumference */
  root.querySelectorAll('[data-offset]').forEach((circle, i) => {
    if (instant) { circle.style.transition = 'none'; circle.style.strokeDashoffset = circle.dataset.offset; return; }
    requestAnimationFrame(() => {
      circle.style.transition = `stroke-dashoffset 0.9s cubic-bezier(0.25,0.46,0.45,0.94) ${0.1 + i * 0.08}s`;
      requestAnimationFrame(() => { circle.style.strokeDashoffset = circle.dataset.offset; });
    });
  });

  /* bar fills: set actual width, then scale from left (GPU compositor) */
  root.querySelectorAll('.bar-fill[data-w]').forEach((fill, i) => {
    fill.style.width = fill.dataset.w;
    if (instant) { fill.style.transition = 'none'; fill.style.transform = 'scaleX(1)'; return; }
    fill.style.transform = 'scaleX(0)';
    fill.style.transition = `transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94) ${i * 70}ms`;
    requestAnimationFrame(() => { fill.style.transform = 'scaleX(1)'; });
  });
};

/* ════════════════════════════════════
   PJAX — swap only .page-content,
   sidebar stays alive across navigations
   ════════════════════════════════════ */
async function apexNavigate(url, isPopState) {
  const content = document.querySelector('.page-content');
  if (!content) { window.location.href = url; return; }

  // The DM drawer lives inside .page-content and is about to be swapped out —
  // drop its handler so the topbar search falls back to navigation.
  window._apexOpenDM = null;

  /* 1. Fade out current content (opacity only — no positional slide) */
  content.style.transition = 'opacity 0.13s ease';
  content.style.opacity    = '0';

  /* 2. Fetch next page in parallel with the fade */
  const fetchPromise = fetch(url).then(r => r.text()).catch(() => null);
  await new Promise(r => setTimeout(r, 130));
  const html = await fetchPromise;

  if (!html) { window.location.href = url; return; }

  const doc        = new DOMParser().parseFromString(html, 'text/html');
  const newContent = doc.querySelector('.page-content');
  if (!newContent) { window.location.href = url; return; }

  /* 3. Swap content (browser is not painting — element is opacity:0) */
  content.className  = 'page-content'; /* strip .visible */
  content.style.cssText = '';
  content.innerHTML  = newContent.innerHTML;
  document.title     = doc.title;

  if (!isPopState) {
    history.pushState({ pjax: true, url }, doc.title, url);
  }

  /* 4. Update active nav */
  const pg = url.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-item[data-page]').forEach(item => {
    item.classList.toggle('active', item.dataset.page === pg);
  });

  /* 5. Re-render icons in swapped content */
  window.renderIcons(content);

  /* 5b. Keep the notification badge in sync. Landing on the inbox clears it. */
  if (pg.includes('inbox') && typeof markNotificationsSeen === 'function') markNotificationsSeen();
  if (typeof refreshNotifications === 'function') refreshNotifications();

  /* 6. Execute the page-specific inline script
        Each page uses: (window._apexPageInit = async () => { ... })()  */
  const pageScript = [...doc.querySelectorAll('body > script:not([src])')].pop();
  if (pageScript) {
    try {
      const el = document.createElement('script');
      el.textContent = pageScript.textContent;
      document.head.appendChild(el).remove();
    } catch (err) {
      console.warn('[PJAX] script exec error', err);
    }
  }

  /* 7. Reset scroll, fade the page in deterministically, then animate charts.
        Decoupling the fade-in from requestIdleCallback removes the late
        "snap" that read as a jerk; charts still animate once idle. */
  content.scrollTop = 0;
  requestAnimationFrame(() => content.classList.add('visible'));
  /* Snap charts to final state on navigation (no re-grow) → calm switch */
  window.initAnimations(content, true);
}

/* ════════════════════════════════════
   GOAL ALIGNMENT — is a metric trend moving WITH or AGAINST the client's goal?
   Green = on track with goal, Red = against goal.
   ════════════════════════════════════ */
window.goalDirection = function (goal, metric) {
  const g = (goal || '').toLowerCase();
  if (/fat\s*loss|cutting|shred/.test(g)) return 'down';                              // weight & bf down
  if (/bulk|gain|mass/.test(g))           return metric === 'bodyfat' ? 'stable' : 'up';
  if (/recomp/.test(g))                   return metric === 'bodyfat' ? 'down' : 'stable';
  if (/maintain|maintenance/.test(g))     return 'stable';
  return 'down'; // sensible default (assume fat loss)
};

// change = latest - earliest (signed). Returns 'good' | 'bad' | 'neutral'
window.goalStatus = function (goal, metric, change) {
  const dir = window.goalDirection(goal, metric);
  const eps = 0.3;
  if (dir === 'down') return change < -eps ? 'good' : (change > eps ? 'bad' : 'neutral');
  if (dir === 'up')   return change >  eps ? 'good' : (change < -eps ? 'bad' : 'neutral');
  return Math.abs(change) <= eps * 2 ? 'good' : 'bad'; // stable
};

// Map status → CSS colour var (against goal = red, otherwise green)
window.goalColor = function (status) {
  return status === 'bad' ? 'var(--red)' : 'var(--green)';
};

/* ════════════════════════════════════
   PROFILE PHOTO — upload + display
   Stored on the user's auth account (user_metadata.avatar_url)
   as a small resized data-URL, so it persists and needs no bucket.
   ════════════════════════════════════ */
window.applyAvatar = function (url) {
  if (!url) return;
  try { localStorage.setItem('apex_avatar', url); } catch (_) {}
  document.querySelectorAll('.avatar, .pd-avatar-lg').forEach(el => {
    el.innerHTML = `<img src="${url}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:50%;display:block">`;
  });
};

/* Interactive cropper: lets the user pan + zoom to position their face,
   then confirm. Resolves to a 220px square data-URL, or null if cancelled. */
window.openAvatarCropper = function (file) {
  return new Promise((resolve, reject) => {
    if (!file || !/^image\//.test(file.type)) { reject(new Error('Please choose an image file.')); return; }
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Could not read that file.'));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error('Could not load that image.'));
      img.onload = () => {
        const V = 250;   // viewport size (px)
        const O = 220;   // output size (px)
        const cover = Math.max(V / img.naturalWidth, V / img.naturalHeight);
        let scale = 1, tx = 0, ty = 0;

        const overlay = document.createElement('div');
        overlay.className = 'cropper-overlay';
        overlay.innerHTML = `
          <div class="cropper-panel">
            <div class="cropper-title">Adjust your photo</div>
            <div class="cropper-sub">Drag to reposition · use the slider to zoom</div>
            <div class="cropper-view"><img alt=""><div class="cropper-ring"></div></div>
            <input class="cropper-zoom" type="range" min="1" max="3" step="0.01" value="1">
            <div class="cropper-actions">
              <button class="btn-outline" data-act="cancel" style="padding:8px 16px">Cancel</button>
              <button class="btn-accent"  data-act="ok" style="padding:8px 18px">Use Photo</button>
            </div>
          </div>`;
        document.body.appendChild(overlay);
        requestAnimationFrame(() => overlay.classList.add('show'));

        const imgEl = overlay.querySelector('.cropper-view img');
        imgEl.src = img.src;

        const dispW = () => img.naturalWidth  * cover * scale;
        const dispH = () => img.naturalHeight * cover * scale;
        const clamp = () => {
          tx = Math.min(0, Math.max(V - dispW(), tx));
          ty = Math.min(0, Math.max(V - dispH(), ty));
        };
        const render = () => {
          imgEl.style.width  = dispW() + 'px';
          imgEl.style.height = dispH() + 'px';
          imgEl.style.transform = `translate(${tx}px, ${ty}px)`;
        };
        clamp(); render();

        // Drag to pan (mouse + touch)
        const view = overlay.querySelector('.cropper-view');
        let dragging = false, sx = 0, sy = 0, stx = 0, sty = 0;
        const start = (px, py) => { dragging = true; sx = px; sy = py; stx = tx; sty = ty; };
        const move  = (px, py) => { if (!dragging) return; tx = stx + (px - sx); ty = sty + (py - sy); clamp(); render(); };
        const end   = () => { dragging = false; };
        const onMove = e => move(e.clientX, e.clientY);
        view.addEventListener('mousedown', e => { e.preventDefault(); start(e.clientX, e.clientY); });
        window.addEventListener('mousemove', onMove);
        window.addEventListener('mouseup', end);
        view.addEventListener('touchstart', e => { start(e.touches[0].clientX, e.touches[0].clientY); }, { passive: true });
        view.addEventListener('touchmove',  e => { move(e.touches[0].clientX, e.touches[0].clientY); }, { passive: true });
        view.addEventListener('touchend', end);

        // Zoom (keep centre stable)
        const zoom = overlay.querySelector('.cropper-zoom');
        zoom.addEventListener('input', () => {
          const cx = V / 2, cy = V / 2;
          const ix = (cx - tx) / scale, iy = (cy - ty) / scale; // centre in pre-scale coords
          scale = parseFloat(zoom.value);
          tx = cx - ix * scale; ty = cy - iy * scale;
          clamp(); render();
        });

        const close = (result) => {
          window.removeEventListener('mousemove', onMove);
          window.removeEventListener('mouseup', end);
          overlay.classList.remove('show');
          setTimeout(() => overlay.remove(), 200);
          resolve(result);
        };

        overlay.querySelector('[data-act="cancel"]').addEventListener('click', () => close(null));
        overlay.addEventListener('click', e => { if (e.target === overlay) close(null); });
        overlay.querySelector('[data-act="ok"]').addEventListener('click', () => {
          // Map viewport → source rect in natural image coords
          const k = cover * scale;
          const srcX = -tx / k, srcY = -ty / k, srcSize = V / k;
          const canvas = document.createElement('canvas');
          canvas.width = canvas.height = O;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, srcX, srcY, srcSize, srcSize, 0, 0, O, O);
          close(canvas.toDataURL('image/jpeg', 0.85));
        });
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
};

// Crop (with confirmation UI) → save to the user's account → apply everywhere.
// Returns the data-URL, or null if the user cancelled.
window.uploadAvatar = async function (file) {
  const dataUrl = await window.openAvatarCropper(file);
  if (!dataUrl) return null;            // cancelled
  if (typeof db !== 'undefined') {
    const { error } = await db.auth.updateUser({ data: { avatar_url: dataUrl } });
    if (error) throw error;
    // Write to clients/coaches table so other users can see this avatar
    try {
      const { data: { user } } = await db.auth.getUser();
      if (user && user.email && typeof saveUserAvatar === 'function') {
        await saveUserAvatar(user.email, dataUrl);
        // Reset sync gate so next session knows the latest photo is already in DB
        try { sessionStorage.removeItem(`av_synced_${user.email}`); } catch (_) {}
      }
    } catch (_) {}
  }
  window.applyAvatar(dataUrl);
  return dataUrl;
};

/* ════════════════════════════════════
   PROFILE DROPDOWN — injected into the
   persistent topbar on every page
   ════════════════════════════════════ */
function injectProfileMenu() {
  const avatar = document.querySelector('.tb-right .avatar');
  if (!avatar || avatar.closest('.profile-wrap')) return; // already wired

  const wrap = document.createElement('div');
  wrap.className = 'profile-wrap';
  avatar.parentNode.insertBefore(wrap, avatar);
  wrap.appendChild(avatar);

  const menu = document.createElement('div');
  menu.className = 'profile-dropdown';
  menu.innerHTML = `
    <div class="pd-header">
      <div class="pd-avatar-lg" id="pd-avatar" title="Change photo" style="cursor:pointer;position:relative;overflow:hidden">${window.icon('user')}</div>
      <div class="pd-info">
        <div class="pd-name" id="pd-name">—</div>
        <div class="pd-email" id="pd-email">—</div>
      </div>
    </div>
    <div class="pd-menu">
      <button class="pd-item" data-nav="profile.html">${window.icon('user')} Profile</button>
      <button class="pd-item" data-nav="settings.html">${window.icon('settings')} Settings</button>
      <div class="pd-divider"></div>
      <button class="pd-item danger" id="pd-signout">${window.icon('logout')} Sign Out</button>
    </div>
    <input type="file" id="pd-photo-input" accept="image/*" style="display:none">`;
  wrap.appendChild(menu);

  /* Profile photo upload */
  const photoInput = menu.querySelector('#pd-photo-input');
  const triggerPhoto = (e) => { if (e) e.stopPropagation(); photoInput.click(); };
  menu.querySelector('#pd-avatar').addEventListener('click', triggerPhoto);
  photoInput.addEventListener('change', async () => {
    const file = photoInput.files && photoInput.files[0];
    if (!file) return;
    try {
      const r = await window.uploadAvatar(file);
      if (r && window.toast) window.toast('Profile photo updated 📸', 'success');
    } catch (err) {
      if (window.toast) window.toast(err.message || 'Upload failed', 'error');
    }
    photoInput.value = '';
  });

  /* Populate name/email + photo — cache first (instant), then live auth */
  try {
    const cached = JSON.parse(sessionStorage.getItem('apex_sidebar') || 'null');
    if (cached) menu.querySelector('#pd-name').textContent = cached.name;
    const cachedAvatar = localStorage.getItem('apex_avatar');
    if (cachedAvatar) window.applyAvatar(cachedAvatar);
  } catch (_) {}
  if (typeof db !== 'undefined') {
    db.auth.getUser().then(({ data }) => {
      const u = data && data.user;
      if (!u) return;
      const m = u.user_metadata || {};
      const name = m.full_name || m.display_name || m.name
                 || (u.email ? u.email.split('@')[0] : 'User');
      menu.querySelector('#pd-name').textContent  = name;
      menu.querySelector('#pd-email').textContent = u.email || '';
      if (m.avatar_url) window.applyAvatar(m.avatar_url);
    }).catch(() => {});
  }

  /* Toggle */
  avatar.addEventListener('click', e => {
    e.stopPropagation();
    menu.classList.toggle('open');
  });
  /* Outside click + Esc close */
  document.addEventListener('click', () => menu.classList.remove('open'));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') menu.classList.remove('open'); });
  menu.addEventListener('click', e => e.stopPropagation());

  /* Menu actions */
  menu.querySelectorAll('.pd-item[data-nav]').forEach(btn => {
    btn.addEventListener('click', () => {
      menu.classList.remove('open');
      const dest = btn.dataset.nav;
      if (typeof apexNavigate === 'function') apexNavigate(dest);
      else window.location.href = dest;
    });
  });
  const signoutBtn = menu.querySelector('#pd-signout');
  if (signoutBtn) signoutBtn.addEventListener('click', () => {
    if (typeof signOut === 'function') signOut();
    else window.location.href = 'login.html';
  });
}

/* ════════════════════════════════════
   START A DM — open the drawer if we're on a page that has it,
   otherwise hop to the community page with ?dm= so it auto-opens.
   ════════════════════════════════════ */
function apexStartDM(email, name, role) {
  if (typeof window._apexOpenDM === 'function') {
    window._apexOpenDM(email, name, role);
    return;
  }
  const r   = window._apexRole || 'client';
  const url = `${r}-community.html?dm=${encodeURIComponent(email)}&name=${encodeURIComponent(name)}&role=${encodeURIComponent(role || '')}`;
  if (typeof apexNavigate === 'function') apexNavigate(url);
  else window.location.href = url;
}

/* ════════════════════════════════════
   MEMBER PROFILE — a lightweight card shown when you tap a member
   in search. Avatar, role, follower/following counts + Follow & Message.
   ════════════════════════════════════ */
let _apexProfileEmail = null;   // who the open card is for
let _apexMeEmailCache = null;

async function apexMyEmail() {
  if (_apexMeEmailCache !== null) return _apexMeEmailCache;
  try {
    const { data } = await db.auth.getUser();
    _apexMeEmailCache = (data && data.user && data.user.email) || '';
  } catch (_) { _apexMeEmailCache = ''; }
  return _apexMeEmailCache;
}

function apexEnsureProfileModal() {
  let ov = document.querySelector('.apex-profile-overlay');
  if (ov) return ov;
  ov = document.createElement('div');
  ov.className = 'apex-profile-overlay';
  ov.innerHTML = `
    <div class="apex-profile-card" role="dialog" aria-modal="true">
      <button class="apex-profile-close" aria-label="Close">&times;</button>
      <div class="apex-profile-av" id="apx-prof-av"></div>
      <div class="apex-profile-name" id="apx-prof-name">—</div>
      <div class="apex-profile-role" id="apx-prof-role"></div>
      <div class="apex-profile-stats">
        <div class="apex-profile-stat"><b id="apx-prof-followers">–</b><span>Followers</span></div>
        <div class="apex-profile-stat"><b id="apx-prof-following">–</b><span>Following</span></div>
      </div>
      <div class="apex-profile-actions" id="apx-prof-actions"></div>
      <div class="apex-profile-note" id="apx-prof-note" style="display:none"></div>
    </div>`;
  document.body.appendChild(ov);

  const close = () => { ov.classList.remove('open'); _apexProfileEmail = null; };
  ov.addEventListener('click', (e) => { if (e.target === ov) close(); });
  ov.querySelector('.apex-profile-close').addEventListener('click', close);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  ov._close = close;
  return ov;
}

async function apexShowProfile(user) {
  if (!user || !user.email) return;
  const ov = apexEnsureProfileModal();
  _apexProfileEmail = user.email;

  const esc = t => (t || '').replace(/[&<>"]/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;' }[c]));
  const initials = n => (n || '?').trim().split(/\s+/).map(w => w[0]).slice(0, 2).join('').toUpperCase();

  // Header
  const avEl = ov.querySelector('#apx-prof-av');
  avEl.innerHTML = user.avatar_url
    ? `<img src="${esc(user.avatar_url)}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:50%;display:block">`
    : initials(user.name);
  ov.querySelector('#apx-prof-name').textContent = user.name || user.email.split('@')[0];
  ov.querySelector('#apx-prof-role').textContent = user.role || '';

  // Reset stats while we fetch
  ov.querySelector('#apx-prof-followers').textContent = '–';
  ov.querySelector('#apx-prof-following').textContent = '–';

  ov.classList.add('open');

  const me      = await apexMyEmail();
  const isMe    = me && me.toLowerCase() === user.email.toLowerCase();
  const actions = ov.querySelector('#apx-prof-actions');
  const note    = ov.querySelector('#apx-prof-note');

  if (isMe) {
    actions.style.display = 'none';
    note.style.display = '';
    note.textContent = 'This is you';
  } else {
    actions.style.display = '';
    note.style.display = 'none';
    const following = typeof isFollowing === 'function' ? await isFollowing(me, user.email) : false;
    if (_apexProfileEmail !== user.email) return; // a newer card opened meanwhile
    actions.innerHTML = `
      <button class="btn-outline apx-prof-follow ${following ? 'following' : ''}">${following ? 'Following' : 'Follow'}</button>
      <button class="btn-accent apx-prof-msg">Message</button>`;

    actions.querySelector('.apx-prof-msg').addEventListener('click', () => {
      ov._close();
      apexStartDM(user.email, user.name, user.role);
    });
    const followBtn = actions.querySelector('.apx-prof-follow');
    followBtn.addEventListener('click', async () => {
      if (!me) return;
      const isF = followBtn.classList.contains('following');
      followBtn.disabled = true;
      try {
        if (isF) { await unfollowUser(me, user.email); followBtn.classList.remove('following'); followBtn.textContent = 'Follow'; }
        else     { await followUser(me, user.email);   followBtn.classList.add('following');    followBtn.textContent = 'Following';
                   if (window.toast) window.toast(`Following ${user.name || 'member'} ✓`, 'success', 1500); }
        const c = await loadFollowCounts(user.email);
        if (_apexProfileEmail === user.email) ov.querySelector('#apx-prof-followers').textContent = c.followers;
      } catch (_) { if (window.toast) window.toast('Action failed', 'error'); }
      finally { followBtn.disabled = false; }
    });
  }

  // Stats (async; ignore if the card has since changed)
  if (typeof loadFollowCounts === 'function') {
    const counts = await loadFollowCounts(user.email);
    if (_apexProfileEmail === user.email) {
      ov.querySelector('#apx-prof-followers').textContent = counts.followers;
      ov.querySelector('#apx-prof-following').textContent = counts.following;
    }
  }
}
window.apexShowProfile = apexShowProfile;
window.apexStartDM     = apexStartDM;

/* ════════════════════════════════════
   TOPBAR MEMBER SEARCH — find a coach / friend, view profile or DM
   ════════════════════════════════════ */
function initMemberSearch() {
  const search = document.querySelector('.topbar .search');
  if (!search || search._wired) return;
  search._wired = true;
  const input = search.querySelector('input');
  if (!input) return;
  input.placeholder = 'Search for a coach or friend…';

  const results = document.createElement('div');
  results.className = 'search-results';
  search.appendChild(results);

  const role = (window._apexRole || 'client');
  const initials = n => (n || '?').trim().split(/\s+/).map(w => w[0]).slice(0, 2).join('').toUpperCase();
  const esc = t => (t || '').replace(/[&<>"]/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;' }[c]));
  let dir = null, t = null;

  const close = () => results.classList.remove('open');
  document.addEventListener('click', e => { if (!search.contains(e.target)) close(); });

  const run = async () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { close(); return; }
    if (!dir && typeof loadDirectory === 'function') dir = await loadDirectory();
    const matches = (dir || [])
      .filter(u => (u.name || '').toLowerCase().includes(q) || (u.role || '').toLowerCase().includes(q))
      .slice(0, 8);
    results.innerHTML = matches.length ? matches.map(u => `
      <div class="search-res-item" data-email="${esc(u.email)}" data-name="${esc(u.name)}" data-role="${esc(u.role)}" data-avatar="${esc(u.avatar_url || '')}">
        ${u.avatar_url
          ? `<div class="member-av" style="padding:0;overflow:hidden"><img src="${esc(u.avatar_url)}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:50%;display:block"></div>`
          : `<div class="member-av">${initials(u.name)}</div>`}
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(u.name)}</div>
          <div style="font-size:10px;color:var(--t2);text-transform:uppercase;letter-spacing:.5px">${esc(u.role)}</div>
        </div>
        <span class="mini-btn">Message</span>
      </div>`).join('') : '<div class="search-res-empty">No members found</div>';

    results.querySelectorAll('.search-res-item').forEach(it => {
      const u = { name: it.dataset.name, email: it.dataset.email, role: it.dataset.role, avatar_url: it.dataset.avatar || null };
      // Tapping the row → view the member's profile
      it.addEventListener('click', () => { close(); input.value = ''; apexShowProfile(u); });
      // The "Message" chip → jump straight into a DM
      const msgBtn = it.querySelector('.mini-btn');
      if (msgBtn) msgBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        close(); input.value = '';
        apexStartDM(u.email, u.name, u.role);
      });
    });
    results.classList.add('open');
  };

  input.addEventListener('input', () => { clearTimeout(t); t = setTimeout(run, 200); });
  input.addEventListener('focus', () => { if (input.value.trim()) run(); });
}

/* ════════════════════════════════════
   INBOX FAB — floating message button on every page
   ════════════════════════════════════ */
function injectInboxFab() {
  if (document.querySelector('.inbox-fab')) return;
  const page = (window.location.pathname.split('/').pop() || '').toLowerCase();
  if (page.includes('inbox') || page === 'login.html') return;

  const btn = document.createElement('button');
  btn.className = 'inbox-fab';
  btn.title = 'Inbox';
  btn.innerHTML = window.icon('message');
  document.body.appendChild(btn);

  btn.addEventListener('click', () => {
    const role = window._apexRole || 'client';
    const dest = `${role}-inbox.html`;
    if (typeof apexNavigate === 'function') apexNavigate(dest);
    else window.location.href = dest;
  });
}

/* ════════════════════════════════════
   NOTIFICATIONS — bell + red badge in the topbar.
   "Unread" = messages addressed to me that arrived after the last time
   I opened my inbox. The messages table has no read flag, so we track the
   last-seen moment in localStorage.
   ════════════════════════════════════ */
const APEX_SEEN_KEY = 'apex_inbox_seen';

function markNotificationsSeen() {
  try { localStorage.setItem(APEX_SEEN_KEY, String(Date.now())); } catch (_) {}
}

async function apexUnreadCount() {
  if (typeof db === 'undefined') return 0;
  try {
    const { data } = await db.auth.getUser();
    const email = data && data.user && data.user.email;
    if (!email) return 0;
    const seen = parseInt(localStorage.getItem(APEX_SEEN_KEY) || '0', 10);
    const { data: msgs, error } = await db.from('messages')
      .select('sender_email,created_at')
      .eq('recipient_email', email)
      .order('created_at', { ascending: false })
      .limit(100);
    if (error) throw error;
    return (msgs || []).filter(m =>
      m.sender_email && m.sender_email.toLowerCase() !== email.toLowerCase() &&
      new Date(m.created_at).getTime() > seen
    ).length;
  } catch (e) {
    console.warn('[Notif] unread:', e.message);
    return 0;
  }
}

async function refreshNotifications() {
  const bell = document.querySelector('.tb-right .notif-bell');
  if (!bell) return;
  const n = await apexUnreadCount();
  const dot = bell.querySelector('.notif-dot');
  if (dot) dot.textContent = n > 9 ? '9+' : (n || '');
  bell.classList.toggle('has-unread', n > 0);
}

function injectNotifications() {
  // The bell is the topbar icon-btn that carries the .notif-dot (gear has none).
  const dot  = document.querySelector('.tb-right .icon-btn .notif-dot');
  const bell = dot ? dot.closest('.icon-btn') : null;
  if (!bell || bell._wired) return;
  bell._wired = true;
  bell.classList.add('notif-bell');
  bell.title = 'Notifications';

  bell.addEventListener('click', () => {
    markNotificationsSeen();
    bell.classList.remove('has-unread');
    const d = bell.querySelector('.notif-dot');
    if (d) d.textContent = '';
    const role = window._apexRole || 'client';
    const dest = `${role}-inbox.html`;
    if (typeof apexNavigate === 'function') apexNavigate(dest);
    else window.location.href = dest;
  });

  // Opening the inbox directly counts as seeing everything.
  const page = (window.location.pathname.split('/').pop() || '').toLowerCase();
  if (page.includes('inbox')) markNotificationsSeen();

  refreshNotifications();
}

/* ════════════════════════════════════
   MOBILE NAV — turn the hover sidebar into an
   off-canvas drawer with a hamburger toggle + backdrop.
   Injected globally so no per-page HTML edits are needed.
   ════════════════════════════════════ */
function injectMobileNav() {
  const sidebar = document.querySelector('.sidebar');
  const topbar  = document.querySelector('.topbar');
  if (!sidebar || !topbar || document.querySelector('.mobile-nav-toggle')) return;

  // Hamburger button — lives at the front of the topbar, shown only on mobile via CSS.
  const toggle = document.createElement('button');
  toggle.className = 'mobile-nav-toggle';
  toggle.setAttribute('aria-label', 'Open menu');
  toggle.innerHTML =
    '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' +
    '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/>' +
    '<line x1="3" y1="18" x2="21" y2="18"/></svg>';
  topbar.insertBefore(toggle, topbar.firstChild);

  // Dim backdrop behind the open drawer.
  const backdrop = document.createElement('div');
  backdrop.className = 'mobile-nav-backdrop';
  document.body.appendChild(backdrop);

  const open  = () => { document.body.classList.add('mobile-nav-open');  toggle.setAttribute('aria-label', 'Close menu'); };
  const close = () => { document.body.classList.remove('mobile-nav-open'); toggle.setAttribute('aria-label', 'Open menu'); };
  window._apexCloseMobileNav = close;

  toggle.addEventListener('click', () =>
    document.body.classList.contains('mobile-nav-open') ? close() : open());
  backdrop.addEventListener('click', close);

  // Tapping any nav item (drawer link) or sidebar action closes the drawer.
  sidebar.addEventListener('click', (e) => {
    if (e.target.closest('.nav-item, .sb-link, .btn-start')) close();
  });

  // Close on Escape, and whenever we grow back to desktop width.
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  window.matchMedia('(min-width: 769px)').addEventListener('change', (e) => { if (e.matches) close(); });
}

document.addEventListener('DOMContentLoaded', () => {

  /* ── Render all icons ── */
  window.renderIcons(document);

  /* ── Profile dropdown ── */
  injectProfileMenu();

  /* ── Notifications bell ── */
  injectNotifications();

  /* ── Inbox FAB ── */
  injectInboxFab();

  /* ── Mobile drawer nav ── */
  injectMobileNav();

  /* ── Topbar member search ── */
  initMemberSearch();

  /* ── Active nav detection ── */
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-item[data-page]').forEach(item => {
    item.classList.remove('active');
    if (item.dataset.page === page) item.classList.add('active');
    item.addEventListener('click', e => {
      const dest = item.getAttribute('href');
      if (!dest || dest === '#' || item.classList.contains('active')) return;
      e.preventDefault();
      apexNavigate(dest);
    });
  });

  /* ── PJAX: browser back/forward ── */
  window.addEventListener('popstate', e => {
    if (e.state && e.state.pjax) apexNavigate(e.state.url, true);
  });

  /* ── Day selector (training) ── */
  document.querySelectorAll('.day-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  /* ── Time selector (biometrics) ── */
  document.querySelectorAll('.tbtn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tbtn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  /* ── Hydration buttons (nutrition) ──
     The nutrition page overrides via window._onHydroAdd for DB persistence.
     This fallback handles the rare case where that hook isn't set yet. ── */
  const hydroFill = document.querySelector('.hydro-fill');
  let hydroVal   = document.querySelector('.hydro-current');
  let currentML  = 0;
  const totalML  = 4000;

  document.querySelectorAll('.hydro-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const add = parseInt(btn.dataset.add || 0);
      if (window._onHydroAdd) { window._onHydroAdd(add); return; }
      currentML = Math.min(currentML + add, totalML);
      if (hydroFill) hydroFill.style.width = (currentML / totalML * 100) + '%';
      if (hydroVal) hydroVal.textContent = (currentML / 1000).toFixed(1);
      btn.style.transform = 'scale(0.95)';
      setTimeout(() => btn.style.transform = '', 150);
    });
  });

  /* ── Defer chart animations until browser is idle ── */
  _ric(() => window.initAnimations(document));

  /* ── Meal delete (nutrition) ── */
  document.querySelectorAll('.mact.delete').forEach(btn => {
    btn.addEventListener('click', () => {
      const row = btn.closest('.meal-item');
      if (row) { row.style.opacity = '0'; row.style.transform = 'translateX(20px)'; row.style.transition = 'all 0.3s'; setTimeout(() => row.remove(), 300); }
    });
  });

  /* ── Reply send ── */
  const replyInput = document.querySelector('.reply-input');
  const replySend  = document.querySelector('.reply-send');
  if (replyInput && replySend) {
    replySend.addEventListener('click', () => {
      if (replyInput.value.trim()) { replyInput.value = ''; replyInput.placeholder = 'Sent ✓'; setTimeout(() => { replyInput.placeholder = 'Reply...'; }, 2000); }
    });
    replyInput.addEventListener('keydown', e => { if (e.key === 'Enter') replySend.click(); });
  }

  /* ── FAB ripple ── */
  const fab = document.querySelector('.fab');
  if (fab) {
    fab.addEventListener('click', () => {
      fab.style.transform = 'scale(0.9)';
      setTimeout(() => { fab.style.transform = ''; }, 200);
    });
  }


  /* ── Log Quick button ── */
  const logBtn = document.querySelector('.btn-log');
  if (logBtn) {
    logBtn.addEventListener('click', () => {
      logBtn.textContent = 'Logged ✓';
      logBtn.style.background = 'var(--green-dim)';
      logBtn.style.borderColor = 'var(--green)';
      logBtn.style.color = 'var(--green)';
      setTimeout(() => {
        logBtn.textContent = 'Log Quick +';
        logBtn.style.background = '';
        logBtn.style.borderColor = '';
        logBtn.style.color = '';
      }, 2000);
    });
  }

  /* ── Smooth page entrance ── */
  requestAnimationFrame(() => {
    const content = document.querySelector('.page-content');
    if (content) content.classList.add('visible');
  });

});

/* ════════════════════════════════════════════════════════════
   ENGAGEMENT LAYER — toasts, confetti & delight (global)
   Call window.toast(msg, type) or window.celebrate(x, y) anywhere.
   ════════════════════════════════════════════════════════════ */
const _reduceMotion = () =>
  window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

window.toast = function (msg, type = '', ms = 5000) {
  let wrap = document.querySelector('.apex-toasts');
  if (!wrap) {
    wrap = document.createElement('div');
    wrap.className = 'apex-toasts';
    document.body.appendChild(wrap);
  }

  const t = document.createElement('div');
  t.className = 'apex-toast ' + type;

  const text = document.createElement('span');
  text.className = 'apex-toast-msg';
  text.textContent = msg;

  const close = document.createElement('button');
  close.className = 'apex-toast-close';
  close.setAttribute('aria-label', 'Dismiss');
  close.innerHTML = '&times;';

  const bar = document.createElement('div');
  bar.className = 'apex-toast-bar';
  bar.style.animationDuration = ms + 'ms';

  t.append(text, close, bar);
  wrap.appendChild(t);
  requestAnimationFrame(() => t.classList.add('show'));

  let timer;
  const dismiss = () => {
    if (t._gone) return;
    t._gone = true;
    clearTimeout(timer);
    t.classList.remove('show');
    setTimeout(() => t.remove(), 450);
  };
  const start = () => { timer = setTimeout(dismiss, ms); };

  // Tap anywhere / the ✕ to dismiss; pause the countdown while hovered (desktop).
  close.addEventListener('click', (e) => { e.stopPropagation(); dismiss(); });
  t.addEventListener('click', dismiss);
  t.addEventListener('mouseenter', () => { clearTimeout(timer); bar.style.animationPlayState = 'paused'; });
  t.addEventListener('mouseleave', () => { bar.style.animationPlayState = 'running'; start(); });

  start();
  return dismiss;
};

window.celebrate = function (x, y) {
  if (_reduceMotion()) return;
  const colors = ['#ff751f', '#06b6d4', '#22c55e', '#f59e0b', '#ef4444', '#ffffff'];
  const cx = (x == null) ? window.innerWidth / 2 : x;
  const cy = (y == null) ? window.innerHeight / 2 : y;
  for (let i = 0; i < 28; i++) {
    const p = document.createElement('div');
    p.className = 'confetti-piece';
    p.style.left = cx + 'px';
    p.style.top  = cy + 'px';
    p.style.background = colors[i % colors.length];
    p.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    document.body.appendChild(p);
    const ang  = Math.random() * Math.PI * 2;
    const dist = 70 + Math.random() * 130;
    const dx   = Math.cos(ang) * dist;
    const dy   = Math.sin(ang) * dist - 50;
    const rot  = Math.random() * 720 - 360;
    p.animate([
      { transform: 'translate(0,0) rotate(0deg)', opacity: 1 },
      { transform: `translate(${dx}px, ${dy}px) rotate(${rot}deg)`, opacity: 1, offset: 0.7 },
      { transform: `translate(${dx * 1.1}px, ${dy + 240}px) rotate(${rot * 1.3}deg)`, opacity: 0 },
    ], { duration: 950 + Math.random() * 550, easing: 'cubic-bezier(.2,.7,.3,1)' })
      .onfinish = () => p.remove();
  }
};

/* Delightful moment when a client ticks a workout exercise or meal complete.
   Event delegation → works on dynamically-rendered checkboxes, no page edits. */
document.addEventListener('change', (e) => {
  const el = e.target;
  if (!el || el.type !== 'checkbox') return;
  if (!(el.classList.contains('ex-done-check') || el.classList.contains('meal-check'))) return;
  if (!el.checked) return;
  const r = el.getBoundingClientRect();
  window.celebrate(r.left + r.width / 2, r.top + r.height / 2);
  const cheers = ['Nice work! 💪', 'Crushing it! 🔥', 'One down! ✅', 'Beast mode 🦁', 'Keep it up! ⚡', 'Logged! 🎯'];
  window.toast(cheers[Math.floor(Math.random() * cheers.length)], 'success', 1800);
});

/* ════════════════════════════════════════════════════════════
   WEEKLY CHECK-IN EXPORTS — Excel (SheetJS) + PDF (jsPDF)
   Coaches export the responses they're currently viewing.
   `nameOf(row)` resolves the client's display name.
   ════════════════════════════════════════════════════════════ */
window.checkInExportMatrix = function (rows, nameOf) {
  nameOf = nameOf || (r => r.full_name || 'Client');
  const v = (x) => (x === null || x === undefined ? '' : x);
  const header = [
    'Client', 'Date', 'Feeling', 'Stress (1-10)', 'Missed Diet', 'Diet Note',
    'Steps Target', 'Energy Crash', 'Strength Up', 'Days Trained', 'Training Note',
    'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Progress Photo', 'Week Overall',
  ];
  const body = rows.map(r => [
    nameOf(r), v(r.date), v(r.feeling), v(r.stress), v(r.missed_diet), v(r.missed_diet_note),
    v(r.steps_done), v(r.energy_crash), v(r.strength_up), v(r.train_days), v(r.train_note),
    v(r.weight_mon), v(r.weight_tue), v(r.weight_wed), v(r.weight_thu), v(r.weight_fri),
    v(r.weight_sat), v(r.weight_sun), v(r.photo_shared), v(r.week_overall),
  ]);
  return { header, body };
};

window.exportCheckInsExcel = function (rows, nameOf, filename) {
  if (typeof XLSX === 'undefined') {
    if (window.toast) window.toast('Excel library still loading — try again in a moment', 'error');
    return;
  }
  if (!rows || !rows.length) { if (window.toast) window.toast('Nothing to export', 'error'); return; }
  const { header, body } = window.checkInExportMatrix(rows, nameOf);
  const ws = XLSX.utils.aoa_to_sheet([header, ...body]);
  ws['!cols'] = header.map(h =>
    /Overall|Note/.test(h) ? { wch: 40 } : (h === 'Client' ? { wch: 22 } : { wch: Math.max(h.length + 2, 8) }));
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Check-Ins');
  XLSX.writeFile(wb, filename || `check-ins-${getTodayIST()}.xlsx`);
  if (window.toast) window.toast(`Exported ${rows.length} check-in${rows.length > 1 ? 's' : ''} to Excel 📊`, 'success');
};

window.exportCheckInsPDF = function (rows, nameOf, filename, subtitle) {
  const ns = window.jspdf;
  if (!ns || typeof ns.jsPDF === 'undefined') {
    if (window.toast) window.toast('PDF library still loading — try again in a moment', 'error');
    return;
  }
  if (!rows || !rows.length) { if (window.toast) window.toast('Nothing to export', 'error'); return; }
  nameOf = nameOf || (r => r.full_name || 'Client');
  const doc = new ns.jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
  const num = (x) => (x === null || x === undefined || x === '' ? '' : x);
  const weights = (r) => [r.weight_mon, r.weight_tue, r.weight_wed, r.weight_thu, r.weight_fri, r.weight_sat, r.weight_sun]
    .map(w => (w === null || w === undefined ? '–' : w)).join('/');
  const notes = (r) => [r.week_overall, r.missed_diet_note ? 'Diet: ' + r.missed_diet_note : '', r.train_note ? 'Training: ' + r.train_note : '']
    .filter(Boolean).join('\n');

  const head = [['Client', 'Date', 'Feeling', 'Stress', 'Missed Diet', 'Steps', 'Energy Crash', 'Strength', 'Days', 'Weights Mon–Sun', 'Photo', 'Notes']];
  const bodyRows = rows.map(r => [
    nameOf(r), num(r.date), num(r.feeling), num(r.stress), num(r.missed_diet), num(r.steps_done),
    num(r.energy_crash), num(r.strength_up), num(r.train_days), weights(r), num(r.photo_shared), notes(r),
  ]);

  doc.setFontSize(16); doc.setTextColor(20);
  doc.text('Weekly Check-In Report', 14, 14);
  doc.setFontSize(9); doc.setTextColor(120);
  doc.text(`${subtitle || 'All clients'} · ${rows.length} response${rows.length > 1 ? 's' : ''} · Generated ${getTodayIST()}`, 14, 20);

  doc.autoTable({
    head, body: bodyRows, startY: 25,
    styles: { fontSize: 7, cellPadding: 1.5, overflow: 'linebreak', valign: 'top' },
    headStyles: { fillColor: [255, 117, 31], textColor: 255, fontStyle: 'bold' },
    alternateRowStyles: { fillColor: [245, 245, 245] },
    columnStyles: { 0: { cellWidth: 26 }, 9: { cellWidth: 30 }, 11: { cellWidth: 60 } },
    margin: { left: 14, right: 14 },
  });
  doc.save(filename || `check-ins-${getTodayIST()}.pdf`);
  if (window.toast) window.toast(`Exported ${rows.length} check-in${rows.length > 1 ? 's' : ''} to PDF 📄`, 'success');
};
