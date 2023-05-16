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
    const { appTitle } = useRuntimeConfig();

    useHead({
        titleTemplate: (titleChunk) => {
            return titleChunk
                ? `${ titleChunk } | ${ appTitle }`
                : appTitle;
        }
    });
</script>
