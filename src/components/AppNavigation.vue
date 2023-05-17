<template>
    <nav aria-label="primary" tabindex="-1">
        <ul class="list" role="list">
            <li
                v-for="{ text, icon, link } in items"
                :key="link"
                class="item"
            >
                <NuxtLink :to="{ name: link }" class="link">
                    <span v-if="icon" class="icon">{{ icon }}</span>
                    <span class="text">{{ text }}</span>
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts" setup>
    const items = computed(() => [
        {
            text: 'Work',
            icon: '💼',
            link: 'work',
        },
        {
            text: 'Skills',
            icon: '🛠',
            link: 'skills',
        },
        {
            text: 'Hire me',
            icon: '👷',
            link: 'hire',
        }
    ]);
</script>

<style lang="scss" scoped>
    @function rem($size) {
        @return calc($size / 16px) * 1rem;
    }

    .list {
        display: flex;
        gap: 20px;
        margin: 0;
        padding: 0;

        @media (min-width: 992px) {
            gap: 40px;
        }
    }

    .item {
        font-size: rem(18px);

        @media (min-width: 768px) {
            font-size: rem(22px);
        }

        @media (min-width: 992px) {
            font-size: rem(24px);
        }
    }

    .link {
        color: inherit;
        font-weight: bold;
        text-decoration: none;

        &:hover {
            > .text {
                text-decoration: underline;
            }
        }
    }

    .icon {
        margin-right: rem(5px);

        @media (min-width: 768px) {
            margin-right: rem(10px);
        }
    }
</style>
