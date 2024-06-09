<script setup>
let { articles } = defineProps({
    articles: {
        type: Array,
        default: []
    }
})
</script>
<template>
    <!-- START-ARTICLE-SLIDER-ITEMS -->
    <div class="border-b-public-section pb-between-section mb-between-section">
        <SectionsArticleSpacialSlider class="container"
            :articles="articles" />
    </div>
    <!-- END-ARTICLE-SLIDER-ITEMS -->
</template>