<script setup>
import {ref} from 'vue'
let comments = [
    {
        name: "امیرحسین صفری",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون.",
        subtitle: "Samsung Galaxy S23FE",
        img: "/img/profile.png",
        rate: 4,
        isSuggest: true,
        time: "۲۷ فروردین ۱۴۰۳",
        likes: 300
    },
    {
        name: "امیرحسین صفری",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون.",
        subtitle: "Samsung Galaxy S23FE",
        img: "/img/profile.png",
        rate: 4,
        time: "۲۷ فروردین ۱۴۰۳",
        replies: [
            {
                isRoidinoComment:true,
                text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون.",
                time: "۲۷ فروردین ۱۴۰۳",
                likes: 300
            },
            {
                name: "امیرحسین صفری",
                text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون.",
                img: "/img/profile.png",
                subtitle:"Samsung Galaxy S23FE",
                effectiveReply: true,
                time: "۲۷ فروردین ۱۴۰۳",
                likes: 300
            }
        ],
        likes: 300
    }
]

let showMore=ref(false)
</script>
<template>
    <div class="p-5 rounded-xl border-2 border-primary-tetha">
        <GenericHeaderSectionSecondary class="!mb-9" title="نظرات کاربران" />
        <AppSingleContentMainCommentsBoxRate class="mb-9" :rate="4.7" :users="300" />
        <div v-for="(comment , index) in comments" :key="index">
            <AppSingleContentMainCommentsBoxComment :name="comment.name" :subtitle="comment.subtitle" :text="comment.text" :img="comment.img" :rate="comment.rate" :isSuggest="comment.isSuggest" :time="comment.time" :replies="comment.replies" :likes="comment.likes"/>
        </div>
        <GenericBtn class="mx-auto !mb-4 px-4" v-if="!showMore" @click="showMore = !showMore" outline lightness iconLeftSide iconName="down" rounded>
            مشاهده بیشتر
        </GenericBtn>
        <GenericBtn class="mx-auto !mb-4 px-4" v-if="showMore" @click="showMore = !showMore" outline lightness iconLeftSide iconName="up" rounded>
            مشاهده کمتر
        </GenericBtn>
    </div>
</template>