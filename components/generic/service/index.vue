<script setup>
let {iconName , iconPathCount , title , subtitle } = defineProps({
  iconName: {
    type: String,
    default: "",
  },
  iconPathCount: {
    type: Number,
    default: 0,
  },
  title: {
    type: String,
    default: "",
  },
  subtitle: {
    type: String,
    default: "",
  }
});
</script>

<template>
  <div class="w-fit">
    <div class="w-20 h-20 bg-natural-tetha p-2.5 rounded-full mx-auto mb-4">
      <div class="bg-black flex items-center justify-center w-full h-full rounded-full">  
        <GenericIcon :name="iconName" :iconPathCount="iconPathCount" class="!text-white !text-8xl"/>
      </div>
    </div>
    <h2 class="title-public title-public-medium title-semibold text-center mb-0.5">
      {{ title }}
    </h2>
    <p class="text-sm text-centerr">
      {{ subtitle }}
    </p>
  </div>
</template>