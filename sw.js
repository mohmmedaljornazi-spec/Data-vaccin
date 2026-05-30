const CACHE = 'tatveem-github-v1';
const ASSETS = ['./', './index.html', './upload.html', './viewer.html', './desktop.html', './manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).then(res => {
      if (res && res.status === 200) {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
      }
      return res;
    }).catch(() => caches.match(e.request))
  );
});

// ===== PUSH NOTIFICATIONS =====
self.addEventListener('push', e => {
  const data = e.data ? e.data.json() : {};
  const title = data.title || '💉 لوحة التطعيم 2026';
  const options = {
    body: data.body || 'تم رفع بيانات جديدة',
    icon: './icons/icon-192.png',
    badge: './icons/icon-72.png',
    tag: 'tatveem-update',
    renotify: true,
    dir: 'rtl',
    lang: 'ar',
    vibrate: [200, 100, 200],
    data: { url: './' }
  };
  e.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(
    clients.matchAll({ type: 'window' }).then(cs => {
      if (cs.length > 0) { cs[0].focus(); cs[0].navigate('./'); }
      else clients.openWindow('./');
    })
  );
});

// ===== FIREBASE MESSAGE (background) =====
self.addEventListener('message', e => {
  if (e.data && e.data.type === 'SHOW_NOTIFICATION') {
    self.registration.showNotification(e.data.title || '💉 لوحة التطعيم', {
      body: e.data.body || 'تم رفع بيانات جديدة',
      icon: './icons/icon-192.png',
      badge: './icons/icon-72.png',
      tag: 'tatveem-update',
      renotify: true,
      dir: 'rtl',
      lang: 'ar',
      vibrate: [200, 100, 200],
      data: { url: './' }
    });
  }
});
