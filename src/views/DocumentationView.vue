<script setup>
import DefaultCard from '@/components/DefaultCard.vue';
import HeaderBar from '@/components/HeaderBar.vue';
import StylizedHeading from '@/components/StylizedHeading.vue';
</script>

<template>
    <div class="bg-light-background dark:bg-dark-background">
        <HeaderBar />

        <div class="flex w-full flex-col items-center">
            <StylizedHeading class="my-4" heading="Documentation" />

            <div class="flex flex-row flex-wrap lg:w-2/3 justify-evenly gap-4">
                <RouterLink to="/documentation/build">
                    <DefaultCard title="Build" fab-icon="build">Learn how to navigate and build xefili.dev from source.</DefaultCard>
                </RouterLink>
                <RouterLink to="/documentation/structure">
                    <DefaultCard title="Structure" fab-icon="folder_code">See how to project is structured and navigate more easily around the source code.</DefaultCard>
                </RouterLink>
                <RouterLink to="/documentation/contribute">
                    <DefaultCard title="Contribute" fab-icon="crowdsource">Contribute to the project on Github, fix bugs and get your name displayed in the HELPERS.md file.</DefaultCard>
                </RouterLink>
            </div>
        </div>
    </div>
</template>