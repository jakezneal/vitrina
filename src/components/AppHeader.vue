<template>
    <header class="container header">
        <NuxtLink to="/" class="logo">
            <span class="visually-hidden">Homepage</span>
        </NuxtLink>
        <AppNavigation />
    </header>
</template>

<style lang="scss" scoped>
    @function rem($size) {
        @return calc($size / 16px) * 1rem;
    }

    .header {
        margin-top: 20px;
        margin-bottom: 30px;

        * + * {
            margin-top: rem(20px);

            @media (min-width: 350px) {
                margin-top: 0;
            }
        }

        @media (min-width: 350px) {
            align-items: center;
            display: flex;
            justify-content: space-between;
        }

        @media (min-width: 768px) {
            margin-bottom: 40px;
        }

        @media (min-width: 992px) {
            margin-top: 40px;
            margin-bottom: 60px;
        }
    }

    .logo {
        --size: 50px;

        background-color: var(--colour-text-secondary);
        border-radius: 50%;
        display: block;
        height: var(--size);
        width: var(--size);

        &:focus {
            outline-offset: rem(5px);
        }

        @media (min-width: 768px) {
            --size: 75px;
        }

        @media (min-width: 992px) {
            --size: 100px;
        }
    }

    .visually-hidden {
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
</style>
