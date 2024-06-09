<script setup>
let { header, articles } = defineProps({
    header: {
        type: String,
        default: ''
    },
    articles: {
        type: Array,
        default: []
    }
})
</script>

<template>
    <div>
        <GenericHeaderSectionSecondary :title="header" />
        <ul>
            <li class="mb-5 last:mb-0" v-for="(article, index) in articles" :key="index">
                <SectionsBlogContentSidebarArticlesItemVideo v-if="article.hasVideo" :title="article.title"
                    :img="article.img" :to="article.to" />
                <SectionsBlogContentSidebarArticlesItem v-else :title="article.title" :img="article.img" :to="article.to" />
            </li>
        </ul>
    </div>
</template>