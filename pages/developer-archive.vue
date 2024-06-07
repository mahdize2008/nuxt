<script setup>

let route = [
    {
        title: 'صفحه اصلی',
        to: '/'
    },
    {
        title: 'توسعه‌دهنده‌ها',
    }
]

let developersVerticalSlider = [
    {
        to: '/',
        name: 'کلش رویال',
        bgImg: '/img/img-13.png',
        description: 'Clash Royale',
        imgs: ['/img/img-14.png', '/img/img-14.png', '/img/img-14.png']
    },
    {
        to: '/',
        name: 'کلش رویال',
        bgImg: '/img/img-13.png',
        description: 'Clash Royale',
        imgs: ['/img/img-14.png', '/img/img-14.png', '/img/img-14.png']
    },
    {
        to: '/',
        name: 'کلش رویال',
        bgImg: '/img/img-13.png',
        description: 'Clash Royale',
        imgs: ['/img/img-14.png', '/img/img-14.png', '/img/img-14.png']
    },
    {
        to: '/',
        name: 'کلش رویال',
        bgImg: '/img/img-13.png',
        description: 'Clash Royale',
        imgs: ['/img/img-14.png', '/img/img-14.png', '/img/img-14.png']
    }
]


let developersNormalSlider = [
    {
        to: "/design-system",
        img: "/img/brand.png",
        name: "کلش رویال",
        description: "Clash Royale",
        gradient: { from: '#FF1616', to: '#860000' }
    },
    {
        to: "/design-system",
        img: "/img/brand.png",
        name: "کلش رویال",
        description: "Clash Royale",
        gradient: { from: '#FF1616', to: '#860000' }
    },
    {
        to: "/design-system",
        img: "/img/brand.png",
        name: "کلش رویال",
        description: "Clash Royale",
        gradient: { from: '#FF1616', to: '#860000' }
    },
    {
        to: "/design-system",
        img: "/img/brand.png",
        name: "کلش رویال",
        description: "Clash Royale",
        gradient: { from: '#FF1616', to: '#860000' }
    },
    {
        to: "/design-system",
        img: "/img/brand.png",
        name: "کلش رویال",
        description: "Clash Royale",
        gradient: { from: '#FF1616', to: '#860000' }
    },
    {
        to: "/design-system",
        img: "/img/brand.png",
        name: "کلش رویال",
        description: "Clash Royale",
        gradient: { from: '#FF1616', to: '#860000' }
    },
    {
        to: "/design-system",
        img: "/img/brand.png",
        name: "کلش رویال",
        description: "Clash Royale",
        gradient: { from: '#FF1616', to: '#860000' }
    },
]

let developers = [
    {
        name: "کلش رویال",
        description: "Clash Royale",
        rate: 5.1,
        productsNumber: "+۱۰",
        to: "/"
    },
    {
        name: "کلش رویال",
        description: "Clash Royale",
        rate: 5.1,
        productsNumber: "+۱۰",
        to: "/"
    },
    {
        name: "کلش رویال",
        description: "Clash Royale",
        rate: 5.1,
        productsNumber: "+۱۰",
        to: "/"
    },
    {
        name: "کلش رویال",
        description: "Clash Royale",
        rate: 5.1,
        productsNumber: "+۱۰",
        to: "/"
    },
    {
        name: "کلش رویال",
        description: "Clash Royale",
        rate: 5.1,
        productsNumber: "+۱۰",
        to: "/"
    },
    {
        name: "کلش رویال",
        description: "Clash Royale",
        rate: 5.1,
        productsNumber: "+۱۰",
        to: "/"
    },
    {
        name: "کلش رویال",
        description: "Clash Royale",
        rate: 5.1,
        productsNumber: "+۱۰",
        to: "/"
    },
    {
        name: "کلش رویال",
        description: "Clash Royale",
        rate: 5.1,
        productsNumber: "+۱۰",
        to: "/"
    },
    {
        name: "کلش رویال",
        description: "Clash Royale",
        rate: 5.1,
        productsNumber: "+۱۰",
        to: "/"
    },
    {
        name: "کلش رویال",
        description: "Clash Royale",
        rate: 5.1,
        productsNumber: "+۱۰",
        to: "/"
    },
    {
        name: "کلش رویال",
        description: "Clash Royale",
        rate: 5.1,
        productsNumber: "+۱۰",
        to: "/"
    },
    {
        name: "کلش رویال",
        description: "Clash Royale",
        rate: 5.1,
        productsNumber: "+۱۰",
        to: "/"
    },
    {
        name: "کلش رویال",
        description: "Clash Royale",
        rate: 5.1,
        productsNumber: "+۱۰",
        to: "/"
    },
    {
        name: "کلش رویال",
        description: "Clash Royale",
        rate: 5.1,
        productsNumber: "+۱۰",
        to: "/"
    },
    {
        name: "کلش رویال",
        description: "Clash Royale",
        rate: 5.1,
        productsNumber: "+۱۰",
        to: "/"
    },
    {
        name: "کلش رویال",
        description: "Clash Royale",
        rate: 5.1,
        productsNumber: "+۱۰",
        to: "/"
    },
]


let accordionItems = [
    {
        title: 'بازی کال‌آودیوتی موبایل وارزون شروع ضعیفی را داشته است؟',
        text: 'به‌نظر می‌رسد عملکرد بازی به‌شدت ناامیدکننده بوده و ۶۷ درصد کمتر از برای اکتیویژن و تیم سازنده درآمدزایی داشته است',
    },
    {
        title: 'بازی کال‌آودیوتی موبایل وارزون شروع ضعیفی را داشته است؟',
        text: 'به‌نظر می‌رسد عملکرد بازی به‌شدت ناامیدکننده بوده و ۶۷ درصد کمتر از برای اکتیویژن و تیم سازنده درآمدزایی داشته است',
    },
    {
        title: 'بازی کال‌آودیوتی موبایل وارزون شروع ضعیفی را داشته است؟',
        text: 'به‌نظر می‌رسد عملکرد بازی به‌شدت ناامیدکننده بوده و ۶۷ درصد کمتر از برای اکتیویژن و تیم سازنده درآمدزایی داشته است',
    },
    {
        title: 'بازی کال‌آودیوتی موبایل وارزون شروع ضعیفی را داشته است؟',
        text: 'به‌نظر می‌رسد عملکرد بازی به‌شدت ناامیدکننده بوده و ۶۷ درصد کمتر از برای اکتیویژن و تیم سازنده درآمدزایی داشته است',
    },
    {
        title: 'بازی کال‌آودیوتی موبایل وارزون شروع ضعیفی را داشته است؟',
        text: 'به‌نظر می‌رسد عملکرد بازی به‌شدت ناامیدکننده بوده و ۶۷ درصد کمتر از برای اکتیویژن و تیم سازنده درآمدزایی داشته است',
    },
    {
        title: 'بازی کال‌آودیوتی موبایل وارزون شروع ضعیفی را داشته است؟',
        text: 'به‌نظر می‌رسد عملکرد بازی به‌شدت ناامیدکننده بوده و ۶۷ درصد کمتر از برای اکتیویژن و تیم سازنده درآمدزایی داشته است',
    },
]
</script>

<template>
    <!-- START-ROUTE -->
    <SectionsBreadcrumb class="container !my-2.5 !mb-10" :items="route" />
    <!-- END-ROUTE -->

    <!-- START-DEVELOPERS-VERTICAL-SLIDER -->
    <SectionsDeveloperVerticalSlider class="mb-between-section container" :developers="developersVerticalSlider"
        :headerSection="{ title: 'توسعه‌دهندگان منتخب', subtitle: 'محبوب ترین توسعه‌دهنده‌های رویدینو' }" />
    <!-- END-DEVELOPERS-VERTICAL-SLIDER -->


    <!-- START-NORMAL-DEVELOPERS -->
    <SectionsDeveloperSlider :headerSection="{ title: 'توسعه دهنده‌های برتر', iconName: 'gamepad', iconPathCount: 4 }"
        class="container mb-between-section" :items="developersNormalSlider" />
    <!-- END-NORMAL-DEVELOPERS -->

    <!-- START-DEVELOPERS -->
    <SectionsDeveloperAll :headerSection="{ title: 'توسعه دهنده‌های برتر', iconName: 'gamepad', iconPathCount: 4 }"
        class="container mb-between-section" :developers="developers" />
    <!-- END-DEVELOPERS -->


    <!-- START-DOWNLOAD-APP -->
    <SectionsDownloadApplication class="container mb-between-section" />
    <!-- END-DOWNLOAD-APP -->
    
    <!-- START-FAQ -->
    <SectionsFaq class="container mb-between-section" to="/" :items="accordionItems"
    :headerSection="{ title: 'سوالات متداول', subtitle: 'سوالات پرتکرار شما'}" />
    <!-- END-FAQ -->

    
    <!-- START-ABOUT -->
    <SectionsAboutRoidino class="container mb-between-section" />
    <!-- END-ABOUT -->
</template>