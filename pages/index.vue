<script setup>
let spacialSliderItems = [
    {
        to: '/design-system',
        isMode: false,
        isOnline: true,
        isChosen: true,
        bgImg: "/img/background-img-1.png",
        img: "/img/img-4.png",
        name: "کلش رویال",
        description: "Clash Royale",
        category: "استراتژیک",
        rate: 5.1
    },
    {
        to: '/design-system',
        isMode: true,
        isOnline: false,
        isChosen: true,
        bgImg: "/img/background-img-1.png",
        img: "/img/img-4.png",
        name: "کلش رویال",
        description: "Clash Royale",
        category: "استراتژیک",
        rate: 5.1
    },
    {
        to: '/design-system',
        isMode: true,
        isOnline: true,
        isChosen: false,
        bgImg: "/img/background-img-1.png",
        img: "/img/img-4.png",
        name: "کلش رویال",
        description: "Clash Royale",
        category: "استراتژیک",
        rate: 5.1
    },
    {
        to: '/design-system',
        isMode: true,
        isOnline: true,
        isChosen: true,
        bgImg: "/img/background-img-1.png",
        img: "/img/img-4.png",
        name: "کلش رویال",
        description: "Clash Royale",
        category: "استراتژیک",
        rate: 5.1
    },
    {
        to: '/design-system',
        isMode: true,
        isOnline: true,
        isChosen: true,
        bgImg: "/img/background-img-1.png",
        img: "/img/img-4.png",
        name: "کلش رویال",
        description: "Clash Royale",
        category: "استراتژیک",
        rate: 5.1
    },
]

let trendSliderItems = [
    {
        to: "/design-system",
        bgImg: "/img/teaser.png",
        img: "/img/img-4.png",
        name: "کلش رویال",
        description: "Clash Royale",
        rate: 5.1
    },
    {
        to: "/design-system",
        bgImg: "/img/teaser.png",
        img: "/img/img-4.png",
        name: "کلش رویال",
        description: "Clash Royale",
        rate: 5.1
    },
    {
        to: "/design-system",
        bgImg: "/img/teaser.png",
        img: "/img/img-4.png",
        name: "کلش رویال",
        description: "Clash Royale",
        rate: 5.1
    },
    {
        to: "/design-system",
        bgImg: "/img/teaser.png",
        img: "/img/img-4.png",
        name: "کلش رویال",
        description: "Clash Royale",
        rate: 5.1
    },
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
    }
]

let companiesItems = [
    {
        to: "/design-system",
        img: "/img/img-4.png",
        name: "کلش رویال",
        description: "Clash Royale",
        gradient: { from: '#FF1616', to: '#860000' }
    },
    {
        to: "/design-system",
        img: "/img/img-4.png",
        name: "کلش رویال",
        description: "Clash Royale",
        gradient: { from: '#FF1616', to: '#860000' }
    },
    {
        to: "/design-system",
        img: "/img/img-4.png",
        name: "کلش رویال",
        description: "Clash Royale",
        gradient: { from: '#FF1616', to: '#860000' }
    },
    {
        to: "/design-system",
        img: "/img/img-4.png",
        name: "کلش رویال",
        description: "Clash Royale",
        gradient: { from: '#FF1616', to: '#860000' }
    },
    {
        to: "/design-system",
        img: "/img/img-4.png",
        name: "کلش رویال",
        description: "Clash Royale",
        gradient: { from: '#FF1616', to: '#860000' }
    },
    {
        to: "/design-system",
        img: "/img/img-4.png",
        name: "کلش رویال",
        description: "Clash Royale",
        gradient: { from: '#FF1616', to: '#860000' }
    },
    {
        to: "/design-system",
        img: "/img/img-4.png",
        name: "کلش رویال",
        description: "Clash Royale",
        gradient: { from: '#FF1616', to: '#860000' }
    },
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
    <!-- START-SPACIAL-SLIDER -->
    <SectionsAppSpacialSlider :items="spacialSliderItems"
    class="mb-between-section py-between-section border-b-public-section" />
    <!-- END-SPACIAL-SLIDER -->

    <!-- START-MAIN-HOME-PAGE -->
    <div class="container flex items-start mb-between-section">
        <!-- START-TOOLBAR -->
        <GenericToolbarVertical to="/design-system" class="ml-8 sticky !z-50 top-0.5" />
        <!-- END-TOOLBAR -->

        <div class="grow max-w-[calc(100%-122px)]">
            <!-- START-TREND-SLIDER -->
            <SectionsAppTrendSlider :items="trendSliderItems"
            :headerSection="{ title: 'بازی‌های اندروید', subtitle: 'دانلود اپلیکیشن و بازی اندروید' }"
            class="mb-between-section last:!mb-0" />
            <!-- END-TREND-SLIDER -->

            <!-- START-TRNEDS-APP-NORMAL-SLIDER -->
            <SectionsAppNormalSlider :items="normalSliderItems"
            :headerSection="{ title: 'درحال ترند شدن', iconName: 'gamepad', iconPathCount: 4, grouping: [{ title: 'بازی‌های پیشنهادی', to: '/' }, { title: 'آخرین بازی‌ها', to: '/' }, { title: 'پردانلودترین‌ها', to: '/' }], link: '/' }"
            class="mb-between-section last:!mb-0" />
            <!-- END-TRNEDS-APP-NORMAL-SLIDER -->

            <!-- START-APPS-NORMAL-SLIDER -->
            <SectionsAppNormalSlider :items="normalSliderItems"
            :headerSection="{ title: 'برنامه‌ها', iconName: 'gamepad', iconPathCount: 4, grouping: [{ title: 'بازی‌های پیشنهادی', to: '/' }, { title: 'آخرین بازی‌ها', to: '/' }, { title: 'ضروری', to: '/' }], link: '/' }"
            class="mb-between-section last:!mb-0" />
            <!-- END-APPS-NORMAL-SLIDER -->

            <!-- START-REQUIRED-APPS -->
            <SectionsAppNormalSlider :items="normalSliderItems"
            :headerSection="{ title: 'برنامه‌ها', iconName: 'gamepad', iconPathCount: 4, grouping: [{ title: 'پیام‌رسان‌ها', to: '/' }, { title: 'شبکه‌های اجتماعی', to: '/' }, { title: 'پرکاربرد و ابزار', to: '/' }], link: '/' }"
            class="mb-between-section last:!mb-0" />
            <!-- END-REQUIRED-APPS -->

            <!-- START-REQUIRED-APPS -->
            <SectionsAppNormalSlider :items="normalSliderItems"
            :headerSection="{ title: 'برنامه‌ها', iconName: 'gamepad', iconPathCount: 4, grouping: [{ title: 'پیام‌رسان‌ها', to: '/' }, { title: 'شبکه‌های اجتماعی', to: '/' }, { title: 'پرکاربرد و ابزار', to: '/' }], link: '/' }"
            class="mb-between-section last:!mb-0" />
            <!-- END-REQUIRED-APPS -->
        </div>
    </div>
    <!-- START-MAIN-HOME-PAGE -->

    <!-- START-DEVELOPERS -->
    <SectionsDeveloperSlider :headerSection="{ title: 'توسعه دهنده‌های برتر', iconName: 'gamepad', iconPathCount: 4, link: '/' }"
    class="container mb-between-section" :items="companiesItems" />
    <!-- END-DEVELOPERS -->

    <!-- START-PROPOSAL -->
    <SectionsSuggest class="container mb-between-section" :items="companiesItems" />
    <!-- END-PROPOSAL -->

    <!-- START-NEW-ARTICLE -->
    <SectionsArticleNewArticles
    :headerSection="{ title: 'مجله رویدینو', subtitle: 'خبر، آموزش، مقاله و... با مجله رویدینو', link: '/' }"
    :items="articlesItems" class="mb-between-section" />
    <!-- END-NEW-ARTICLE -->
    
    <!-- START-DOWNLOAD-APP -->
    <SectionsDownloadApplication class="container mb-between-section" />
    <!-- END-DOWNLOAD-APP -->

    <!-- START-FAQ -->
    <SectionsFaq class="container mb-between-section" to="/" :items="accordionItems"
    :headerSection="{ title: 'سوالات متداول', subtitle: 'سوالات پرتکرار شما'}" />
    <!-- END-FAQ -->
</template>