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
    <div class="bg-primary-tetha py-2.5 px-4 tx-xs rounded-xl cursor-pointer font-semibold w-fit flex items-center ">
        <GenericIcon :name="iconName" size="sm" :pathCount="iconPathCount"/>
        <span class="mx-2 block">
            {{ title }}
        </span>
        <GenericIcon name="down" size="xs" class="text-primary-beta"/>
    </div>
</template>
