<script setup>
let { hasSubtitle }=defineProps({
    hasSubtitle:{
        type:Boolean,
        default:false
    }
})
</script>
<template>
    <NuxtLink class="block" to="/">
        <img src="/img/logo.png">
        <h3 v-if="hasSubtitle" class="text-primary-beta mt-0.5 tx-xs">
            دانلود اپلیکیشن و بازی اندروید
        </h3>
    </NuxtLink>
</template>