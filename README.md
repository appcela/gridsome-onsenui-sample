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

### "Uncaught ReferenceError: setImmediate is not defined" Fix

After generating the site with the following command, 

```
gridsome build
```

You may run into the following error with your deployed site,

- Uncaught ReferenceError: setImmediate is not defined

To fix this error, we'll need to install the [setImmediate.js](https://github.com/yuzujs/setImmediate#readme) package,

```
yarn add setimmediate
```

And import it in your `src/main.js` file,

```
import 'setimmediate';
```

Note: This fix is already included in the sample project.


### Static Query

Even though Onsen UI pages cannot be rendered on the server side (no SSR support) due to DOM manipulation required in 
the browser. We can still use [static query](https://gridsome.org/docs/querying-data#query-data-in-components) to save 
the round trip for loading the initial data for the page.

Gridsome will query the data source at build time and save the data in JSON format in the generated js files. 

This way, even though the page itself cannot be pre-rendered on the server side, at least the initial data it needs 
can be pre-loaded on the server side, which is still beneficial for boosting the web app performance.

```
<template>
    <ClientOnly>
        <v-ons-page>
            ...
            <v-ons-list>
                <v-ons-list-item v-for="edge in $static.allFaker.edges" :key="edge.node.id">{{edge.node.title}}</v-ons-list-item>
            </v-ons-list>
        </v-ons-page>
    </ClientOnly>
</template>

<static-query>
query Fakers {
    allFaker(perPage: 10) {
        edges {
            node {
                id,
                author,
                thumbnail,
                title
            }
        }
    }
}
</static-query>
```

# Onsen Vue Demo

After cloning this repository, launch the demo site by running the following command in your 
cloned directory,

```
gridsome develop
``` 

Navigator Demo
- http://localhost:8080/navigator

Splitter Demo
- http://localhost:8080/splitter

Tabbar Demo
- http://localhost:8080/tabbar

# Misc

## Fetch Data from GraphQL Source Example

There's no [Gridsome plugins](https://gridsome.org/plugins) to connect to remote GraphQL schema yet. The only documented use case is for connecting to remote REST API source (see [Add data from APIs](https://gridsome.org/docs/fetching-data#add-data-from-apis)).

I'll use the SWAPI (Star Wars API) GraphQL API to demonstrate how to import the remote GraphQL schema into Gridsome for full data access.

### SWAPI

- [SWAPI GraphQL Console](https://swapi.graph.cool/)
- SWAPI GraphQL API Endpoint = https://api.graphcms.com/simple/v1/swapi 
- [The Star Wars API Just Got a GraphQL Makeover](https://graphcms.com/blog/the-star-wars-api-just-got-a-makeover/)  

### Instructions

#### 1. Add GraphQL client libraries

Add these supporting libraries for connecting to remote GraphQL schema. 
```
yarn add node-fetch apollo-link-context apollo-link-http
```

### 2. Add remote GraphQL source glue code

*gridsome.server.js* 

Add the following glue code.

```
const { setContext } = require('apollo-link-context');
const { HttpLink } = require('apollo-link-http');
const { introspectSchema, makeRemoteExecutableSchema } = require('graphql-tools');
const fetch = require('node-fetch');

module.exports = function (api) {
  // import remote GraphQL schema into Gridsome
  api.createSchema(async function(graphql) {
    const http = new HttpLink({
      uri: 'https://api.graphcms.com/simple/v1/swapi ', // SWAPI - The Star Wars API for GraphQL
      fetch
    });

    const link = setContext((request, previousContext) => ({
      headers: {
        // no authorization for SWAPI
        // Authorization: `Bearer JSmxi5ocIhjKGENvgK66TrlqoylAPy8ZeAckiyo-4txKkYhdKSfLlPXLnxoghZm3`
      }
    })).concat(http);

    const schema = await introspectSchema(link);
    const executableSchema = await makeRemoteExecutableSchema({
      schema: schema,
      link
    });

    return executableSchema;
  });

  api.loadSource(store => {
    // Use the Data store API here: https://gridsome.org/docs/data-store-api
  })
}


```

### 3. Fetch data from remote GraphQL source

Here's an example to fetch all Star Wars characters from the SWAPI API.

```
<template>
    <ClientOnly>
        <v-ons-page>
            ...
            <v-ons-list>
                <v-ons-list-item v-for="person in $static.allPersons" :key="person.id">{{person.name}}</v-ons-list-item>
            </v-ons-list>
        </v-ons-page>
    </ClientOnly>
</template>

<static-query>
    query {
        allPersons {
            id,
            name
        }
    }
</static-query>
```

You can find this under Navigator Demo > Page 2

- http://localhost:8080/navigator

## References

- https://github.com/gridsome/gridsome/issues/80
- https://gist.github.com/jakedohm/860f2dadbf00f0d96c8f8d773c476351