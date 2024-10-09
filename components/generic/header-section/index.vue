<script setup>
let {title,date,link,timer,swiperBtn}=defineProps({
    title:{
        type:String
    },
    date:{
        type:String,
        default:'today'
    },
    link:{
        type:String
    },
    timer:{
        type:String
    },
    swiperBtn:{
        type:String
    }
})
</script>

<template>
  <div class="mb-14">
    <div class="capitalize text-base font-semibold text-primary flex items-center mb-5">
        <div class="h-10 w-5 bg-primary rounded-sm mr-4"></div>
        Today’s
    </div>
    <div class="flex items-end">
        <h2 class="title-public title-public-large leading-none mr-20">
            Flash Sales
        </h2>
        <SectionsGenericTimer v-if="timer"/>
        <ul class="flex ml-auto" v-if="swiperBtn">
            <GenericBtn iconName="up-arrow" tag="li" color="white" rounded square class="mr-2 last:mr-0" :class="`swiper-${swiperBtn}-next-btn`"/>
            <GenericBtn iconName="down-arrow" tag="li" color="white" rounded square class="mr-2 last:mr-0" :class="`swiper-${swiperBtn}-next-btn`"/>
        </ul>
        <GenericBtn v-if="link" text="View All" size="lg" color="primary" class="ml-auto" tag="a" :link="link"/>
    </div>
  </div>
</template>

<style>

</style>