<script setup>

let route = [
    {
        title: 'صفحه اصلی',
        to: '/'
    },
    {
        title: 'بلاگ',
    }
]

let articlesItems = [
    {
        to: "/design-system",
        img: "/img/img-12.png",
        title: "بازی کال‌آودیوتی موبایل وارزون شروع ضعیفی را داشته است  بازی کال‌آودیوتی موبایل وارزون شروع ضعیفی را داشته است ",
        date: "۲۰ فروردین ۱۴۰۳"
    },
    {
        to: "/design-system",
        img: "/img/img-12.png",
        title: "بازی کال‌آودیوتی موبایل وارزون شروع ضعیفی را داشته است",
        date: "۲۰ فروردین ۱۴۰۳"
    },
    {
        to: "/design-system",
        img: "/img/img-12.png",
        title: "بازی کال‌آودیوتی موبایل وارزون شروع ضعیفی را داشته است",
        date: "۲۰ فروردین ۱۴۰۳"
    },
    {
        to: "/design-system",
        img: "/img/img-12.png",
        title: "بازی کال‌آودیوتی موبایل وارزون شروع ضعیفی را داشته است",
        date: "۲۰ فروردین ۱۴۰۳"
    },
    {
        to: "/design-system",
        img: "/img/img-12.png",
        title: "بازی کال‌آودیوتی موبایل وارزون شروع ضعیفی را داشته است",
        date: "۲۰ فروردین ۱۴۰۳"
    }
]
</script>

<template>
    <!-- START-ROUTE -->
    <SectionsBreadcrumb class="container !my-2.5 !mb-10" :items="route" />
    <!-- END-ROUTE -->

    <SectionsBlogSingle :articleSliderItems="articleSliderItems" :articlesItems="articlesItems"/>




    <!-- START-ARTICLES -->
    <SectionsArticleVertical class="mb-between-section" :items="articlesItems" :headerSection="{ title: 'برنامه‌ها', link: '/' }" />
    <!-- END-ARTICLES -->
</template>