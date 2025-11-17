<script setup>
import { highlightCode } from '@/utils/shikiInit';

const props = defineProps({
    lang: String,
    code: String,

    file: String
})

let raw = await highlightCode(props.code, props.lang)
</script>

<template>
    <div>
        <div class="bg-dark-surface w-full text-white p-1 rounded-t-md border-b border-dark-seperator">
            <em>{{ file }}</em>
        </div>
        <div v-html="raw" class="*:p-1 *:rounded-b-md selection:bg-gradient-end/50"></div>
    </div>
</template>