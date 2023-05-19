<template>
    <article class="section">
        <h2 class="section-heading">🧑🏻‍💻 Recent work</h2>

        <div class="image-container">
            <NuxtImg
                src="/images/work/mobile/yourparkingspace-website.png"
                format="webp"
                quality="100"
                alt="A screenshot of the YourParkingSpace website on mobile"
                :width="400"
                :height="650"
                class="image image-mobile"
            />
            <NuxtImg
                src="/images/work/tablet/yourparkingspace-website.png"
                format="webp"
                quality="100"
                alt="A screenshot of the YourParkingSpace website on tablet"
                :width="768"
                :height="500"
                class="image image-tablet"
            />
            <NuxtImg
                src="/images/work/desktop/yourparkingspace-website.png"
                format="webp"
                quality="100"
                alt="A screenshot of the YourParkingSpace website on desktop"
                :width="1110"
                :height="555"
                class="image image-desktop"
            />
        </div>

        <h3>🚗 YourParkingSpace</h3>
        <p class="intro">I'm currrently the Lead Front-End Engineer at YourParkingSpace where I've been working on building our new website from the ground up, hiring and leading a team, and setting the technical direction of all our front-end projects.</p>

        <h4>Tech stack</h4>
        <ul class="tech-stack">
            <li
                v-for="tech in techStack"
                :key="tech"
                class="item"
            >
                {{ tech }}
            </li>
        </ul>

        <NuxtLink
            :to="{ name: 'work' }"
            class="more-link"
        >
            More work →
        </NuxtLink>
    </article>
</template>

<script lang="ts" setup>
    const techStack = computed(() => [
        'Vue.js',
        'Nuxt.js',
        'Storybook',
        'Bootstrap Vue',
        'Jest',
        'Vue Test Utils',
        'VRT',
        'Github Actions',
    ]);
</script>

<style lang="scss" scoped>
    @function rem($size) {
        @return calc($size / 16px) * 1rem;
    }

    h3 {
        font-size: rem(28px);
        margin-bottom: rem(20px);
        margin-top: rem(40px);

        @media (min-width: 768px) {
            margin-bottom: rem(40px);
        }

        @media (min-width: 992px) {
            font-size: rem(36px);
        }
    }

    .intro {
        font-size: rem(20px);
        line-height: 1.5;
        margin-bottom: rem(20px);

        @media (min-width: 768px) {
            font-size: rem(22px);
            margin-bottom: rem(40px);
        }
    }

    h4 {
        font-size: rem(22px);
        margin-bottom: rem(20px);
    }

    .tech-stack {
        column-count: 2;
        column-gap: 30px;
        margin-bottom: rem(40px);
        margin-top: 0;

        @media (min-width: 768px) {
            margin-bottom: rem(60px);
        }

        @media (min-width: 992px) {
            margin-bottom: rem(80px);
        }
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

    .image-container {
        &,
        > img {
            margin-left: auto;
            margin-right: auto;
        }
    }
</style>
