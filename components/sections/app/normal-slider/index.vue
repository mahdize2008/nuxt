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
        <GenericHeaderSection :title="headerSection.title" :subtitle="headerSection.subtitle" :category="headerSection.category" :link="headerSection.link" :iconName="headerSection.iconName" :iconPathCount="headerSection.iconPathCount"/>
        <Swiper :slidesPerView="7" class="!overflow-y-visible" :spaceBetween="16">
            <SwiperSlide v-for="(item, index) in items" :key="index">
                <AppCardNormal :to="item.to" :isOnline="item.isOnline" :hasSield="item.hasSield"
                        :bgImg="item.bgImg" :img="item.img" :name="item.name" :description="item.description"
                        :category="item.category" :rate="item.rate" />
            </SwiperSlide>
        </Swiper>
    </div>
</template>
<style scoped>
.swiper-btn:not(.swiper-button-disabled) {
    @apply !text-success
}
</style>