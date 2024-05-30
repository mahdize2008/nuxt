<script setup>
let {items}=defineProps({
    items:{
        type:Array,
        default:[]
    }
})
</script>

<template>
    <ul class="flex items-center -mx-[18px]">
        <li v-for="(item,index) in items" :key="index" class="route-item last:after:!hidden relative text-primary-beta">
            <NuxtLink class="block tx-xs px-[18px] font-medium" :to="item.to">
                {{ item.title }}
            </NuxtLink>
        </li>
    </ul>
</template>

<style scoped>
.route-item::after{
    font-family: 'icomoon' !important;
    content: "\e924";
    @apply text-4xs absolute left-0 top-1/2 -translate-y-1/2 text-primary-beta -translate-x-1/2;
}
.route-item:first-child{
    @apply text-primary;
}
</style>