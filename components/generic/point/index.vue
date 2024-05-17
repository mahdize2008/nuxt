<script setup>
let {point,dark}=defineProps({
    point:{
        type:Number,
        default:0
    },
    dark:{
        type:Boolean,
        default:false
    }
})
</script>
<template>
    <div class="text-white flex items-center mr-auto" :class="{'point-dark' : dark}">
        <span class="ml-1 tx-xs leading-none block">
            {{ point }}
        </span>
        <GenericIcon name="star" class="text-warning" size="sm" />
    </div>
</template>
<style scoped>

.point-dark span{
    @apply text-primary
}
</style>