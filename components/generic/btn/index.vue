<script setup>
let { tagName, iconName, title, size, rounded, square, gradient, theme, lightness } = defineProps({
    tagName: {
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
    title: {
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
    }

})
function setMode() {
    if (gradient) {
        return 'btn-gradient'
    }
    else if (theme) {
        return `btn-${theme}`;
    } else {
        return;
    }
}
</script>
<template>
    <component :is="tagName" class="btn"
        :class="[`btn-${size}`, setMode(), { 'btn-rounded': rounded }, { 'btn-lightness': lightness }, { 'btn-square': square }]">
        <GenericIcon v-if="iconName" size="sm" :name="iconName" :class="{ 'ml-2': !square }"></GenericIcon>
        <slot />
    </component>
</template>

<style scoped>
/* GENERIC-STYLE */
.btn {
    @apply flex items-center justify-center bg-primary h-[45px] px-16 text-xs text-white font-medium cursor-pointer rounded-lg
}


/* BTN-SQUARE */
.btn.btn-square {
    @apply !w-[45px] !h-[45px] !px-0
}


/* BTN-COLOR */
.btn.btn-success {
    @apply !bg-success !text-white
}

.btn-primary.btn-lightness {
    @apply !bg-primary-tetha !text-primary
}

.btn-success.btn-lightness {
    @apply !bg-success-alpha !text-success
}

.btn-gradient {
    @apply !bg-success-gradient !text-white
}


/* BTN-SIZE */
.btn-sm {
    @apply !h-[35px]
}


/* BTN-ROUNDED */
.btn.btn-rounded {
    @apply !rounded-full
}
</style>