<script setup>
import {ref} from 'vue'
let showMore=ref(false)


let tags=ref([
    {
        name:'اکشن',
        to:'/'
    },
    {
        name:'رانندگی',
        to:'/'
    },
    {
        name:'مبارزه‌ای',
        to:'/'
    },
    {
        name:'پیشنهادی رویدینو',
        to:'/'
    }
])
</script>
<template>
    <div class="p-5 rounded-xl border-2 border-primary-tetha">
        <GenericHeaderSectionSecondary class="!mb-9" title="پشتیبانی توسعه دهنده" />
        <div class="mb-4">
            <div class="mb-4 last:mb-0">
                <h3 class="tx-sm text-primary font-medium mb-3">
                    کلش رویال، نبرد تمام عیار موبایلی!
                </h3>
                <p class="tx-xs text-primary">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
                    بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                    چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است...
                </p>
            </div>
            <div class="mb-4 last:mb-0">
                <div class="flex items-center tx-xs text-primary-alpha mb-2.5">
                    <h3 class="tx-sm text-primary ml-4 font-medium">
                        تغییرات آخرین آپدیت
                    </h3>
                    نسخه ۱.۰.۰
                </div>
                <ul>
                    <li class="mb-2.5 flex items-start">
                        <GenericIcon name="dark-mode" class="text-success text-md ml-2.5"/>
                        <div class="pr-2.5 py-0.5 border-r-2 border-r-primary-tetha">
                            <h3 class="tx-sm text-primary font-medium mb-3">
                                بازی کال‌آودیوتی موبایل وارزون شروع ضعیفی را داشته است؟
                            </h3>
                            <p class="tx-xs text-primary">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها
                                و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                            </p>
                        </div>
                    </li>
                    <li class="mb-2.5 flex items-start">
                        <GenericIcon name="dark-mode" class="text-success text-md ml-2.5"/>
                        <div class="pr-2.5 py-0.5 border-r-2 border-r-primary-tetha">
                            <h3 class="tx-sm text-primary font-medium mb-3">
                                بازی کال‌آودیوتی موبایل وارزون شروع ضعیفی را داشته است؟
                            </h3>
                            <p class="tx-xs text-primary">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها
                                و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            <div  v-if="showMore" class="mb-4 last:mb-0">
                <div class="flex items-center tx-xs text-primary-alpha mb-2.5">
                    <h3 class="tx-sm text-primary ml-4 font-medium">
                        تغییرات آخرین آپدیت
                    </h3>
                    نسخه ۱.۰.۰
                </div>
                <ul>
                    <li class="mb-2.5 flex items-start">
                        <GenericIcon name="dark-mode" class="text-success text-md ml-2.5"/>
                        <div class="pr-2.5 py-0.5 border-r-2 border-r-primary-tetha">
                            <h3 class="tx-sm text-primary font-medium mb-3">
                                بازی کال‌آودیوتی موبایل وارزون شروع ضعیفی را داشته است؟
                            </h3>
                            <p class="tx-xs text-primary">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها
                                و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                            </p>
                        </div>
                    </li>
                    <li class="mb-2.5 flex items-start">
                        <GenericIcon name="dark-mode" class="text-success text-md ml-2.5"/>
                        <div class="pr-2.5 py-0.5 border-r-2 border-r-primary-tetha">
                            <h3 class="tx-sm text-primary font-medium mb-3">
                                بازی کال‌آودیوتی موبایل وارزون شروع ضعیفی را داشته است؟
                            </h3>
                            <p class="tx-xs text-primary">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها
                                و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <GenericBtn class="mx-auto !mb-4 px-4" v-if="!showMore" @click="showMore = !showMore" outline lightness iconLeftSide iconName="down" rounded>
            مشاهده بیشتر
        </GenericBtn>
        <GenericBtn class="mx-auto !mb-4 px-4" v-if="showMore" @click="showMore = !showMore" outline lightness iconLeftSide iconName="up" rounded>
            مشاهده کمتر
        </GenericBtn>
        <ul class="flex items-center -m-[5px]">
            <li class="p-[5px]" v-for="(tag , index) in tags" :key="index">
                <GenericTag :to="tag.to">
                    {{ tag.name }}
                </GenericTag>
            </li>
        </ul>
    </div>
</template>