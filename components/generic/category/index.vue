<script setup>
let {iconName,iconPathCount,title,link}=defineProps({
    iconName:{
        type:String
    },
    iconPathCount:{
        type:Number
    },
    title:{
        type:String
    },
    link:{
        type:String
    }
})
</script>

<template>
  <NuxtLink :to="link" class="w-[170px] h-[145px] flex items-center justify-center flex-col border border-dark-alpha rounded-sm">
    <GenericIcon :name="iconName" class="mb-4 text-7xl mx-auto"/>
    <h2 class="text-base text-black text-center">
        {{title}}
    </h2>
  </NuxtLink>
</template>

<style>

</style>