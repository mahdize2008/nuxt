<script setup>
let {iconName , iconPathCount , color, size, rounded, lightness, outline, text, square ,btnText ,tag } = defineProps({
  iconName: {
    type: String,
    default: "",
  },
  iconPathCount: {
    type: Number,
    default: 0,
  },
  color: {
    type: String,
    default: "",
  },
  size: {
    type: String,
    default: "md",
    validator: (value) => {
      return ["sm", "md", "lg"].includes(value);
    },
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  lightness: {
    type: Boolean,
    default: false,
  },
  outline: {
    type: Boolean,
    default: false,
  },
  text: {
    type: String,
    default: "",
  },
  square: {
    type: Boolean,
    default: false,
  },
  btnText: {
    type: Boolean,
    default: false,
  },
  iconEnd: {
    type: Boolean,
    default: false,
  },
  tag: {
    type: String,
    default: 'a',
  },
});

function setSize() {
  return `btn-${size}`;
}

function setColor() {
  if (color != '') {
    return `btn-${color}`;
  }
  else {
    return `btn-black`
  }
}
</script>

<template>
  <component :is="tag" class="btn" :class="[{ 'btn-rounded': rounded },{ 'btn-lightness': lightness },{ 'btn-outline': outline },{ 'btn-square': square },{ 'btn-text': btnText },setSize(),setColor()]">
    <GenericIcon :name="iconName" :iconPathCount="iconPathCount" v-if="iconName" :class="[{'mr-3' : text.length&&!iconEnd},{'ml-3' : text.length&&iconEnd},{'!order-2':iconEnd}]" />
    {{ text }}
  </component>
</template>

<style>
.btn {
  @apply flex items-center justify-center border-black text-white bg-black border-2 rounded-md w-full px-12 h-10 text-base font-medium hover:!bg-opacity-20 hover:text-black transition-all cursor-pointer;
}
.btn i {
  @apply text-base;
}
.btn-primary {
  @apply bg-primary border-primary hover:text-primary;
}
.btn-secondary {
  @apply bg-secondary border-secondary hover:text-secondary
}
.btn-success {
  @apply bg-success border-success hover:text-success
}
.btn-natural {
  @apply bg-natural border-natural hover:text-natural
}
.btn-white {
  @apply bg-white border-white hover:text-white hover:bg-primary/100 hover:border-primary text-black
}
.btn-transparent {
  @apply bg-transparent border-transparent hover:text-primary text-black
}


.btn-sm{
  @apply h-8 !text-xs font-medium
}
.btn.btn-sm i {
  @apply text-sm-plus;
}

.btn-lg{
  @apply h-[56px] text-xl
}
.btn.btn-lg i {
  @apply text-xl;
}

.btn.btn-outline {
  @apply bg-opacity-0 text-black hover:!bg-opacity-100 hover:!text-white
}
.btn.btn-outline.btn-lightness {
  @apply border-opacity-20 hover:!border-opacity-100
}
.btn-square{
  @apply !aspect-square !w-fit px-0
}

.btn.btn-lightness {
  @apply bg-opacity-20 border-opacity-0 text-black hover:!bg-opacity-100 hover:!text-white
}
.btn.btn-lightness.btn-primary,.btn.btn-outline.btn-primary {
  @apply text-primary;
}
.btn.btn-lightness.btn-secondary,.btn.btn-outline.btn-secondary {
  @apply text-secondary
}
.btn.btn-lightness.btn-success,.btn.btn-outline.btn-success {
  @apply text-success
}
.btn.btn-lightness.btn-natural,.btn.btn-outline.btn-natural {
  @apply text-natural
}
.btn.btn-lightness.btn-white,.btn.btn-outline.btn-white {
  @apply text-white hover:!text-black
}

.btn.btn-rounded {
  @apply rounded-full
}

.btn.btn-text {
  @apply !bg-transparent !border-none
}
.btn.btn-text.btn-white {
  @apply !text-white hover:!text-primary
}
</style>