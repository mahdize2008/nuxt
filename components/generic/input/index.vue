<script setup>
let {label,error,errorMassage,disabled,placeholder}=defineProps({
    label:{
        type:String,
        default:''
    },
    error:{
        type:Boolean,
        default:false
    },
    errorMassage:{
        type:String,
        default:''
    },
    disabled:{
        type:Boolean,
        default:false
    },
    placeholder:{
        type:String,
        default:''
    }
})

let inputValue=''
</script>
<template>
    <div class="v-input-wrapper" :class="[{'v-input-wrapper-error' : error},{'disabled':disabled}]">
        <label v-if="label" class="v-input-label">{{ label }}</label>
        <div class="v-input-wrap">
            <slot name="right-side"/>
            <input type="text" :disabled="disabled" v-model="inputValue" :placeholder="placeholder" class="v-input tx-xs">
            <slot name="left-side"/>
        </div>
        <div class="v-input-err tx-xs" v-if="error">
            <GenericIcon name="dark-mode" class="ml-2" size="sm"/>
            {{ errorMassage }}
        </div>
    </div>
</template>

<style scoped>
.v-input{
    @apply grow outline-none h-[45px] block text-primary;
}
.v-input-wrap{
    @apply px-3.5 w-full flex items-center rounded-xl border-2 border-primary-tetha;
}
.v-input-wrapper.v-input-wrapper-error .v-input-wrap{
    @apply !border-danger;
}
.v-input-wrapper.disabled .v-input-wrap{
    @apply bg-primary-tetha border-primary-tetha;
}
.v-input-label{
    @apply mb-1 block
}
.v-input-err{
    @apply flex items-center text-danger mt-1.5
}
</style>