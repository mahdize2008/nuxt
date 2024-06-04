<script setup>
let { header,products } = defineProps({
    header: {
        type: String,
        default: ''
    },
    products:{
        type: Array,
        default: []
    }
})
</script>

<template>
    <div>
        <GenericHeaderSectionSecondary :title="header"/>
        <div class="-my-5 mt-0">
            <AppSingleContentSidebarProductsItem v-for="(product, index) in products" :to="product.to" :name="product.name" :subtitle="product.subtitle" :img="product.img" :rate="product.rate" :key="index"/>
        </div>
    </div>
</template>