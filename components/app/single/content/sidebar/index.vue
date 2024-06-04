<script setup>
let { information, title, subtitle,isChosen, developerSupport } = defineProps({
    information: {
        type: Array,
        default: []
    },
    title: {
        type: String,
        default: ''
    },
    subtitle: {
        type: String,
        default: ''
    },
    isChosen: {
        type: Boolean,
        default: true
    },
    developerSupport: {
        type: Array,
        default: []
    }
})

let developersProducts = [
    {
        img: '/img/img-7.png',
        name: 'کلش رویال',
        subtitle: 'Clash Royale',
        rate: 5.1,
        to:'/'
    },
    {
        img: '/img/img-7.png',
        name: 'کلش رویال',
        subtitle: 'Clash Royale',
        rate: 5.1,
        to:'/'
    },
    {
        img: '/img/img-7.png',
        name: 'کلش رویال',
        subtitle: 'Clash Royale',
        rate: 5.1,
        to:'/'
    },
    {
        img: '/img/img-7.png',
        name: 'کلش رویال',
        subtitle: 'Clash Royale',
        rate: 5.1,
        to:'/'
    }
]

let apps = [
    {
        img: '/img/img-7.png',
        name: 'کلش رویال',
        subtitle: 'Clash Royale',
        rate: 5.1,
        to:'/'
    },
    {
        img: '/img/img-7.png',
        name: 'کلش رویال',
        subtitle: 'Clash Royale',
        rate: 5.1,
        to:'/'
    },
    {
        img: '/img/img-7.png',
        name: 'کلش رویال',
        subtitle: 'Clash Royale',
        rate: 5.1,
        to:'/'
    },
    {
        img: '/img/img-7.png',
        name: 'کلش رویال',
        subtitle: 'Clash Royale',
        rate: 5.1,
        to:'/'
    }
]
</script>

<template>
    <div class="p-4 w-[20%]">
        <div class="p-5 rounded-xl border border-primary-tetha mb-11">
            <div class="flex items-start mb-5">
                <img src="/img/img-6.png" class="w-20 h-20 rounded-4xl ml-6" alt="">
                <div>
                    <div class="flex items-center mb-1">
                        <h2 class="tx-sm text-primary font-medium ml-1.5">
                            {{ title }}
                        </h2>
                        <GenericIcon v-if="isChosen" name="checked" class="text-secondary-alpha text-sm" />
                    </div>
                    <p class="tx-xs font-medium text-primary-beta mb-3">
                        {{ subtitle }}
                    </p>
                </div>
            </div>
            <ul class="-my-5">
                <li v-for="(item, index) in information" :key="index"
                    class="py-5 flex items-center text-primary-alpha tx-xs border-b-2 border-b-primary-tetha last:border-b-0">
                    {{ item.title }}
                    <div class="flex items-center text-primary tx-sm font-medium mr-auto">
                        {{ item.text }}
                        <GenericIcon class="text-xs text-warning mr-1" v-if="item.icon" :name="item.icon"
                            :pathCount="item.iconPathCount" />
                    </div>
                </li>
            </ul>
            <div class="mt-5">
                <GenericBtn iconName="download1" class="!px-6 !w-full mb-4" gradient rounded>
                    باکس دانلود
                </GenericBtn>
                <div class="flex items-center">
                    <NuxtLink to="/"
                        class="flex w-1/2 justify-center items-center text-primary-alpha tx-xs border-l-2 border-l-primary-tetha last:border-l-0 p-1">
                        اشتراک‌گذاری
                        <GenericIcon name="share1" class="text-lg mr-2" :pathCount="5" />
                    </NuxtLink>
                    <NuxtLink to="/"
                        class="flex w-1/2 justify-center items-center text-primary-alpha tx-xs border-l-2 border-l-primary-tetha last:border-l-0 p-1">
                        ذخیره
                        <GenericIcon name="share1" class="text-lg mr-2" :pathCount="5" />
                    </NuxtLink>
                    <!-- <GenericBtn iconName="share" class="!px-20 ml-2.5" theme="dark" rounded square :iconPathCount="5" />
                        <GenericBtn iconName="share" class="!px-20 ml-2.5" theme="dark" rounded square :iconPathCount="5" /> -->
                </div>
            </div>
        </div>
        <AppSingleContentSidebarDeveloperSupport class="mb-11" :items="developerSupport" />
        <AppSingleContentSidebarProducts class="mb-11" :products="developersProducts" header="سایر محصولات توسعه‌دهنده"/>
        <AppSingleContentSidebarProducts :products="apps" header="برنامه‌های مرتبط"/>
    </div>
</template>