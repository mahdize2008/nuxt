<script setup>
import { ref } from "vue";
let { min, max } = defineProps({
  min: {
    type: Number,
    default: 1,
  },
  max: {
    type: Number,
    default: 1000,
  },
});
let inputValue = ref(1);
function checkInput(action) {
  if (action === "plus" && inputValue.value < max) {
    inputValue.value++;
  } else if (action === "minus" && inputValue.value > min) {
    inputValue.value--;
  }
}
</script>

<template>
  <div
    class="border-2 border-natural-tetha w-[70px] bg-natural-beta rounded-sm py-3 relative"
  >
    <input
      type="number"
      class="bg-natural-beta w-full px-3"
      v-model="inputValue"
    />
    <ul class="absolute top-0 right-2 h-full py-1 z-20 bg-natural-beta">
      <li
        class="h-1/2 flex items-center justify-center px-1 hover:text-primary cursor-pointer"
        @click="checkInput('plus')"
      >
        <GenericIcon name="up-chevron" class="!text-2xs !font-bold" />
      </li>
      <li
        class="h-1/2 flex items-center justify-center px-1 hover:text-primary cursor-pointer"
        @click="checkInput('minus')"
      >
        <GenericIcon name="down-chevron" class="!text-2xs !font-bold" />
      </li>
    </ul>
  </div>
</template>

<style>
</style>