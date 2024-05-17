<script setup>
let { name ,size ,pathCount,color,theme } = defineProps({
    name: {
        type: String,
        default: ''
    },
    size: {
        type: String,
        default: 'lg',
        validator: (value) => {
            return ['xs','sm', 'base', 'lg'].includes(value);
        },
    },
    pathCount: {
        type: Number,
        default: 0
    },
    // theme: {
    //     type: String,
    //     default: 'white',
    //     validator: (value) => {
    //         return ['warning', 'white', 'danger','primary-beta','success'].includes(value);
    //     }
    // }
})
function setSize() {
    if (size !== 'lg') {
        return `icon-${size}`
    } else {
        return
    }
}
</script>
<template>
    <i class="v-icon" :class="[`icon-${name}`, setSize()]">
        <span v-for="pathNum in pathCount" :class="`path${pathNum}`"></span><!-- :style="`--color:var(--color-${theme.length?theme:'white-->
    </i>
</template>
<style scoped>
    @import "style.css";
.v-icon{
    @apply text-2xl;
    /* color: rgb(var(--color)) */
}

/* size */
.icon-xs {
    @apply text-2xs;
}
.icon-sm {
    @apply text-lg;
}
.icon-lg {
    @apply text-5xl;
}

</style>



