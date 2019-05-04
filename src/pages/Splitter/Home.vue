<template>
    <ClientOnly>
        <v-ons-page>
            <v-ons-toolbar>
                <CustomToolbar title="Home" :action="toggleMenu"></CustomToolbar>
                <div class="center">{{ title }}</div>
            </v-ons-toolbar>
            <p style="text-align: center">
                Welcome home.<br><br>{{ myProp }}
            </p>
        </v-ons-page>
    </ClientOnly>
</template>

<script>
    import CustomToolbar from "../../components/CustomToolbar";
    export default {
        name: "Home",
        components: {CustomToolbar},
        props: ['myProp', 'toggleMenu'],
        data() {
            return {
                title: 'Home'
            }
        }
    }
</script>

<style scoped>

</style>