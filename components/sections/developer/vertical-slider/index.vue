<script setup>
let {developers,headerSection}=defineProps({
    developers:{
        type:Array,
        default:[]
    },
    headerSection:{
        type:Object,
        default:{}
    }
})
</script>
<template>
    <div>
        <GenericHeaderSection :title="headerSection.title" :subtitle="headerSection.subtitle"/>
        <Swiper :slides-per-view="4" :space-between="16">
            <SwiperSlide v-for="(developer , index) in developers" :key="index">
                <DeveloperCardVertical :name="developer.name" :description="developer.description" :bgImg="developer.bgImg" :imgs="developer.imgs" :to="developer.to"/>
            </SwiperSlide>
        </Swiper>
    </div>
</template>