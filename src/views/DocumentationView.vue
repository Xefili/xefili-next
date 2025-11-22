<script setup>
import DefaultCard from '@/components/DefaultCard.vue';
import HeaderBar from '@/components/HeaderBar.vue';
import StylizedHeading from '@/components/StylizedHeading.vue';
</script>

<template>
    <div class="bg-light-background dark:bg-dark-background">
        <HeaderBar />

        <StylizedHeading heading="Documentation" />

        <div>
            <DefaultCard title="Structure & Build" fab-icon="build">Learn how to navigate and build xefili.dev from source.</DefaultCard>
            <DefaultCard title="Contribute" fab-icon="crowdsource">Contribute to the project on Github, fix bugs and get your name displayed in the HELPERS.md file.</DefaultCard>
        </div>
        <RouterLink to="/documentation/build" class="text-white">click mee</RouterLink>
    </div>
</template>