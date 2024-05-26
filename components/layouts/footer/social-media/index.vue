<script setup>
let {items}=defineProps({
    items:{
        type:Array,
    default:[]
    }
})
</script>
<template>
    <div>
        <h3 class="tx-xs text-primary text-center font-medium mb-3.5">
            رویدینو در شبکه‌های اجتماعی
        </h3>
        <ul class="flex items-center -m-2.5">
            <li v-for="(item , index) in items" :key="index">
                <NuxtLink class="block text-primary p-2.5 hover:text-success transition-all" :to="item.to">
                    <GenericIcon :name="item.iconName" :pathCount="item.iconPathCount" class="text-2xl"/>
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>