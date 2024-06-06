<script setup>
let { properties, information, title, subtitle, isSpacial, isChosen, tags } = defineProps({
    properties: {
        type: Array,
        default: []
    },
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
    isSpacial: {
        type: Boolean,
        default: true
    },
    isChosen: {
        type: Boolean,
        default: true
    },
    tags: {
        type: Array,
        default: []
    }
})

</script>

<template>
    <div class=" py-[50px] border-b-public-section">
        <div class="container flex items-center">
            <div class="flex items-start mb-6">
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
            <div class="mr-auto">
                <GenericBtn iconName="download1" class="!px-20 mb-4" gradient rounded>
                    باکس دانلود
                </GenericBtn>
                <div class="flex items-center">
                    <NuxtLink to="/"
                        class="flex w-1/2 justify-center items-center text-primary-alpha tx-xs border-l-2 border-l-primary-tetha last:border-l-0 px-2 py-1">
                        اشتراک‌گذاری
                        <GenericIcon name="share1" class="text-lg mr-2" :pathCount="5" />
                    </NuxtLink>
                    <NuxtLink to="/"
                        class="flex w-1/2 justify-center items-center text-primary-alpha tx-xs border-l-2 border-l-primary-tetha last:border-l-0 px-2 py-1">
                        ذخیره
                        <GenericIcon name="share1" class="text-lg mr-2" :pathCount="5" />
                    </NuxtLink>
                    <!-- <GenericBtn iconName="share" class="!px-20 ml-2.5" theme="dark" rounded square :iconPathCount="5" />
                    <GenericBtn iconName="share" class="!px-20 ml-2.5" theme="dark" rounded square :iconPathCount="5" /> -->
                </div>
            </div>
        </div>
    </div>
</template>