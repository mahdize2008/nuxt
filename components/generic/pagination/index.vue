<script setup>
let { items } = defineProps({
    items: {
        type: Array,
        default: [],
    }
})
</script>

<template>
    <ul class="flex items-center -m-1.5">
        <li class="px-1.5" v-for="(item, index) of items" :key="index">
            <NuxtLink :to="item.to">
                <GenericBtn tag="a" :iconName="item.iconName" square rounded lightness>
                        {{ item.text }}
                </GenericBtn>
            </NuxtLink>
        </li>
    </ul>
</template>
