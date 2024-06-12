<script setup>
let contents = [
    {
        name: 'مقدمه',
        href: ''
    },
    {
        name: 'تلاش برای بازگشت به ریشه‌ها',
        href: ''
    },
    {
        name: 'یک حشاشی واقعی',
        href: ''
    },
    {
        name: 'مبارزات سخت اما مخفی‌کاری در اوج',
        href: ''
    }
]

let listItems = [
    {
        title: 'تلاش برای بازگشت به ریشه‌ها',
        listStyle: 'number'
    },
    {
        title: 'مبارزات سخت اما مخفی‌کاری در اوج',
        listStyle: 'number'
    },
    {
        title: 'تلاش برای بازگشت به ریشه‌ها',
        listStyle: 'number'
    },
    {
        title: 'تلاش برای بازگشت به ریشه‌ها',
        listStyle: 'number'
    },
    {
        title: 'مبارزات سخت اما مخفی‌کاری در اوج',
        listStyle: 'number'
    },
    {
        title: 'تلاش برای بازگشت به ریشه‌ها',
        listStyle: 'number'
    },
]
let listItems2 = [
    {
        title: 'تلاش برای بازگشت به ریشه‌ها',
        listStyle: 'circle'
    },
    {
        title: 'تلاش برای بازگشت به ریشه‌ها',
        listStyle: 'circle'
    },
    {
        title: 'تلاش برای بازگشت به ریشه‌ها',
        listStyle: 'circle'
    },
    {
        title: 'تلاش برای بازگشت به ریشه‌ها',
        listStyle: 'circle'
    },
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

let articles = [
    {
        to: '/',
        img: '/img/img-19.png',
        title: 'حضور بیشتر تروفی‌ های پلی استیشن، این‌بار روی کامپیوترهای شخصی',
        date: '۲۰ فروردین ۱۴۰۳',
        isSuggest: true
    },
    {
        to: '/',
        img: '/img/img-19.png',
        title: 'حضور بیشتر تروفی‌ های پلی استیشن، این‌بار روی کامپیوترهای شخصی',
        date: '۲۰ فروردین ۱۴۰۳',
        isSuggest: false
    },
    {
        to: '/',
        title: 'حضور بیشتر تروفی‌ های پلی استیشن، این‌بار روی کامپیوترهای شخصی',
        date: '۲۰ فروردین ۱۴۰۳',
        isSuggest: true
    }
]
</script>

<template>
    <div class="grow p-4">
        <div class="p-10 rounded-xl border-2 border-primary-tetha">
            <img src="/img/img-17.png" class="w-full aspect-video mb-8" />
            <h1 class="tx-lg text-primary font-medium mb-2.5">
                تست شخصیت‌شناسی DISC چیست و چرا باید این تست را انجام بدهیم؟
            </h1>
            <h2 class="tx-base text-primary-alpha font-medium mb-8">
                لورم ایپسوم، متن ساختگی با تولید نامفهوم در صنعت چاپ!
            </h2>
            <div class="flex items-center py-5 mb-10 border-y-2 border-y-primary-tetha">
                <div class="flex items-center text-xs text-primary ml-8">
                    <div class="w-11 h-11 rounded-full bg-black/15 ml-2"></div>
                    نویسنده رویدینو
                </div>
                <ul class="flex items-center -m-4">
                    <li class="p-4 flex items-center text-primary tx-xs">
                        <GenericIcon name="youtube" class="text-xl text-primary-beta ml-2" />
                        ۲۰ فروردین ۱۴۰۳
                    </li>
                    <li class="p-4 flex items-center text-primary tx-xs">
                        <GenericIcon name="youtube" class="text-xl text-primary-beta ml-2" />
                        ۲۰ فروردین ۱۴۰۳
                    </li>
                    <li class="p-4 flex items-center text-primary tx-xs">
                        <GenericIcon name="youtube" class="text-xl text-primary-beta ml-2" />
                        ۲۰ فروردین ۱۴۰۳
                    </li>
                    <li class="p-4 flex items-center text-primary tx-xs">
                        <GenericIcon name="youtube" class="text-xl text-primary-beta ml-2" />
                        ۲۰ فروردین ۱۴۰۳
                    </li>
                </ul>
                <GenericBtn lightness rounded iconName="share1" :iconPathCount="5" iconLeftSide class="mr-auto">
                    اشتراک گذاری
                </GenericBtn>
            </div>
            <p class="tx-xs text-primary mb-10">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
                بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع
                است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
                متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
                متنوع است.
            </p>
            <SectionsBlogSingleMainContentsList class="mb-10" :contents="contents" />
            <div class="-m-2 flex h-[355px] mb-10">
                <div class="w-1/2 p-2 h-full">
                    <img src="/img/img-18.png" class="w-full h-full" alt="">
                </div>
                <div class="w-1/2 p-2 h-full">
                    <img src="/img/img-18.png" class="w-full h-full" alt="">
                </div>
            </div>
            <p class="tx-xs text-primary mb-10">
                گیفت کارت‌های اپل، هدیه‌ای محبوب و جذاب برای علاقه مندان محصولات و خدمات این شرکت هستند. اما اگر قصد خرید
                گیفت کارت اپل را دارید، ممکن است با انواع مختلفی از گیفت کارت اپل مواجه شوید که دو نوع رایج آن گیفت کارت‌های
                آمریکا و انگلیس است. اگر نمی‌دانید که فرق گیفت کارت اپل آمریکا و انگلیس چیست، با ما در این مطلب از وب سایت
                تکنوسان مگ همراه باشید تا در این زمینه اطلاعات جامع و کاملی را به شما ارائه دهیم.
            </p>
            <h1 class="tx-md mb-8">
                لورم ایپسوم، متن ساختگی با تولید نامفهوم در صنعت چاپ!
            </h1>
            <h2 class="tx-base mb-8">
                لورم ایپسوم، متن ساختگی با تولید نامفهوم در صنعت چاپ!
            </h2>
            <h3 class="tx-sm mb-8">
                لورم ایپسوم، متن ساختگی با تولید نامفهوم در صنعت چاپ!
            </h3>
            <h4 class="tx-xs mb-10">
                لورم ایپسوم، متن ساختگی با تولید نامفهوم در صنعت چاپ!
            </h4>
            <p class="tx-xs text-primary mb-10">
                گیفت کارت‌های اپل، هدیه‌ای محبوب و جذاب برای علاقه مندان محصولات و خدمات این شرکت هستند. اما اگر قصد خرید
                گیفت کارت اپل را دارید، ممکن است با انواع مختلفی از گیفت کارت اپل مواجه شوید که دو نوع رایج آن گیفت کارت‌های
                آمریکا و انگلیس است. اگر نمی‌دانید که فرق گیفت کارت اپل آمریکا و انگلیس چیست، با ما در این مطلب از وب سایت
                تکنوسان مگ همراه باشید تا در این زمینه اطلاعات جامع و کاملی را به شما ارائه دهیم.
            </p>
            <ul class="mb-10">
                <GenericLi v-for="(item, index) in listItems" :key="index" :number="index + 1" :title="item.title"
                    :listStyle="item.listStyle" />
            </ul>
            <ul class="mb-10">
                <GenericLi v-for="(item, index) in listItems2" :key="index" :number="index + 1" :title="item.title"
                    :listStyle="item.listStyle" />
            </ul>
            <p class="tx-xs text-primary mb-10">
                گیفت کارت‌های اپل، هدیه‌ای محبوب و جذاب برای علاقه مندان محصولات و خدمات این شرکت هستند. اما اگر قصد خرید
                گیفت کارت اپل را دارید، ممکن است با انواع مختلفی از گیفت کارت اپل مواجه شوید که دو نوع رایج آن گیفت کارت‌های
                آمریکا و انگلیس است. اگر نمی‌دانید که فرق گیفت کارت اپل آمریکا و انگلیس چیست، با ما در این مطلب از وب سایت
                تکنوسان مگ همراه باشید تا در این زمینه اطلاعات جامع و کاملی را به شما ارائه دهیم.
                گیفت کارت‌های اپل، هدیه‌ای محبوب و جذاب برای علاقه مندان محصولات و خدمات این شرکت هستند. اما اگر قصد خرید
                گیفت کارت اپل را دارید، ممکن است با انواع مختلفی از گیفت کارت اپل مواجه شوید که دو نوع رایج آن گیفت کارت‌های
                آمریکا و انگلیس است. اگر نمی‌دانید که فرق گیفت کارت اپل آمریکا و انگلیس چیست، با ما در این مطلب از وب سایت
                تکنوسان مگ همراه باشید تا در این زمینه اطلاعات جامع و کاملی را به شما ارائه دهیم.
            </p>
            <SectionsFaq :items="accordionItems" class="mb-10" />

            <article class="flex flex-col items-center mb-10">
                <figure class="mb-4">
                    <img src="/img/img-19.png" class="w-[800px]" alt="">
                </figure>
                <figcaption class="tx-xs text-primary-alpha flex items-center">
                    <span class="w-1.5 h-1.5 bg-success ml-2 block rounded-full"></span>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
                    متون بلکه روزنامه و مجله در ستون و سطرآنچنان است.
                </figcaption>
            </article>
            <p class="tx-xs text-primary mb-10">
                گیفت کارت‌های اپل، هدیه‌ای محبوب و جذاب برای علاقه مندان محصولات و خدمات این شرکت هستند. اما اگر قصد خرید
                گیفت کارت اپل را دارید، ممکن است با انواع مختلفی از گیفت کارت اپل مواجه شوید که دو نوع رایج آن گیفت کارت‌های
                آمریکا و انگلیس است. اگر نمی‌دانید که فرق گیفت کارت اپل آمریکا و انگلیس چیست، با ما در این مطلب از وب سایت
                تکنوسان مگ همراه باشید تا در این زمینه اطلاعات جامع و کاملی را به شما ارائه دهیم.
                گیفت کارت‌های اپل، هدیه‌ای محبوب و جذاب برای علاقه مندان محصولات و خدمات این شرکت هستند. اما اگر قصد خرید
                گیفت کارت اپل را دارید، ممکن است با انواع مختلفی از گیفت کارت اپل مواجه شوید که دو نوع رایج آن گیفت کارت‌های
                آمریکا و انگلیس است. اگر نمی‌دانید که فرق گیفت کارت اپل آمریکا و انگلیس چیست، با ما در این مطلب از وب سایت
                تکنوسان مگ همراه باشید تا در این زمینه اطلاعات جامع و کاملی را به شما ارائه دهیم.
            </p>

            <div class="mb-10">
                <SectionsBlogSingleMainArticles class="mb-10 last:mb-0" v-for="(article, index) in articles" :key="index"
                    :to="article.to" :title="article.title" :date="article.date" :isSuggest="article.isSuggest"
                    :img="article.img" />
            </div>

            <p class="tx-xs text-primary mb-10">
                گیفت کارت‌های اپل، هدیه‌ای محبوب و جذاب برای علاقه مندان محصولات و خدمات این شرکت هستند. اما اگر قصد خرید
                گیفت کارت اپل را دارید، ممکن است با انواع مختلفی از گیفت کارت اپل مواجه شوید که دو نوع رایج آن گیفت کارت‌های
                آمریکا و انگلیس است. اگر نمی‌دانید که فرق گیفت کارت اپل آمریکا و انگلیس چیست، با ما در این مطلب از وب سایت
                تکنوسان مگ همراه باشید تا در این زمینه اطلاعات جامع و کاملی را به شما ارائه دهیم.
            </p>


            <img src="/img/img-6.png" class="w-[150px] h-[150px] rounded-4xl ml-6" alt="">
                <div>
                    <div class="flex items-center mb-1">
                        <h2 class="tx-lg text-primary font-medium ml-1.5">
                            {{ title }}
                        </h2>
                        <GenericIcon v-if="isChosen" name="checked" class="text-secondary-alpha text-sm" />
                    </div>
                    <p class="tx-xs font-medium text-primary-beta mb-3">
                        {{ subtitle }}
                    </p>
                    <div class="flex items-center mb-5">
                        <GenericTag v-for="(tag, index) in tags" :key="index" theme="light" class="ml-4">
                            {{ tag }}
                        </GenericTag>
                        <div v-if="isSpacial" class="flex items-center text-success tx-xs ml-4">
                            <GenericIcon name="chosen" class="text-success text-lg ml-1.5" />
                            منتخب رویدینو
                        </div>
                        <ul class="flex items-center -m-4">
                            <li v-for="(item, index) in properties" :key="index"
                                class="p-4 flex items-center text-primary/70 tx-xs">
                                <GenericIcon class="text-primary-alpha text-md ml-1.5" v-if="item.icon" :name="item.icon"
                                    :pathCount="item.iconPathCount" />
                                {{ item.title }}
                            </li>
                        </ul>
                    </div>
                    <ul class="flex -m-4">
                        <li v-for="(item, index) in information" :key="index"
                            class="p-4 relative flex flex-col items-center text-primary-alpha tx-xs after:w-0.5 after:h-[calc((100%-32px)/2)] after:bg-primary/10 after:absolute after:top-1/2 after:-translate-y-1/2 after:left-0 last:after:hidden">
                            <div class="flex items-center text-primary tx-sm font-medium mb-1.5">
                                {{ item.text }}
                                <GenericIcon class="text-xs text-warning mr-1" v-if="item.icon" :name="item.icon"
                                    :pathCount="item.iconPathCount" />
                            </div>
                            {{ item.title }}
                        </li>
                    </ul>
                </div>

    </div>
</div></template>