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


let developer={
    img: "/img/brand.png",
    gradient: { from: '#FF1616', to: '#860000' },
    name:'سوپرسل',
    description:'SuperCell',
    text:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری است.',
    websiteLink:'/'
}


let paginationItems = [
    {
        iconName: 'right',
        to:'/'
    },
    {
        text: 1,
        to:'/'
    },
    {
        text: 2,
        to:'/'
    },
    {
        text: 3,
        to:'/'
    },
    {
        iconName: 'left',
        to:'/'
    }
]
let apps = [
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

    
    
    <!-- START-MAIN-HOME-PAGE -->
    <div class="container flex items-start mb-between-section">
        <!-- START-TOOLBAR -->
        <GenericToolbarVertical to="/design-system" class="ml-8 sticky z-20 top-0.5" />
        <!-- END-TOOLBAR -->

        <div class="grow max-w-[calc(100%-122px)]">

            <SectionsDeveloperSingle class="mb-between-section" :name="developer.name" :description="developer.description" :img="developer.img" :gradient="developer.gradient" :text="developer.text" :websiteLink="developer.websiteLink"/>

            <!-- START-TRNEDS-APP-NORMAL-SLIDER -->
            <SectionsAppBox :paginationItems="paginationItems" :items="apps"
            class="mb-between-section last:!mb-0" />
            <!-- END-TRNEDS-APP-NORMAL-SLIDER -->
        </div>
    </div>
    <!-- START-MAIN-HOME-PAGE -->



    <!-- START-NORMAL-DEVELOPERS -->
    <SectionsDeveloperSlider :headerSection="{ title: 'توسعه دهنده‌های مرتبط', iconName: 'gamepad', iconPathCount: 4 }"
        class="container mb-between-section" :items="developersNormalSlider" />
    <!-- END-NORMAL-DEVELOPERS -->

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