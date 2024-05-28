
<script setup>
let { items,headerSection ,to} = defineProps({
    items: {
        type: Array,
        default: []
    },
    headerSection:{
        type: Object,
        default: {}
    },
    to:{
        type: String,
        default: ''
    }
})
</script>
<template>
    <div>
        <GenericHeaderSection :title="headerSection.title" :subtitle="headerSection.subtitle"
            :category="headerSection.category" :link="headerSection.link" :iconName="headerSection.iconName"
            :iconPathCount="headerSection.iconPathCount" />
        <GenericAccordion :items="items" class="mb-6"/>
        <div class="flex items-center tx-sm">
            پاسخ سوالتون رو پیدا نکردید؟ 
            <NuxtLink :to="to" class="tx-xs flex items-center text-success mr-4">
                مشاهده همه سوالات متداول
                <GenericIcon name="left" class="!text-4xs mr-1.5"/>
            </NuxtLink>
        </div>
    </div>
</template>