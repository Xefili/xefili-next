<script setup>
const props = defineProps({
    articleID: String
})

import { inject } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const articles = inject("blog-data");

let heading = articles[props.articleID].title;

function linkTo() {
    let id = articles.length;
    router.push(`/blog/read/${id}`)
}
</script>

<template>
    <div @click="linkTo()">
        <h3 class="text-2xl font-bold">{{ heading }}</h3>
        <div class="block border-t border-light-seperator dark:border-dark-seperator"></div>
        <p v-html="articles[props.articleID].content"></p>
    </div>
</template>