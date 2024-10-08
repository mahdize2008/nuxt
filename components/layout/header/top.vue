<script lang="ts" setup>
let languages=[
    'english',
    'türkçe',
    'فارسی'
]
</script>

<template>
    <div class="bg-black">
        <div class="flex items-center container py-2">
          <div class="w-[100px]"></div>
            <div class="flex items-center text-white mr-auto text-sm font-light mx-auto">
                Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                <a href="#" class="block font-normal underline ml-2">
                    ShopNow
                </a>
            </div>
          <GenericSelect class="!justify-end" :items="languages"/>
        </div>
    </div>
</template>

<style>

</style>