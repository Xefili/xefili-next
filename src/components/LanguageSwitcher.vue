<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();
var dropdownOpen = ref(false)

function openDropDown() {
    dropdownOpen.value = true;
}

function changeLang(lang) {
    locale.value = lang;
    dropdownOpen.value = false;
}
</script>

<template>
    <div class="rounded-lg bg-light-el-surface dark:bg-dark-el-surface w-fit p-2 mb-2">
        <button @click="openDropDown()">Current Language: {{ locale }}</button>
        <div v-if="dropdownOpen" class="flex flex-row gap-2 mt-2">
            <button @click="changeLang('en')" class="bg-light-mod-surface dark:bg-dark-mod-surface rounded-md p-1">English</button>
            <button @click="changeLang('de')" class="bg-light-mod-surface dark:bg-dark-mod-surface rounded-md p-1">Deutsch</button>
            <button @click="changeLang('fr')" class="bg-light-mod-surface dark:bg-dark-mod-surface rounded-md p-1">Francais</button>
        </div>
        <div v-else>

        </div>
    </div>
</template>