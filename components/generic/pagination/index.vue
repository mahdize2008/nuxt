<script setup>
    let {items}=defineProps({
        items:{
            type:Array,
            default:[]
        }
    })
</script>

<template>
    <ul class="flex items-center -m-1.5">
        <li class="px-1.5" v-for="item of items">
            <GenericBtn tagName="a" :iconName="item.iconName" square rounded >
                {{ item.text }}
            </GenericBtn>
        </li>
        <!-- <li class="px-1.5">
            <GenericBtn tagName="a" title="3" square rounded />
        </li>
        <li class="px-1.5">
            <GenericBtn tagName="a" title="2" square rounded />
        </li>
        <li class="px-1.5">
            <GenericBtn tagName="a" title="1" square rounded />
        </li>
        <li class="px-1.5">
            <GenericBtn tagName="a" iconName="star" square rounded />
        </li> -->
    </ul>
</template>
