<template>
    <ClientOnly>
        <v-ons-page>
            <v-ons-toolbar>
                <div class="center">Page 1</div>
            </v-ons-toolbar>
            <p style="text-align: center">
                This is the first page
                <v-ons-button @click="push">Push Page 2</v-ons-button>
            </p>
        </v-ons-page>
    </ClientOnly>
</template>

<script>
    import Page2 from './Page2';

    export default {
        name: "Page1",
        metaInfo: {
            title: 'Page 1'
        },
        components: {Page2},
        methods: {
            push() {
                this.$emit('push-page', Page2);
            }
        }
    }
</script>

<style scoped>

</style>