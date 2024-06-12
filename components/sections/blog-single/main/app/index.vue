<template>
    <div>
        <img src="/img/img-6.png" class="w-[150px] h-[150px] rounded-4xl ml-6" alt="">
        <div>
            <div class="flex items-center mb-1">
                <h2 class="tx-lg text-primary font-medium ml-1.5">
                    {{ title }}
                </h2>
                <GenericIcon v-if="isChosen" name="checked" class="text-secondary-alpha text-sm" />
            </div>
            <div class="flex items-center mb-5">
                <ul class="flex items-center -m-4">
                    <li v-for="(item, index) in properties" :key="index"
                        class="p-4 flex items-center text-primary/70 tx-xs">
                        <GenericIcon class="text-primary-alpha text-md ml-1.5" v-if="item.icon" :name="item.icon"
                            :pathCount="item.iconPathCount" />
                        {{ item.title }}
                    </li>
                </ul>
            </div>
            <ul class="flex -m-4">
                <li v-for="(item, index) in information" :key="index"
                    class="p-4 relative flex flex-col items-center text-primary-alpha tx-xs after:w-0.5 after:h-[calc((100%-32px)/2)] after:bg-primary/10 after:absolute after:top-1/2 after:-translate-y-1/2 after:left-0 last:after:hidden">
                    <div class="flex items-center text-primary tx-sm font-medium mb-1.5">
                        {{ item.text }}
                        <GenericIcon class="text-xs text-warning mr-1" v-if="item.icon" :name="item.icon"
                            :pathCount="item.iconPathCount" />
                    </div>
                    {{ item.title }}
                </li>
            </ul>
        </div>
    </div>
</template>