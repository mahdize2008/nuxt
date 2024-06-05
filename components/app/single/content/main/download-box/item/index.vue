<script setup>
let {title , link , qrcode , size , isGooglePalyLink , isAutoSetup , isMode}=defineProps({
    title:{
        type:String,
        default:''
    },
    link:{
        type:String,
        default:''
    },
    qrcode:{
        type:String,
        default:''
    },
    size:{
        type:String,
        default:''
    },
    isGooglePalyLink:{
        type:Boolean,
        default:false
    },
    isAutoSetup:{
        type:Boolean,
        default:false
    },
    isMode:{
        type:Boolean,
        default:false
    },
})
</script>

<template>
    <li class="p-2 flex">
        <div v-if="!isAutoSetup && !isGooglePalyLink"
            class="w-20 h-20 shrink-0 bg-primary-tetha rounded-xl flex items-center justify-center ml-4">
            <img :src="qrcode" class="min-w-[28px]">
        </div>
        <a v-if="!isAutoSetup && !isGooglePalyLink" :href="link"
            class="flex items-center group hover:bg-success hover:border-success transition-all grow rounded-xl px-4 h-20 border-2 border-primary-tetha">
            <GenericIcon name="download1" class="text-success group-hover:text-white transition-all text-md ml-3.5" />
            <div>
                <h3 class="tx-sm font-medium text-primary group-hover:text-white transition-all mb-1">
                    {{ title }}
                </h3>
                <ul class="-mx-2.5 tx-xs text-primary-beta group-hover:text-white/70 transition-all flex items-center font-medium">
                    <li
                        class="relative px-2.5 last:after:hidden after:w-[3px] after:-translate-x-1/2 after:absolute after:top-1/2 after:left-0 after:-translate-y-1/2 after:h-[3px] after:bg-primary-gamma after:rounded-full">
                        {{ size }}
                    </li>
                    <li
                        class="relative px-2.5 last:after:hidden after:w-[3px] after:-translate-x-1/2 after:absolute after:top-1/2 after:left-0 after:-translate-y-1/2 after:h-[3px] after:bg-primary-gamma after:rounded-full">
                        ۲۰۰ مگابایت
                    </li>
                </ul>
            </div>
        </a>
        <a v-if="isAutoSetup" :href="link"
            class="flex items-center grow rounded-xl px-4 h-20 bg-secondary">
            <GenericIcon name="shield_check" class="text-white text-xl ml-3.5" />
            <div>
                <h3 class="tx-sm font-medium text-white mb-1">
                    {{ title }}
                </h3>
                <ul class="-mx-2.5 tx-xs text-white/70 flex items-center font-medium">
                    <li
                        class="relative px-2.5 last:after:hidden after:w-[3px] after:-translate-x-1/2 after:absolute after:top-1/2 after:left-0 after:-translate-y-1/2 after:h-[3px] after:bg-primary-gamma after:rounded-full">
                        {{ size }}
                    </li>
                    <li
                        class="relative px-2.5 last:after:hidden after:w-[3px] after:-translate-x-1/2 after:absolute after:top-1/2 after:left-0 after:-translate-y-1/2 after:h-[3px] after:bg-primary-gamma after:rounded-full">
                        ۲۰۰ مگابایت
                    </li>
                </ul>
            </div>
        </a>
        <a v-if="isGooglePalyLink" :href="link"
            class="flex items-center group hover:bg-success hover:border-success transition-all grow rounded-xl px-4 h-20 border-2 border-primary-tetha">
            <GenericIcon name="shield_check" class="text-primary transition-all group-hover:text-white text-md ml-3.5" />
            <div class="tx-xs text-primary-beta font-medium group-hover:text-white/70 transition-all">
                <h3 class="tx-sm font-medium text-primary  group-hover:text-white transition-all mb-1">
                    دانلود از طریق گوگل پلی
                </h3>
                Get it on Google Play
            </div>
        </a>
    </li>
</template>