<template>
  <Layout>
    
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />
    
    <h1>Gridsome + Onsen UI</h1>
   
    <p>
      Sample project to demonstrate how to use Onsen UI with Gridsome.

    </p>

    <ul>
      <li><g-link to="/navigator">Navigator Demo</g-link></li>
      <li><g-link to="/splitter">Splitter Demo</g-link></li>
      <li><g-link to="/tabbar">Tabbar Demo</g-link></li>
    </ul>

    <p class="home-links">
      <a href="https://gridsome.org/docs" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://onsen.io/v2/guide/vue/#installation" target="_blank" rel="noopener">Onsen UI for Vue.js Docs</a>
    </p>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
