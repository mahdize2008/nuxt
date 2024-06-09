<script setup>
let {articles}=defineProps({
    articles:{
        type:Array,
        default:[]
    }
})
</script>

<template>
    <div>
        <Swiper :modules="[SwiperNavigation]" :navigation="{nextEl:'.swiper-spacial-slider-next-btn',prevEl:'.swiper-spacial-slider-prev-btn'}" :slides-per-view="2" :space-between="16" class="relative rounded-xl overflow-hidden">
            <SwiperSlide v-for="(article , index) in articles" :key="index">
                <ArticleCardSpecial :bgImg="article.bgImg" :title="article.title" :description="article.description" :date="article.date" :hasVideo="article.hasVideo" :to="article.to" />
            </SwiperSlide>
            <GenericBtn iconName="right" class="swiper-btn swiper-spacial-slider-prev-btn transition-all absolute top-1/2 -translate-y-1/2 right-2.5 z-10" lightness rounded square />
            <GenericBtn iconName="left" class="swiper-btn swiper-spacial-slider-next-btn transition-all absolute top-1/2 -translate-y-1/2 left-2.5 z-10" lightness rounded square />
        </Swiper>
    </div>
</template>