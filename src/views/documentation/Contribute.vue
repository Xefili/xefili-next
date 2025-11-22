<script setup>
import DocHeaderBar from '@/components/DocHeaderBar.vue';
import LanguageSwitcher from '@/components/LanguageSwitcher.vue';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

const target = ref(null);
const target1 = ref(null);

function scrollIntoView(element) {
    if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}
</script>

<template>
    <DocHeaderBar />
    <div class="flex lg:flex-row flex-col gap-4 m-2 mt-8">
        <div class="flex flex-col lg:w-1/3 p-2 dark:text-white bg-light-surface dark:bg-dark-surface rounded-lg">
            <LanguageSwitcher />
            <span class="font-bold text-xl">{{ t('contribute.title') }}</span>
            <ul class="ml-4">
                <li @click="scrollIntoView(target)">{{ t('contribute.subtitle_1') }}</li>
                <li @click="scrollIntoView(target1)">{{ t('contribute.subtitle_2') }}</li>
            </ul>
        </div>
        <div class="dark:text-white flex flex-col lg:w-2/3 p-2 bg-light-surface dark:bg-dark-surface rounded-lg">
            <h1 class="font-bold text-xl underline underline-offset-4">{{ t('contribute.title') }}</h1>
            <h2 :ref="el => target = el" class="text-lg font-bold">{{ t('contribute.subtitle_1') }}</h2>
            <p>{{ t('contribute.content') }}</p>
            <h2 :ref="el => target1 = el" class="text-lg font-bold">{{ t('contribute.subtitle_2') }}</h2>
            <p>{{ t('contribute.content_2') }}</p>
        </div>
    </div>
</template>

<style>
@reference "@/styles/style.css";

li {
    @apply hover:bg-light-el-surface hover:dark:bg-dark-el-surface p-2 rounded-md transition-all duration-150 text-lg
}
</style>