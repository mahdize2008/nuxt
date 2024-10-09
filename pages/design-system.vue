<script setup>
let readmapItems = [
  {
    title: "Account",
    to: "/",
  },
  {
    title: "Nothing",
    to: "/",
  },
  {
    title: "Nothing",
    to: "/",
  },
  {
    title: "Nothing",
    to: "/",
  },
  {
    title: "Nothing",
    to: "/",
  },
];
let selectItems = ["türkçe", "english", "فارسی"];
</script>

<template>
  <main class="bg-natural-beta">
    <div class="container mb-between-section pt-between-section">
      <h2 class="text-5xl text-black font-bold w-full mb-4">readmap</h2>
      <SectionsGenericReadmap :items="readmapItems" />
    </div>
    <div class="container mb-between-section">
      <h2 class="text-5xl text-black font-bold w-full mb-4">select</h2>
      <div class="bg-black w-fit rounded-lg">
        <GenericSelect class="px-4" :items="selectItems" />
      </div>
    </div>
    <div class="container mb-between-section">
      <h2 class="text-5xl text-black font-bold w-full mb-4">countdown</h2>
      <div class="bg-black w-fit rounded-lg">
        <GenericCountdown :items="selectItems" />
      </div>
    </div>
    <div class="container mb-between-section">
      <h2 class="text-10xl text-black font-bold w-full text-center">timer</h2>
      <div class="mb-8">
        <h2 class="text-5xl text-primary font-bold w-full mb-4">public</h2>
        <SectionsGenericTimer />
      </div>
      <div class="mb-4">
        <h2 class="text-5xl text-black font-bold w-full mb-4">black</h2>
        <SectionsGenericTimer blackMode />
      </div>
    </div>

    <div class="container mb-between-section">
      <h2 class="text-10xl text-black font-bold w-full text-center">service</h2>
      <GenericService
        iconName="secure"
        title="FREE AND FAST DELIVERY"
        subtitle="Free delivery for all orders over $140"
      />
    </div>

    <div class="container mb-between-section">
      <h2 class="text-10xl text-black font-bold w-full text-center">
        header section
      </h2>
      <div class="mb-4">
        <GenericHeaderSection
          iconName="secure"
          title="FREE AND FAST DELIVERY"
          subtitle="Free delivery for all orders over $140"
          swiperBtn="product-1"
          timer="2023/11/25 00:00:00"
        />
      </div>
      <div>
        <GenericHeaderSection
          iconName="secure"
          title="FREE AND FAST DELIVERY"
          subtitle="Free delivery for all orders over $140"
          link="/"
        />
      </div>
    </div>

    <div class="container mb-between-section">
      <h2 class="text-10xl text-black font-bold w-full text-center">product</h2>
      <div>
        <h2 class="text-5xl text-primary font-bold w-full mb-4">public</h2>
        <div class="flex items-start">
          <GenericProduct
            class="w-1/5 mr-3 last:mr-0"
            :price="960"
            :previousPrice="1160"
            title="Gucci duffle bag"
            isNew
            hasDeletBtn
            discount="-35%"
            :rating="4"
            :voter="65"
            hasLikeBtn
            hasAddBtn
            hasViewBtn
            :colors="['primary', 'black']"
            imgSrc="/public/img/img-1.png"
          />
          <GenericProduct
            class="w-1/5 mr-3 last:mr-0"
            :price="960"
            :previousPrice="1160"
            title="Gucci duffle bag"
            isNew
            :rating="4"
            :voter="65"
            hasLikeBtn
            hasAddBtn
            hasViewBtn
            :colors="['primary', 'black']"
            imgSrc="/public/img/img-1.png"
          />
          <GenericProduct
            class="w-1/5 mr-3 last:mr-0"
            :price="960"
            title="Gucci duffle bag"
            discount="-35%"
            :rating="4"
            :voter="65"
            hasLikeBtn
            hasAddBtn
            hasViewBtn
            :colors="['primary', 'black']"
            imgSrc="/public/img/img-1.png"
          />
          <GenericProduct
            class="w-1/5 mr-3 last:mr-0"
            :price="960"
            :previousPrice="1160"
            title="Gucci duffle bag"
            isNew
            :rating="4"
            :voter="65"
            hasViewBtn
            :hasAddBtn="false"
            :hasLikeBtn="false"
            :colors="['primary', 'black']"
            imgSrc="/public/img/img-1.png"
          />
          <GenericProduct
            class="w-1/5 mr-3 last:mr-0"
            :price="960"
            :previousPrice="1160"
            title="Gucci duffle bag"
            discount="-35%"
            :rating="4"
            :voter="65"
            hasLikeBtn
            hasAddBtn
            :hasViewBtn="false"
            imgSrc="/public/img/img-1.png"
          />
        </div>
      </div>
    </div>

    <div class="container mb-between-section">
      <h2 class="text-10xl text-black font-bold w-full text-center">btn</h2>
      <div class="flex items-center flex-wrap mb-8 last:mb-0">
        <h2 class="text-5xl text-primary font-bold w-full mb-4">public</h2>
        <GenericBtn class="mr-8 last:mr-0 my-1 !w-fit" text="black" />
      </div>
      <div class="flex items-center flex-wrap mb-8 last:mb-0">
        <h2 class="text-5xl text-primary font-bold w-full mb-4">colors</h2>
        <GenericBtn
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="primary"
          color="primary"
        />
        <GenericBtn
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="secondary"
          color="secondary"
        />
        <GenericBtn
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="success"
          color="success"
        />
        <GenericBtn
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="natural"
          color="natural"
        />
        <GenericBtn
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="white"
          color="white"
        />
        <GenericBtn
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="transparent"
          color="transparent"
        />
      </div>
      <div class="flex items-center flex-wrap mb-8 last:mb-0">
        <h2 class="text-5xl text-primary font-bold w-full mb-4">outline</h2>
        <GenericBtn
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="black"
          outline
          iconName="heart"
        />
        <GenericBtn
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="primary"
          outline
          color="primary"
          iconName="heart"
          iconEnd
        />
        <GenericBtn
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="secondary"
          outline
          color="secondary"
        />
        <GenericBtn
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="success"
          outline
          color="success"
        />
        <GenericBtn
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="natural"
          outline
          color="natural"
        />
        <GenericBtn
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="natural"
          outline
          color="white"
        />
      </div>
      <div class="flex items-center flex-wrap mb-8 last:mb-0">
        <h2 class="text-5xl text-primary font-bold w-full mb-4">lightness</h2>
        <GenericBtn class="mr-8 last:mr-0 my-1 !w-fit" text="black" lightness />
        <GenericBtn
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="primary"
          lightness
          color="primary"
        />
        <GenericBtn
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="secondary"
          lightness
          color="secondary"
        />
        <GenericBtn
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="success"
          lightness
          color="success"
        />
        <GenericBtn
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="natural"
          lightness
          color="natural"
        />
        <GenericBtn
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="natural"
          lightness
          color="white"
        />
      </div>
      <div class="flex items-center flex-wrap mb-8 last:mb-0">
        <h2 class="text-5xl text-primary font-bold w-full mb-4">
          outline & lightness
        </h2>
        <GenericBtn
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="black"
          lightness
          outline
        />
        <GenericBtn
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="primary"
          lightness
          outline
          color="primary"
        />
        <GenericBtn
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="secondary"
          lightness
          outline
          color="secondary"
        />
        <GenericBtn
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="success"
          lightness
          outline
          color="success"
        />
        <GenericBtn
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="natural"
          lightness
          outline
          color="natural"
        />
        <GenericBtn
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="natural"
          lightness
          outline
          color="white"
        />
      </div>
      <div class="flex items-center flex-wrap mb-8 last:mb-0">
        <h2 class="text-5xl text-primary font-bold w-full mb-4">rounded</h2>
        <GenericBtn class="mr-8 last:mr-0 my-1 !w-fit" text="black" rounded />
        <GenericBtn
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="primary"
          rounded
          lightness
          color="primary"
        />
        <GenericBtn
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="secondary"
          rounded
          color="secondary"
        />
        <GenericBtn
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="success"
          rounded
          outline
          color="success"
        />
        <GenericBtn
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="natural"
          rounded
          color="natural"
        />
        <GenericBtn
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="natural"
          rounded
          color="white"
        />
      </div>
      <div class="flex items-center flex-wrap mb-8 last:mb-0">
        <h2 class="text-5xl text-primary font-bold w-full mb-4">square</h2>
        <GenericBtn
          class="mr-8 last:mr-0 my-1 !w-fit"
          iconName="heart"
          square
        />
        <GenericBtn
          class="mr-8 last:mr-0 my-1 !w-fit"
          iconName="heart"
          square
          rounded
          lightness
          color="primary"
        />
        <GenericBtn
          class="mr-8 last:mr-0 my-1 !w-fit"
          iconName="heart"
          square
          rounded
          color="secondary"
        />
        <GenericBtn
          class="mr-8 last:mr-0 my-1 !w-fit"
          iconName="heart"
          square
          rounded
          outline
          color="success"
        />
        <GenericBtn
          class="mr-8 last:mr-0 my-1 !w-fit"
          iconName="heart"
          square
          rounded
          color="natural"
        />
        <GenericBtn
          class="mr-8 last:mr-0 my-1 !w-fit"
          iconName="heart"
          square
          rounded
          color="white"
        />
      </div>
      <div class="flex items-center flex-wrap mb-8 last:mb-0">
        <h2 class="text-5xl text-primary font-bold w-full mb-4">small</h2>
        <GenericBtn
          class="mr-8 last:mr-0 my-1 !w-fit"
          size="sm"
          iconName="heart"
          square
        />
        <GenericBtn
          class="mr-8 last:mr-0 my-1 !w-fit"
          size="sm"
          iconName="heart"
          square
          rounded
          lightness
          color="primary"
        />
        <GenericBtn
          class="mr-8 last:mr-0 my-1 !w-fit"
          size="sm"
          iconName="heart"
          square
          rounded
          color="secondary"
        />
        <GenericBtn
          class="mr-8 last:mr-0 my-1 !w-fit"
          size="sm"
          text="Buy Now"
          outline
          color="success"
        />
        <GenericBtn
          class="mr-8 last:mr-0 my-1 !w-fit"
          size="sm"
          text="Buy Now"
          rounded
          color="natural"
        />
        <GenericBtn
          class="mr-8 last:mr-0 my-1 !w-fit"
          size="sm"
          text="Buy Now"
          rounded
          color="white"
        />
      </div>
      <div class="flex items-center flex-wrap mb-8 last:mb-0">
        <h2 class="text-5xl text-primary font-bold w-full mb-4">large</h2>
        <GenericBtn
          class="mr-8 last:mr-0 my-1 !w-fit"
          size="lg"
          iconName="heart"
          square
        />
        <GenericBtn
          class="mr-8 last:mr-0 my-1 !w-fit"
          size="lg"
          iconName="heart"
          square
          rounded
          lightness
          color="primary"
        />
        <GenericBtn
          class="mr-8 last:mr-0 my-1 !w-fit"
          size="lg"
          iconName="heart"
          square
          rounded
          color="secondary"
        />
        <GenericBtn
          class="mr-8 last:mr-0 my-1 !w-fit"
          size="lg"
          text="Buy Now"
          outline
          color="success"
        />
        <GenericBtn
          class="mr-8 last:mr-0 my-1 !w-fit"
          size="lg"
          text="Buy Now"
          rounded
          color="natural"
        />
        <GenericBtn
          class="mr-8 last:mr-0 my-1 !w-fit"
          size="lg"
          text="Buy Now"
          rounded
          color="white"
        />
      </div>
    </div>
    <div class="container mb-between-section">
      <h2 class="text-10xl text-black font-bold w-full text-center">badge</h2>
      <div class="flex items-center flex-wrap mb-8 last:mb-0">
        <h2 class="text-5xl text-primary font-bold w-full mb-4">public</h2>
        <GenericBadge text="primary" />
      </div>
      <div class="flex items-center flex-wrap mb-8 last:mb-0">
        <h2 class="text-5xl text-primary font-bold w-full mb-4">colors</h2>
        <GenericBadge
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="black"
          color="black"
        />
        <GenericBadge
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="secondary"
          color="secondary"
        />
        <GenericBadge
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="success"
          color="success"
        />
        <GenericBadge
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="natural"
          color="natural"
        />
        <GenericBadge
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="white"
          color="white"
        />
      </div>
      <div class="flex items-center flex-wrap mb-8 last:mb-0">
        <h2 class="text-5xl text-primary font-bold w-full mb-4">outline</h2>
        <GenericBadge
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="public"
          outline
        />
        <GenericBadge
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="black"
          outline
          color="black"
        />
        <GenericBadge
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="secondary"
          outline
          color="secondary"
        />
        <GenericBadge
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="success"
          outline
          color="success"
        />
        <GenericBadge
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="natural"
          outline
          color="natural"
        />
        <GenericBadge
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="white"
          outline
          color="white"
        />
      </div>
      <div class="flex items-center flex-wrap mb-8 last:mb-0">
        <h2 class="text-5xl text-primary font-bold w-full mb-4">lightness</h2>
        <GenericBadge
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="public"
          lightness
        />
        <GenericBadge
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="black"
          lightness
          color="black"
        />
        <GenericBadge
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="secondary"
          lightness
          color="secondary"
        />
        <GenericBadge
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="success"
          lightness
          color="success"
        />
        <GenericBadge
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="natural"
          lightness
          color="natural"
        />
        <GenericBadge
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="white"
          lightness
          color="white"
        />
      </div>
      <div class="flex items-center flex-wrap mb-8 last:mb-0">
        <h2 class="text-5xl text-primary font-bold w-full mb-4">
          outline & lightness
        </h2>
        <GenericBadge
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="public"
          outline
          lightness
        />
        <GenericBadge
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="black"
          outline
          lightness
          color="black"
        />
        <GenericBadge
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="secondary"
          outline
          lightness
          color="secondary"
        />
        <GenericBadge
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="success"
          outline
          lightness
          color="success"
        />
        <GenericBadge
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="natural"
          outline
          lightness
          color="natural"
        />
        <GenericBadge
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="white"
          outline
          lightness
          color="white"
        />
      </div>
      <div class="flex items-center flex-wrap mb-8 last:mb-0">
        <h2 class="text-5xl text-primary font-bold w-full mb-4">rounded</h2>
        <GenericBadge
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="public"
          outline
          lightness
          rounded
        />
        <GenericBadge
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="black"
          outline
          lightness
          rounded
          color="black"
        />
        <GenericBadge
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="secondary"
          rounded
          color="secondary"
        />
        <GenericBadge
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="success"
          rounded
          color="success"
        />
        <GenericBadge
          class="mr-8 last:mr-0 my-1 !w-fit"
          iconName="heart"
          square
          outline
          lightness
          rounded
          color="natural"
        />
        <GenericBadge
          class="mr-8 last:mr-0 my-1 !w-fit"
          text="white"
          outline
          lightness
          rounded
          color="white"
        />
      </div>
      <div class="flex items-center flex-wrap mb-8 last:mb-0">
        <h2 class="text-5xl text-primary font-bold w-full mb-4">square</h2>
        <GenericBadge
          class="mr-8 last:mr-0 my-1 !w-fit"
          square
          iconName="heart"
          rounded
        />
        <GenericBadge
          class="mr-8 last:mr-0 my-1 !w-fit"
          square
          iconName="heart"
          rounded
          color="black"
        />
        <GenericBadge
          class="mr-8 last:mr-0 my-1 !w-fit"
          square
          iconName="heart"
          rounded
          color="secondary"
        />
        <GenericBadge
          class="mr-8 last:mr-0 my-1 !w-fit"
          square
          iconName="heart"
          rounded
          color="success"
        />
        <GenericBadge
          class="mr-8 last:mr-0 my-1 !w-fit"
          square
          iconName="heart"
          outline
          lightness
          rounded
          color="natural"
        />
        <GenericBadge
          class="mr-8 last:mr-0 my-1 !w-fit"
          square
          iconName="heart"
          outline
          lightness
          rounded
          color="white"
        />
      </div>
    </div>
    <div class="container pb-between-section">
      <h2 class="text-10xl text-black font-bold w-full text-center">input</h2>
      <div class="flex items-center flex-wrap mb-8 last:mb-0">
        <h2 class="text-5xl text-primary font-bold w-full mb-4">public</h2>
        <GenericInput
          placeholder="What are you looking for?"
          iconName="search-svgrepo-com-2"
          class="mr-4"
        />
        <GenericInput placeholder="What are you looking for?" />
      </div>
      <div class="flex items-center flex-wrap mb-8 last:mb-0">
        <h2 class="text-5xl text-primary font-bold w-full mb-4">
          public outline
        </h2>
        <GenericInput
          placeholder="What are you looking for?"
          hasOutline
          iconName="send1"
          class="mr-4"
        />
        <GenericInput placeholder="What are you looking for?" hasOutline />
      </div>
      <div class="flex items-center flex-wrap mb-8 last:mb-0">
        <h2 class="text-5xl text-black font-bold w-full mb-4">black</h2>
        <GenericInput
          color="black"
          placeholder="Enter your email"
          iconName="send1"
          class="mr-4"
        />
        <GenericInput color="black" placeholder="Enter your email" />
      </div>
      <div class="flex items-center flex-wrap mb-8 last:mb-0 p-4 bg-black">
        <h2 class="text-5xl text-white font-bold w-full mb-4">black outline</h2>
        <GenericInput
          hasOutline
          placeholder="Enter your email"
          color="black"
          iconName="send1"
          class="mr-4"
        />
        <GenericInput hasOutline placeholder="Enter your email" color="black" />
      </div>
    </div>
  </main>
</template>

<style>
</style>