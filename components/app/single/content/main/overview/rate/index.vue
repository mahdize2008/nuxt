
import type { GenericIcon } from '#build/components';
<script setup>
let { rate , users } = defineProps({
    rate: {
        type: Number,
        default: 0
    },
    users: {
        type: Number,
        default: 0
    }
})
</script>
<template>
    <div class="flex items-center justify-between">
        <div class="flex flex-col items-center w-fit">
            <div class="text-25xl text-primary font-medium mb-1 leading-none">
                {{ rate }}
            </div>
            <ul class="flex items-center -mx-[5px] mb-3">
                <li class="px-[5px]">
                    <GenericIcon name="star" class="text-primary-gamma text-base"/>
                </li>
                <li class="px-[5px]">
                    <GenericIcon name="star" class="text-success text-base"/>
                </li>
                <li class="px-[5px]">
                    <GenericIcon name="star" class="text-success text-base"/>
                </li>
                <li class="px-[5px]">
                    <GenericIcon name="star" class="text-success text-base"/>
                </li>
                <li class="px-[5px]">
                    <GenericIcon name="star" class="text-success text-base"/>
                </li>
            </ul>
            <div class="tx-xs text-primary-beta font-medium">
                {{ users }} نظر کاربران
            </div>
        </div>
        <ul class="w-[600px]">
            <li class="flex tx-xs text-primary font-medium items-center mb-2.5 last:mb-0">
                5
                <div class="w-full rounded-full bg-primary-tetha mr-3">
                    <div class="w-[77%] rounded-full h-[5px] bg-success"></div>
                </div>
            </li>
            <li class="flex tx-xs text-primary font-medium items-center mb-2.5 last:mb-0">
                4
                <div class="w-full rounded-full bg-primary-tetha mr-3">
                    <div class="w-[44%] rounded-full h-[5px] bg-success-beta"></div>
                </div>
            </li>
            <li class="flex tx-xs text-primary font-medium items-center mb-2.5 last:mb-0">
                3
                <div class="w-full rounded-full bg-primary-tetha mr-3">
                    <div class="w-[57%] rounded-full h-[5px] bg-warning"></div>
                </div>
            </li>
            <li class="flex tx-xs text-primary font-medium items-center mb-2.5 last:mb-0">
                2
                <div class="w-full rounded-full bg-primary-tetha mr-3">
                    <div class="w-[30%] rounded-full h-[5px] bg-warning-alpha"></div>
                </div>
            </li>
            <li class="flex tx-xs text-primary font-medium items-center mb-2.5 last:mb-0">
                1
                <div class="w-full rounded-full bg-primary-tetha mr-3">
                    <div class="w-[21%] rounded-full h-[5px] bg-danger"></div>
                </div>
            </li>
        </ul>
        <form class="flex flex-col items-center w-fit">
            <div class="tx-xs text-primary font-medium mb-5">
                نظرات خود را همین حالا به‌ثبت برسانید
            </div>
            <ul class="flex items-center -mx-2.5 mb-5">
                <li class="px-2.5">
                    <GenericIcon name="star" class="text-5xl text-primary-gamma"/>
                </li>
                <li class="px-2.5">
                    <GenericIcon name="star" class="text-5xl text-primary-gamma"/>
                </li>
                <li class="px-2.5">
                    <GenericIcon name="star" class="text-5xl text-primary-gamma"/>
                </li>
                <li class="px-2.5">
                    <GenericIcon name="star" class="text-5xl text-primary-gamma"/>
                </li>
                <li class="px-2.5">
                    <GenericIcon name="star" class="text-5xl text-primary-gamma"/>
                </li>
            </ul>
            <GenericBtn type="submit" rounded gradient class="!px-20">
                ثبت نظر
            </GenericBtn>
        </form>
    </div>
</template>