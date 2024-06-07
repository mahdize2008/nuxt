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

        <!-- START-REPLIES -->
        <div class="pr-10 mt-2.5">
            <AppSingleContentMainOverviewCommentItem class="mb-2.5 last:mb-0" v-for="(reply , index) in replies" isReply :effectiveReply="reply.effectiveReply" :isRoidinoComment="reply.isRoidinoComment" :key="index" :name="reply.name" :subtitle="reply.subtitle" :text="reply.text" :img="reply.img" :rate="reply.rate" :isSuggest="reply.isSuggest" :time="reply.time" :likes="reply.likes"/>
        </div>
        <!-- END-REPLIES -->
    </div>
</template>