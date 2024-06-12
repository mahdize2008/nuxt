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
    <li class="flex">
        <div class="pr-5 pl-[18px] text-success flex items-start mt-2.5 justify-center tx-base font-medium" :class="'list-style-'+listStyleColor">
            <span v-if="listStyle==='number'">
                {{ number }}
            </span>
            <span v-if="listStyle==='circle'" class="circle block w-1.5 h-1.5 rounded-full bg-success"></span>
        </div>
        <div class="tx-sm grow font-medium text-dark py-0.5">
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