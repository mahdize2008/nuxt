<script setup>
let {product,properties,information, developerSupport, mainSliderItems ,downloadItems}=defineProps({
    product:{
        type:Object,
        default:{}
    },
    properties:{
        type:Array,
        default:[]
    },
    information:{
        type:Array,
        default:[]
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
    <div>
        <!-- START-SINGLE-HEADER -->
        <AppSingleHeader :product="product" :type="type" :properties="properties" :information="information" class="mb-between-section" />
        <!-- END-SINGLE-HEADER -->

        <!-- START-SINGLE-CONTENT -->
        <AppSingleContent :information="information" :product="product" :developerSupport="developerSupport" :mainSliderItems="mainSliderItems" :downloadItems="downloadItems" class="mb-between-section"/>
        <!-- END-SINGLE-CONTENT -->
    </div>
</template>