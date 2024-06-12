
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
        <ul class="flex flex-wrap items-start !p-[60px] !-m-[65px] !-mb-[35px]">
            <li v-for="(item, index) in items" :key="index" class="w-[calc(100%/7)] p-[5px]">
                <AppCardNormal :to="item.to" :isOnline="item.isOnline" :isChosen="item.isChosen"
                        :bgImg="item.bgImg" :img="item.img" :name="item.name" :description="item.description"
                        :category="item.category" :rate="item.rate" />
            </li>
        </ul>
        <GenericPagination class="justify-center" :items="paginationItems"/>
    </div>
</template>
<style scoped>
.swiper-btn:not(.swiper-button-disabled) {
    @apply !text-success
}
</style>