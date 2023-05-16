<template>
    <article>
        <div class="container">
            <h1 class="section-heading">
                <span v-if="data.icon" class="icon">{{ data.icon }}</span>
                {{ data.title }}
            </h1>
        </div>
        <div class="image-container">
            <NuxtImg
                :src="data.image"
                format="webp"
                quality="100"
                :alt="`A screenshot of the ${ data.title } ${ data.type }`"
                :width="1480"
                :height="740"
                class="image"
            />
        </div>
        <div class="container">
            <div class="section intro-wrapper">
                <div class="intro">
                    <p>{{ data.intro }}</p>
                </div>
                <div v-if="data.technologies" class="technologies">
                    <p class="technologies-label">Technologies used:</p>
                    <ul class="list">
                        <li
                            v-for="item in data.technologies"
                            :key="item"
                            class="item"
                        >
                            {{ item }}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="section content">
                <ContentRenderer :value="data" />
            </div>
        </div>
    </article>
</template>

<script setup>
    const route = useRoute();
    const { slug } = route.params;
    const { data } = await useAsyncData(slug, () => queryContent(`/work/${ slug }`).findOne());

    useHead({
        title: 'Case Study | Work',
    });
</script>

<style lang="scss" scoped>
    @function rem($size) {
        @return calc($size / 16px) * 1rem;
    }

    .image-container {
        margin-left: auto;
        margin-right: auto;
        margin-bottom: rem(20px);
        width: 100%;

        @media (min-width: 576px) {
            max-width: 560px;
        }

        @media (min-width: 768px) {
            max-width: 750px;
            margin-bottom: rem(40px);
        }

        @media (min-width: 992px) {
            max-width: 960px;
            margin-bottom: rem(60px);
        }

        @media (min-width: 1200px) {
            max-width: 1180px;
        }

        @media (min-width: 1500px) {
            max-width: 1480px;
        }
    }

    .icon {
        margin-right: rem(10px);
    }

    .intro-wrapper {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: rem(40px);

        @media (min-width: 992px) {
            gap: rem(60px);
        }
    }

    .intro {
        font-size: rem(22px);

        @media (min-width: 992px) {
            grid-column: 1;
        }
    }

    .technologies {
        @media (min-width: 992px) {
            grid-column: 2;
        }
    }

    .technologies-label {
        text-transform: uppercase;
    }

    .list {
        column-count: 2;
        gap: 40px;
    }

    .item {
        font-size: rem(18px);
        line-height: 1.5;

        @media (min-width: 992px) {
            font-size: rem(22px);
        }

        & + & {
            margin-top: 10px;
        }
    }

    .content {
        :deep(h2),
        :deep(h3),
        :deep(h4) {
            margin-bottom: rem(10px);

            @media (min-width: 768px) {
                margin-bottom: rem(20px);
            }
        }

        :deep(a) {
            color: var(--colour-text-primary);
            text-decoration: none;
            position: relative;

            &:before {
                content: '🔗';
                display: none;
                font-size: 0.6em;
                position: absolute;
                left: -1.2em;
                top: 50%;
                transform: translateY(-50%);
            }

            &:hover {
                text-decoration: underline;

                &:before {
                    display: block;
                }
            }
        }

        :deep(* + *) {
            margin-top: rem(20px);

            @media (min-width: 768px) {
                margin-top: rem(40px);
            }
        }

        :deep(p) {
            font-size: rem(18px);

            @media (min-width: 992px) {
                font-size: rem(22px);
            }
        }

        :deep(h2) {
            font-size: rem(32px);

            @media (min-width: 768px) {
                font-size: rem(36px);
            }

            @media (min-width: 1200px) {
                font-size: rem(40px);
            }
        }

        :deep(h3) {
            font-size: rem(22px);

            @media (min-width: 768px) {
                font-size: rem(26px);
            }

            @media (min-width: 1200px) {
                font-size: rem(28px);
            }
        }

        :deep(h4) {
            font-size: rem(18px);

            @media (min-width: 768px) {
                font-size: rem(22px);
            }

            @media (min-width: 1200px) {
                font-size: rem(24px);
            }
        }

        :deep(ul) {
            margin-bottom: 0;
        }

        :deep(li) {
            font-size: rem(18px);
            line-height: 1.5;

            @media (min-width: 992px) {
                font-size: rem(22px);
            }
        }

        :deep(li + li) {
            margin-top: rem(10px);
        }
    }
</style>
