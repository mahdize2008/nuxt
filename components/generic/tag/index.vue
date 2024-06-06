<script setup>
let {to,hasHover,theme}=defineProps({
    theme:{
        type:String,
        default:'success',
        validator: (value) => {
            return ['success', 'dark','light','danger','secondary'].includes(value);
        }
    },
    hasHover:{
        type:Boolean,
        default:false
    },
    to:{
        type:String,
        default:''
    }
})

function setTheme(){
    return `tag-${theme}`
}
</script>
<template>
    <NuxtLink :to="to" :class="[setTheme(),{hasHover : hasHover}]"
        class="rounded-full block py-1 px-2.5 relative w-fit transition-all tx-xs">
        <slot/>
    </NuxtLink>
</template>

<style scoped>
    .tag-success{
        @apply bg-success-alpha text-success
    }
    .tag-success.hasHover{
        @apply hover:text-white hover:bg-success
    }
    .tag-dark{
        @apply bg-black/50 text-white/70
    }
    .tag-dark.hasHover{
        @apply hover:bg-white/50 hover:text-black
    }
    .tag-light{
        @apply bg-primary-gamma text-primary-alpha
    }
    .tag-light.hasHover{
        @apply hover:bg-primary-beta text-primary
    }

    .tag-danger{
        @apply bg-danger-alpha text-danger
    }
    .tag-danger.hasHover{
        @apply hover:bg-danger hover:text-danger-alpha
    }

    .tag-secondary{
        @apply bg-secondary-light text-secondary
    }
    .tag-secondary.hasHover{
        @apply hover:bg-secondary hover:text-white
    }
</style>