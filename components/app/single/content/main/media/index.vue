
import type { GenericIcon } from '#build/components';
<script setup>
import {ref} from 'vue'
let mediaItems = [
    {
        title: "بررسی بازی کلش رویال، جنگ تمام عیار موبایلی",
        img: "/img/img-11.png",
        to:'/'
    },
    {
        title: "بررسی بازی کلش رویال، جنگ تمام عیار موبایلی",
        img: "/img/img-11.png",
        to:'/'
    }
]

let showMore=ref(false)
</script>
<template>
    <div class="p-5 rounded-xl border-2 border-primary-tetha">
        <GenericHeaderSectionSecondary class="!mb-9" title="در رسانه‌ها" />
        <ul class="-my-2.5 mb-1.5">
            <li v-for="(item , index) in mediaItems" :key="index">
                <NuxtLink :to="item.to" class="py-2.5 flex items-center">
                    <img :src="item.img" class="w-[50px] h-[50px] rounded-md ml-5" alt="">
                    <GenericIcon name="download1" class="text-success text-lg ml-3"/>
                    <h2 class="tx-base text-primary font-medium">
                        {{ item.title }}
                    </h2>
                </NuxtLink>
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