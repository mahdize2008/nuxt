<script setup>
let {mainSliderItems,downloadItems}=defineProps({
    mainSliderItems:{
        type:Array,
        default:[]
    },
    downloadItems:{
        type:Array,
        default:[]
    }
})
</script>
<template>
    <div class="w-[80%] p-4">
        <AppSingleContentMainSlider class="mb-8 last:mb-0" :items="mainSliderItems"/>
        <AppSingleContentMainIntroductionBox class="mb-8 last:mb-0"/>
        <AppSingleContentMainDownloadBox class="mb-8 last:mb-0" :downloadItems="downloadItems"/>
        <AppSingleContentMainCommentsBox class="mb-8 last:mb-0" :downloadItems="downloadItems"/>
        <AppSingleContentMainMedia class="mb-8 last:mb-0" :downloadItems="downloadItems"/>
    </div>
</template>