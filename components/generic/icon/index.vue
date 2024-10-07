<script setup>
    let {name , pathCount}=defineProps({
        name:{
            type:String,
            default:''
        },
        pathCount:{
            type:Number,
            default:0
        }
    })
</script>

<template>
    <i class="text-xl" :class="[`icon-${name}`]">
        <span v-for="(number , index) in pathCount" :key="index" :class="[`path${number}`]"></span>
    </i>
</template>

<style>
@import 'style.css';
</style>