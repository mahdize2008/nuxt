<script setup>
    let {items}=defineProps({
        items:{
            type:Array,
            default:[],
        }
    })
</script>

<template>
    <ul class="flex items-center -m-1.5">
        <li class="px-1.5" v-for="item of items">
            <GenericBtn tagName="a" :iconName="item.iconName" square rounded lightness >
                {{ item.text }}
            </GenericBtn>
        </li>
    </ul>
</template>
