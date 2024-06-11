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

let articleSliderItems = [
    {
        hasVideo: true,
        to: "/design-system",
        bgImg: "/img/img-2.png",
        imgSrc: "/img/img-1.png",
        title: "بازی کال‌آودیوتی موبایل وارزون شروع ضعیفی را داشته است  بازی کال‌آودیوتی موبایل وارزون شروع ضعیفی را داشته است ",
        description: "به‌نظر می‌رسد عملکرد بازی به‌شدت ناامیدکننده بوده و ۶۷ درصد کمتر از برای اکتیویژن و تیم سازنده درآمدزایی داشته است",
        date: "۲۰ فروردین ۱۴۰۳"
    },
    {
        hasVideo: true,
        to: "/design-system",
        bgImg: "/img/img-2.png",
        imgSrc: "/img/img-1.png",
        title: "بازی کال‌آودیوتی موبایل وارزون شروع ضعیفی را داشته است  بازی کال‌آودیوتی موبایل وارزون شروع ضعیفی را داشته است ",
        description: "به‌نظر می‌رسد عملکرد بازی به‌شدت ناامیدکننده بوده و ۶۷ درصد کمتر از برای اکتیویژن و تیم سازنده درآمدزایی داشته است",
        date: "۲۰ فروردین ۱۴۰۳"
    },
    {
        hasVideo: true,
        to: "/design-system",
        bgImg: "/img/img-2.png",
        imgSrc: "/img/img-1.png",
        title: "بازی کال‌آودیوتی موبایل وارزون شروع ضعیفی را داشته است  بازی کال‌آودیوتی موبایل وارزون شروع ضعیفی را داشته است ",
        description: "به‌نظر می‌رسد عملکرد بازی به‌شدت ناامیدکننده بوده و ۶۷ درصد کمتر از برای اکتیویژن و تیم سازنده درآمدزایی داشته است",
        date: "۲۰ فروردین ۱۴۰۳"
    },
    {
        hasVideo: true,
        to: "/design-system",
        bgImg: "/img/img-2.png",
        imgSrc: "/img/img-1.png",
        title: "بازی کال‌آودیوتی موبایل وارزون شروع ضعیفی را داشته است  بازی کال‌آودیوتی موبایل وارزون شروع ضعیفی را داشته است ",
        description: "به‌نظر می‌رسد عملکرد بازی به‌شدت ناامیدکننده بوده و ۶۷ درصد کمتر از برای اکتیویژن و تیم سازنده درآمدزایی داشته است",
        date: "۲۰ فروردین ۱۴۰۳"
    },
    {
        hasVideo: true,
        to: "/design-system",
        bgImg: "/img/img-2.png",
        imgSrc: "/img/img-1.png",
        title: "بازی کال‌آودیوتی موبایل وارزون شروع ضعیفی را داشته است  بازی کال‌آودیوتی موبایل وارزون شروع ضعیفی را داشته است ",
        description: "به‌نظر می‌رسد عملکرد بازی به‌شدت ناامیدکننده بوده و ۶۷ درصد کمتر از برای اکتیویژن و تیم سازنده درآمدزایی داشته است",
        date: "۲۰ فروردین ۱۴۰۳"
    }
]

let articlesItems = [
    {
        hasVideo: true,
        to: "/design-system",
        bgImg: "/img/img-2.png",
        imgSrc: "/img/img-1.png",
        title: "بازی کال‌آودیوتی موبایل وارزون شروع ضعیفی را داشته است  بازی کال‌آودیوتی موبایل وارزون شروع ضعیفی را داشته است ",
        description: "به‌نظر می‌رسد عملکرد بازی به‌شدت ناامیدکننده بوده و ۶۷ درصد کمتر از برای اکتیویژن و تیم سازنده درآمدزایی داشته است",
        date: "۲۰ فروردین ۱۴۰۳"
    },
    {
        hasVideo: false,
        to: "/design-system",
        bgImg: "/img/img-2.png",
        imgSrc: "/img/img-1.png",
        title: "بازی کال‌آودیوتی موبایل وارزون شروع ضعیفی را داشته است",
        description: "به‌نظر می‌رسد عملکرد بازی به‌شدت ناامیدکننده بوده و ۶۷ درصد کمتر از برای اکتیویژن و تیم سازنده درآمدزایی داشته است",
        date: "۲۰ فروردین ۱۴۰۳"
    },
    {
        hasVideo: true,
        to: "/design-system",
        bgImg: "/img/img-2.png",
        imgSrc: "/img/img-1.png",
        title: "بازی کال‌آودیوتی موبایل وارزون شروع ضعیفی را داشته است",
        description: "به‌نظر می‌رسد عملکرد بازی به‌شدت ناامیدکننده بوده و ۶۷ درصد کمتر از برای اکتیویژن و تیم سازنده درآمدزایی داشته است",
        date: "۲۰ فروردین ۱۴۰۳"
    },
    {
        hasVideo: true,
        to: "/design-system",
        bgImg: "/img/img-2.png",
        imgSrc: "/img/img-1.png",
        title: "بازی کال‌آودیوتی موبایل وارزون شروع ضعیفی را داشته است",
        description: "به‌نظر می‌رسد عملکرد بازی به‌شدت ناامیدکننده بوده و ۶۷ درصد کمتر از برای اکتیویژن و تیم سازنده درآمدزایی داشته است",
        date: "۲۰ فروردین ۱۴۰۳"
    },
    {
        hasVideo: true,
        to: "/design-system",
        bgImg: "/img/img-2.png",
        imgSrc: "/img/img-1.png",
        title: "بازی کال‌آودیوتی موبایل وارزون شروع ضعیفی را داشته است",
        description: "به‌نظر می‌رسد عملکرد بازی به‌شدت ناامیدکننده بوده و ۶۷ درصد کمتر از برای اکتیویژن و تیم سازنده درآمدزایی داشته است",
        date: "۲۰ فروردین ۱۴۰۳"
    }
]


let normalSliderItems = [
    {
        to: '/design-system',
        isOnline: false,
        isChosen: true,
        bgImg: "/img/background-img-1.png",
        img: "/img/img-5.png",
        name: "کلش رویال",
        description: "Clash Royale",
        category: "استراتژیک",
        rate: 5.1
    },
    {
        to: '/design-system',
        isOnline: true,
        isChosen: false,
        bgImg: "/img/background-img-1.png",
        img: "/img/img-5.png",
        name: "کلش رویال",
        description: "Clash Royale",
        category: "استراتژیک",
        rate: 5.1
    },
    {
        to: '/design-system',
        isOnline: true,
        isChosen: true,
        bgImg: "/img/background-img-1.png",
        img: "/img/img-5.png",
        name: "کلش رویال",
        description: "Clash Royale",
        category: "استراتژیک",
        rate: 5.1
    },
    {
        to: '/design-system',
        isOnline: true,
        isChosen: true,
        bgImg: "/img/background-img-1.png",
        img: "/img/img-5.png",
        name: "کلش رویال",
        description: "Clash Royale",
        category: "استراتژیک",
        rate: 5.1
    },
    {
        to: '/design-system',
        isOnline: true,
        isChosen: true,
        bgImg: "/img/background-img-1.png",
        img: "/img/img-5.png",
        name: "کلش رویال",
        description: "Clash Royale",
        category: "استراتژیک",
        rate: 5.1
    },
    {
        to: '/design-system',
        isOnline: true,
        isChosen: true,
        bgImg: "/img/background-img-1.png",
        img: "/img/img-5.png",
        name: "کلش رویال",
        description: "Clash Royale",
        category: "استراتژیک",
        rate: 5.1
    },
    {
        to: '/design-system',
        isOnline: true,
        isChosen: true,
        bgImg: "/img/background-img-1.png",
        img: "/img/img-5.png",
        name: "کلش رویال",
        description: "Clash Royale",
        category: "استراتژیک",
        rate: 5.1
    },
    {
        to: '/design-system',
        isOnline: true,
        isChosen: true,
        bgImg: "/img/background-img-1.png",
        img: "/img/img-5.png",
        name: "کلش رویال",
        description: "Clash Royale",
        category: "استراتژیک",
        rate: 5.1
    }
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

    <SectionsBlog :articleSliderItems="articleSliderItems" :articlesItems="articlesItems"/>




    <!-- START-APPS-NORMAL-SLIDER -->
    <SectionsAppNormalSlider :items="normalSliderItems" hasSwiperBtn
        :headerSection="{ title: 'بازی‌های محبوب', iconName: 'gamepad', iconPathCount: 4,link:'/' }"
        class="mb-between-section container" />
    <!-- END-APPS-NORMAL-SLIDER -->

    <!-- START-APPS-NORMAL-SLIDER -->
    <SectionsAppNormalSlider :items="normalSliderItems" hasSwiperBtn
        :headerSection="{ title: 'بازی‌های محبوب', iconName: 'gamepad', iconPathCount: 4 }"
        class="mb-between-section container" />
    <!-- END-APPS-NORMAL-SLIDER -->

    <!-- START-PROPOSAL -->
    <SectionsSuggest class="container mb-between-section" :items="companiesItems" />
    <!-- END-PROPOSAL -->

    <!-- START-DOWNLOAD-APP -->
    <SectionsDownloadApplication class="container mb-between-section" />
    <!-- END-DOWNLOAD-APP -->

    <!-- START-FAQ -->
    <SectionsFaq class="container mb-between-section" to="/" :items="accordionItems"
        :headerSection="{ title: 'سوالات متداول', subtitle: 'سوالات پرتکرار شما' }" />
    <!-- END-FAQ -->
</template>