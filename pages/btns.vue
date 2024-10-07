<script setup>

</script>

<template>
  <div class="container my-between-section">
    <div class="flex items-center flex-wrap mb-8 last:mb-0">
      <h2 class="text-5xl text-primary font-bold w-full mb-4">
        public
      </h2>
      <GenericBtn class="mr-8 last:mr-0 !w-fit" text="black"/>
    </div>
    <div class="flex items-center flex-wrap mb-8 last:mb-0">
      <h2 class="text-5xl text-primary font-bold w-full mb-4">
        colors
      </h2>
      <GenericBtn class="mr-8 last:mr-0 !w-fit" text="primary" color="primary"/>
      <GenericBtn class="mr-8 last:mr-0 !w-fit" text="secondary" color="secondary"/>
      <GenericBtn class="mr-8 last:mr-0 !w-fit" text="success" color="success"/>
      <GenericBtn class="mr-8 last:mr-0 !w-fit" text="natural" color="natural"/>
      <GenericBtn class="mr-8 last:mr-0 !w-fit" text="white" color="white"/>
      <GenericBtn class="mr-8 last:mr-0 !w-fit" text="transparent" color="transparent"/>
    </div>
    <div class="flex items-center flex-wrap mb-8 last:mb-0">
      <h2 class="text-5xl text-primary font-bold w-full mb-4">
        outline
      </h2>
      <GenericBtn class="mr-8 last:mr-0 !w-fit" text="black" outline/>
      <GenericBtn class="mr-8 last:mr-0 !w-fit" text="primary" outline color="primary"/>
      <GenericBtn class="mr-8 last:mr-0 !w-fit" text="secondary" outline color="secondary"/>
      <GenericBtn class="mr-8 last:mr-0 !w-fit" text="success" outline color="success"/>
      <GenericBtn class="mr-8 last:mr-0 !w-fit" text="natural" outline color="natural"/>
      <GenericBtn class="mr-8 last:mr-0 !w-fit" text="natural" outline color="white"/>
    </div>
    <div class="flex items-center flex-wrap mb-8 last:mb-0">
      <h2 class="text-5xl text-primary font-bold w-full mb-4">
        lightness
      </h2>
      <GenericBtn class="mr-8 last:mr-0 !w-fit" text="black" lightness/>
      <GenericBtn class="mr-8 last:mr-0 !w-fit" text="primary" lightness color="primary"/>
      <GenericBtn class="mr-8 last:mr-0 !w-fit" text="secondary" lightness color="secondary"/>
      <GenericBtn class="mr-8 last:mr-0 !w-fit" text="success" lightness color="success"/>
      <GenericBtn class="mr-8 last:mr-0 !w-fit" text="natural" lightness color="natural"/>
      <GenericBtn class="mr-8 last:mr-0 !w-fit" text="natural" lightness color="white"/>
    </div>
    <div class="flex items-center flex-wrap mb-8 last:mb-0">
      <h2 class="text-5xl text-primary font-bold w-full mb-4">
        outline & lightness
      </h2>
      <GenericBtn class="mr-8 last:mr-0 !w-fit" text="black" lightness outline/>
      <GenericBtn class="mr-8 last:mr-0 !w-fit" text="primary" lightness outline color="primary"/>
      <GenericBtn class="mr-8 last:mr-0 !w-fit" text="secondary" lightness outline color="secondary"/>
      <GenericBtn class="mr-8 last:mr-0 !w-fit" text="success" lightness outline color="success"/>
      <GenericBtn class="mr-8 last:mr-0 !w-fit" text="natural" lightness outline color="natural"/>
      <GenericBtn class="mr-8 last:mr-0 !w-fit" text="natural" lightness outline color="white"/>
    </div>
    <div class="flex items-center flex-wrap mb-8 last:mb-0">
      <h2 class="text-5xl text-primary font-bold w-full mb-4">
        rounded
      </h2>
      <GenericBtn class="mr-8 last:mr-0 !w-fit" text="black" rounded/>
      <GenericBtn class="mr-8 last:mr-0 !w-fit" text="primary" rounded lightness color="primary"/>
      <GenericBtn class="mr-8 last:mr-0 !w-fit" text="secondary" rounded color="secondary"/>
      <GenericBtn class="mr-8 last:mr-0 !w-fit" text="success" rounded outline color="success"/>
      <GenericBtn class="mr-8 last:mr-0 !w-fit" text="natural" rounded color="natural"/>
      <GenericBtn class="mr-8 last:mr-0 !w-fit" text="natural" rounded color="white"/>
    </div>
    <div class="flex items-center flex-wrap mb-8 last:mb-0">
      <h2 class="text-5xl text-primary font-bold w-full mb-4">
        square
      </h2>
      <GenericBtn class="mr-8 last:mr-0 !w-fit" iconName="heart" square/>
      <GenericBtn class="mr-8 last:mr-0 !w-fit" iconName="heart" square rounded lightness color="primary"/>
      <GenericBtn class="mr-8 last:mr-0 !w-fit" iconName="heart" square rounded color="secondary"/>
      <GenericBtn class="mr-8 last:mr-0 !w-fit" iconName="heart" square rounded outline color="success"/>
      <GenericBtn class="mr-8 last:mr-0 !w-fit" iconName="heart" square rounded color="natural"/>
      <GenericBtn class="mr-8 last:mr-0 !w-fit" iconName="heart" square rounded color="white"/>
    </div>
    <div class="flex items-center flex-wrap mb-8 last:mb-0">
      <h2 class="text-5xl text-primary font-bold w-full mb-4">
        small
      </h2>
      <GenericBtn class="mr-8 last:mr-0 !w-fit" size="sm" iconName="heart" square/>
      <GenericBtn class="mr-8 last:mr-0 !w-fit" size="sm" iconName="heart" square rounded lightness color="primary"/>
      <GenericBtn class="mr-8 last:mr-0 !w-fit" size="sm" iconName="heart" square rounded color="secondary"/>
      <GenericBtn class="mr-8 last:mr-0 !w-fit" size="sm" text="Buy Now" outline color="success"/>
      <GenericBtn class="mr-8 last:mr-0 !w-fit" size="sm" text="Buy Now" rounded color="natural"/>
      <GenericBtn class="mr-8 last:mr-0 !w-fit" size="sm" text="Buy Now" rounded color="white"/>
    </div>
    <div class="flex items-center flex-wrap mb-8 last:mb-0">
      <h2 class="text-5xl text-primary font-bold w-full mb-4">
        large
      </h2>
      <GenericBtn class="mr-8 last:mr-0 !w-fit" size="lg" iconName="heart" square/>
      <GenericBtn class="mr-8 last:mr-0 !w-fit" size="lg" iconName="heart" square rounded lightness color="primary"/>
      <GenericBtn class="mr-8 last:mr-0 !w-fit" size="lg" iconName="heart" square rounded color="secondary"/>
      <GenericBtn class="mr-8 last:mr-0 !w-fit" size="lg" text="Buy Now" outline color="success"/>
      <GenericBtn class="mr-8 last:mr-0 !w-fit" size="lg" text="Buy Now" rounded color="natural"/>
      <GenericBtn class="mr-8 last:mr-0 !w-fit" size="lg" text="Buy Now" rounded color="white"/>
    </div>
  </div>
</template>

<style>
</style>