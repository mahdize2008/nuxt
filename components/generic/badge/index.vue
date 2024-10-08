<script setup>
let {text,color,outline,lightness,rounded,square}=defineProps({
    text:{
        type:String
    },
    color:{
        type:String,
        default:'primary'
    },
    outline:{
        type:Boolean,
        default:false
    },
    lightness:{
        type:Boolean,
        default:false
    },
    rounded:{
        type:Boolean,
        default:false
    },
    square:{
        type:Boolean,
        default:false
    },
    iconName:{
        type:String,
        default:''
    },
    iconPathCount:{
        type:Number,
        default:0
    }
})

function setColor(){
    return `badge-${color}`
}
</script>

<template>
  <div class="badge" :class="[{'badge-outline':outline},{'badge-lightness':lightness},{'badge-rounded':rounded},{'badge-square':square},setColor()]">
    {{ text }}
    <GenericIcon :name="iconName" :pathCount="iconPathCount" v-if="iconName"/>
  </div>
</template>

<style>
.badge{
    @apply px-3 py-2 leading-none rounded-sm text-xs text-white uppercase bg-primary
}
.badge i{
    @apply text-lg
}
.badge-primary{
    @apply bg-primary border-primary
}
.badge-success{
    @apply bg-success border-success
}
.badge-secondary{
    @apply bg-secondary border-secondary
}
.badge-black{
    @apply bg-black border-black
}
.badge-natural{
    @apply bg-natural border-natural
}
.badge-white{
    @apply bg-white border-white text-black
}


.badge-outline{
    @apply border-2 bg-opacity-0 font-medium
}
.badge-lightness{
    @apply bg-opacity-20 font-medium
}
.badge.badge-outline.badge-lightness{
    @apply border-opacity-20
}

.badge.badge-outline.badge-primary,.badge.badge-lightness.badge-primary{
    @apply text-primary
}
.badge.badge-outline.badge-success,.badge.badge-lightness.badge-success{
    @apply text-success
}
.badge.badge-outline.badge-secondary,.badge.badge-lightness.badge-secondary{
    @apply text-secondary
}
.badge.badge-outline.badge-black,.badge.badge-lightness.badge-black{
    @apply text-black
}
.badge.badge-outline.badge-natural,.badge.badge-lightness.badge-natural{
    @apply text-natural
}
.badge.badge-outline.badge-white,.badge.badge-lightness.badge-white{
    @apply text-white
}

.badge.badge-rounded{
    @apply !rounded-full
}
.badge.badge-square{
    @apply !aspect-square !h-10 !w-fit px-0 py-0 flex items-center justify-center
}
</style>