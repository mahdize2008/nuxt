<script setup>
let category = [
    {
        title: 'استراتژی',
        to: '/'
    },
    {
        title: 'تفننی',
        to: '/'
    },
    {
        title: 'کلماتی',
        to: '/'
    },
    {
        title: 'ورزشی',
        to: '/'
    },
    {
        title: 'دیتادار',
        to: '/'
    },
    {
        title: 'اکشن',
        to: '/'
    },
    {
        title: 'رانندگی',
        to: '/'
    },
    {
        title: 'کودک',
        to: '/'
    },
    {
        title: 'امتیازی',
        to: '/'
    },
    {
        title: 'شبیه‌سازی',
        to: '/'
    },
    {
        title: 'معمایی',
        to: '/'
    },
]
</script>

<template>
    <div class="p-4 w-fit sticky top-0">
        <div class="w-[245px]">
            <GenericBlogCategory class="mb-12 last:mb-0" :items="category" />
            <SectionsBlogSingleSidebarDownloadApplication class="mb-12 last:mb-0" />
            <SectionsBlogSingleSidebarComment class="mb-12 last:mb-0" />
        </div>
    </div>
</template>