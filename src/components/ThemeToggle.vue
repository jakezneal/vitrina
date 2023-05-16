<template>
    <button
        v-if="$colorMode.value === 'dark'"
        :aria-label="ariaLabel"
        @click="$colorMode.preference = 'light'"
        :class="cssClass"
    >
        🌞
    </button>
    <button
        v-else
        :aria-label="ariaLabel"
        @click="$colorMode.preference = 'dark'"
        :class="cssClass"
    >
        🌙
    </button>
</template>

<script lang="ts" setup>
    const ariaLabel = computed(() => 'theme toggle');
    const cssClass = computed(() => 'theme-toggle');
</script>

<style lang="scss" scoped>
    @function rem($size) {
        @return calc($size / 16px) * 1rem;
    }

    .theme-toggle {
        background-color: transparent;
        border: 0;
        bottom: 20px;
        cursor: pointer;
        font-size: rem(32px);
        position: fixed;
        right: 20px;

        @media (min-width: 992px) {
            font-size: rem(42px);
        }
    }
</style>
