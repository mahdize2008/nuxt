<script setup>
let {product,properties,information}=defineProps({
    product:{
        type:Object,
        default:{}
    },
    properties:{
        type:Array,
        default:[]
    },
    information:{
        type:Array,
        default:[]
    }
});

import { inject } from 'vue'

const type = inject('type')
</script>

<template>
    <div>
        <!-- START-SINGLE-HEADER -->
        <AppSingleHeaderGame v-if="type === 'game'" :title="product.title" :tags="product.tags"
            :subtitle="product.subtitle" :isSpacial="product.isSpacial" :isChosen="product.isChosen"
            :properties="properties" :information="information" />
        <!-- END-SINGLE-HEADER -->

        <!-- START-SINGLE-HEADER -->
        <AppSingleHeaderApp v-if="type === 'app'" :title="product.title" :tags="product.tags"
            :subtitle="product.subtitle" :isSpacial="product.isSpacial" :isChosen="product.isChosen"
            :properties="properties" :information="information" />
        <!-- END-SINGLE-HEADER -->
    </div>
</template>