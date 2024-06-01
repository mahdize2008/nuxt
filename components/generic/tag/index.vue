<script setup>
let {to}=defineProps({
    to:{
        type:String,
        default:''
    }
})
</script>
<template>
    <NuxtLink :to="to"
        class="hover:text-white hover:bg-success bg-success-alpha rounded-full block py-1 px-2.5 relative text-success transition-all tx-xs">
        <slot/>
    </NuxtLink>
</template>