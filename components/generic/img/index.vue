<script setup>
let { src, isStatic, alt }=defineProps({
    src:{
        type:String,
        default:''
    },
    alt:{
        type:String,
        default:''
    },
    isStatic:{
        type:Boolean,
        default:false
    }
})
let baseUrl="https://"
function imgSrc(){
    if(isStatic){
        return src
    }
    else{
        return baseUrl+src
    }
}
</script>
<template>
    <img :src="imgSrc" :alt="alt">
</template>