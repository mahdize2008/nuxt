<script setup>
import {ref} from 'vue'
let {contents}=defineProps({
    contents:{
        type:Array,
        default:[]
    }
})
let show=ref(true)
</script>
<template>
    <div>
        <div class="flex items-center text-primary tx-base font-medium px-2 mb-2.5">
            <GenericIcon name="up" class="text-3xs ml-4 text-primary-beta"/>
            فهرست مطالب
        </div>
        <ul class="py-5 bg-natural rounded-xl relative after:w-0.5 after:h-[calc(100%-40px)] after:bg-success after:rounded-l-full after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2">
            <li v-for="(content , index) in contents" :key="index">
                <a :href="content.href" class="block hover:text-success transition-all px-4 py-2.5 tx-sm text-primary font-medium">
                    {{ content.name }}
                </a>
            </li>
        </ul>
    </div>
</template>