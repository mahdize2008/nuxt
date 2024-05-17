<script setup>
let colors1 = ['primary', 'primary-alpha', 'primary-beta', 'primary-gamma', 'primary-tetha']
let colors2 = ['success', 'success-alpha', 'success-gradient']
let colors3 = ['white', 'white-alpha', 'black']
let colors4 = ['warning', 'danger', 'danger-alpha'];
let paginationItems = [
    {
        iconName: 'star'
    },
    {
        text: 1
    },
    {
        text: 2
    },
    {
        text: 3
    },
    {
        iconName: 'star'
    }
]

</script>
<template>
    <div class="container mt-between-section mb-between-section">
        <div class="flex items-start flex-wrap mb-3 last:mb-0">
            <div v-for="color in colors1" class="ml-4 flex flex-col items-center">
                <div class="box-color w-16 h-16" :class="'box-' + color" :style="`--color:var(--color-${color})`"></div>
                {{ color }}
            </div>
        </div>
        <div class="flex items-start flex-wrap mb-3 last:mb-0">
            <div v-for="color in colors2" class="ml-4 flex flex-col items-center">
                <div class="box-color w-16 h-16" :class="'box-' + color" :style="`--color:var(--color-${color})`"></div>
                {{ color }}
            </div>
        </div>
        <div class="flex items-start flex-wrap mb-3 last:mb-0">
            <div v-for="color in colors3" class="ml-4 flex flex-col items-center">
                <div class="box-color w-16 h-16" :class="'box-' + color" :style="`--color:var(--color-${color})`"></div>
                {{ color }}
            </div>
        </div>
        <div class="flex items-start flex-wrap mb-3 last:mb-0">
            <div v-for="color in colors4" class="ml-4 flex flex-col items-center">
                <div class="box-color w-16 h-16" :class="'box-' + color" :style="`--color:var(--color-${color})`"></div>
                {{ color }}
            </div>
        </div>
    </div>

    <div class="container mb-between-section">
        <GenericInput class="mb-7 last:mb-0" label="لیبل فیلد" placeholder="حالت عادی" />
        <GenericInput class="mb-7 last:mb-0" label="لیبل فیلد" placeholder="حالت عادی" disabled />
        <GenericInput class="mb-7 last:mb-0" label="لیبل فیلد" placeholder="حالت عادی" />
        <GenericInput class="mb-7 last:mb-0" label="لیبل فیلد" placeholder="حالت عادی" error
            errorMassage="پیغام مقدار نامعتبر" />
    </div>

    <div class="container mb-between-section">
        <div class="flex items-center mb-10">
            <span class="ml-5 block">45px</span>
            <GenericBtn class="ml-5 last:ml-0" theme="primary" rounded square iconName="star" />
            <GenericBtn class="ml-5 last:ml-0" theme="primary" rounded lightness square iconName="star" />
            <GenericBtn class="ml-5 last:ml-0" theme="success" rounded square iconName="star" />
            <GenericBtn class="ml-5 last:ml-0" theme="primary" rounded lightness square iconName="star" />
            <GenericBtn class="ml-5 last:ml-0" theme="success" rounded lightness square iconName="star" />
            <GenericBtn class="ml-5 last:ml-0 !rounded-l-none" theme="primary" rounded lightness square
                iconName="star" />
            <GenericBtn class="ml-5 last:ml-0 !rounded-l-none" theme="primary" rounded lightness square
                iconName="star" />
        </div>
        <div class="flex items-center mb-10">
            <span class="ml-5 block">35px</span>
            <GenericBtn size="sm" gradient class="ml-5 last:ml-0">نمونه دکمه</GenericBtn>
            <GenericBtn size="sm" gradient class="ml-5 last:ml-0">نمونه دکمه</GenericBtn>
        </div>
        <div class="flex items-center">
            <span class="ml-5 block">45px</span>
            <GenericBtn gradient rounded iconName="star" class="ml-5 last:ml-0">نمونه دکمه</GenericBtn>
            <GenericBtn gradient iconName="star" class="ml-5 last:ml-0">نمونه دکمه</GenericBtn>
            <GenericBtn gradient rounded class="ml-5 last:ml-0">نمونه دکمه</GenericBtn>
            <GenericBtn gradient class="ml-5 last:ml-0">نمونه دکمه</GenericBtn>
        </div>
    </div>

    <div class="container mb-between-section">
        <div class="flex items-center">
            <span class="ml-5 tx-base block">
                22px
            </span>
            <p class="tx tx-xl">
                رویدینو، پلتفرم دانلود رایگان بازی و برنامه اندروید
            </p>
        </div>
        <div class="flex items-center">
            <span class="ml-5 tx-base block">
                20px
            </span>
            <p class="tx tx-lg">
                رویدینو، پلتفرم دانلود رایگان بازی و برنامه اندروید
            </p>
        </div>
        <div class="flex items-center">
            <span class="ml-5 tx-base block">
                18px
            </span>
            <p class="tx tx-md">
                رویدینو، پلتفرم دانلود رایگان بازی و برنامه اندروید
            </p>
        </div>
        <div class="flex items-center">
            <span class="ml-5 tx-base block">
                16px
            </span>
            <p class="tx tx-base">
                رویدینو، پلتفرم دانلود رایگان بازی و برنامه اندروید
            </p>
        </div>
        <div class="flex items-center">
            <span class="ml-5 tx-base block">
                14px
            </span>
            <p class="tx tx-sm">
                رویدینو، پلتفرم دانلود رایگان بازی و برنامه اندروید
            </p>
        </div>
        <div class="flex items-center">
            <span class="ml-5 tx-base block">
                12px
            </span>
            <p class="tx tx-xs">
                رویدینو، پلتفرم دانلود رایگان بازی و برنامه اندروید
            </p>
        </div>

    </div>

    <div class="container mb-between-section">
        <GenericPagination :items="paginationItems" />
    </div>

    <div class="container mb-between-section">
        <Swiper :slides-per-view="3" :space-between="15">
            <SwiperSlide>
                <AppCardSpecial to="/design-system" backgroundImgSrc="/img/background-img-1.png"
                    logoSrc="/img/logo-1.png" name="کلش رویال" descriptoin="Clash Royale" category="استراتژیک"
                    :point="5.0" />
            </SwiperSlide>
            <SwiperSlide>
                <AppCardSpecial to="/design-system" moded backgroundImgSrc="/img/background-img-1.png"
                    logoSrc="/img/logo-1.png" name="کلش رویال" descriptoin="Clash Royale" category="استراتژیک"
                    :point="5.0" />
            </SwiperSlide>
            <SwiperSlide>
                <AppCardSpecial to="/design-system" moded particular backgroundImgSrc="/img/background-img-1.png"
                    logoSrc="/img/logo-1.png" name="کلش رویال" descriptoin="Clash Royale" category="استراتژیک"
                    :point="5.0" />
            </SwiperSlide>
        </Swiper>
    </div>

    <div class="container mb-between-section">
        <Swiper :slides-per-view="4" :space-between="15">
            <SwiperSlide>
                <AppCardTrend to="/design-system" teaserSrc="/img/background-img-1.png" logoSrc="/img/logo-1.png"
                    name="کلش رویال" descriptoin="Clash Royale" :point="5.0" />
            </SwiperSlide>
            <SwiperSlide>
                <AppCardTrend to="/design-system" teaserSrc="/img/background-img-1.png" logoSrc="/img/logo-1.png"
                    name="کلش رویال" descriptoin="Clash Royale" :point="5.0" />
            </SwiperSlide>
            <SwiperSlide>
                <AppCardTrend to="/design-system" particular teaserSrc="/img/background-img-1.png"
                    logoSrc="/img/logo-1.png" name="کلش رویال" descriptoin="Clash Royale" :point="5.0" />
            </SwiperSlide>
            <SwiperSlide>
                <AppCardTrend to="/design-system" particular teaserSrc="/img/background-img-1.png"
                    logoSrc="/img/logo-1.png" name="کلش رویال" descriptoin="Clash Royale" :point="5.0" />
            </SwiperSlide>
        </Swiper>
    </div>

    <div class="container mb-between-section">
        <Swiper :slides-per-view="7" :space-between="15" class="!overflow-y-visible">
            <SwiperSlide>
                <AppCardNormal to="/design-system" teaserSrc="/img/background-img-1.png" logoSrc="/img/logo-2.png"
                    name="کلش رویال" descriptoin="Clash Royale" category="استراتژیک" :point="5.0" />
            </SwiperSlide>
            <SwiperSlide>
                <AppCardNormal to="/design-system" teaserSrc="/img/background-img-1.png" logoSrc="/img/logo-2.png"
                    name="کلش رویال" descriptoin="Clash Royale" category="استراتژیک" :point="5.0" />
            </SwiperSlide>
            <SwiperSlide>
                <AppCardNormal to="/design-system" teaserSrc="/img/background-img-1.png" logoSrc="/img/logo-2.png"
                    name="کلش رویال" descriptoin="Clash Royale" category="استراتژیک" :point="5.0" />
            </SwiperSlide>
            <SwiperSlide>
                <AppCardNormal to="/design-system" teaserSrc="/img/background-img-1.png" logoSrc="/img/logo-2.png"
                    name="کلش رویال" descriptoin="Clash Royale" category="استراتژیک" :point="5.0" />
            </SwiperSlide>
            <SwiperSlide>
                <AppCardNormal to="/design-system" particular teaserSrc="/img/background-img-1.png"
                    logoSrc="/img/logo-2.png" name="کلش رویال" descriptoin="Clash Royale" category="استراتژیک"
                    :point="5.0" />
            </SwiperSlide>
            <SwiperSlide>
                <AppCardNormal to="/design-system" particular teaserSrc="/img/background-img-1.png"
                    logoSrc="/img/logo-2.png" name="کلش رویال" descriptoin="Clash Royale" category="استراتژیک"
                    :point="5.0" />
            </SwiperSlide>
            <SwiperSlide>
                <AppCardNormal to="/design-system" particular teaserSrc="/img/background-img-1.png"
                    logoSrc="/img/logo-2.png" name="کلش رویال" descriptoin="Clash Royale" category="استراتژیک"
                    :point="5.0" />
            </SwiperSlide>
            <SwiperSlide>
                <AppCardNormal to="/design-system" particular teaserSrc="/img/background-img-1.png"
                    logoSrc="/img/logo-2.png" name="کلش رویال" descriptoin="Clash Royale" category="استراتژیک"
                    :point="5.0" />
            </SwiperSlide>
        </Swiper>
    </div>

    <div class="container mb-between-section">
        <Swiper :slides-per-view="7" :space-between="15" class="!overflow-y-visible">
            <SwiperSlide>
                <DeveloperCardNormal to="/design-system" logoSrc="/img/logo-1.png" name="کلش رویال"
                    descriptoin="Clash Royale" gradientTo="#860000"
                    gradientFrom="#FF1616" />
            </SwiperSlide>
            <SwiperSlide>
                <DeveloperCardNormal to="/design-system" logoSrc="/img/logo-1.png" name="کلش رویال"
                    descriptoin="Clash Royale" gradientTo="#860000"
                    gradientFrom="#FF1616" />
            </SwiperSlide>
            <SwiperSlide>
                <DeveloperCardNormal to="/design-system" logoSrc="/img/logo-1.png" name="کلش رویال"
                    descriptoin="Clash Royale" gradientTo="#860000"
                    gradientFrom="#FF1616" />
            </SwiperSlide>
            <SwiperSlide>
                <DeveloperCardNormal to="/design-system" logoSrc="/img/logo-1.png" name="کلش رویال"
                    descriptoin="Clash Royale" gradientTo="#860000"
                    gradientFrom="#FF1616" />
            </SwiperSlide>
            <SwiperSlide>
                <DeveloperCardNormal to="/design-system" logoSrc="/img/logo-1.png" name="کلش رویال"
                    descriptoin="Clash Royale" gradientTo="#860000"
                    gradientFrom="#FF1616" />
            </SwiperSlide>
            <SwiperSlide>
                <DeveloperCardNormal to="/design-system" logoSrc="/img/logo-1.png" name="کلش رویال"
                    descriptoin="Clash Royale" gradientTo="#860000"
                    gradientFrom="#FF1616" />
            </SwiperSlide>
            <SwiperSlide>
                <DeveloperCardNormal to="/design-system" logoSrc="/img/logo-1.png" name="کلش رویال"
                    descriptoin="Clash Royale" gradientTo="#860000"
                    gradientFrom="#FF1616" />
            </SwiperSlide>
        </Swiper>
    </div>


    <div class="container mb-between-section flex">
        <div class="w-[53%] pl-8">
            <ArticleCardSpecial hasVideo to="/design-system" backgroundImgSrc="/img/img-2.png"
                title="بازی کال‌آودیوتی موبایل وارزون شروع ضعیفی را داشته است  بازی کال‌آودیوتی موبایل وارزون شروع ضعیفی را داشته است "
                descriptoin="به‌نظر می‌رسد عملکرد بازی به‌شدت ناامیدکننده بوده و ۶۷ درصد کمتر از برای اکتیویژن و تیم سازنده درآمدزایی داشته است"
                date="۲۰ فروردین ۱۴۰۳" />
        </div>
        <div class="w-[47%]">
            <ArticleCardRow hasVideo to="/design-system" ImgSrc="/img/img-1.png"
                title="بازی کال‌آودیوتی موبایل وارزون شروع ضعیفی را داشته است "
                date="۲۰ فروردین ۱۴۰۳" />
            <ArticleCardRow hasVideo to="/design-system" ImgSrc="/img/img-1.png"
                title="بازی کال‌آودیوتی موبایل وارزون شروع ضعیفی را داشته است "
                date="۲۰ فروردین ۱۴۰۳" />
            <ArticleCardRow hasVideo to="/design-system" ImgSrc="/img/img-1.png"
                title="بازی کال‌آودیوتی موبایل وارزون شروع ضعیفی را داشته است "
                date="۲۰ فروردین ۱۴۰۳" />
            <ArticleCardRow hasVideo to="/design-system" ImgSrc="/img/img-1.png"
                title="بازی کال‌آودیوتی موبایل وارزون شروع ضعیفی را داشته است "
                date="۲۰ فروردین ۱۴۰۳" />
        </div>
    </div>


    <div class="container mb-between-section">
        <GenericDropdownHeader/>
    </div>

    <div class="container mb-between-section">
        <GenericToolbarVertical/>
    </div>


</template>

<style lang="scss" scoped>
.box-color {
    background-color: rgb(var(--color))
}

.box-white {
    @apply border-2 border-black
}

.box-white-alpha {
    @apply bg-white/50 border-2 border-black
}

.box-black {
    @apply bg-black/50
}

.box-success-gradient {
    @apply bg-success-gradient
}
</style>
