<script setup>
const props = defineProps({
    articleID: String
})

import { inject } from 'vue';
const articles = inject("blog-data");

let heading = articles[props.articleID].title;

</script>

<template>
    <div>
        <h3 class="text-2xl font-bold">{{ heading }}</h3>
        <div class="block border-t border-light-seperator dark:border-dark-seperator"></div>
        <p v-html="articles[props.articleID].content"></p>
    </div>
</template>