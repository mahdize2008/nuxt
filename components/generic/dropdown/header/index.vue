<script setup>
let show=ref(false)
</script>
<template>
    <div class="relative w-fit rounded-xl transition-all" :class="{'rounded-b-none':show}">
        <GenericDropdownHeaderButton title="برنامه" @click="show=!show" iconName="category" :iconPathCount="4" />
        <div class="absolute top-[105%] bg-primary-tetha rounded-xl right-0 w-full" v-show="show">
            <GenericDropdownHeaderButton title="برنامه" iconName="category" :iconPathCount="4" />
            <GenericDropdownHeaderButton title="برنامه" iconName="category" :iconPathCount="4" />
            <GenericDropdownHeaderButton title="برنامه" iconName="category" :iconPathCount="4" />
        </div>
    </div>
</template>