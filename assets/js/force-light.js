/*FORCE LIGHT MODE EVERYWHERE, DISABLE DARK MODE*/
/*NOTE: Also added the following script to _includes/head/custom.html for this to work:*/
// <script src="/assets/js/force-light.js"></script>

// THIS DOESNT WORK FOR SHIT IDK

/* TO RE-ENABLE LIGHT MODE YOU MUST BOTH DELETE THIS FILE AND THAT SCRIPT FROM HEAD.HTML */

/*
(() => {
  const root = document.documentElement;

  function forceLight() {
    root.setAttribute('data-mode', 'light');
    try {
      // Chirpy stores theme choice in localStorage
      localStorage.setItem('data-mode', 'light');
      localStorage.setItem('mode', 'light');
      localStorage.removeItem('theme');
      localStorage.removeItem('dark-mode');
    } catch (e) {}
  }

  // Run immediately
  forceLight();

  // If anything tries to flip it back, flip it to light again
  new MutationObserver(() => {
    if (root.getAttribute('data-mode') === 'dark') forceLight();
  }).observe(root, { attributes: true, attributeFilter: ['data-mode'] });
})();
*/
