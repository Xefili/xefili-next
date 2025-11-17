<script setup>
import StylizedHeading from '@/components/StylizedHeading.vue';
import HeaderBar from '../components/HeaderBar.vue';
import BlogDrawer from '@/components/BlogDrawer.vue';
</script>

<template>
    <div class="bg-light-background dark:bg-dark-background">
        <HeaderBar />
        <div class="flex flex-col items-center align-middle m-2">
            <div class="flex flex-col align-left my-4">
                <StylizedHeading heading="Blog" />
                <h2 class="font-bold text-dark-mod-surface text-2xl">The Blog and everything else:</h2>
            </div>

            <Suspense>
                <BlogDrawer>
                    <slot></slot>
                </BlogDrawer>
            </Suspense>

            <div class="bg-light-surface dark:bg-dark-surface p-2 rounded-lg dark:text-white w-fit mt-12">
                <span>Looking for more? Look <RouterLink to="/blog/more" class="underline underline-offset-4">here</RouterLink>!</span>
            </div>
        </div>
    </div>
</template>