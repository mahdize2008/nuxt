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
                :grouping="headerSection.grouping" :link="headerSection.link" :iconName="headerSection.iconName"
                :iconPathCount="headerSection.iconPathCount" />
            <div class="flex items-start -m-[15px]">
                <div class="w-[54%] p-[15px]">
                    <ArticleCardSpecial :hasVideo="firstArticle.hasVideo" :to="firstArticle.to" :bgImg="firstArticle.bgImg"
                        :title="firstArticle.title" :description="firstArticle.description" :date="firstArticle.date" />
                </div>
                <div class="w-[46%] p-[15px]">
                    <template v-for="(article, index) in items" :key="index">
                        <ArticleCardRow v-if="index !== 0"
                            :hasVideo="article.hasVideo" :to="article.to" :imgSrc="article.imgSrc" :title="article.title"
                            :date="article.date" />
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>


<style></style>