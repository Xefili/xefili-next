<script setup>
import HeaderBar from '@/components/HeaderBar.vue';
import DisplayAsyncBlogResult from '@/components/BlogComponents/DisplayAsyncBlogResult.vue';
</script>

<template>
    <HeaderBar />

    <Suspense>
        <div class="flex flex-col items-center m-2 mt-8">
            <DisplayAsyncBlogResult />
        </div>
    </Suspense>
</template>