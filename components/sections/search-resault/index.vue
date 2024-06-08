<script setup>
let {apps , paginationItems}=defineProps({
    apps:{
        type:Array,
        default:[]
    },
    paginationItems:{
        type:Object,
        default:{}
    }
})
</script>
<template>
    <div>
        <h2 class="tx-md font-medium mb-5 text-success">
            ۱۰ نتیجه برای جستجتوی «واژه جستجو شده»
        </h2>

        <SectionsAppBox :paginationItems="paginationItems" :items="apps" class="mb-between-section last:!mb-0" />
    </div>
</template>