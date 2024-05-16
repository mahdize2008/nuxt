<script setup>
let { name ,size ,pathCount } = defineProps({
    name: {
        type: String,
        default: ''
    },
    size: {
        type: String,
        default: 'lg',
        validator: (value) => {
            return ['sm', 'base', 'lg'].includes(value);
        },
    },
    pathCount: {
        type: Number,
        default: 0
    }
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
        <span v-for="pathNum in pathCount" :class="`path-${pathNum}`"></span>
    </i>
</template>
<style scoped>
    @import "style.css";
.v-icon{
    @apply text-2xl
}
.icon-sm {
    @apply text-lg;
}
.icon-lg {
    @apply text-5xl;
}

</style>