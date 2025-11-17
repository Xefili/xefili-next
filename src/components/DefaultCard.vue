<script setup>
const props = defineProps({
    title: String,
    fabIcon: String
});
</script>

<template>
    <div class="bg-light-surface dark:bg-dark-surface dark:text-white w-68 h-48 rounded-xl p-2 relative">
        <h2 id="title" class="font-bold">{{ title }}</h2>
        <div class="w-full border-t border-light-seperator dark:border-dark-seperator"></div>
        <slot></slot>
        
        <div>
            <span id="fab" class="material-symbols-outlined bg-light-el-surface dark:bg-dark-el-surface p-2 m-2 rounded-lg absolute bottom-0 right-0">{{ fabIcon }}</span>
        </div>
    </div>
</template>