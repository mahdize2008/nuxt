<script setup>
let colors1 = ['primary', 'primary-alpha', 'primary-beta', 'primary-gamma', 'primary-tetha']
let colors2 = ['success', 'success-alpha', 'success-gradient']
let colors3 = ['white', 'white-alpha', 'black']
let colors4 = ['warning', 'danger', 'danger-alpha']
</script>
<template>
    <div class="container mt-between-section mb-between-section">
        <div class="flex items-start flex-wrap mb-3 last:mb-0">
            <colorsVColor v-for="color of colors1" :color="color" />
        </div>
        <div class="flex items-start flex-wrap mb-3 last:mb-0">
            <colorsVColor v-for="color of colors2" :color="color" />
        </div>
        <div class="flex items-start flex-wrap mb-3 last:mb-0">
            <colorsVColor v-for="color of colors3" :color="color" />
        </div>
        <div class="flex items-start flex-wrap mb-3 last:mb-0">
            <colorsVColor v-for="color of colors4" :color="color" />
        </div>
    </div>
</template>