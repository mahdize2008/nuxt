<script setup>
let {title,subtitle,category,link , iconName , iconPathCount} = defineProps({
    title:{
        type:String,
        default:''
    },
    subtitle:{
        type:String,
        default:''
    },
    category:{
        type:Array,
        default:[]
    },
    link:{
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
    }
})
</script>
<template>
    <div class="flex items-center mb-5">
        <div>
            <h2 class="tx-base text-primary font-medium mb-0.5 flex items-center">
                <GenericIcon class="text-2xl ml-2.5" v-if="iconName" :name="iconName" :pathCount="iconPathCount"/>
                {{ title }}
            </h2>
            <div v-if="subtitle" class="flex font-medium items-center tx-xs text-primary-beta">
                <div class="w-1.5 h-1.5 bg-success rounded-full ml-2"></div>
                {{subtitle}}
            </div>
        </div>
        <ul v-if="category" class="-mx-3 mr-6 flex items-center justify-center">
            <li v-for="(item , index) in category" :key="index">
                <NuxtLink :to="item.to" class="categoryLink hover:text-primary-alpha after:hidden [&.active]:after:block [&.active]:text-success block py-1.5 px-3 relative text-primary-beta transition-all tx-xs">
                    {{ item.title }}
                </NuxtLink>
            </li>
        </ul>
        <NuxtLink v-if="link" :to="link" class="tx-xs text-primary hover:text-success transition-all group flex items-center mr-auto">
            مشاهده بیشتر
            <GenericIcon name="left" class="text-primary-beta transition-all group-hover:text-success text-3xs mr-2"/>
        </NuxtLink>
    </div>
</template>

<style scoped>
.categoryLink:after{
    @apply content-[''] !w-[3px] !h-[3px] rounded-full absolute bottom-0 left-1/2 -translate-x-1/2 bg-success
}
</style>