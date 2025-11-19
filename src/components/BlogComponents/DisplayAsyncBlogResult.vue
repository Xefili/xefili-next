<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
let id = computed(() => route.params.id)

var article;
var timeAvailable = false;

try {
    let raw = await fetch(`https://api.xefili.dev/articles/${id.value}`);
    article = await raw.json()
    
    if(article.time != null) {
        timeAvailable = true;
    }
} catch(error) {
    console.error(error);
}
</script>

<template>
    <div class="dark:text-white flex flex-col lg:w-2/5 p-2 bg-light-surface dark:bg-dark-surface rounded-xl">
        <h1 class="text-2xl flex flex-row justify-between">{{ article.title }} <span v-if="timeAvailable" class="text-base self-end border-l border-light-seperator dark:border-dark-seperator pl-2">{{ article.time.day }} {{ article.time.month }} {{ article.time.year }}</span></h1>

        <div class="block border-t border-light-seperator dark:border-dark-seperator w-full my-2"></div>

        <p v-html="article.content"></p>
    </div>
</template>