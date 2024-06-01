
<template>
    <div>
        <div class="p-8 relative overflow-hidden rounded-full flex items-center border border-primary-tetha">
            <img src="/img/img-3.png" class="w-[90px] relative z-10">
            <div class="mr-6 relative z-10">
                <h2 class="tx-base text-primary font-medium mb-2">
                    اینجا حرفه‌ای بهت بازی پیشنهاد می‌دیم!
                </h2>
                <p class="mb-4 tx-xs font-medium text-primary-beta">
                    می‌خوای بفهمی چه‌خبره؟ رو دکمه‌ی زیر کلیک کن...
                </p>
                <GenericBtn tag="NuxtLink" iconName="left" iconLeftSide class="!px-8" to="/" gradient rounded>
                    پیشنهاد بده
                </GenericBtn>
            </div>
            <img src="/img/back.png" class="absolute top-0 left-0 h-full">
        </div>
    </div>
</template>