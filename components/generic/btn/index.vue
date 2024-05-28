<script setup>
let { tag, iconName, size, rounded, square, gradient, theme, iconPathCount, lightness,outline, to , iconLeftSide } = defineProps({
    tag: {
        type: String,
        default: 'button',
        validator: (value) => {
            return ['div', 'a', 'NuxtLink', 'button'].includes(value);
        },
    },
    iconName: {
        type: String,
        default: ''
    },
    size: {
        type: String,
        default: 'base',
        validator: (value) => {
            return ['sm', 'base'].includes(value);
        },
    },
    rounded: {
        type: Boolean,
        default: false
    },
    square: {
        type: Boolean,
        default: false
    },
    gradient: {
        type: Boolean,
        default: false
    },
    iconPathCount: {
        type: Number,
        default: 0
    },
    theme: {
        type: String,
        default: 'primary',
        validator: (value) => {
            return ['primary', 'success'].includes(value);
        },
    },
    lightness: {
        type: Boolean,
        default: false
    },
    outline: {
        type: Boolean,
        default: false
    },
    iconLeftSide: {
        type: Boolean,
        default: false
    },
    to: {
        type: String,
        default: ''
    }

})
function setMode() {
    if (gradient) {
        return 'btn-gradient'
    }
    else if (theme) {
        return `btn-${theme}`;
    }
}
</script>
<template>
    <component :is="tag" class="btn" :to="to"
    :class="[`btn-${size}`, setMode(), { 'btn-rounded': rounded },{ 'btn-outline': outline }, { 'btn-lightness': lightness }, { 'btn-square': square }]">
        <GenericIcon class="v-btn-icon" v-if="iconName&&!iconLeftSide" :pathCount="iconPathCount" :name="iconName" :class="{ 'ml-2': !square }"></GenericIcon>
        <slot  class="tx-xs"/>
        <GenericIcon class="v-btn-icon" v-if="iconName&&iconLeftSide" :pathCount="iconPathCount" :name="iconName" :class="{ 'mr-2': !square }"></GenericIcon>
    </component>
</template>

<style scoped>
/* GENERIC-STYLE */
.btn {
    @apply flex items-center justify-center bg-primary h-[45px] w-fit px-4 text-2xl text-white font-medium cursor-pointer rounded-lg
}


/* BTN-SQUARE */
.btn.btn-square {
    @apply w-[45px] h-[45px] !px-0
}
.btn.btn-sm.btn-square {
    @apply w-[35px] h-[35px] !px-0
}


/* BTN-COLOR */
.btn.btn-success {
    @apply bg-success text-white
}

.btn.btn-primary.btn-lightness:not(.btn-outline) {
    @apply bg-primary-tetha text-primary
}
.btn.btn-success.btn-lightness:not(.btn-outline) {
    @apply bg-success-alpha text-success
}
.btn.btn-outline.btn-lightness {
    @apply !border-2 !bg-transparent border-solid
}

.btn.btn-primary.btn-lightness.btn-outline {
    @apply !border-primary-tetha !text-primary
}

.btn.btn-success.btn-lightness.btn-outline {
    @apply !border-success-alpha !text-success
}

.btn.btn-gradient {
    @apply !bg-success-gradient !text-white
}


/* BTN-SIZE */
.btn.btn-sm {
    @apply !h-[35px]
}


/* BTN-ROUNDED */
.btn.btn-rounded {
    @apply rounded-full
}
</style>