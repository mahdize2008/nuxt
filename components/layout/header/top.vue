<script lang="ts" setup>
let languages=[
    'türkçe',
    'english',
    'فارسی'
]
</script>

<template>
    <div class="bg-black">
        <div class="flex items-center container py-2">
          <div class="w-[63px]"></div>
            <div class="flex items-center text-white mr-auto text-sm font-light mx-auto">
                Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                <a href="#" class="block font-normal underline ml-2">
                    ShopNow
                </a>
            </div>
          <GenericSelect :items="languages"/>
        </div>
    </div>
</template>

<style>

</style>