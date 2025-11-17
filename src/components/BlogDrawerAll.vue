<script setup>
import { provide } from 'vue';
import MoreArticles from './MoreArticles.vue';

let raw = await fetch("https://api.xefili.dev/articles");
var articles = await raw.json().then((data) => {
    return data.reverse();
})

let i = 0
articles.forEach(element => {
    element.idt = i
    i++
});

provide("blog-data", articles);
</script>

<template>
    <div v-for="(item, index) in articles" class="dark:text-white w-full">
        <MoreArticles :article-i-d="item.idt" class="w-full bg-light-el-surface dark:bg-dark-el-surface"/>
    </div>
</template>