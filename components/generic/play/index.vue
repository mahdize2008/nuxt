<script setup>
let {size}=defineProps({
    size:{
        type:String,
        default:'lg'
    }
})
</script>

<template>
    <div
        class="w-[73px] h-[73px] top-5 left-5 absolute bg-primary-beler border border-white/20 rounded-full mr-auto text-15xl flex items-center justify-center z-10 [&.play-btn-sm]:w-[27px] [&.play-btn-sm]:h-[27px] [&.play-btn-sm]:text-md [&.play-btn-sm]:left-1.5 [&.play-btn-sm]:top-1.5" :class="{'play-btn-sm':size==='sm'}">
        <GenericIcon name="play" class="text-white" square rounded lightness />
    </div>
</template>