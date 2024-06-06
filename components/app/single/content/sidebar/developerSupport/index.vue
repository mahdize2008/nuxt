<script setup>
let { items } = defineProps({
    items: {
        type: Array,
        default: []
    }
})
import { ref } from 'vue'
let show = ref(false)
</script>

<template>
    <div>
        <div class="flex items-center py-1.5 cursor-pointer" @click="show = !show">
            <GenericHeaderSectionSecondary class="!mb-0" title="پشتیبانی توسعه دهنده"/>
            <GenericIcon v-if="!show" name="down" class="text-3xs mr-auto text-primary-beta" />
            <GenericIcon v-if="show" name="up" class="text-3xs mr-auto text-primary-beta" />
        </div>
        <ul v-if="show" class="-my-5 mt-0">
            <li v-for="(item, index) in items" :key="index"
                class="py-5 flex items-center border-b-2 border-b-primary-tetha last:border-b-0">
                <GenericIcon class="text-base ml-3 text-primary" v-if="item.icon" :name="item.icon"
                    :pathCount="item.iconPathCount" />
                <div class="text-primary font-medium tx-xs ">
                    {{item.title}}
                    <div v-if="item.subtitle" class="text-primary-alpha mt-0.5">
                        {{item.subtitle}}
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>