<script setup>
import HeaderBar from '@/components/HeaderBar.vue';
import BlogDrawerAll from '@/components/BlogComponents/BlogDrawerAll.vue';
import StylizedHeading from '@/components/StylizedHeading.vue';
</script>

<template>
    <div class="bg-light-background dark:bg-dark-background">
        <HeaderBar />
        <div class="flex flex-col items-center mt-8">
            <StylizedHeading heading="Article Archive" />
            <p class="dark:text-white">Articles are sorted from newest to oldest.</p>

            <div class="flex flex-col items-center lg:w-2/5 lg:min-w-2/5 gap-4 mt-4 bg-light-surface dark:bg-dark-surface p-4 m-2 rounded-xl">
                <Suspense>
                    <BlogDrawerAll />
                </Suspense>
            </div>
        </div>
    </div>
</template>