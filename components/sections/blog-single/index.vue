<script setup>
let { articleSliderItems, articlesItems } = defineProps({
    articleSliderItems: {
        type: Array,
        default: []
    },
    articlesItems: {
        type: Array,
        default: []
    }
})


</script>

<template>
    <div class="container mb-between-section">
        <div class="-m-4 flex items-start">
            <SectionsBlogSingleMain :articlesItems="articlesItems" />


            <SectionsBlogSingleSidebar />
        </div>
    </div>
</template>