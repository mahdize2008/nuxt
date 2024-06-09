<script setup>
let { items } = defineProps({
    items: {
        type: Array,
        default: []
    }
})
import { ref } from 'vue'
let show = ref(true)
</script>

<template>
    <div class="border-2 border-primary-tetha rounded-4xl">
        <div class="flex items-center p-5 cursor-pointer" :class="{'pb-2.5' : show}" @click="show = !show">
            <GenericIcon name="youtube" class="text-xl ml-2.5 text-primary" />
            <h2 class="tx-base text-primary font-medium">
                دسته‌بندی‌ها
            </h2>
            <GenericIcon v-if="!show" name="down" class="text-3xs mr-auto text-primary-beta" />
            <GenericIcon v-if="show" name="up" class="text-3xs mr-auto text-primary-beta" />
        </div>
        <ul v-if="show" class="p-5 pt-0">
            <li v-for="(item, index) in items" :key="index" class="mb-2.5 last:mb-0">
                <NuxtLink :to="item.to" class="block rounded-md text-primary hover:bg-success hover:text-white transition-all p-2.5 font-medium tx-xs ">
                    {{item.title}}
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>