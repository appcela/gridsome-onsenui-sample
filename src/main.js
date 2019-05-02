// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
// import onsen ui css
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  // register onsen ui for client only (window is available)
  if (typeof window !== 'undefined') {
    const VueOnsen = require('vue-onsenui');
    Vue.use(VueOnsen);
  }

}
