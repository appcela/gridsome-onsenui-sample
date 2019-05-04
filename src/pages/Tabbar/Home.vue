<template>
    <ClientOnly>
        <v-ons-page>
            <p style="text-align: center">
                Welcome home.<br><br>{{ myProp }}
            </p>
        </v-ons-page>
    </ClientOnly>
</template>

<script>
    export default {
        name: "Home",
        props: ['myProp']
    }
</script>

<style scoped>

</style>