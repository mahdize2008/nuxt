<script setup>
    let {color}=defineProps({
        color:{
            type:String,
            default:'white'
        }
    })
    function setColor(){
        return `box-${color}`
    }
</script>
<template>
    <div class="w-16 h-16 ml-1.5" :class="setColor()"></div>
</template>
<style scoped>
    .box-white{
        @apply bg-white border-2 border-black
    }
    .box-white-alpha{
        @apply bg-white/50 border-2 border-black
    }
    .box-black{
        @apply bg-black/50
    }
    .box-primary{
        @apply bg-primary
    }
    .box-primary-alpha{
        @apply bg-primary-alpha
    }
    .box-primary-beta{
        @apply bg-primary-beta
    }
    .box-primary-gamma{
        @apply bg-primary-gamma
    }
    .box-primary-tetha{
        @apply bg-primary-tetha
    }
    .box-success{
        @apply bg-success
    }
    .box-success-alpha{
        @apply bg-success-alpha
    }
    .box-success-gradient{
        @apply bg-success-gradient
    }
    .box-warning{
        @apply bg-warning
    }
    .box-danger{
        @apply bg-danger
    }
    .box-danger-alpha{
        @apply bg-danger-alpha
    }
</style>