<script setup>
import StylizedHeading from '@/components/StylizedHeading.vue';
import HeaderBar from '../components/HeaderBar.vue';
</script>

<template>
    <div class="bg-light-background dark:bg-dark-background">
        <HeaderBar />
        <div class="flex w-full flex-col items-center">
            <div class="flex flex-col align-left my-4">
                <StylizedHeading heading="Tools" />
                <h2 class="font-bold text-dark-mod-surface text-2xl">All the tools i use:</h2>
            </div>
        </div>

        <div class="flex flex-col items-center w-full">
        <!-- Masonry Layout: Migrated from prev. xefili.dev -->
        <div class="lg:grid lg:grid-cols-5 lg:grid-rows-2 gap-4 lg:w-4/5 flex flex-col">
            <div class="flex flex-col sm:grid grid-cols-2 col-span-2 bg-light-200 dark:bg-dark-200 p-2 rounded-2xl">
                <img class="w-4/5 justify-self-center self-center" src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" alt="">
                <div class="dark:text-white">
                    <h2>Visual Studio Code</h2>
                    <p>I use Visual Studio Code to write the main code for the website.</p>
                    <p class="mt-1">For TailwindCSS support and IntelliSense, I also use their extension which really helps finding the correct utility class names.</p>
                </div>
            </div>
            <div class="flex flex-col sm:grid grid-cols-2 col-span-2 bg-light-200 dark:bg-dark-200 p-2 rounded-2xl">
                <img class="w-4/5 justify-self-center self-center" src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg" alt="">
                <div class="dark:text-white">
                    <h2>TailwindCSS</h2>
                    <p>All styling is done through TailwindCSS. This simplifies development and reduces massive CSS files. Okay, the CSS file is massive, but it could very well be even more massive.</p>
                    <p class="mt-1">As for the little animations on the main page, they are plain CSS animations.</p>
                </div>
            </div>
            <div class="flex flex-col sm:grid grid-cols-2 col-start-2 col-span-2 bg-light-200 dark:bg-dark-200 p-2 rounded-2xl">
                <div>
                    <img class="dark:hidden block w-4/5 justify-self-center self-center" src="../assets/invertocat.svg" alt="">
                    <img class="dark:block hidden w-4/5 justify-self-center self-center" src="../assets/invertocat-white.svg" alt="">
                </div>
                <div class="dark:text-white">
                    <h2>Github</h2>
                    <p>To keep track of changes, I use Github. It integrates great with Visual Studio Code and makes it easy to keep the site current, since the Cloudflare Workers & Pages system keeps rebuilding my Tailwind files every time there is a push to the repo.</p>
                </div>
            </div>
            <div class="flex flex-col sm:grid grid-cols-2 col-span-2 bg-light-200 dark:bg-dark-200 p-2 rounded-2xl">
                <img class="w-4/5 justify-self-center self-center" src="../assets/cflogo.webp" alt="">
                <div class="dark:text-white">
                    <h2>Cloudflare</h2>
                    <p>Domain Management and Registration is done with Cloudflare. They offer all-in-one DNS management and tunneling services with their Zero Trust platform. Cloudflare Tunnels connect the API to the world without me having to expose my non-static IP address to the internet.</p>
                    <p class="mt-1">The website is also hosted by CLoudflare with CF Workers & Pages. It continously pulls new files from the Github repo and rebuilds the CSS file. All without any human intervention!</p>
                </div>
            </div>
        </div>

        </div>
    </div>
</template>