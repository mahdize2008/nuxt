<script setup>
    let {title,iconName,iconPathCount}=defineProps({
        title:{
            type:String,
            default:''
        },
        iconName:{
            type:String,
            default:''
        },
        iconPathCount:{
            type:Number,
            default:0
        },
    })
</script>

<template>
    <div class="bg-primary-tetha h-[45px] px-4 tx-xs rounded-xl cursor-pointer font-semibold w-fit flex items-center ">
        <GenericIcon :name="iconName" class="text-xl" :pathCount="iconPathCount"/>
        <span class="ml-3 mr-2 block">
            {{ title }}
        </span>
        <GenericIcon name="down" class="text-2xs text-primary-beta"/>
    </div>
</template>
