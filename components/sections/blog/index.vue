<script setup>
let { articleSliderItems,articlesItems }=defineProps({
    articleSliderItems:{
        type:Array,
        default:[]
    },
    articlesItems:{
        type:Array,
        default:[]
    }
})


</script>

<template>
    <div>
        <!-- START-ARTICLE-SLIDER-ITEMS -->
        <SectionsBlogHeader
            :articles="articleSliderItems" />
        <!-- END-ARTICLE-SLIDER-ITEMS -->



        <div class="container">
            <div class="-m-4 flex items-start">
                <SectionsBlogContentMain :articlesItems="articlesItems"/>
                

                <SectionsBlogContentSidebar />
            </div>
        </div>
    </div>
</template>