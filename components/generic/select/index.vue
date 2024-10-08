<script setup>
import { ref } from 'vue';
let {items}=defineProps({
    items:{
        type:Array,
        default:[]
    }
})
let value=ref(items[0])
function setValue(item){
    value.value=item
}
</script>

<template>
  <div class="select relative text-white text-sm font-light capitalize flex items-center cursor-pointer py-2 min-w-[100px]">
    {{ value }}
    <GenericIcon name="down-chevron" class="!text-2xs !font-bold ml-2"/>
    <ul class="box absolute top-full right-0 bg-white rounded-lg w-[100px] overflow-hidden z-20 hidden">
        <li v-for="(item , index) in items" :key="index" @click="setValue(item)">
            <div href="#" class="p-2 flex items-center justify-center capitalize text-black font-medium hover:bg-primary hover:text-white transition-all">
                {{item}}
            </div>
        </li>
    </ul>
  </div>
</template>

<style scoped>
.select:hover .box{
    @apply block
}
</style>