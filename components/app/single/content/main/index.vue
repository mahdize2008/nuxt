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
        <AppSingleContentMainSlider class="mb-8" :items="mainSliderItems"/>
        <AppSingleContentMainIntroductionBox class="mb-8"/>
        <AppSingleContentMainDownloadBox class="mb-8" :downloadItems="downloadItems"/>
        <AppSingleContentMainCommentsBox class="mb-8" :downloadItems="downloadItems"/>
        <AppSingleContentMainMedia class="mb-8" :downloadItems="downloadItems"/>
    </div>
</template>