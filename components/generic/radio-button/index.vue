<script setup>
let { items , name ,hasColor }=defineProps({
    items:{
        type:Array
    },
    name:{
        type:String,
        default:'select'
    },
    hasColor:{
        type:Boolean,
        default:false
    }
})
</script>

<template>
  <ul class="flex items-center">
    <li v-for="(item , index) in items" :key="index" class="mr-2 last:mr-0" :class="[{'select-color':hasColor},`select-${item}`]">
      <input type="radio" :checked="index===0" :id="`radio-${item}-${index}`" :name="name" class="hidden" />
      <label
        :for="`radio-${item}-${index}`"
        class="block w-6 h-6 border-black border-2 rounded-full relative cursor-pointer transition-all duration-300"
      >
        <div
          class="opacity-0 w-3.5 h-3.5 bg-black rounded-full absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 transition-all duration-300"
        ></div>
      </label>
    </li>
  </ul>
</template>

<style scoped>
input:checked + label div {
  @apply opacity-100;
}

.select-color label {
  @apply border-transparent;
}
.select-color input:checked + label {
  @apply bg-transparent border-black;
}

.select-color.select-black input:checked + label div {
  @apply bg-black;
}
.select-color.select-black label {
  @apply bg-black;
}

.select-color.select-primary input:checked + label div {
  @apply bg-primary;
}
.select-color.select-primary label {
  @apply bg-primary;
}

.select-color.select-success input:checked + label div {
  @apply bg-success;
}
.select-color.select-success label {
  @apply bg-success;
}

.select-color.select-secondary input:checked + label div {
  @apply bg-secondary;
}
.select-color.select-secondary label {
  @apply bg-secondary;
}
</style>