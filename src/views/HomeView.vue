<script setup>
import DefaultCard from '@/components/DefaultCard.vue';
import HeaderBar from '../components/HeaderBar.vue';
import StylizedHeading from '@/components/StylizedHeading.vue';
</script>

<template>
    <div class="bg-light-background dark:bg-dark-background">
        <HeaderBar />
        <div class="flex w-full flex-col items-center">
            <div class="flex flex-col align-left my-4">
                <StylizedHeading heading="Welcome to Xefili.dev ❤️" />
                <h2 class="font-bold text-dark-mod-surface text-2xl">My personal portfolio:</h2>
            </div>
            <div class="flex flex-row flex-wrap lg:w-2/3 justify-evenly gap-4">
                <DefaultCard title="The Blog" fab-icon="chat">A small blog I irregularily write stuff in. Check it out for updates! Should it be broken, wait a few days until I turn the server back on.</DefaultCard>
                <DefaultCard title="The API" fab-icon="api">A handy API to handle search for the blog and to host stats and articles. Check it out, usage is free under fair use</DefaultCard>
                <DefaultCard title="The Documentation" fab-icon="description">Full developer documentation, available in 3 languages. Includes API documentation.</DefaultCard>
                <DefaultCard title="The Tools" fab-icon="construction">A small collections of helpful tools and inspiration, which helped me create this website.</DefaultCard>
            </div>
        </div>
    </div>
</template>