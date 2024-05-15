<template>

    <Colors />

    <div class="container mb-between-section">
        <VInput class="mb-7 last:mb-0" label="لیبل فیلد" placeholder="حالت عادی" />
        <VInput class="mb-7 last:mb-0" label="لیبل فیلد" placeholder="حالت عادی" error="پیغام مقدار نامعتبر" />
        <VInput class="mb-7 last:mb-0" label="لیبل فیلد" placeholder="حالت عادی" />
        <VInput class="mb-7 last:mb-0" label="لیبل فیلد" placeholder="حالت عادی" />
    </div>

    <div class="container mb-between-section">
        <div class="flex items-center mb-10">
            <span class="ml-5 block">45px</span>
            <VBtn class="ml-5 last:ml-0" mode="primary" aspect="square" icon="right"/>
            <VBtn class="ml-5 last:ml-0" mode="light" aspect="square" icon="left"/>
            <VBtn class="ml-5 last:ml-0" mode="success" aspect="square" icon="top"/>
            <VBtn class="ml-5 last:ml-0" mode="light" aspect="square" icon="bottom"/>
            <VBtn class="ml-5 last:ml-0" mode="success-alpha" aspect="square" icon="left"/>
            <VBtn class="ml-5 last:ml-0 !rounded-l-none" mode="light" aspect="square" icon="right"/>
            <VBtn class="ml-5 last:ml-0 !rounded-l-none" mode="light" aspect="square" icon="left"/>
        </div>
        <div class="flex items-center mb-10">
            <span class="ml-5 block">35px</span>
            <VBtn title="نمونه دکمه" radius="small" class="ml-5 last:ml-0" />
            <VBtn title="نمونه دکمه" radius="full" class="ml-5 last:ml-0" />
        </div>
        <div class="flex items-center">
            <span class="ml-5 block">45px</span>
            <VBtn title="نمونه دکمه" size="large" radius="full" icon="info-2" class="ml-5 last:ml-0" />
            <VBtn title="نمونه دکمه" size="large" radius="base" icon="info-2" class="ml-5 last:ml-0" />
            <VBtn title="نمونه دکمه" size="large" radius="full" class="ml-5 last:ml-0" />
            <VBtn title="نمونه دکمه" size="large" radius="base" class="ml-5 last:ml-0" />
        </div>
    </div>

    <div class="container mb-between-section">
        <div class="flex items-center">
            <span class="ml-5 tx-base block">
                22px
            </span>
            <p class="tx tx-xl">
                رویدینو، پلتفرم دانلود رایگان بازی و برنامه اندروید
            </p>
        </div>
        <div class="flex items-center">
            <span class="ml-5 tx-base block">
                20px
            </span>
            <p class="tx tx-lg">
                رویدینو، پلتفرم دانلود رایگان بازی و برنامه اندروید
            </p>
        </div>
        <div class="flex items-center">
            <span class="ml-5 tx-base block">
                18px
            </span>
            <p class="tx tx-md">
                رویدینو، پلتفرم دانلود رایگان بازی و برنامه اندروید
            </p>
        </div>
        <div class="flex items-center">
            <span class="ml-5 tx-base block">
                16px
            </span>
            <p class="tx tx-base">
                رویدینو، پلتفرم دانلود رایگان بازی و برنامه اندروید
            </p>
        </div>
        <div class="flex items-center">
            <span class="ml-5 tx-base block">
                14px
            </span>
            <p class="tx tx-sm">
                رویدینو، پلتفرم دانلود رایگان بازی و برنامه اندروید
            </p>
        </div>
        <div class="flex items-center">
            <span class="ml-5 tx-base block">
                12px
            </span>
            <p class="tx tx-xs">
                رویدینو، پلتفرم دانلود رایگان بازی و برنامه اندروید
            </p>
        </div>

    </div>

    <div class="container mb-between-section">
        <ul class="flex items-center -m-1.5">
            <li class="px-1.5">
                <VBtn tagName="a" mode="success-alpha" icon="right" aspect="square" />
            </li>
            <li class="px-1.5">
                <VBtn tagName="a" title="3" aspect="square" />
            </li>
            <li class="px-1.5">
                <VBtn tagName="a" title="2" aspect="square" />
            </li>
            <li class="px-1.5">
                <VBtn tagName="a" title="1" aspect="square" />
            </li>
            <li class="px-1.5">
                <VBtn tagName="a" mode="success-alpha" icon="left" aspect="square" />
            </li>
        </ul>

    </div>




</template>
