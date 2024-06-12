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

let companiesItems = [
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

let categoryHeader={
    title:'رانندگی',
    category:[
        {
            to:'/',
            title:'اکشن'
        },
        {
            to:'/',
            title:'رانندگی'
        },
        {
            to:'/',
            title:'مبارزه‌ای'
        }
    ],
    img:'/img/category.png',
    description:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری است.'
}
</script>
<template>
    <!-- START-ROUTE -->
    <SectionsBreadcrumb class="container mb-10 mt-4" :items="route" />
    <!-- END-ROUTE -->

    <!-- START-MAIN-HOME-PAGE -->
    <div class="container flex items-start mb-between-section">
        <!-- START-TOOLBAR -->
        <GenericToolbarVertical to="/design-system" class="ml-8 sticky z-20 top-0.5" />
        <!-- END-TOOLBAR -->

        <div class="grow max-w-[calc(100%-122px)]">
            <!-- START-CATEGORY-HEADER -->
            <GenericCategoryHeader class="mb-5" :description="categoryHeader.description" :title="categoryHeader.title" :img="categoryHeader.img" :category="categoryHeader.category"/>
            <!-- END-CATEGORY-HEADER -->


            <!-- START-TRNEDS-APP-NORMAL-SLIDER -->
            <SectionsAppBox :paginationItems="paginationItems" :items="apps"
            class="mb-between-section last:!mb-0" />
            <!-- END-TRNEDS-APP-NORMAL-SLIDER -->
        </div>
    </div>
    <!-- START-MAIN-HOME-PAGE -->

    <!-- START-DEVELOPERS -->
    <SectionsDeveloperSlider
        :headerSection="{ title: 'توسعه دهنده‌های برتر', iconName: 'gamepad', iconPathCount: 4, link: '/' }"
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
        :headerSection="{ title: 'سوالات متداول', subtitle: 'سوالات پرتکرار شما' }" />
    <!-- END-FAQ -->

    <!-- START-ABOUT -->
    <SectionsAboutRoidino class="container mb-between-section" />
    <!-- END-ABOUT -->
</template>