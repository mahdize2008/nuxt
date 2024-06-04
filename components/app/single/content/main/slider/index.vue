<script setup>
let { items } = defineProps({
    items: {
        type: Array,
        default: []
    }
})
</script>

<template>
    
        <div class="relative">
            <Swiper :modules="[SwiperNavigation,SwiperAutoplay]" :autoplay="{delay: 3000}" :navigation="{ nextEl: '.swiper-single-next-btn', prevEl: '.swiper-single-prev-btn' }"
                slidesPerView="auto" class="" :spaceBetween="16">
                <SwiperSlide v-for="(item, index) in items" :key="index" class="h-[310px] !w-fit">
                    <img v-if="!item.isVideo" class="h-full" :src="item.src" alt="">
                    <div v-if="item.isVideo" class="h-full relative">
                        <GenericPlay class="!top-1/2 !-translate-y-1/2 !left-1/2 !-translate-x-1/2"/>
                        <img :src="item.src" class="h-full" alt="">
                    </div>
                </SwiperSlide>
            </Swiper>
            <GenericBtn iconName="right"
                class="swiper-btn swiper-single-prev-btn transition-all absolute top-1/2 -translate-y-1/2 right-2.5 z-10" lightness
                rounded square />
            <GenericBtn iconName="left"
                class="swiper-btn swiper-single-next-btn transition-all absolute top-1/2 -translate-y-1/2 left-2.5 z-10" lightness
            rounded square />
    </div>
</template>