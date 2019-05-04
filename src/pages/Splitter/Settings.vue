<template>
    <ClientOnly>
        <v-ons-page>
            <CustomToolbar title="Settings" :action="toggleMenu"></CustomToolbar>
            <p style="text-align: center">
                Change the settings.
            </p>
        </v-ons-page>
    </ClientOnly>
</template>

<script>
    import CustomToolbar from "../../components/CustomToolbar";
    export default {
        name: "Settings",
        metaInfo: {
          title: 'Settings'
        },
        components: {CustomToolbar},
        props: ['toggleMenu'],
    }
</script>

<style scoped>

</style>