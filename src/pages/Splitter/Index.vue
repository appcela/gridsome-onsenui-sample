<template>
    <ClientOnly>
        <v-ons-splitter>
            <v-ons-splitter-side
                    swipeable width="150px" collapse="" side="left"
                    :open.sync="openSide"
            >
                <v-ons-page>
                    <v-ons-list>
                        <v-ons-list-item v-for="page in pages" :key="page"
                                         tappable modifier="chevron"
                                         @click="currentPage = page; openSide = false"
                        >
                            <div class="center">{{ page }}</div>
                        </v-ons-list-item>
                    </v-ons-list>
                </v-ons-page>
            </v-ons-splitter-side>

            <v-ons-splitter-content>
                <component :is="currentPage" :toggle-menu="() => openSide = !openSide"></component>
            </v-ons-splitter-content>
        </v-ons-splitter>
    </ClientOnly>
</template>

<script>
    import homePage from './Home';
    import newsPage from './News';
    import settingsPage from './Settings';

    export default {
        name: "Index",
        data() {
            return {
                currentPage: 'home',
                pages: ['home', 'news', 'settings'],
                openSide: false
            };
        },
        methods: {

        },
        components: {
            home: homePage,
            news: newsPage,
            settings: settingsPage,
        }
    }
</script>

<style scoped>

</style>