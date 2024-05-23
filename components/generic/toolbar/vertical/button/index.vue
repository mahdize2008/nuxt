<script setup>
    let {title ,active,iconName,iconPathCount}=defineProps({
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
        },
        isMore:{
            type:Boolean,
            default:false
        }
    })
</script>

<template>
    <NuxtLink :to="to" class="w-[90px] h-[90px] rounded-xl border-2 border-primary-tetha cursor-pointer font-semibold flex flex-col items-center justify-center [&.btn-active]:bg-success-gradient [&.btn-active]:text-white [&.btn-active]:border-0 [&.btn-more]:h-11 tx-xs" :class="[{'btn-active':active},{'btn-more':isMore}]">
        <GenericIcon v-if="iconName" :name="iconName" class="text-2xl" :class="{'mb-2':title}" :pathCount="iconPathCount"/>
        <h3 v-if="title" class="tx-xs">
            {{ title }}
        </h3>
    </NuxtLink>
</template>
