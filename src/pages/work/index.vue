<template>
    <section class="container">
        <div class="section">
            <h1 class="page-title">🧑🏻‍💻 Work</h1>

            <ContentList path="/work" v-slot="{ list }">
                <ul role="list" class="items">
                    <li
                        v-for="work in list"
                        :key="work._path"
                        class="item"
                    >
                        <NuxtLink :to="work._path" class="link">
                            {{ work.title }}
                        </NuxtLink>
                    </li>
                </ul>
            </ContentList>
        </div>
    </section>
</template>

<script lang="ts" setup>
    useHead({
        title: 'Work',
    });
</script>

<style lang="scss" scoped>
    @function rem($size) {
        @return calc($size / 16px) * 1rem;
    }

    .items {
        margin: 0;
        padding: 0;
    }

    .item {
        font-size: rem(34px);
        line-height: 1.25;

        & + & {
            margin-top: rem(40px);

            @media (min-width: 768px) {
                margin-top: rem(60px);
            }

            @media (min-width: 992px) {
                margin-top: rem(80px);
            }
        }

        @media (min-width: 768px) {
            font-size: rem(52px);
        }

        @media (min-width: 992px) {
            font-size: rem(78px);
        }
    }

    .link {
        color: var(--colour-text-primary);
        font-weight: bold;
        text-decoration: none;

        &:hover {
            text-decoration: underline;

            &:after {
                opacity: 1;
                animation: bounce 0.8s cubic-bezier(0.6, -0.28, 0.74, 0.05) infinite;
            }
        }

        &:after {
            content: '→';
            position: absolute;
            opacity: 0;
        }

        @keyframes bounce {
            0% {
                margin-left: rem(10px);
            }

            50% {
                margin-left: rem(20px);
            }

            100% {
                margin-left: rem(10px);
            }
        }
    }
</style>
