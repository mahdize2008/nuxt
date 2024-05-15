<script setup>
let {label,error,disabled,placeholder}=defineProps({
    label:{
        type:String,
        default:''
    },
    error:{
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
</script>
<template>
    <div>
        <label for="" class="tx-xs mb-2 block">{{ label }}</label>
        <input type="text" :disabled="disabled" :placeholder="placeholder" class="input-public tx-xs" :class="{error : error}">
        <div class="flex items-center text-danger tx-xs mt-1" v-if="error">
            {{ error }}
        </div>
    </div>
</template>

<style scoped>
.input-public{
    @apply px-3.5 w-[295px] outline-none focus:border-success h-[45px] block rounded-xl border-2 border-primary-tetha;
}
.input-public.error{
    @apply !border-danger;
}
</style>