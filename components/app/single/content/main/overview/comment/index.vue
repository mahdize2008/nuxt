<script setup>
import {ref} from 'vue';
    let {name , text ,subtitle, img , rate , isSuggest , time, replies,likes,isRoidinoComment}=defineProps({
        name:{
            type:String,
            default:''
        },
        text:{
            type:String,
            default:''
        },
        subtitle:{
            type:String,
            default:''
        },
        img:{
            type:String,
            default:''
        },
        rate:{
            type:Number,
            default:0
        },
        isSuggest:{
            type:Boolean,
            default:false
        },
        time:{
            type:String,
            default:''
        },
        replies:{
            type:Array,
            default:[]
        },
        likes:{
            type:Number,
            default:0
        },
        isRoidinoComment:{
            type:Boolean,
            default:false
        }
    })

    let isLike=ref(false)

    function doLike(){
        isLike.value=!isLike.value
    }

    function suggest(){
        return isSuggest?'پیشنهاد می‌کنم':'پیشنهاد نمی‌کنم'
    }

    function suggestTheme(){
        return isSuggest?'success':'danger'
    }

    
</script>
<template>
    <div>

        <AppSingleContentMainOverviewCommentItem class="mb-2.5 last:mb-0" :isRoidinoComment="isRoidinoComment" :name="name" :subtitle="subtitle" :text="text" :img="img" :rate="rate" :isSuggest="isSuggest" :time="time" :likes="likes"/>

        <!-- <div class="tx-xs text-primary font-medium mb-2.5 flex items-center">
            <img :src="img" class="rounded-full w-10 h-10 ml-2.5" alt="">
            <span class="ml-3">
                {{name}}
            </span>
            <div class="tx-xs text-primary-beta pr-3 font-medium relative after:absolute after:bg-primary-gamma after:w-[3px] after:h-[3px] after:rounded-full after:top-1/2 after:-translate-y-1/2 after:right-0 after:translate-x-1/2">
                {{ subtitle }}
            </div>
        </div>
        <div class="flex items-center mb-3">
            <ul class="flex items-center -mx-[5px]">
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
            <GenericTag :theme="suggestTheme()" class="mx-5">
                {{ suggest() }}
            </GenericTag>
            <span class="text-primary-beta tx-xs font-medium">
                {{ time }}
            </span>
        </div>
        <p class="tx-xs text-primary mb-5">
            {{ text }}
        </p>
        <div class="flex items-center tx-xs text-primary-beta mb-2.5">
            <div @click="doLike" class="ml-2.5 w-11 h-11 rounded-full flex items-center justify-center text-primary-beta hover:bg-primary-tetha cursor-pointer transition-all" :class="{'!text-success hover:!bg-danger-alpha' : isLike}">
                <GenericIcon name="like" class="text-lg"/>
            </div>
            {{ likes }} کاربر این نظر را مفید دانسته‌اند
        </div> -->

        <!-- START-REPLIES -->
        <div class="pr-10 mt-2.5">
            <AppSingleContentMainOverviewCommentItem class="mb-2.5 last:mb-0" v-for="(reply , index) in replies" isReply :effectiveReply="reply.effectiveReply" :isRoidinoComment="reply.isRoidinoComment" :key="index" :name="reply.name" :subtitle="reply.subtitle" :text="reply.text" :img="reply.img" :rate="reply.rate" :isSuggest="reply.isSuggest" :time="reply.time" :likes="reply.likes"/>
        </div>
        <!-- END-REPLIES -->
    </div>
</template>