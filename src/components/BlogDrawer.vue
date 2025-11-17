<script setup>
import FeaturedArticle from './FeaturedArticle.vue';
import MoreArticles from './MoreArticles.vue';
import { provide } from 'vue';
import BlogDrawerMainSkeleton from './Skeletons/BlogDrawerMainSkeleton.vue';

var unloaded = false

try {
    let raw = await fetch("https://api.xefili.dev/articles");
    var articles = await raw.json().then((data) => {
        return data.reverse();
    })

    provide("blog-data", articles);
} catch(error) {

}
</script>

<template>
    <div v-if="unloaded" class="bg-light-surface dark:bg-dark-surface dark:text-white flex flex-col lg:grid lg:grid-cols-[1fr_1fr] lg:w-2/3 p-2 rounded-xl gap-2">
        <div class="bg-light-el-surface dark:bg-dark-el-surface p-2 border-2 border-light-seperator dark:border-dark-seperator rounded-lg">
            <FeaturedArticle article-i-d="0" />
        </div>
        <div class="flex flex-col gap-2">
            <MoreArticles article-i-d="1" />
            <MoreArticles article-i-d="2" />
            <MoreArticles article-i-d="3" />
            <MoreArticles article-i-d="4" />
            <MoreArticles article-i-d="5" />
        </div>
    </div>
    <div v-else class="bg-light-surface dark:bg-dark-surface dark:text-white flex flex-col lg:grid lg:grid-cols-[1fr_1fr] lg:w-2/3 p-2 rounded-xl gap-2">
        <BlogDrawerMainSkeleton />
    </div>
</template>