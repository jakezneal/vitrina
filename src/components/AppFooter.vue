<template>
    <footer class="container footer" role="contentinfo">
        <ul role="list" class="links">
            <li
                v-for="{ text, link } in links"
                :key="link"
                class="item"
            >
                <a :href="link" class="link" target="_blank" rel="noopener">{{ text }}</a>
            </li>
        </ul>
        <p class="copyright">
            &copy; {{ currentYear }}
        </p>
    </footer>
</template>

<script lang="ts" setup>
    const links = computed(() => [
        {
            text: 'Instagram',
            link: 'https://instagram.com/jkznl',
        },
        {
            text: 'Twitter',
            link: 'https://twitter.com/jakezneal',
        },
        {
            text: 'GitHub',
            link: 'https://github.com/jakezneal',
        },
    ]);

    const currentYear = computed(() => new Date().getFullYear());
</script>

<style lang="scss" scoped>
    @function rem($size) {
        @return calc($size / 16px) * 1rem;
    }

    .footer {
        --va: 40px;

        margin-top: auto;
        padding-bottom: var(--va);
        padding-top: var(--va);

        @media (min-width: 768px) {
            --va: 60px;

            align-items: center;
            display: flex;
            justify-content: space-between;
        }

        @media (min-width: 992px) {
            --va: 80px;

            padding-bottom: calc(var(--va) * 0.75);
        }
    }

    .links {
        margin: 0;
        padding-left: 0;
        margin-bottom: rem(40px);

        @media (min-width: 768px) {
            display: inline-flex;
            gap: 40px;
            margin-bottom: 0;
        }
    }

    .item {
        & + & {
            margin-top: rem(10px);

            @media (min-width: 768px) {
                margin-top: 0;
            }
        }
    }

    .item,
    .copyright {
        font-size: rem(24px);

        @media (min-width: 768px) {
            font-size: rem(32px);
        }
    }

    .link {
        color: var(--colour-text-primary);
        font-weight: bold;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
</style>
