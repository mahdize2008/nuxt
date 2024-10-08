<script setup>
  let {items}=defineProps({
    items:{
      type:Array
    }
  })
</script>
<template>
  <div class="container">
    <ul class="flex items-center -mx-3">
      <li v-for="(item , index) in items" :key="index" class="readmap-item capitalize text-sm leading-none text-black relative last:after:hidden">
        <NuxtLink :to="item.to"> 
          {{item.title}}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style>
.readmap-item::after {
  @apply absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 -rotate-[70deg] font-bold text-sm-plus;
  content: "\e935";
  font-family: "icomoon" !important;
}

.readmap-item a {
  @apply px-3.5 py-1 text-black hover:text-primary transition-all;
}
</style>