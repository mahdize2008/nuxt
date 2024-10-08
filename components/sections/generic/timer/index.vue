<script setup>
let {blackMode}=defineProps({
    blackMode:{
        type:Boolean,
        default:false
    }
})
</script>

<template>
  <ul class="timer flex items-center" :class="{'timer-black':blackMode}">
    <li class="text-black text-xs capitalize font-medium mr-8 last:mr-0 timer-item relative last:after:hidden">
        days
        <div class="text-5xl font-bold leading-none mt-0.5">
            03
        </div>
    </li>
    <li class="text-black text-xs capitalize font-medium mr-8 last:mr-0 timer-item relative last:after:hidden">
        Hours
        <div class="text-5xl font-bold leading-none mt-0.5">
            03
        </div>
    </li>
    <li class="text-black text-xs capitalize font-medium mr-8 last:mr-0 timer-item relative last:after:hidden">
        Minutes
        <div class="text-5xl font-bold leading-none mt-0.5">
            03
        </div>
    </li>
    <li class="text-black text-xs capitalize font-medium mr-8 last:mr-0 timer-item relative last:after:hidden">
        Seconds
        <div class="text-5xl font-bold leading-none mt-0.5">
            03
        </div>
    </li>
  </ul>
</template>

<style scped>
.timer-item::after{
    @apply absolute top-1/2 -translate-y-1/3 -right-4 translate-x-1/2 font-bold text-xl text-primary;
  content: ":";
}

.timer.timer-black .timer-item{
    @apply bg-black text-white rounded-full !w-16 !h-16 text-2xs font-normal flex items-center justify-center flex-col
}
.timer.timer-black .timer-item::after{
    @apply -translate-y-1/2
}
.timer.timer-black .timer-item div{
    @apply !text-base order-first mt-0 mb-0.5
}
</style>