<script setup>
let { name, description, to, productsNumber,rate } = defineProps({
    name: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    to: {
        type: String,
        default: ''
    },
    productsNumber:{
        type:Number,
        default:0
    },
    rate:{
        type:Number,
        default:0
    }
})
</script>


<template>
    <NuxtLink class="block rounded-4xl border-2 border-primary-tetha p-4" :to="to">
        <h2 class="text-primary mb-1.5 line-clamp-1 font-semibold tx-xs" :to="to">
            {{ name }}
        </h2>
        <div class="flex items-center">
            <p class="text-primary-beta line-clamp-1 leading-none tx-xs ml-auto">
                {{ description }}
            </p>
            <div class="flex items-center tx-xs text-primary-beta ml-2.5">
                {{ productsNumber }}
                محصول
                <GenericIcon name="youtube" class="text-base mr-1.5 text-primary-beta"/>
            </div>
            <GenericRating :rate="4" theme="dark"/>
        </div>
    </NuxtLink>
</template>