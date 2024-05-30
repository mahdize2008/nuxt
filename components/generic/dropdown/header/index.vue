<script setup>
import {ref} from 'vue'
let show=ref(false)
let {items}=defineProps({
    items:{
        type:Array,
        default:[]
    }
})
</script>
<template>
    <div class="relative w-fit rounded-xl transition-all">
        <GenericDropdownHeaderButton v-for="(item , index) in items" :key="index" :title="item.title" @click="show=!show" :iconName="item.iconName" :iconPathCount="item.iconPathCount" />
    </div>
</template>