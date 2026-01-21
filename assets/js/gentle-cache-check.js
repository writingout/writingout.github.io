// assets/js/gentle-cache-check.js
(function () {
  // Only run once per session
  if (sessionStorage.getItem('cacheCheckDone')) return;

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      // If old service workers exist, gently suggest refresh
      if (registrations.length > 0) {
        console.log('Found old service workers, cleaning up...');

        // Unregister them quietly
        registrations.forEach((reg) => reg.unregister());

        // Optional: Show a subtle notification ONCE
        const notice = document.createElement('div');
        notice.style.cssText =
          'position:fixed;bottom:20px;right:20px;background:#f0f0f0;padding:10px;border-radius:5px;z-index:9999;font-size:12px;display:none;';
        notice.innerHTML =
          '🔄 Site updated. <a href="javascript:location.reload(true)" style="color:#0066cc;margin-left:5px;">Refresh</a>';
        document.body.appendChild(notice);

        // Show for 5 seconds only
        setTimeout(() => (notice.style.display = 'block'), 1000);
        setTimeout(() => notice.remove(), 6000);
      }
    });
  }

  sessionStorage.setItem('cacheCheckDone', 'true');
})();
