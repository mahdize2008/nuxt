<script setup>
let {tagName,icon,title,size,radius,aspect,mode}=defineProps({
    tagName:{
        type:String,
        default:'div'
    },
    icon:{
        type:String,
        default:''
    },
    title:{
        type:String,
        default:''
    },
    size:{
        type:String,
        default:'small'
    },
    radius:{
        type:String,
        default:'full'
    },
    aspect:{
        type:String,
        default:'rectangle'
    },
    mode:{
        type:String,
        default:''
    },

})
function setIcon(){
    return `icon-${icon}`
}
function setSize(){
    return `btn-${size}`
}
function setRadius(){
    return `radius-${radius}`
}
function setAspect(){
    return `btn-${aspect}`
}
function setMode(){
    return `${mode}-mode`
}
</script>
<template>
    <component :is="tagName" :class="[setSize(),setRadius(),setAspect(),setMode()]" class="btn-public">
        <i v-if="icon" :class="[setIcon(),{'ml-2':title}]"></i>
        {{ title }}
    </component>
</template>

<style scoped>
.btn-public{
    @apply flex items-center justify-center w-[200px] h-[35px] text-xs text-white font-medium cursor-pointer
}
.btn-public.btn-square{
    @apply !text-sm !w-[45px] !h-[45px] !aspect-square flex items-center justify-center bg-primary-tetha text-primary
}
.btn-public.btn-rectangle{
    @apply w-[200px] bg-success-gradient
}


.btn-public.light-mode{
    @apply !bg-primary-tetha !text-pretty
}
.btn-public.success-mode{
    @apply !bg-success !text-white
}
.btn-public.success-alpha-mode{
    @apply !bg-success-alpha !text-success
}
.btn-public.primary-mode{
    @apply !bg-primary !text-white
}


.btn-small{
    @apply !h-[35px]
}
.btn-large{
    @apply !h-[45px]
}


.btn-public.radius-full{
    @apply rounded-full
}
.btn-public.radius-base{
    @apply rounded-xl
}
.btn-public.radius-small{
    @apply rounded-md
}

</style>