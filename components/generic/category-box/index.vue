<script setup>
let {img,title,to}=defineProps({
    img:{
        type:String,
        default:''
    },
    name:{
        type:String,
        default:''
    },
    to:{
        type:String,
        default:''
    }
})
</script>
<template>
    <NuxtLink :to="to" class="flex items-center border-2 border-primary-tetha rounded-xl p-4 w-full tx-xs text-primary font-medium">
        <img :src="img" class="max-w-[30px] max-h-[30px] ml-4"/>
        {{ name }}
        <GenericIcon name="left mr-auto" class="text-4xs text-primary-beta"/>
    </NuxtLink>
</template>