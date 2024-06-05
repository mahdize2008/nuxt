<script setup>
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

let mainSliderItems=[
    {
        isVideo:true,
        videoSrc:'/',
        src:'/img/img-10.png',
        alt:'img'
    },
    {
        isVideo:false,
        src:'/img/img-9.png',
        alt:'img'
    },
    {
        isVideo:false,
        src:'/img/img-9.png',
        alt:'img'
    },
    {
        isVideo:false,
        src:'/img/img-9.png',
        alt:'img'
    },
    {
        isVideo:false,
        src:'/img/img-9.png',
        alt:'img'
    },
    {
        isVideo:false,
        src:'/img/img-9.png',
        alt:'img'
    },
    {
        isVideo:false,
        src:'/img/img-9.png',
        alt:'img'
    },
    {
        isVideo:false,
        src:'/img/img-9.png',
        alt:'img'
    },
]

let downloadItems=[
    {
        title:'فایل نصبی اصلی بازی با لینک مستقیم',
        qrcode:'/img/QRCode.png',
        size:'۲۰۰ مگابایت',
        link:'/',
        isMode:true
    },
    {
        title:'فایل نصبی اصلی بازی با لینک مستقیم',
        qrcode:'/img/QRCode.png',
        size:'۲۰۰ مگابایت',
        link:'/'
    },
    {
        title:'فایل نصبی اصلی بازی با لینک مستقیم',
        qrcode:'/img/QRCode.png',
        size:'۲۰۰ مگابایت',
        link:'/'
    },
    {
        title:'فایل نصبی اصلی بازی با لینک مستقیم',
        qrcode:'/img/QRCode.png',
        size:'۲۰۰ مگابایت',
        link:'/',
        isAutoSetup:true
    },
    {
        link:'/',
        isGooglePalyLink:true
    }
]


</script>

<template>
    <!-- START-ROUTE -->
    <SectionsRoute class="container !my-2.5" :items="route" />
    <!-- END-ROUTE -->

    <!-- START-SINGLE-HEADER -->
    <AppSingleHeaderGame class="mb-between-section" :title="product.title" :tags="product.tags" :subtitle="product.subtitle"
        :isSpacial="product.isSpacial" :isChosen="product.isChosen" :properties="properties" :information="information" />
    <!-- END-SINGLE-HEADER -->

    <AppSingleContent :downloadItems="downloadItems" :mainSliderItems="mainSliderItems" :developerSupport="developerSupport" :product="product" :information="information" />
</template>