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
    <div class="v-input-wrapper" :class="{'v-input-wrapper-error' : error}">
        <label class="v-input-label">{{ label }}</label>
        <input type="text" :disabled="disabled" v-model="inputValue" :placeholder="placeholder" class="v-input tx-xs">
        <div class="v-input-err tx-xs" v-if="error">
            <GenericIcon name="dark-mode" class="ml-2" size="sm"/>
            {{ errorMassage }}
        </div>
    </div>
</template>

<style scoped>
.v-input{
    @apply px-3.5 w-[295px] outline-none focus:border-success h-[45px] block rounded-xl border-2 border-primary-tetha text-primary;
}
.v-input-wrapper-error .v-input{
    @apply !border-danger;
}
.v-input:disabled{
    @apply bg-primary-tetha border-primary-tetha;
}
.v-input-label{
    @apply mb-1 block
}
.v-input-err{
    @apply flex items-center text-danger mt-1.5
}
</style>