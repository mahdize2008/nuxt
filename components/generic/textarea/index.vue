<script setup>
import {ref} from 'vue';
let {labelMassage}=defineProps({
    labelMassage:{
        type:String,
        default:''
    }
})
let text=ref('')
</script>

<template>
    <div>
        <textarea class="border-2 border-primary-tetha rounded-xl px-4 py-2.5 w-full h-[170px] outline-none" v-model="text"></textarea>
        <div v-if="labelMassage" class="text-primary-beta flex items-center tx-xs mt-5">
            <GenericIcon name="dark-mode" class="ml-2.5" size="sm"/>
            {{ labelMassage }}
        </div>
    </div>
</template>