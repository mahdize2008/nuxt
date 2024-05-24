<script setup>
let { hasLogo }=defineProps({
    hasLogo:{
        type:Boolean,
        default:false
    }
})
</script>
<template>
    <div class="flex items-center">
        <div v-if="hasLogo" class="flex items-center font-medium tx-xs text-primary-beta ml-8">
            <GenericIcon name="roidino" class="text-success text-base ml-2"/>
            دانلود اپلیکیشن و بازی اندروید
        </div>
        <ul class="-m-4 flex items-center">
            <li class="p-4 flex items-center font-medium tx-xs text-primary">
                <GenericIcon name="shield" :pathCount="4" class="text-xl ml-2"/>
                ترافیک نیم‌بها
            </li>
            <li class="p-4 flex items-center font-medium tx-xs text-primary">
                <GenericIcon name="shield_checked" :pathCount="4" class="text-xl ml-2"/>
                ترافیک نیم‌بها
            </li>
            <li class="p-4 flex items-center font-medium tx-xs text-primary">
                <GenericIcon name="gamepad" :pathCount="4" class="text-xl ml-2"/>
                ترافیک نیم‌بها
            </li>
            <li class="p-4 flex items-center font-medium tx-xs text-primary">
                <GenericIcon name="diamond" :pathCount="4" class="text-xl ml-2"/>
                ترافیک نیم‌بها
            </li>
            <li class="p-4 flex items-center font-medium tx-xs text-primary">
                <GenericIcon name="dashboard" :pathCount="4" class="text-xl ml-2"/>
                ترافیک نیم‌بها
            </li>
        </ul>
    </div>
</template>