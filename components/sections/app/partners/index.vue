<script setup>
let { items } = defineProps({
  items: {
    type: Array,
    default: []
  }
})
</script>

<template>
  <Swiper :slides-per-view="7" :space-between="16">
    <SwiperSlide class="" v-for="(item, index) in items" :key="index">
      <DeveloperCardNormal :img="item.img" :name="item.name" :description="item.description"
        :gradient="item.gradient" :to="item.to" />
    </SwiperSlide>
  </Swiper>
</template>