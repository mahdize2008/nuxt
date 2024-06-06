<script setup>
import {ref} from 'vue'

let route = [
    {
        title: 'صفحه اصلی',
        to: '/'
    },
    {
        title: 'بازی و سرگرمی',
        to: '/'
    },
    {
        title: 'استراتژی',
    }
]



let properties = [
    {
        title: 'نسخه ۱.۰.۰'
    },
    {
        title: 'سپر رویدینو',
        icon: 'shield_check',
        iconPathCount: 0
    },
    {
        title: 'پرداخت درون برنامه‌ای',
        icon: 'shield_check',
        iconPathCount: 0
    },
    {
        title: 'رایگان',
        icon: 'shield_check',
        iconPathCount: 0
    },
    {
        title: 'مود شده',
        icon: 'shield_check',
        iconPathCount: 0
    }
]
let information = [
    {
        title: '۲۰۰۰ امتیاز',
        text: '۵.۰',
        icon: 'star',
        iconPathCount: 0
    },
    {
        title: 'نصب',
        text: 'رانندگی',
    },
    {
        title: 'حجم',
        text: '۹۹ مگابایت',
    },
    {
        title: 'دسته‌بندی',
        text: 'رانندگی',
    },
    {
        title: 'دسترسی به اینترنت',
        text: 'آنلاین',
    },
    {
        title: 'درجه سنی',
        text: '+۱۰ سال',
    },
    {
        title: 'آخرین به‌روز رسانی',
        text: '۱۰ فروردین ۱۴۰۳',
    },
]
let product = {
    title: "Clash Royale",
    subtitle: "کلش رویال",
    isSpacial: true,
    isChosen: true,
    tags: ['سوپرسل']
}

let developerSupport = [
    {
        title: 'صفحه گوگل پلی',
        icon: 'shield_check',
        iconPathCount: 0
    },
    {
        title: 'وبسایت توسعه دهنده',
        icon: 'shield_check',
        iconPathCount: 0
    },
    {
        title: 'حریم خصوصی',
        icon: 'shield_check',
        iconPathCount: 0
    },
    {
        title: 'ایمیل پشتیبانی',
        icon: 'shield_check',
        iconPathCount: 0,
        subtitle: 'Info@Roidino.ir'
    },
]

let mainSliderItems = [
    {
        isVideo: true,
        videoSrc: '/',
        src: '/img/img-10.png',
        alt: 'img'
    },
    {
        isVideo: false,
        src: '/img/img-9.png',
        alt: 'img'
    },
    {
        isVideo: false,
        src: '/img/img-9.png',
        alt: 'img'
    },
    {
        isVideo: false,
        src: '/img/img-9.png',
        alt: 'img'
    },
    {
        isVideo: false,
        src: '/img/img-9.png',
        alt: 'img'
    },
    {
        isVideo: false,
        src: '/img/img-9.png',
        alt: 'img'
    },
    {
        isVideo: false,
        src: '/img/img-9.png',
        alt: 'img'
    },
    {
        isVideo: false,
        src: '/img/img-9.png',
        alt: 'img'
    },
]

let downloadItems = [
    {
        title: 'فایل نصبی اصلی بازی با لینک مستقیم',
        qrcode: '/img/QRCode.png',
        size: '۲۰۰ مگابایت',
        link: '/',
        isMode: true
    },
    {
        title: 'فایل نصبی اصلی بازی با لینک مستقیم',
        qrcode: '/img/QRCode.png',
        size: '۲۰۰ مگابایت',
        link: '/'
    },
    {
        title: 'فایل نصبی اصلی بازی با لینک مستقیم',
        qrcode: '/img/QRCode.png',
        size: '۲۰۰ مگابایت',
        link: '/'
    },
    {
        title: 'فایل نصبی اصلی بازی با لینک مستقیم',
        qrcode: '/img/QRCode.png',
        size: '۲۰۰ مگابایت',
        link: '/',
        isAutoSetup: true
    },
    {
        link: '/',
        isGooglePalyLink: true
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

let articlesItems = [
    {
        to: "/design-system",
        img: "/img/img-12.png",
        title: "بازی کال‌آودیوتی موبایل وارزون شروع ضعیفی را داشته است  بازی کال‌آودیوتی موبایل وارزون شروع ضعیفی را داشته است ",
        date: "۲۰ فروردین ۱۴۰۳"
    },
    {
        hasVideo: false,
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

let type=ref('game')


import { provide } from 'vue'

provide( 'type', type)

</script>

<template>
    <!-- START-ROUTE -->
    <SectionsBreadcrumb class="container !my-2.5" :items="route" />
    <!-- END-ROUTE -->

    
    <!-- START-SINGLE-HEADER -->
    <AppSingle class="mb-between-section" :product="product" :developerSupport="developerSupport" :mainSliderItems="mainSliderItems" :downloadItems="downloadItems" :properties="properties" :information="information" />
    <!-- END-SINGLE-HEADER -->

    <!-- START-APPS-NORMAL-SLIDER -->
    <SectionsAppNormalSlider :items="normalSliderItems" hasSwiperBtn
        :headerSection="{ title: 'برنامه‌ها', iconName: 'gamepad', iconPathCount: 4, link: '/' }"
        class="mb-between-section container" />
    <!-- END-APPS-NORMAL-SLIDER -->

    <!-- START-APPS-NORMAL-SLIDER -->
    <SectionsAppNormalSlider :items="normalSliderItems" hasSwiperBtn
        :headerSection="{ title: 'برنامه‌ها', iconName: 'gamepad', iconPathCount: 4 }"
        class="mb-between-section container" />
    <!-- END-APPS-NORMAL-SLIDER -->

    <!-- START-APPS-NORMAL-SLIDER -->
    <SectionsAppNormalSlider :items="normalSliderItems" hasSwiperBtn
        :headerSection="{ title: 'برنامه‌ها', iconName: 'gamepad', iconPathCount: 4 }"
        class="mb-between-section container" />
    <!-- END-APPS-NORMAL-SLIDER -->

    <!-- START-ARTICLES -->
    <SectionsArticleVertical class="mb-between-section" :items="articlesItems" :headerSection="{ title: 'برنامه‌ها', link: '/' }" />
    <!-- END-ARTICLES -->

    <!-- START-DOWNLOAD-APP -->
    <SectionsDownloadApplication class="container mb-between-section" />
    <!-- END-DOWNLOAD-APP -->
    
    <!-- START-FAQ -->
    <SectionsFaq class="container mb-between-section" to="/" :items="accordionItems"
    :headerSection="{ title: 'سوالات متداول', subtitle: 'سوالات پرتکرار شما'}" />
    <!-- END-FAQ -->
</template>