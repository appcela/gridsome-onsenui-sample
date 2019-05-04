# Gridsome + Onsen UI

Sample project to demonstrate how to use Onsen UI with Gridsome.

## Onsen UI

[Onsen UI](https://onsen.io) is a large set of rich UI components specifically designed for mobile apps.

[Onsen UI’s Vue components](https://onsen.io/v2/guide/vue/#vue-js) are simple wrappers around inner Custom Elements. This means that a Vue Component takes some props and translates them into DOM properties, DOM attributes or method calls for the Onsen UI core. 
`v-ons-*` components compile into `ons-*` DOM custom elements, which means there's no SSR support for Onsen UI.

### Setup 

Add Onsen libraries.

```
yarn add onsenui vue-onsenui
```

Register external Onsen Vue components.

- src/main.js

```
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
```

Bind the Onsen Vue component inside `<ClientOnly></ClientOnly>` tag and import library inside vue's `mounted()` function.

```
<template>
    <ClientOnly>
        <v-ons-page>
            ...
        </v-ons-page>    
    </ClientOnly>
</template>
```

See [Without SSR support](https://gridsome.org/docs/assets-scripts#without-ssr-support) for more info.