<script setup>
let { items }=defineProps({
items:{
    type:Array,
    default:[]
}
})
</script>
<template>
    <div>
        <GenericAccordionItem class="mb-4 last:mb-0" v-for="(item , index) in items" :key="index" :title="item.title" :text="item.text" :number="index+1"/>
    </div>
</template>