<script setup>
let { items, headerSection } = defineProps({
    items: {
        type: Array,
        default: []
    },
    headerSection: {
        type: Object,
        default: {}
    }
});
</script>

<template>
    <div class="container">
        <GenericHeaderSectionSecondary :title="headerSection.title" :link="headerSection.link"/>
        <Swiper :slides-per-view="4" :space-between="16">
            <SwiperSlide v-for="(article , index) in items" :key="index">
                <ArticleCardVertical :to="article.to" :img="article.img"
                    :title="article.title" :date="article.date" />
            </SwiperSlide>
        </Swiper>
    </div>
</template>


<style></style>