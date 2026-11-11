/* Shared site settings, loaded before main.js on every page.
   ANIMAI_KINGDOM_URL is the official Animai Kingdom (SIP) website.
   Every SIP / Animai Kingdom link on the site uses this value:
   main.js rewrites every <a data-animai-link> to it, and the
   objectives cards read it directly. If the domain changes, update
   it here (and the plain href fallbacks in the HTML for visitors
   without JavaScript: search the project for "animaikingdom.com"). */
window.SITE_CONFIG = {
  ANIMAI_KINGDOM_URL: "http://animaikingdom.com",
};
