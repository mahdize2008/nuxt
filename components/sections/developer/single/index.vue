<script setup>
let {name, description, img, text, websiteLink, gradient } = defineProps({
    name: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    img: {
        type: String,
        default: ''
    },
    text: {
        type: String,
        default: ''
    },
    websiteLink: {
        type: String,
        default: ''
    },
    gradient: {
        type: Object,
        default: {}
    }
})
</script>

<template>
    <div class="flex items-start p-5">
        <div v-if="img" class="flex shrink-0 items-center justify-center h-[165px] w-[265px] p-4 rounded-xl ml-6"
            :style="`background:linear-gradient(180deg ,${gradient.from} 0%,${gradient.to} 100%)`">
            <img :src="img" class="max-w-full max-h-full" alt="">
        </div>
        <div class="grow">
            <div class="flex items-start mb-3">
                <div>
                    <h2 class="tx-sm text-primary font-medium mb-1">
                        {{ name }}
                    </h2>
                    <p class="tx-xs text-primary-beta font-medium">
                        {{ description }}
                    </p>
                </div>
                <a :href="websiteLink" class="flex items-center tx-xs text-primary font-medium mr-auto">
                    <GenericIcon name="dark-mode" class="text-md text-primary ml-2.5" />
                    وبسایت توسعه دهنده
                </a>
            </div>
            <p class="tx-xs text-primary text-justify">
                {{ text }}
            </p>
        </div>
    </div>
</template>