<script setup>
const props = defineProps({
    heading: String
})
</script>

<template>
    <h1 class="text-transparent bg-linear-to-r from-gradient-start via-gradient-middle to-gradient-end font-bold bg-clip-text text-3xl">{{ heading }}</h1>
</template>