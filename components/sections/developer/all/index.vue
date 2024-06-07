<script setup>
import {ref} from 'vue'
let showMore=ref(false)
let {developers}=defineProps({
    developers:{
        type:Array,
        default:[]
    }
})
</script>

<template>
    <div>
        <div class="flex items-center mb-7">
            <GenericHeaderSection class="!mb-0" title="همه توسعه‌دهنده‌ها" subtitle="توسعه دهنده‌های بازی و اپلیکیشن"/>
            <GenericInput class="w-[330px] last:mb-0 mr-auto" placeholder="حالت عادی">
                <template #right-side>
                    <GenericIcon name="search" class="text-xl ml-2" :pathCount="2" />
                </template>
            </GenericInput>
        </div>
        <ul class="flex flex-wrap -m-2 mb-8">
            <li class="p-2 w-1/4" v-for="(developer , index) in developers" :key="index">
                <DeveloperCardSecondary :name="developer.name" :description="developer.description" :rate="developer.rate" :productsNumber="developer.productsNumber" :to="developer.to"/>
            </li>
        </ul>
        <GenericBtn class="mx-auto !mb-4 px-4" v-if="!showMore" @click="showMore = !showMore" outline lightness iconLeftSide iconName="down" rounded>
            مشاهده بیشتر
        </GenericBtn>
        <GenericBtn class="mx-auto !mb-4 px-4" v-if="showMore" @click="showMore = !showMore" outline lightness iconLeftSide iconName="up" rounded>
            مشاهده کمتر
        </GenericBtn>
    </div>
</template>