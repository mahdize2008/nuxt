<script setup>
let {items}=defineProps({
    items:{
        type:Array,
        default:[]
    }
})
</script>
<template>
    <div>
        <GenericBreadcrumb :items="items"/>
    </div>
</template>