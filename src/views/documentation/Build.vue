<script setup>
import CodeBlock from '@/components/CodeBlock.vue';
import DocHeaderBar from '@/components/DocHeaderBar.vue';
import LanguageSwitcher from '@/components/LanguageSwitcher.vue';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

const target = ref(null);

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
            <span class="font-bold text-xl">{{ t('building.title') }}</span>
            <ul class="ml-4">
                <li @click="scrollIntoView(target)">{{ t('building.subtitle_1') }}</li>
            </ul>
        </div>
        <div class="dark:text-white flex flex-col lg:w-2/3 p-2 bg-light-surface dark:bg-dark-surface rounded-lg">
            <h1 class="font-bold text-xl underline underline-offset-4">{{ t('building.title') }}</h1>
            <h2 :ref="el => target = el" class="text-lg font-bold">{{ t('building.subtitle_1') }}</h2>
            <p>{{ t('building.content') }}</p>

            <Suspense>
                <CodeBlock file="Terminal" lang="bash" code="npm run build" class="border border-light-seperator dark:border-dark-seperator rounded-md"></CodeBlock>
            </Suspense>
        </div>
    </div>
</template>