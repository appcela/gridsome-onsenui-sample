<template>
    <ClientOnly>
        <v-ons-page>
            <v-ons-toolbar>
                <div class="center">{{ title }}</div>
            </v-ons-toolbar>

            <v-ons-tabbar swipeable position="auto"
                          :tabs="tabs"
                          :visible="true"
                          :index.sync="activeIndex"
            >
            </v-ons-tabbar>
        </v-ons-page>
    </ClientOnly>
</template>

<script>
    import Home from './Home';
    import News from './News';
    import Settings from './Settings';

    export default {
        name: "Index",
        components: {Home, News, Settings},
        data() {
            return {
                activeIndex: 0,
                tabs: [
                    {
                        icon: this.md() ? null : 'ion-home',
                        label: 'Home',
                        page: Home,
                        props: {
                            myProp: 'This is a page prop!'
                        },
                        key: "homePage"
                    },
                    {
                        icon: this.md() ? null : 'ion-ios-bell',
                        label: 'News',
                        page: News,
                        badge: 7,
                        key: "newsPage"
                    },
                    {
                        icon: this.md() ? null : 'ion-ios-settings',
                        label: 'Settings',
                        page: Settings,
                        key: "settingsPage"
                    }
                ]
            }
        },
        methods: {
          md() {
              if (typeof window !== 'undefined') {
                  return this.$ons.platform.isAndroid();
              }
              return true;
          }
        },
        computed: {
            title() {
                return this.tabs[this.activeIndex].label;
            }
        }
    }
</script>

<style scoped>

</style>