<script setup>
let {description,categories}=defineProps({
    description:{
        type:String,
        default:''
    },
    categories:{
        type:Array,
        default:[]
    }
})
</script>
<template>
    <div>
        <GenericHeaderSection title="انتخاب دسته‌بندی" subtitle="جدیدترین بازی‌های اندروید"/>
        <p class="tx-xs text-primary font-medium mb-4">
            {{ description }}
        </p>
        <ul class="flex items-center flex-wrap -m-2">
            <li class="p-2 w-1/5" v-for="(item,index) in categories" :key="index">
                <GenericCategoryBox :name="item.name" :img="item.img" :to="item.to"/>
            </li>
        </ul>
    </div>
</template>