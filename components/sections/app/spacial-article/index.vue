<script setup>
import { ref } from 'vue'
let { items, headerSection } = defineProps({
    items: {
        type: Array,
        default: []
    },
    headerSection: {
        type: Object,
        default: {}
    }
});
let firstArticle = items[0]
</script>

<template>
    <div>
        <div class="container">
            <GenericHeaderSection :title="headerSection.title" :subtitle="headerSection.subtitle"
                :category="headerSection.category" :link="headerSection.link" :iconName="headerSection.iconName"
                :iconPathCount="headerSection.iconPathCount" />
            <div class="flex items-start -m-[15px]">
                <div class="w-[54%] p-[15px]">
                    <ArticleCardSpecial :hasVideo="firstArticle.hasVideo" :to="firstArticle.to" :bgImg="firstArticle.bgImg"
                        :title="firstArticle.title" :description="firstArticle.description" :date="firstArticle.date" />
                </div>
                <div class="w-[46%] p-[15px]">
                    <ArticleCardRow v-for="(article, index) in items" :class="{ 'hidden': index === 0 }" :key="index"
                        :hasVideo="article.hasVideo" :to="article.to" :imgSrc="article.imgSrc" :title="article.title"
                        :date="article.date" />
                </div>
            </div>
        </div>
    </div>
</template>


<style></style>