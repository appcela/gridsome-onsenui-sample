<template>
  <Layout>
    <ClientOnly>
      <v-ons-page>
        <v-ons-toolbar>
          <div class="center">About</div>
        </v-ons-toolbar>

        <p style="text-align: center">
          <v-ons-button @click="$ons.notification.alert('Hello World!')">
            Click me!
          </v-ons-button>
        </p>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>
      </v-ons-page>
    </ClientOnly>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About us'
  }
}
</script>
