
<script setup>
let {to,img, title , date , isSuggest}=defineProps({
    to:{
        type:String,
        default:''
    },
    img:{
        type:String,
        default:''
    },
    title:{
        type:String,
        default:''
    },
    date:{
        type:String,
        default:''
    },
    isSuggest:{
        type:Boolean,
        default:true
    }
})
</script>

<template>
    <NuxtLink :to="to" class="flex items-center p-5 border border-primary-tetha rounded-xl">
        <div v-if="img" class="w-[205px] ml-5 shrink-0">
            <img :src="img" class="w-full h-[135px] rounded-md" alt="">
        </div>
        <div class="grow">
            <div v-if="isSuggest" class="flex items-center text-success tx-xs font-medium mb-3">
                <GenericIcon class="ml-2.5 text-xl" name="share1" :pathCount="5"/>
                مطلب پیشنهادی
            </div>
            <h2 class="tx-sm text-primary font-medium mb-3">
                {{ title }}
            </h2>
            <div class="flex items-center tx-xs text-primary">
                <GenericIcon name="game" class="text-primary-beta text-lg ml-2"/>
                {{date}}
            </div>
        </div>
    </NuxtLink>
</template>