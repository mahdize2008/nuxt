<script setup>
let icons = [
  "moneybag",
  "secure",
  "telephone",
  "email",
  "phone",
  "avatar",
  "padlock",
  "exchange",
  "heart",
  "send1",
  "instagram",
  "wordpress",
  "twitter",
  "messenger",
  "next",
  "bag",
  "star",
  "facebook",
  "hangouts",
  "linkedin",
  "tag",
  "plus",
  "minus",
  "line",
  "check",
  "bucket",
  "close",
  "headphones",
  "cancel",
  "refresh",
  "shipping",
  "fire1",
  "enable",
  "trash",
  "truck",
];
</script>

<template>
  <div class="container py-between-section flex flex-wrap items-center">
    <GenericIcon
      v-for="(icon, index) in icons"
      :key="index"
      :name="icon"
      class="ml-4 last:ml-0"
    />
  </div>
</template>

<style>
</style>