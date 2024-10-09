<script setup>
let { price, previousPrice, title, isNew, hasDeletBtn, discount, rating, voter, hasLikeBtn, hasViewBtn, colors,hasAddBtn,imgSrc} = defineProps({
  price: {
    type: Number,
  },
  previousPrice: {
    type: Number,
  },
  title: {
    type: String,
  },
  isNew: {
    type: Boolean,
    default: false,
  },
  hasDeletBtn: {
    type: Boolean,
    default: false,
  },
  discount: {
    type: String,
  },
  rating: {
    type: Number,
    default: 0,
  },
  voter: {
    type: Number,
    default: 0,
  },
  hasLikeBtn: {
    type: Boolean,
    default: true,
  },
  hasAddBtn: {
    type: Boolean,
    default: true,
  },
  hasViewBtn: {
    type: Boolean,
    default: true,
  },
  colors: {
    type: Array,
    default: [],
  },
  imgSrc: {
    type: String
  },
});
</script>

<template>
  <div>
    <div class="h-[250px] flex flex-col mb-4">
      <div class="p-3.5 rounded-t-sm bg-light relative grow">
        <img
          src="/public/img/img-1.png"
          class="h-full w-full object-center object-scale-down"
        />
        <ul class="absolute top-3 right-3">
          <GenericBtn
            iconName="heart"
            size="sm"
            square
            rounded
            color="white"
            tag="li"
            class="mb-2 !font-bold last:mb-0"
            v-if="hasLikeBtn&&!hasDeletBtn"
          />
          <GenericBtn
            iconName="enable"
            size="sm"
            square
            rounded
            color="white"
            tag="li"
            class="mb-2 !font-bold last:mb-0"
            v-if="hasViewBtn&&!hasDeletBtn"
          />
          <GenericBtn
            iconName="trash"
            size="sm"
            square
            rounded
            color="white"
            tag="li"
            class="mb-2 !font-bold last:mb-0"
            v-if="hasDeletBtn"
          />
        </ul>
        <GenericBadge
          text="new"
          color="success"
          class="absolute top-3 left-3 z-10"
          v-if="isNew"
        />
        <GenericBadge
          :text="discount"
          class="absolute top-3 left-3 z-10"
          v-if="discount"
        />
      </div>
      <button
        class="capitalize text-white text-base font-medium bg-black w-full block py-3 leading-none rounded-b-sm" v-if="hasAddBtn"
      >
        Add To Cart
      </button>
    </div>
    <h2 class="text-base font-medium mb-1.5">Gucci duffle bag</h2>
    <div class="flex flex-wrap items-center">
      <div class="text-base leading-none mt-0.5 font-medium text-primary mr-3">
        ${{price}}
      </div>
      <del v-if="previousPrice" class="text-base leading-none mt-0.5 font-medium text-dark mr-3">
        ${{previousPrice}}
      </del>
      <div class="flex items-center" :class="{ 'w-full mt-3': previousPrice }">
        <GenericIcon name="star-1" class="!text-sm text-secondary mr-1 last:mr-0" />
        <GenericIcon name="star-1" class="!text-sm text-secondary mr-1 last:mr-0" />
        <GenericIcon name="star-1" class="!text-sm text-secondary mr-1 last:mr-0" />
        <GenericIcon name="star-1" class="!text-sm text-secondary mr-1 last:mr-0" />
        <GenericIcon name="star" class="!text-sm text-secondary mr-1 last:mr-0" />
        <div class="text-sm leading-none font-semibold text-dark mt-1 ml-1">
          ({{voter}})
        </div>
      </div>
    </div>
    
    <GenericRadioButton class="mt-2" name="select-color" :items="colors" hasColor v-if="colors.length"/>
  </div>
</template>

<style>
</style>