<template>
    <ClientOnly>
        <v-ons-navigator swipeable
                         :page-stack="pageStack"
                         @push-page="pageStack.push($event)"
        ></v-ons-navigator>
    </ClientOnly>
</template>

<script>
    import Page1 from './Page1';

    export default {
        name: "Navigator",
        metaInfo: {
          title: 'Navigator'
        },
        data() {
            return {
                pageStack: [Page1]
            }
        }
    }
</script>

<style scoped>

</style>