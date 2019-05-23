<template>
    <ClientOnly>
        <v-ons-page>
            <v-ons-toolbar>
                <div class="left">
                    <v-ons-back-button>Page 1</v-ons-back-button>
                </div>
                <div class="center">Page 2</div>
            </v-ons-toolbar>
            <p style="text-align: center">This is the second page</p>
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

<script>
    export default {
        name: "Page2",
        metaInfo: {
            title: 'Page 2'
        },
    }
</script>

<style scoped>

</style>