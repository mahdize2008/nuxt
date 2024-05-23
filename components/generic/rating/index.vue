<script setup>
let {rate,dark}=defineProps({
    rate:{
        type:Number,
        default:0
    },
    theme:{
        type:String,
        default:'light'
    }
})
</script>
<template>
    <div class="text-white flex items-center">
        <span class="block ml-1.5 tx-xs leading-none" :class="{'text-primary' : theme==='dark'}">
            {{ rate }}
        </span>
        <GenericIcon name="star" class="text-warning text-base" />
    </div>
</template>