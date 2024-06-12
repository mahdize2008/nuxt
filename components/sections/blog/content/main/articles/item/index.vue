
<script setup>
let { title, text, img, to, options } = defineProps({
    title: {
        type: String,
        default: ''
    },
    text: {
        type: String,
        default: ''
    },
    img: {
        type: String,
        default: ''
    },
    to: {
        type: String,
        default: ''
    },
    options: {
        type: Array,
        default: []
    }
})
</script>

<template>
    <NuxtLink :to="to" class="block p-5 rounded-4xl border-2 border-primary-tetha">
        <img :src="img" class="rounded-xl mb-5 w-full h-[290px] object-center object-cover">
        <h2 class="mb-2.5 tx-base text-primary font-medium">
            {{ title }}
        </h2>
        <ul class="-m-[30px] -mb-3.5 flex items-center">
            <li class="p-[30px] flex items-center tx-xs text-primary" v-for="(option, index) in options" :key="index">
                <GenericIcon name="youtube" class="text-lg text-primary-beta ml-2" />
                {{ option.name }}
            </li>
        </ul>
        <p class="tx-xs text-primary">
            {{ text }}
        </p>
    </NuxtLink>
</template>