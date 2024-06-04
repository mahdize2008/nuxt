<script setup>
let {title,category,img,description}=defineProps({
    title:{
        type:String,
        default:''
    },
    category:{
        type:Array,
        default:[]
    },
    img:{
        type:String,
        default:''
    },
    description:{
        type:String,
        default:''
    }
})
</script>
<template>
    <div>
        <div class="flex items-center mb-5">
            <img class="ml-5" :src="img"/>
            <div>
                <h2 class="tx-xs text-primary font-medium mb-2.5">
                    {{title}}
                </h2>
                <ul class="flex items-center">
                    <li class="ml-2.5 last:ml-0" v-for="(item,index) in category" :key="index">
                        <GenericTag hasHover :to="item.to">
                            {{ item.title }}
                        </GenericTag>
                    </li>
                </ul>
            </div>
        </div>
        <p class="tx-xs text-primary">
            {{ description }}
        </p>
    </div>
</template>