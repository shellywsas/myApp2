// גרסת האפליקציה
const cacheName = 'shelly-app-v1';

self.addEventListener('install', (e) => {
  console.log('[Service Worker] הותקן בהצלחה');
});

self.addEventListener('fetch', (e) => {
  // כאן נוסיף בעתיד יכולות עבודה בלי אינטרנט (אופליין)
});
