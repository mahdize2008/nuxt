<script setup>
let { items } = defineProps({
    items: {
        type: Array,
        default: []
    }
})
</script>

<template>
    <div>
        <div class="container">
            <Swiper class="mb-6" :modules="[SwiperNavigation]" :navigation="{nextEl:'.spacial-slider-next-btn',prevEl:'.spacial-slider-prev-btn'}" :slidesPerView="3" :spaceBetween="16">
                <SwiperSlide v-for="(item, index) in items" :key="index">
                    <AppCardSpecial :to="item.to" :isMode="item.isMode" :isOnline="item.isOnline" :isChosen="item.isChosen"
                        :bgImg="item.bgImg" :img="item.img" :name="item.name" :description="item.description"
                        :category="item.category" :rate="item.rate" />
                </SwiperSlide>
            </Swiper>
            <div class="flex items-center">
                <SectionsOurFitcher hasLogo />
                <div class="flex mr-auto">
                    <GenericBtn class="swiper-btn spacial-slider-prev-btn !rounded-l-none" to="/design-system" theme="primary" rounded lightness
                        square iconName="right" />
                    <GenericBtn class="swiper-btn spacial-slider-next-btn !rounded-r-none" to="/design-system" theme="primary" rounded lightness
                        square iconName="left" />
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.swiper-btn:not(.swiper-button-disabled){
    @apply !text-success
}
</style>