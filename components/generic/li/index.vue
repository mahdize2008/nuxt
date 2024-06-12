<script setup>
let { title, number, listStyle } = defineProps({
    title: {
        type: String,
        default: ''
    },
    listStyleColor: {
        type: String,
        default: 'success'
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
    <li class="flex items-start">
        <div class="w-6 ml-2.5 text-success flex justify-center mt-2.5 tx-base font-medium" :class="'list-style-'+listStyleColor">
            <span v-if="listStyle==='number'">
                {{ number }}
            </span>
            <span v-if="listStyle==='circle'" class="circle block w-1.5 h-1.5 rounded-full bg-success"></span>
        </div>
        <div class="tx-sm grow font-medium text-primary py-2 pr-2.5 border-r-2 border-r-primary-tetha">
            {{ title }}
        </div>
    </li>
</template>

<style scoped>
.list-style-success{
    @apply text-success
}
.list-style-success .circle{
    @apply bg-success
}
.list-style-danger{
    @apply text-danger
}
.list-style-danger .circle{
    @apply bg-danger
}
</style>