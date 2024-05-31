<script setup>
let dropdownItems1 = [
    {
        title: "برنامه",
        iconName: "category",
        iconPathCount: 4
    }
]
let dropdownItems2 = [
    {
        title: "بازی",
        iconName: "category",
        iconPathCount: 4
    }
]
</script>
<template>
    <header class="border-b-public-section">
        <div class="container flex items-center py-7 ">
            <GenericLogo hasSubtitle class="ml-3.5 w-[143px]" />
            <GenericBtn tag="NuxtLink" to="/" iconName="dark-mode" :iconPathCount="0"
                class="ml-3.5 !w-[27px] !h-[27px]" lightness square rounded />
            <GenericDropdownHeader class="ml-3.5" to="/design-system" :items="dropdownItems1" />
            <GenericDropdownHeader class="ml-3.5" to="/design-system" :items="dropdownItems2" />
            <GenericInput class="w-[330px] last:mb-0" placeholder="حالت عادی">
                <template #right-side>
                    <GenericIcon name="search" class="text-xl ml-2" :pathCount="2" />
                </template>
            </GenericInput>
            <div class="flex items-center mr-auto">
                <GenericBtn tag="NuxtLink" to="/" iconName="profile" :iconPathCount="4" class="ml-4 last:ml-0"
                    lightness square rounded />
                <GenericBtn tag="NuxtLink" to="/" iconName="category" :iconPathCount="4" class="ml-4 last:ml-0"
                    lightness square rounded />
                <GenericBtn tag="NuxtLink" to="/" iconName="profile" :iconPathCount="4" class="ml-4 last:ml-0"
                    lightness square rounded />
            </div>
        </div>
</header></template>