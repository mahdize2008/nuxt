<script setup>
let {items}=defineProps({
    items:{
        type:Array,
        default:[]
    }
})
</script>
<template>
    <ul>
        <li v-for="(item,index) in items" class="mb-2 last:mb-0" :key="index">
            <NuxtLink class="block py-1 hover:text-success transition-all tx-xs font-medium text-primary"
                :to="item.to">
                {{ item.title }}
            </NuxtLink>
        </li>
    </ul>
</template>