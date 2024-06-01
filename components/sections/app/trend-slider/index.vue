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
})
</script>

<template>
    <div>
        <GenericHeaderSection :title="headerSection.title" :subtitle="headerSection.subtitle" :category="headerSection.category" :grouping="headerSection.grouping" :link="headerSection.link" :iconName="headerSection.iconName" :iconPathCount="headerSection.iconPathCount"/>
        <Swiper :slidesPerView="4" :spaceBetween="16">
            <SwiperSlide v-for="(item, index) in items" :key="index">
                <AppCardTrend :to="item.to" :bgImg="item.bgImg" :img="item.img" :name="item.name"
                    :description="item.description" :rate="item.rate" />
            </SwiperSlide>
        </Swiper>
    </div>
</template>
<style scoped>
.swiper-btn:not(.swiper-button-disabled) {
    @apply !text-success
}
</style>