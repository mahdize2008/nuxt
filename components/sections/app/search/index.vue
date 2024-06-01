
<script setup>
let { items, paginationItems } = defineProps({
    items: {
        type: Array,
        default: []
    },
    paginationItems: {
        type: Object,
        default: {}
    }
})
</script>

<template>
    <div>
        <h2 class="tx-md font-medium mb-5 text-success">
            ۱۰ نتیجه برای جستجتوی «واژه جستجو شده»
        </h2>
        <div class="flex flex-wrap items-start !p-[60px] !-m-[65px] !-mb-[35px]">
            <div v-for="(item, index) in items" :key="index" class="w-[calc(100%/7)] p-[5px]">
                <AppCardNormal :to="item.to" :isOnline="item.isOnline" :hasSield="item.hasSield"
                        :bgImg="item.bgImg" :img="item.img" :name="item.name" :description="item.description"
                        :category="item.category" :rate="item.rate" />
            </div>
        </div>
        <GenericPagination class="justify-center" :items="paginationItems"/>
    </div>
</template>
<style scoped>
.swiper-btn:not(.swiper-button-disabled) {
    @apply !text-success
}
</style>