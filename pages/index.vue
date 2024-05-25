<script setup>
let spacialSliderItems = [
    {
        to: '/design-system',
        isMode: true,
        isOnline: true,
        hasSield: true,
        bgImg: "/img/background-img-1.png",
        img: "/img/logo-1.png",
        name: "کلش رویال",
        description: "Clash Royale",
        category: "استراتژیک",
        rate: 5.1
    },
    {
        to: '/design-system',
        isMode: true,
        isOnline: true,
        hasSield: true,
        bgImg: "/img/background-img-1.png",
        img: "/img/logo-1.png",
        name: "کلش رویال",
        description: "Clash Royale",
        category: "استراتژیک",
        rate: 5.1
    },
    {
        to: '/design-system',
        isMode: true,
        isOnline: true,
        hasSield: true,
        bgImg: "/img/background-img-1.png",
        img: "/img/logo-1.png",
        name: "کلش رویال",
        description: "Clash Royale",
        category: "استراتژیک",
        rate: 5.1
    },
    {
        to: '/design-system',
        isMode: true,
        isOnline: true,
        hasSield: true,
        bgImg: "/img/background-img-1.png",
        img: "/img/logo-1.png",
        name: "کلش رویال",
        description: "Clash Royale",
        category: "استراتژیک",
        rate: 5.1
    },
    {
        to: '/design-system',
        isMode: true,
        isOnline: true,
        hasSield: true,
        bgImg: "/img/background-img-1.png",
        img: "/img/logo-1.png",
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
        img: "/img/logo-1.png",
        name: "کلش رویال",
        description: "Clash Royale",
        rate: "5.1"
    },
    {
        to: "/design-system",
        bgImg: "/img/teaser.png",
        img: "/img/logo-1.png",
        name: "کلش رویال",
        description: "Clash Royale",
        rate: "5.1"
    },
    {
        to: "/design-system",
        bgImg: "/img/teaser.png",
        img: "/img/logo-1.png",
        name: "کلش رویال",
        description: "Clash Royale",
        rate: "5.1"
    },
    {
        to: "/design-system",
        bgImg: "/img/teaser.png",
        img: "/img/logo-1.png",
        name: "کلش رویال",
        description: "Clash Royale",
        rate: "5.1"
    },
]

let normalSliderItems = [
    {
        to: '/design-system',
        isOnline: true,
        hasSield: true,
        bgImg: "/img/background-img-1.png",
        img: "/img/logo-2.png",
        name: "کلش رویال",
        description: "Clash Royale",
        category: "استراتژیک",
        rate: 5.1
    },
    {
        to: '/design-system',
        isOnline: true,
        hasSield: true,
        bgImg: "/img/background-img-1.png",
        img: "/img/logo-2.png",
        name: "کلش رویال",
        description: "Clash Royale",
        category: "استراتژیک",
        rate: 5.1
    },
    {
        to: '/design-system',
        isOnline: true,
        hasSield: true,
        bgImg: "/img/background-img-1.png",
        img: "/img/logo-2.png",
        name: "کلش رویال",
        description: "Clash Royale",
        category: "استراتژیک",
        rate: 5.1
    },
    {
        to: '/design-system',
        isOnline: true,
        hasSield: true,
        bgImg: "/img/background-img-1.png",
        img: "/img/logo-2.png",
        name: "کلش رویال",
        description: "Clash Royale",
        category: "استراتژیک",
        rate: 5.1
    },
    {
        to: '/design-system',
        isOnline: true,
        hasSield: true,
        bgImg: "/img/background-img-1.png",
        img: "/img/logo-2.png",
        name: "کلش رویال",
        description: "Clash Royale",
        category: "استراتژیک",
        rate: 5.1
    },
    {
        to: '/design-system',
        isOnline: true,
        hasSield: true,
        bgImg: "/img/background-img-1.png",
        img: "/img/logo-2.png",
        name: "کلش رویال",
        description: "Clash Royale",
        category: "استراتژیک",
        rate: 5.1
    },
    {
        to: '/design-system',
        isOnline: true,
        hasSield: true,
        bgImg: "/img/background-img-1.png",
        img: "/img/logo-2.png",
        name: "کلش رویال",
        description: "Clash Royale",
        category: "استراتژیک",
        rate: 5.1
    }
]
</script>
<template>
    <SectionsAppSpacialSlider :items="spacialSliderItems"
        class="mb-between-section py-between-section border-public-section" />
    <div class="container flex items-start mb-between-section">
        <GenericToolbarVertical to="/design-system" class="ml-8" />
        <div class="grow overflow-hidden">
            <SectionsAppTrendSlider :items="trendSliderItems"
                :headerSection="{ title: 'بازی‌های اندروید', subtitle: 'دانلود اپلیکیشن و بازی اندروید' }"
                class="mb-between-section last:!mb-0" />
            <SectionsAppNormalSlider :items="normalSliderItems"
                :headerSection="{ title: 'درحال ترند شدن', iconName: 'gamepad', iconPathCount: 4, category: [{ title: 'بازی‌های پیشنهادی', to: '/' }, { title: 'آخرین بازی‌ها', to: '/' }, { title: 'پردانلودترین‌ها', to: '/' }], link: '/' }"
                class="mb-between-section last:!mb-0" />
            <SectionsAppNormalSlider :items="normalSliderItems"
                :headerSection="{ title: 'برنامه‌ها', iconName: 'gamepad', iconPathCount: 4, category: [{ title: 'بازی‌های پیشنهادی', to: '/' }, { title: 'آخرین بازی‌ها', to: '/' }, { title: 'ضروری', to: '/' }], link: '/' }"
                class="mb-between-section last:!mb-0" />
            <SectionsAppNormalSlider :items="normalSliderItems"
                :headerSection="{ title: 'برنامه‌ها', iconName: 'gamepad', iconPathCount: 4, category: [{ title: 'پیام‌رسان‌ها', to: '/' }, { title: 'شبکه‌های اجتماعی', to: '/' }, { title: 'پرکاربرد و ابزار', to: '/' }], link: '/' }"
                class="mb-between-section last:!mb-0" />
            <SectionsAppNormalSlider :items="normalSliderItems"
                :headerSection="{ title: 'برنامه‌ها', iconName: 'gamepad', iconPathCount: 4, category: [{ title: 'پیام‌رسان‌ها', to: '/' }, { title: 'شبکه‌های اجتماعی', to: '/' }, { title: 'پرکاربرد و ابزار', to: '/' }], link: '/' }"
                class="mb-between-section last:!mb-0" />
        </div>
    </div>
</template>