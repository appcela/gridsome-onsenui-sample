// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
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
