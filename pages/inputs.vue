<script setup>

</script>

<template>
  <div class="container my-between-section">
    <div class="flex items-center flex-wrap mb-8 last:mb-0">
      <h2 class="text-5xl text-primary font-bold w-full mb-4">
        public
      </h2>
      <GenericInput placeholder="What are you looking for?" iconName="search-svgrepo-com-2" class="mr-4"/>
      <GenericInput placeholder="What are you looking for?"/>
    </div>
    <div class="flex items-center flex-wrap mb-8 last:mb-0">
      <h2 class="text-5xl text-primary font-bold w-full mb-4">
        public outline
      </h2>
      <GenericInput placeholder="What are you looking for?" hasOutline iconName="send1" class="mr-4"/>
      <GenericInput placeholder="What are you looking for?" hasOutline/>
    </div>
    <div class="flex items-center flex-wrap mb-8 last:mb-0">
      <h2 class="text-5xl text-black font-bold w-full mb-4">
        black
      </h2>
      <GenericInput color="black" placeholder="Enter your email" iconName="send1" class="mr-4"/>
      <GenericInput color="black" placeholder="Enter your email"/>
    </div>
    <div class="flex items-center flex-wrap mb-8 last:mb-0 p-4 bg-black">
      <h2 class="text-5xl text-white font-bold w-full mb-4">
        black outline
      </h2>
      <GenericInput hasOutline placeholder="Enter your email" color="black" iconName="send1" class="mr-4"/>
      <GenericInput hasOutline placeholder="Enter your email" color="black"/>
    </div>
  </div>
</template>

<style>
</style>