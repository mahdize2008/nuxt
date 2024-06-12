<script setup>
let route = [
    {
        title: 'صفحه اصلی',
        to: '/'
    },
    {
        title: 'نتایج جستجو',
    }
]

let paginationItems = [
    {
        iconName: 'right',
        to: '/'
    },
    {
        text: 1,
        to: '/'
    },
    {
        text: 2,
        to: '/'
    },
    {
        text: 3,
        to: '/'
    },
    {
        iconName: 'left',
        to: '/'
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
</script>
<template>
    <!-- START-ROUTE -->
    <SectionsBreadcrumb class="container mb-10 mt-4" :items="route" />
    <!-- END-ROUTE -->

    <!-- START-MAIN-HOME-PAGE -->
    <div class="container flex items-start mb-between-section">
        <!-- START-TOOLBAR -->
        <GenericToolbarVertical to="/design-system" class="ml-8 sticky top-0.5" />
        <!-- END-TOOLBAR -->

        <div class="grow max-w-[calc(100%-122px)]">

            <SectionsSearchResault :apps="apps" :paginationItems="paginationItems"/>
        </div>
    </div>
    <!-- START-MAIN-HOME-PAGE -->

    <!-- START-ABOUT -->
    <SectionsAboutRoidino class="container mb-between-section" />
    <!-- END-ABOUT -->
</template>