<script setup>
let { articles } = defineProps({
    articles: {
        type: Array,
        default: []
    }
})
</script>
<template>
        <div>
            <SectionsBlogContentSidebar/>
            <SectionsBlogContentMain/>
        </div>
</template>