<template>
    <div
        id="myBlog"
        class="main-container flex flex-col justify-center items-center">
        <div class="container-title gs-reveal">
            <h1>Read my blog</h1>
        </div>
        <div class="gs-reveal w-full">
            <Article
                v-for="(blog, index) in blogs"
                v-bind="blog"
                :key="index"></Article>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Article from "./CArticle.vue";
import { ArticleProps } from "./interface";
const blogs = ref<ArticleProps[]>([
    {
        link: "https://www.instagram.com/p/Cuj2-98PCCI/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
        date: "July 11,2023",
        title: "Days of resignation",
        duration: "2 min read",
    },
    {
        link: "https://furtive-impala-e96.notion.site/9d0854dd30d04113806427702be24d12?v=700d667d5ede462b87f504039f62ec97",
        date: "Nov 2023",
        title: "My JavaScript Notes",
        duration: "5 min read",
    },
    {
        link: "https://q135135cx.pixnet.net/blog/post/70329681",
        date: "Jan 05,2023",
        title: "Windows Service 安裝",
        duration: "5 min read",
    },
]);
</script>

<style lang="scss" scoped></style>
