<script setup>
let { downloadItems } = defineProps({
    downloadItems: {
        type: Array,
        default: []
    }
})
</script>
<template>
    <div class="p-5 rounded-xl border-2 border-primary-tetha">
        <GenericHeaderSectionSecondary class="!mb-9" title="باکس دانلود" />

        <ul class="-m-2 mb-7">
            <AppSingleContentMainDownloadBoxItem v-for="(item, index) in downloadItems" :key="index" :title="item.title"
                :link="item.link" :qrcode="item.qrcode" :size="item.size" :isGooglePalyLink="item.isGooglePalyLink"
                :isAutoSetup="item.isAutoSetup" :isMode="item.isMode" />
            <li class="p-2">
                <div :href="link" class="flex items-center w-full bg-danger-alpha rounded-xl px-4 h-20">
                    <GenericIcon name="shield_check" class="text-danger text-xl ml-3.5" />
                    <h3 class="tx-sm font-medium text-danger">
                        لینک دانلود به‌دستور کارگروه مصادیق و محتوای مجرمانه حذف گردید
                    </h3>
                </div>
            </li>
        </ul>

        <ul class="flex items-center">
            <li class="ml-2.5 last:ml-0">
                <GenericBtn iconName="shield_check" lightness>
                    گزارش خرابی لینک
                </GenericBtn>
            </li>
            <li class="ml-2.5 last:ml-0">
                <GenericBtn iconName="shield_check" lightness>
                    گزارش مشکل
                </GenericBtn>
            </li>
        </ul>
    </div>
</template>