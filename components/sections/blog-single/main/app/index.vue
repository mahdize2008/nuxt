<script setup>
let { img, information, name, download } = defineProps({
    img: {
        type: String,
        default: ''
    },
    information: {
        type: Array,
        default: []
    },
    name: {
        type: String,
        default: ''
    },
    download: {
        type: String,
        default: ''
    }
})

</script>

<template>
    <div class="flex items-center">
        <div class="flex">
            <img :src="img" class="w-20 h-20 rounded-md ml-4" alt="">
            <div class="flex flex-col justify-between">
                <h2 class="tx-sm text-primary font-medium ml-1.5">
                    {{ name }}
                </h2>
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
        <GenericBtn gradient tag="a" :href="download" iconName="download1" class="!px-[68px] mr-auto">
            دانلود
        </GenericBtn>
    </div>
</template>