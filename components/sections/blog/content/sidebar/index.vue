<script setup>
let developersProducts = [
    {
        img: '/img/img-7.png',
        name: 'کلش رویال',
        subtitle: 'Clash Royale',
        rate: 5.1,
        to: '/'
    },
    {
        img: '/img/img-7.png',
        name: 'کلش رویال',
        subtitle: 'Clash Royale',
        rate: 5.1,
        to: '/'
    },
    {
        img: '/img/img-7.png',
        name: 'کلش رویال',
        subtitle: 'Clash Royale',
        rate: 5.1,
        to: '/'
    },
    {
        img: '/img/img-7.png',
        name: 'کلش رویال',
        subtitle: 'Clash Royale',
        rate: 5.1,
        to: '/'
    }
]

let apps = [
    {
        img: '/img/img-7.png',
        name: 'کلش رویال',
        subtitle: 'Clash Royale',
        rate: 5.1,
        to: '/'
    },
    {
        img: '/img/img-7.png',
        name: 'کلش رویال',
        subtitle: 'Clash Royale',
        rate: 5.1,
        to: '/'
    },
    {
        img: '/img/img-7.png',
        name: 'کلش رویال',
        subtitle: 'Clash Royale',
        rate: 5.1,
        to: '/'
    },
    {
        img: '/img/img-7.png',
        name: 'کلش رویال',
        subtitle: 'Clash Royale',
        rate: 5.1,
        to: '/'
    }
]

let category = [
    {
        title: 'همه مطالب',
        to: '/'
    },
    {
        title: 'اخبار',
        to: '/'
    },
    {
        title: 'معرفی برنامه',
        to: '/'
    },
    {
        title: 'معرفی بازی',
        to: '/'
    },
    {
        title: 'سینما',
        to: '/'
    },
    {
        title: 'آموزش بازی',
        to: '/'
    },
    {
        title: 'ترفندها',
        to: '/'
    }
]

let sidebarArticles = [
    {
        title: 'تست شخصیت‌شناسی DISC چیست و چرا باید این تست را انجام بدهیم؟',
        img: '/img/img-15.png',
        to: '/blog'
    },
    {
        title: 'تست شخصیت‌شناسی DISC چیست و چرا باید این تست را انجام بدهیم؟',
        img: '/img/img-15.png',
        to: '/blog'
    },
    {
        title: 'تست شخصیت‌شناسی DISC چیست و چرا باید این تست را انجام بدهیم؟',
        img: '/img/img-15.png',
        to: '/blog'
    }
]

let sidebarHasVideoArticles = [
    {
        title: 'تست شخصیت‌شناسی DISC چیست و چرا باید این تست را انجام بدهیم؟',
        img: '/img/img-16.png',
        to: '/blog',
        hasVideo: true
    },
    {
        title: 'تست شخصیت‌شناسی DISC چیست و چرا باید این تست را انجام بدهیم؟',
        img: '/img/img-16.png',
        to: '/blog',
        hasVideo: true
    },
    {
        title: 'تست شخصیت‌شناسی DISC چیست و چرا باید این تست را انجام بدهیم؟',
        img: '/img/img-16.png',
        to: '/blog',
        hasVideo: true
    }
]

</script>

<template>
    <div class="p-4 w-fit sticky top-0">
        <div class="w-[245px]">
            <SectionsBlogContentSidebarCategory class="mb-12 last:mb-0" :items="category" />
            <SectionsBlogContentSidebarArticles class="mb-12 last:mb-0" header="مطالب مرتبط" :articles="sidebarArticles" />
            <SectionsBlogContentSidebarArticles class="mb-12 last:mb-0" header="مطالب ویدیویی"
                :articles="sidebarHasVideoArticles" />
        </div>
    </div>
</template>