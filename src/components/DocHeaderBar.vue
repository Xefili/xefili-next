<script setup>
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();
</script>

<template>
    <div class="block h-12 w-full shadow-md dark:bg-dark-surface bg-light-surface dark:text-white">
        <div class="h-12 inline-grid grid-cols-[1fr 1fr] gap-2 justify-center items-center">
            <div><img class="col-span-1 w-8 h-8 ml-2" src="../assets/Bucket Helper.svg" alt="Logo"></div>
            <div class="col-start-2">
                <span class="font-circleBold font-black">Xefili.dev</span>
            </div>
        </div>
        <div class="flex float-right h-12 items-center justify-evenly gap-8 mr-2">
            <RouterLink to="/documentation" class="flex flex-row justify-center gap-2">
                <span class="hidden lg:block">{{ t('navigation.home') }}</span>
                <span class="material-symbols-outlined">home</span>
            </RouterLink>

            <RouterLink to="/documentation/report" class="flex flex-row justify-center gap-2">
                <span class="hidden lg:block">{{ t('navigation.report') }}</span>
                <span class="material-symbols-outlined">report</span>
            </RouterLink>
        </div>
    </div>
</template>