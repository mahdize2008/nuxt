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
    <div class="relative">
        <img src="/img/back-3.png" class="w-full" alt="">
        <div class="w-full h-full absolute top-0 right-0 z-10" style="background: radial-gradient(51.62% 95.32% at 41.98% 8.16%, rgba(46, 50, 88, 0.26) 0%, #1A1E3D 100%)"></div>
        <div class="absolute w-full bottom-[60px] right-0 z-20">
            <div class="container">
                <div class="flex items-start mb-6">
                    <img src="/img/img-6.png" class="w-[150px] h-[150px] rounded-4xl ml-6" alt="">
                    <div>
                        <div class="flex items-center mb-2.5">
                            <h2 class="tx-lg text-white font-medium ml-1.5">
                                {{ title }}
                            </h2>
                            <GenericIcon v-if="isChosen" name="checked" class="text-secondary-alpha text-sm"/>
                        </div>
                        <p class="tx-xs font-medium text-white/70 mb-3">
                            {{ subtitle }}
                        </p>
                        <div class="flex items-center">
                            <GenericTag v-for="(tag,index) in tags" :key="index" theme="dark" class="ml-4">
                                {{tag}}
                            </GenericTag>
                            <div v-if="isSpacial" class="flex items-center text-white/70 tx-xs">
                                <GenericIcon name="chosen" class="text-success text-lg ml-1.5"/>
                                منتخب رویدینو
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex items-end">
                    <div>
                        <ul class="flex items-center -m-4">
                            <li v-for="(item,index) in properties" :key="index" class="p-4 flex items-center text-white/70 tx-xs">
                                <GenericIcon class="text-white text-md ml-1.5" v-if="item.icon" :name="item.icon" :pathCount="item.iconPathCount"/>
                                {{ item.title }}
                            </li>
                        </ul>
                        <ul class="flex -m-4">
                            <li v-for="(item,index) in information" :key="index" class="p-4 relative flex flex-col items-center text-white/70 tx-xs after:w-0.5 after:h-[calc((100%-32px)/2)] after:bg-white/10 after:absolute after:top-1/2 after:-translate-y-1/2 after:left-0 last:after:hidden">
                                <div class="flex items-center text-white tx-sm font-medium mb-1.5">
                                    {{ item.text }}
                                    <GenericIcon class="text-xs text-white/70 mr-1" v-if="item.icon" :name="item.icon" :pathCount="item.iconPathCount"/>
                                </div>
                                {{ item.title }}
                            </li>
                        </ul>
                    </div>
                    <div class="flex items-center mr-auto">
                        <GenericBtn iconName="share" class="!px-20 ml-2.5" theme="dark" rounded square :iconPathCount="5"/>
                        <GenericBtn iconName="share" class="!px-20 ml-2.5" theme="dark" rounded square :iconPathCount="5"/>
                        <GenericBtn iconName="download1" class="!px-20" gradient rounded>
                            باکس دانلود
                        </GenericBtn>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>