<script setup>
import { ref } from 'vue';
let { name,isSuggest, effectiveReply, text, subtitle, img, time, likes, isRoidinoComment ,isReply } = defineProps({
    name: {
        type: String,
        default: ''
    },
    isSuggest: {
        type: Boolean,
        default: false
    },
    effectiveReply: {
        type: Boolean,
        default: false
    },
    text: {
        type: String,
        default: ''
    },
    subtitle: {
        type: String,
        default: ''
    },
    img: {
        type: String,
        default: ''
    },
    isRoidinoComment: {
        type: Boolean,
        default: false
    },
    time: {
        type: String,
        default: ''
    },
    likes: {
        type: Number,
        default: 0
    },
    isReply: {
        type: Boolean,
        default: false
    },
    border:{
        type:Boolean,
        default:false
    }
})

let isLike = ref(false)

function doLike() {
    isLike.value = !isLike.value
}

function suggest() {
    return isSuggest ? 'پیشنهاد می‌کنم' : 'پیشنهاد نمی‌کنم'
}

function suggestTheme() {
    return isSuggest ? 'success' : 'danger'
}
</script>
<template>
    <div :class="{'pr-[30px] border-r-2 border-r-primary-tetha ':border}" class="pb-2.5">
        <div v-if="!isRoidinoComment" class="tx-xs text-primary font-medium mb-2.5 flex items-center">
            <img :src="img" class="rounded-full w-10 h-10 ml-2.5" alt="">
            <span class="ml-3">
                {{ name }}
            </span>
            <div
                v-if="subtitle" class="tx-xs text-primary-beta pr-3 font-medium relative after:absolute after:bg-primary-gamma after:w-[3px] after:h-[3px] after:rounded-full after:top-1/2 after:-translate-y-1/2 after:right-0 after:translate-x-1/2">
                {{ subtitle }}
            </div>
        </div>
        <div v-if="isRoidinoComment" class="tx-xs text-primary font-medium mb-2.5 flex items-center">
            <div class="rounded-full w-10 h-10 border-2 border-primary-tetha flex items-center justify-center ml-2.5">
                <img src="/img/logo-3.png" class="w-6 h-6" alt="">
            </div>
            <GenericIcon name="roidino1" class="text-base ml-3" :pathCount="9" />
            <div class="tx-xs flex items-center text-success font-medium">
                <GenericIcon name="contact-us" class="text-success text-base ml-2" />
                پشتیبانی
            </div>
        </div>
        <div class="flex items-center mb-3 ">
            <ul v-if="!isReply" class="flex items-center -mx-[5px]">
                <li class="px-[5px]">
                    <GenericIcon name="star" class="text-primary-gamma text-base" />
                </li>
                <li class="px-[5px]">
                    <GenericIcon name="star" class="text-success text-base" />
                </li>
                <li class="px-[5px]">
                    <GenericIcon name="star" class="text-success text-base" />
                </li>
                <li class="px-[5px]">
                    <GenericIcon name="star" class="text-success text-base" />
                </li>
                <li class="px-[5px]">
                    <GenericIcon name="star" class="text-success text-base" />
                </li>
            </ul>
            <GenericTag v-if="!isReply" :theme="suggestTheme()" class="mx-5">
                {{ suggest() }}
            </GenericTag>
            <GenericTag v-if="effectiveReply" theme="secondary ml-5">
                پاسخ سازنده
            </GenericTag>
            <span class="text-primary-beta tx-xs font-medium">
                {{ time }}
            </span>
        </div>
        <p class="tx-xs text-primary mb-5">
            {{ text }}
        </p>
        <div class="flex items-center tx-xs text-primary-beta">
            <div @click="doLike"
                class="ml-2.5 w-11 h-11 rounded-full flex items-center justify-center text-primary-beta hover:bg-primary-tetha cursor-pointer transition-all"
                :class="{ '!text-success hover:!bg-danger-alpha': isLike }">
                <GenericIcon name="like" class="text-lg" />
            </div>
            {{ likes }} کاربر این نظر را مفید دانسته‌اند
        </div>
    </div>
</template>