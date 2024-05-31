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
    <GenericHeaderSection :title="headerSection.title" :subtitle="headerSection.subtitle"
      :grouping="headerSection.grouping" :link="headerSection.link" :iconName="headerSection.iconName"
      :iconPathCount="headerSection.iconPathCount" />
    <Swiper :slides-per-view="7" :space-between="16">
      <SwiperSlide class="" v-for="(item, index) in items" :key="index">
        <DeveloperCardNormal :img="item.img" :name="item.name" :description="item.description" :gradient="item.gradient"
          :to="item.to" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>