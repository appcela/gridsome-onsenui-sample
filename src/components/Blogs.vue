<template>
    <layout>
        <div v-for="page in $static.blogs" :key="page.id">
            {{ page.id }},
            {{ page.title }}
        </div>
    </layout>
</template>

<script>
    export default {
        name: "Blogs"
    }
</script>

<static-query>
    query Blogs {
        blogs: allPage {
            id,
            title,
            slug,
            path
        }
    }
</static-query>

<style scoped>

</style>