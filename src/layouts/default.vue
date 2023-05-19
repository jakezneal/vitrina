<template>
    <div class="body-wrapper">
        <a href="#main-content" class="skip-link">Skip to content</a>
        <AppHeader />
        <main tabindex="-1" id="main-content">
            <slot />
        </main>
        <AppFooter />
        <ThemeToggle />
    </div>
</template>

<script lang="ts" setup>
    const config = useRuntimeConfig();

    useHead({
        titleTemplate: (titleChunk) => {
            return titleChunk
                ? `${ titleChunk } | ${ config.public.appTitle }`
                : config.public.appTitle;
        }
    });
</script>

<style lang="scss" scoped>
    @function rem($size) {
        @return calc($size / 16px) * 1rem;
    }

    .skip-link:not(:focus) {
        border: 0;
        clip: rect(0 0 0 0);
        height: auto;
        margin: 0;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
        white-space: nowrap;
    }

    .skip-link {
        background-color: var(--colour-text-primary);
        color: var(--colour-background);
        font-size: rem(18px);
        left: 10px;
        padding: 10px 20px;
        position: absolute;
        top: 10px;

        @media (min-width: 768px) {
            font-size: rem(22px);
            left: 20px;
            padding: 20px 40px;
            top: 20px;
        }
    }
</style>
