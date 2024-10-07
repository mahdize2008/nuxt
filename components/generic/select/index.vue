<script setup>
let {items}=defineProps({
    items:{
        type:Array,
        default:[]
    }
})
</script>

<template>
  <div class="select relative text-white text-sm font-light capitalize flex items-center cursor-pointer py-2">
    english
    <GenericIcon name="down-chevron" class="!text-2xs !font-bold ml-2"/>
    <ul class="box absolute top-full right-0 bg-white rounded-lg w-[100px] overflow-hidden z-20 hidden">
        <li v-for="(item , index) in items" :key="index">
            <a href="#" class="p-2 flex items-center justify-center capitalize text-black font-medium hover:bg-primary hover:text-white transition-all">
                {{item}}
            </a>
        </li>
    </ul>
  </div>
</template>

<style scoped>
.select:hover .box{
    @apply block
}
</style>