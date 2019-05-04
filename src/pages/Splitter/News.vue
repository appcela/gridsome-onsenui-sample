<template>
    <ClientOnly>
        <v-ons-page>
            <CustomToolbar title="News" :action="toggleMenu"></CustomToolbar>
            <p style="text-align: center">
                Some news here.
            </p>
        </v-ons-page>
    </ClientOnly>
</template>

<script>
    import CustomToolbar from "../../components/CustomToolbar";
    export default {
        name: "News",
        components: {CustomToolbar},
        props: ['toggleMenu'],
    }
</script>

<style scoped>

</style>