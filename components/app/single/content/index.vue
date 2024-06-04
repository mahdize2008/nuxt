<script setup>
let { information, product, developerSupport, mainSliderItems ,downloadItems } = defineProps({
    information: {
        type: Array,
        default: []
    },
    product: {
        type: Object,
        default: {}
    },
    developerSupport: {
        type: Array,
        default: []
    },
    mainSliderItems:{
        type:Array,
        defaulut:[]
    },
    downloadItems:{
        type:Array,
        defaulut:[]
    }
})
</script>

<template>
    <div class="container mb-between-section">
        <div class="flex items-start -m-4">
            <AppSingleContentMain :downloadItems="downloadItems" :mainSliderItems="mainSliderItems"/>
            <AppSingleContentSidebar :developerSupport="developerSupport" :title="product.title" :tags="product.tags" :subtitle="product.subtitle" :isSpacial="product.isSpacial" :isChosen="product.isChosen" :information="information"/>
        </div>
    </div>
</template>