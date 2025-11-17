<script setup>
import HeaderBar from '@/components/HeaderBar.vue';
import StylizedHeading from '@/components/StylizedHeading.vue';
</script>

<template>
    <div class="bg-light-background dark:bg-dark-background">
        <HeaderBar />
        <div class="flex flex-col items-center mt-8">
            <StylizedHeading heading="This page doesn't work yet!" />
            <p class="dark:text-white lg:w-2/3 bg-red-500/50 dark:bg-red-500/50 p-2 rounded-xl mt-4">As of now, this page does not work yet. If you need to access older articles, visit https://api.xefili.dev/ and fetch them yourself with a tool like Hoppscotch. I will try to fix this page in the near future!</p>
        </div>
    </div>
</template>