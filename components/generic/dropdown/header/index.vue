<script setup>
let show=ref(false)
</script>
<template>
    <div class="relative w-fit rounded-xl transition-all">
        <GenericDropdownHeaderButton title="برنامه" @click="show=!show" iconName="category" :iconPathCount="4" />
    </div>
</template>