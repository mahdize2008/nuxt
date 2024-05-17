<script setup>
    let {title,iconName,iconPathCount}=defineProps({
        title:{
            type:String,
            default:''
        },
        active:{
            type:Boolean,
            default:false
        },
        iconName:{
            type:String,
            default:''
        },
        to:{
            type:String,
            default:''
        },
        iconPathCount:{
            type:Number,
            default:0
        }
    })
</script>

<template>
    <NuxtLink :to="to" class="btn tx-xs" :class="{'btn-active':active}">
        <GenericIcon v-if="iconName" :name="iconName" :class="{'mb-2':title}" :pathCount="iconPathCount"/>
        <h3 v-if="title" class="tx-xs">
            {{ title }}
        </h3>
    </NuxtLink>
</template>

<style>
.btn{
    @apply w-[90px] py-[18px] rounded-xl border-2 border-primary-tetha cursor-pointer font-semibold flex flex-col items-center justify-center
}
.btn.btn-active {
    @apply bg-success-gradient text-white border-0
}
</style>