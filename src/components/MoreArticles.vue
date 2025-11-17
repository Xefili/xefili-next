<script setup>
const props = defineProps({
    articleID: String
})

import { inject } from 'vue';
import { useRouter } from 'vue-router';
const articles = inject("blog-data");
const router = useRouter();
let heading = "Not Available!"

if(!(articles.length <= props.articleID)) {
    heading = articles[props.articleID].title
}

function linkTo() {
    router.push(`/read/${props.articleID}`)
}
</script>

<template>
    <div @click="linkTo()" class="flex flex-col border border-light-seperator dark:border-dark-seperator rounded-lg p-2">
        <h4 class="font-bold text-xl">{{ heading }}</h4>
        <div class="block w-full border-t border-light-seperator dark:border-dark-seperator"></div>
        <p v-html="articles[articleID]?.content ?? 'Not available!'"></p>
    </div>
</template>