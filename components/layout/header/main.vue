<script lang="ts" setup>
let languages = ["türkçe", "english", "فارسی"];
</script>

<template>
  <div class="flex items-center container py-8">
    <h2 class="title-public mr-auto">
        Exclusive
    </h2>
    <ul class="flex items-center mr-auto">
        <li>
            <NuxtLink class="header-router-link" to="/">
                home
            </NuxtLink>
        </li>
        <li>
            <NuxtLink class="header-router-link" to="/contact">
                contact
            </NuxtLink>
        </li>
        <li>
            <NuxtLink class="header-router-link" to="/about">
                about
            </NuxtLink>
        </li>
        <li>
            <NuxtLink class="header-router-link" to="/signUp">
                sign up
            </NuxtLink>
        </li>
    </ul>
    <GenericInput placeholder="What are you looking for?" iconName="search-svgrepo-com-2" class="mr-4"/>
    <ul class="flex items-center">
        <li class="mr-1 last:mr-0">
            <GenericBtn iconName="heart" square color="transparent"/>
        </li>
        <li class="mr-1 last:mr-0">
            <GenericBtn iconName="shopping-cart1" square color="transparent"/>
        </li>
        <li class="mr-1 last:mr-0">
            <GenericBtn iconName="avatar" square color="transparent"/>
        </li>
    </ul>
  </div>
</template>

<style scoped>
a.header-router-link {
    @apply text-base text-black capitalize px-5 hover:text-primary transition-all
}
a.router-link-active {
    @apply underline pointer-events-none
}
</style>