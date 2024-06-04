<script setup>
let { items, headerSection } = defineProps({
    items: {
        type: Array,
        default: []
    },
    headerSection: {
        type: Object,
        default: {}
    },
    isSwiperBtn: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <div>
        <div class="relative">
            <GenericHeaderSection :title="headerSection.title" :subtitle="headerSection.subtitle"
                :grouping="headerSection.grouping" :category="headerSection.category" :link="headerSection.link"
                :iconName="headerSection.iconName" :iconPathCount="headerSection.iconPathCount" />
            <Swiper :modules="[SwiperNavigation]" :navigation="{nextEl:'.swiper-next-btn',prevEl:'.swiper-prev-btn'}" :slidesPerView="7" class="!p-[60px] !-m-[60px]" :spaceBetween="16">
                <SwiperSlide v-for="(item, index) in items" :key="index">
                    <AppCardNormal :to="item.to" :isOnline="item.isOnline" :isChosen="item.isChosen" :bgImg="item.bgImg"
                        :img="item.img" :name="item.name" :description="item.description" :category="item.category"
                        :rate="item.rate" />
                </SwiperSlide>
            </Swiper>
            <GenericBtn v-if="isSwiperBtn" iconName="right" class="swiper-btn swiper-prev-btn transition-all absolute top-1/2 -translate-y-1/2 right-2.5 z-10" lightness rounded square />
            <GenericBtn v-if="isSwiperBtn" iconName="left" class="swiper-btn swiper-next-btn transition-all absolute top-1/2 -translate-y-1/2 left-2.5 z-10" lightness rounded square />
        </div>
    </div>
</template>
<style scoped>
.swiper-btn:not(.swiper-button-disabled) {
    @apply !bg-success !text-white
}
</style>