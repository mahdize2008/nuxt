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
            <div v-for="(color, index) in colors1" :key="index" class="ml-4 flex flex-col items-center">
                <div class="box-color w-16 h-16" :class="'box-' + color" :style="`--color:var(--color-${color})`"></div>
                {{ color }}
            </div>
        </div>
        <div class="flex items-start flex-wrap mb-3 last:mb-0">
            <div v-for="(color, index) in colors2" :key="index" class="ml-4 flex flex-col items-center">
                <div class="box-color w-16 h-16" :class="'box-' + color" :style="`--color:var(--color-${color})`"></div>
                {{ color }}
            </div>
        </div>
        <div class="flex items-start flex-wrap mb-3 last:mb-0">
            <div v-for="(color, index) in colors3" :key="index" class="ml-4 flex flex-col items-center">
                <div class="box-color w-16 h-16" :class="'box-' + color" :style="`--color:var(--color-${color})`"></div>
                {{ color }}
            </div>
        </div>
        <div class="flex items-start flex-wrap mb-3 last:mb-0">
            <div v-for="(color, index) in colors4" :key="index" class="ml-4 flex flex-col items-center">
                <div class="box-color w-16 h-16" :class="'box-' + color" :style="`--color:var(--color-${color})`"></div>
                {{ color }}
            </div>
        </div>
    </div>
    <div class="container mb-between-section">
        <GenericInput class="mb-7 max-w-[295px] last:mb-0" label="لیبل فیلد" placeholder="حالت عادی" />
        <GenericInput class="mb-7 max-w-[295px] last:mb-0" label="لیبل فیلد" placeholder="حالت عادی" disabled />
        <GenericInput class="mb-7 max-w-[295px] last:mb-0" label="لیبل فیلد" placeholder="حالت عادی" />
        <GenericInput class="mb-7 max-w-[295px] last:mb-0" label="لیبل فیلد" placeholder="حالت عادی" error
            errorMassage="پیغام مقدار نامعتبر" />
        <GenericInput class="mb-7 max-w-[295px] last:mb-0" label="لیبل فیلد" placeholder="حالت عادی">
            <template #right-side>
                <GenericIcon name="search" class="text-xl ml-2" :pathCount="2"/>
            </template>
            <template #left-side>
                <GenericIcon name="search" class="text-xl mr-2" :pathCount="2"/>
            </template>
        </GenericInput>
        <GenericInput class="mb-7 max-w-[295px] last:mb-0" label="لیبل فیلد" placeholder="حالت عادی" disabled>
            <template #right-side>
                <GenericIcon name="search" class="text-xl ml-2" :pathCount="2"/>
            </template>
        </GenericInput>
        <GenericInput class="mb-7 max-w-[295px] last:mb-0" label="لیبل فیلد" placeholder="حالت عادی">
            <template #left-side>
                <GenericIcon name="search" class="text-xl mr-2" :pathCount="2"/>
            </template>
        </GenericInput>
    </div>
    <div class="container mb-between-section">
        <div class="flex items-center mb-10">
            <span class="ml-5 block">45px</span>
            <GenericBtn class="ml-5 last:ml-0" to="/design-system" theme="primary" rounded square iconName="left" />
            <GenericBtn class="ml-5 last:ml-0" to="/design-system" theme="primary" rounded lightness square
                iconName="left" />
            <GenericBtn class="ml-5 last:ml-0" to="/design-system" theme="success" rounded square iconName="left" />
            <GenericBtn class="ml-5 last:ml-0" to="/design-system" theme="primary" rounded lightness square
                iconName="left" />
            <GenericBtn class="ml-5 last:ml-0" to="/design-system" theme="success" rounded lightness square
                iconName="left" />
            <GenericBtn class="ml-5 last:ml-0 !rounded-l-none" to="/design-system" theme="primary" rounded lightness
                square iconName="left" />
            <GenericBtn class="ml-5 last:ml-0 !rounded-r-none" to="/design-system" theme="primary" rounded lightness
                square iconName="left" />
        </div>
        <div class="flex items-center mb-10">
            <span class="ml-5 block">35px</span>
            <GenericBtn to="/design-system" size="sm" gradient class="ml-5 last:ml-0">نمونه دکمه</GenericBtn>
            <GenericBtn to="/design-system" size="sm" gradient class="ml-5 last:ml-0">نمونه دکمه</GenericBtn>
        </div>
        <div class="flex items-center">
            <span class="ml-5 block">45px</span>
            <GenericBtn to="/design-system" gradient rounded iconName="star" class="ml-5 last:ml-0">
                    نمونه دکمه
            </GenericBtn>
            <GenericBtn to="/design-system" gradient iconName="star" class="ml-5 last:ml-0">
                    نمونه دکمه
            </GenericBtn>
            <GenericBtn to="/design-system" gradient rounded class="ml-5 last:ml-0">نمونه دکمه</GenericBtn>
            <GenericBtn to="/design-system" gradient class="ml-5 last:ml-0">نمونه دکمه</GenericBtn>
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
        <AppCardSpecial class="!w-1/3" to="/design-system" isMode isOnline isChosen bgImg="/img/background-img-1.png"
            img="/img/img-4.png" name="کلش رویال" description="Clash Royale" category="استراتژیک" :rate="5.1" />
    </div>

    <div class="container mb-between-section">
        <AppCardTrend class="!w-[22%]" to="/design-system" bgImg="/img/teaser.png" img="/img/img-4.png" name="کلش رویال"
            description="Clash Royale" :rate="5.1" />
    </div>

    <div class="container mb-between-section">
        <AppCardNormal to="/design-system" class="!w-[13%]" isOnline isChosen bgImg="/img/background-img-1.png"
            img="/img/img-5.png" name="کلش رویال" description="Clash Royale" category="استراتژیک" :rate="5.1" />
    </div>

    <div class="container mb-between-section">
        <DeveloperCardNormal to="/design-system" class="!w-[13%]" img="/img/brand.png" name="کلش رویال"
            description="Clash Royale" :gradient="{ from: '#FF1616', to: '#860000' }" />
    </div>


    <div class="container mb-between-section flex">
        <div class="w-[53%] pl-8">
            <ArticleCardSpecial hasVideo to="/design-system" bgImg="/img/img-2.png"
                title="بازی کال‌آودیوتی موبایل وارزون شروع ضعیفی را داشته است  بازی کال‌آودیوتی موبایل وارزون شروع ضعیفی را داشته است "
                description="به‌نظر می‌رسد عملکرد بازی به‌شدت ناامیدکننده بوده و ۶۷ درصد کمتر از برای اکتیویژن و تیم سازنده درآمدزایی داشته است"
                date="۲۰ فروردین ۱۴۰۳" />
        </div>
        <div class="w-[47%]">
            <ArticleCardRow hasVideo to="/design-system" imgSrc="/img/img-1.png"
                title="بازی کال‌آودیوتی موبایل وارزون شروع ضعیفی را داشته است " date="۲۰ فروردین ۱۴۰۳" />
            <ArticleCardRow hasVideo to="/design-system" imgSrc="/img/img-1.png"
                title="بازی کال‌آودیوتی موبایل وارزون شروع ضعیفی را داشته است " date="۲۰ فروردین ۱۴۰۳" />
            <ArticleCardRow hasVideo to="/design-system" imgSrc="/img/img-1.png"
                title="بازی کال‌آودیوتی موبایل وارزون شروع ضعیفی را داشته است " date="۲۰ فروردین ۱۴۰۳" />
            <ArticleCardRow hasVideo to="/design-system" imgSrc="/img/img-1.png"
                title="بازی کال‌آودیوتی موبایل وارزون شروع ضعیفی را داشته است " date="۲۰ فروردین ۱۴۰۳" />
        </div>
    </div>


    <div class="container mb-between-section">
        <GenericDropdownHeader to="/design-system" />
    </div>

    <div class="container mb-between-section">
        <GenericToolbarVertical to="/design-system" />
    </div>

    <div class="container mb-between-section flex items-center">
        <GenericLogo hasSubtitle/>
    </div>

    <div class="container mb-between-section flex items-center">
        <SectionsOurFitcher hasLogo/>
        <div class="flex mr-auto">
            <GenericBtn class="!rounded-l-none" to="/design-system" theme="primary" rounded lightness
                square iconName="right" />
            <GenericBtn class="!rounded-r-none" to="/design-system" theme="primary" rounded lightness
                square iconName="left" />
        </div>
    </div>

    <div class="container mb-between-section flex items-center">
        <GenericBtn tag="NuxtLink" to="/" iconName="dark-mode" :iconPathCount="0" class="ml-4 !w-[27px] !h-[27px] last:ml-0" lightness square rounded/>
        <GenericBtn tag="NuxtLink" to="/" iconName="profile" :iconPathCount="4" class="ml-4 last:ml-0" lightness square rounded/>
        <GenericBtn tag="NuxtLink" to="/" iconName="category" :iconPathCount="4" class="ml-4 last:ml-0" lightness square rounded/>
        <GenericBtn tag="NuxtLink" to="/" iconName="profile" :iconPathCount="4" class="ml-4 last:ml-0" lightness square rounded/>
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
