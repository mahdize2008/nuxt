<script setup>
let { title, number, listStyle } = defineProps({
    title: {
        type: String,
        default: ''
    },
    number: {
        type: String,
        default: 0
    },
    listStyle: {
        type: String,
        default: 'circle'
    }
})
</script>
<template>
    <li class="flex items-center">
        <div class="w-6 ml-2.5 text-success flex justify-center tx-base font-medium">
            <span v-if="listStyle==='number'">
                {{ number }}
            </span>
            <span v-if="listStyle==='circle'" class="block w-1.5 h-1.5 rounded-full bg-success"></span>
        </div>
        <div class="tx-sm grow font-medium text-primary py-2 pr-2.5 border-r-2 border-r-primary-tetha">
            {{ title }}
        </div>
    </li>
</template>