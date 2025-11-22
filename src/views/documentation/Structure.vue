<script setup>
import DocHeaderBar from '@/components/DocHeaderBar.vue';
import LanguageSwitcher from '@/components/LanguageSwitcher.vue';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

const target = ref(null);
const target1 = ref(null);
const target2 = ref(null);
const target3 = ref(null);

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
            <span class="font-bold text-xl">{{ t('structure.title') }}</span>
            <ul class="ml-4">
                <li @click="scrollIntoView(target)">{{ t('structure.subtitle_1') }}</li>
                <li @click="scrollIntoView(target1)">{{ t('structure.subtitle_2') }}</li>
                <li @click="scrollIntoView(target2)">{{ t('structure.subtitle_3') }}</li>
                <li @click="scrollIntoView(target3)">{{ t('structure.subtitle_4') }}</li>
                <pre class="mt-4">
app/
├─ src/
│  ├─ assets/
│  │  ├─ image.jpg
│  │  ├─ vector.svg
│  │  ├─ font.woff2
│  ├─ components/
│  │  ├─ Header.vue
│  ├─ locales/
│  │  ├─ en.js
│  ├─ router/
│  ├─ utils/
│  │  ├─ shiki.js
│  ├─ views/
│  │  ├─ DocumentationView.vue
│  │  ├─ HomeView.vue
│  ├─ App.vue
│  ├─ main.js
├─ .dotfiles
├─ .conf-files

                </pre>
            </ul>
        </div>
        <div class="dark:text-white flex flex-col lg:w-2/3 p-2 bg-light-surface dark:bg-dark-surface rounded-lg">
            <h1 class="font-bold text-xl underline underline-offset-4">{{ t('structure.title') }}</h1>
            <h2 :ref="el => target = el" class="text-lg font-bold mt-4">{{ t('structure.subtitle_1') }}</h2>
            <p>{{ t('structure.content_1') }}</p>
            <h2 :ref="el => target1 = el" class="text-lg font-bold mt-4">{{ t('structure.subtitle_2') }}</h2>
            <p>{{ t('structure.content_2') }}</p>
            <h2 :ref="el => target2 = el" class="text-lg font-bold mt-4">{{ t('structure.subtitle_3') }}</h2>
            <p>{{ t('structure.content_3') }}</p>
            <h2 :ref="el => target3 = el" class="text-lg font-bold mt-4">{{ t('structure.subtitle_4') }}</h2>
            <p>{{ t('structure.content_4') }}</p>
            <p class="mt-2">{{ t('structure.content_4_1') }}</p>
            <p class="mt-2">{{ t('structure.content_4_2') }}</p>
            <p class="mt-2">{{ t('structure.content_4_3') }}</p>
        </div>
    </div>
</template>

<style>
@reference "@/styles/style.css";

li {
    @apply hover:bg-light-el-surface hover:dark:bg-dark-el-surface p-2 rounded-md transition-all duration-150 text-lg
}
</style>