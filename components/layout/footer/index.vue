<script lang="ts" setup>
</script>

<template>
  <footer class="bg-black">
    <div class="py-between-section border-b border-b-white/10">
        <div class="container flex items-start justify-between">
          <div>
            <h2 class="title-public title-public-white mb-4">Exclusive</h2>
            <div class="title-public title-public-medium title-public-white mb-4">
              Subscribe
            </div>
            <p class="text-public text-public-white mb-3">
              Get 10% off your first order
            </p>
            <GenericInput
              hasOutline
              placeholder="Enter your email"
              color="black"
              iconName="send1"
              class="!w-[220px]"
            />
          </div>
          <div class="max-w-[175px]">
            <h2 class="title-public title-public-white title-public-medium mb-4">
              Support
            </h2>
            <ul>
              <li>
                <p class="text-public text-public-white mb-3">
                  111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                </p>
              </li>
              <li>
                <p class="text-public text-public-white mb-3">
                  exclusive@gmail.com
                </p>
              </li>
              <li>
                <p class="text-public text-public-white mb-3">+88015-88888-9999</p>
              </li>
            </ul>
          </div>
          <div class="max-w-[175px]">
            <h2 class="title-public title-public-white title-public-medium mb-4">
              Account
            </h2>
            <ul class="-my-1">
              <li>
                <NuxtLink
                  to="/"
                  class="block py-1 text-public text-public-white hover:text-primary transition-all mb-1"
                >
                  My Account
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/"
                  class="block py-1 text-public text-public-white hover:text-primary transition-all mb-1"
                >
                  Login / Register
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/"
                  class="block py-1 text-public text-public-white hover:text-primary transition-all mb-1"
                >
                  Cart
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/"
                  class="block py-1 text-public text-public-white hover:text-primary transition-all mb-1"
                >
                  Wishlist
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/"
                  class="block py-1 text-public text-public-white hover:text-primary transition-all mb-1"
                >
                  Shop
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div class="max-w-[175px]">
            <h2 class="title-public title-public-white title-public-medium mb-4">
              Quick Link
            </h2>
            <ul class="-my-1">
              <li>
                <NuxtLink
                  to="/"
                  class="block py-1 text-public text-public-white hover:text-primary transition-all mb-1"
                >
                  Privacy Policy
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/"
                  class="block py-1 text-public text-public-white hover:text-primary transition-all mb-1"
                >
                  Terms Of Use
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/"
                  class="block py-1 text-public text-public-white hover:text-primary transition-all mb-1"
                >
                  FAQ
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/"
                  class="block py-1 text-public text-public-white hover:text-primary transition-all mb-1"
                >
                  Contact
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div class="max-w-[200px]">
            <h2 class="title-public title-public-white title-public-medium mb-4">
              Quick Link
            </h2>
            <div class="flex -m-1 mb-3">
              <div class="p-1 shrink-0">
                <img src="/public/img/Qr Code.png" class="w-[80px]" />
              </div>
              <div class="p-1 flex flex-col justify-between">
                <a href="#" class="block w-full">
                  <img src="/public/img/google-play.png" class="h-fit w-full" />
                </a>
                <a href="#" class="block w-full">
                  <img src="/public/img/app-store.png" class="h-fit w-full" />
                </a>
              </div>
            </div>
            <ul class="flex items-center">
              <li class="mr-1 last:mr-0">
                <GenericBtn iconName="twitter-1" square color="white" btnText />
              </li>
              <li class="mr-1 last:mr-0">
                <GenericBtn iconName="facebook" square color="white" btnText />
              </li>
              <li class="mr-1 last:mr-0">
                <GenericBtn iconName="linkedin" square color="white" btnText />
              </li>
              <li class="mr-1 last:mr-0">
                <GenericBtn iconName="linkedin" square color="white" btnText />
              </li>
            </ul>
          </div>
        </div>
    </div>
    <div class="container py-4 justify-center flex items-center text-white/30 font-light text-sm">
        <GenericIcon name="avatar" class="mr-2"/>
        Copyright Rimel 2022. All right reserved
    </div>
  </footer>
</template>

<style>
</style>