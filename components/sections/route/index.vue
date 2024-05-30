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
        <GenericRoute :items="items"/>
    </div>
</template>