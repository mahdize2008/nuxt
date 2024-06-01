<script setup>
let navList1 = [
    {
        to: '/',
        title: 'کیف پول رویدینو'
    },
    {
        to: '/',
        title: 'رویدکوین'
    },
    {
        to: '/',
        title: 'ویژه کودک'
    },
    {
        to: '/',
        title: 'ویژه کودک'
    },
    {
        to: '/',
        title: 'ویژه کودک'
    }
]
let navList2 = [
    {
        to: '/',
        title: 'کیف پول رویدینو'
    },
    {
        to: '/',
        title: 'رویدکوین'
    },
    {
        to: '/',
        title: 'ویژه کودک'
    },
    {
        to: '/',
        title: 'ویژه کودک'
    },
    {
        to: '/',
        title: 'ویژه کودک'
    }
]
let navList3 = [
    {
        to: '/',
        title: 'بازی‌های اندروید'
    },
    {
        to: '/',
        title: 'برنامه‌های اندروید'
    },
    {
        to: '/',
        title: 'مجله رویدینو'
    },
    {
        to: '/',
        title: 'مجله رویدینو'
    },
    {
        to: '/',
        title: 'مجله رویدینو'
    }
]
let navList4 = [
    {
        to: '/',
        title: 'بازی‌های اندروید'
    },
    {
        to: '/',
        title: 'برنامه‌های اندروید'
    },
    {
        to: '/',
        title: 'مجله رویدینو'
    },
    {
        to: '/',
        title: 'مجله رویدینو'
    },
    {
        to: '/',
        title: 'مجله رویدینو'
    }
]

let socialMediaItem = [
    {
        to: '/',
        iconName: 'aparat',
        iconPathCount: 0
    },
    {
        to: '/',
        iconName: 'aparat',
        iconPathCount: 0
    },
    {
        to: '/',
        iconName: 'youtube',
        iconPathCount: 0
    },
    {
        to: '/',
        iconName: 'x',
        iconPathCount: 0
    },
    {
        to: '/',
        iconName: 'instagram',
        iconPathCount: 0
    },
    {
        to: '/',
        iconName: 'telegram',
        iconPathCount: 0
    }
]

let namads = [
    {
        imgSrc: '/img/namad-1.png',
        to: "/"
    },
    {
        imgSrc: '/img/namad-2.png',
        to: "/"
    }
]

function scrollToTop() {
    window.scrollTo(0, 0);
}
</script>
<template>
    <div class="border-t-public-section">
        <SectionsOurFitcher class="py-[30px] border-b-public-section justify-center container" />
    </div>
    <div class="container py-[30px] flex items-start mb-[30px]">

        <div class="w-[20%] ml-auto">
            <GenericLogo class="max-w-full mb-5" />
            <GenericBtn tag="NuxtLink" to="/design-system" iconName="download" class="!px-11" outline lightness :iconPathCount="4">
                    اپلیکیشن رویدینو
            </GenericBtn>
        </div>
        <LayoutsFooterNav :items="navList1" class="w-[11.5%] ml-[42px]" />
        <LayoutsFooterNav :items="navList2" class="w-[11.5%] ml-[42px]" />
        <LayoutsFooterNav :items="navList3" class="w-[11.5%] ml-[42px]" />
        <LayoutsFooterNav :items="navList4" class="w-[11.5%]" />
        <div class="mr-auto">
            <LayoutsFooterSocialMedia :items="socialMediaItem" class="mb-10" />
            <LayoutsFooterNamad :items="namads" class="w-fit mr-auto" />
        </div>
    </div>
    <div class="container mb-2.5">
        <p class="text-primary tx-xs font-medium text-justify mb-[30px]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه
            روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
            بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
            فارسی ایجاد کرد در این صورت می توان امید داشت...
        </p>
        <LayoutsFooterPartners />
        <div class="pb-5 flex items-center tx-xs text-primary-beta font-medium">
            © تمامی حقوق برای مجموعه‌ی رویدینو محفوظ می‌باشد.
            <GenericBtn @click="scrollToTop" iconLeftSide iconName="download" rounded class="!px-3 mr-auto"
                outline lightness :iconPathCount="4">
                    بازگشت به بالا
            </GenericBtn>
        </div>
    </div>
</template>