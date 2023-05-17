<template>
    <div class="body-wrapper">
        <AppHeader />
        <main tabindex="-1">
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
