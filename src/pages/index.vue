<template>
    <div class="container">
        <section class="section">
            <h1 class="page-title"><span class="wave">👋</span> Ahoy! I'm a freelance front-end engineer based in the UK.</h1>
            <p class="intro-text">I'm passionate about creating responsive, performant and accessible websites and web apps using HTML, CSS and JavaScript.</p>
        </section>

        <section class="section">
            <h2 class="section-heading">🛠 Skills</h2>

            <ul class="skills-list">
                <SkillItem
                    v-for="{ category, list } in skills"
                    :key="category"
                    :category="category"
                    :skills="list"
                />
            </ul>

            <NuxtLink
                :to="{ name: 'skills' }"
                class="more-link"
            >
                More skills →
            </NuxtLink>
        </section>

        <RecentWork />
    </div>
</template>

<script lang="ts" setup>
    const skills = computed(() => [
        {
            category: 'Frameworks',
            list: [
                'Vue.js',
                'Nuxt.js',
                'React',
                'Nuxt.js'
            ],
        },
        {
            category: 'JavaScript',
            list: [
                'Vanilla',
                'TypeScript',
                'ES6+',
            ],
        },
        {
            category: 'Testing',
            list: [
                'Jest',
                'Cypress',
                'Vue Test Utils',
                'VRT',
            ],
        },
        {
            category: 'UI',
            list: [
                'Bootstrap',
                'CSS',
                'Sass/SCSS',
            ],
        },
        {
            category: 'Build tools',
            list: [
                'Vite',
                'Webpack',
                'Gulp',
                'NPM Scripts',
            ],
        },
        {
            category: 'Design',
            list: [
                'Figma',
                'Sketch',
                'Adobe CS',
            ],
        },
        {
            category: 'Misc.',
            list: [
                'Git',
                'A11y',
                'Performance',
                'GraphQL',
                'AWS',
                'Terraform'
            ],
        }
    ]);
</script>

<style lang="scss" scoped>
    @function rem($size) {
        @return calc($size / 16px) * 1rem;
    }

    .intro-text {
        font-size: rem(22px);

        @media (min-width: 768px) {
            font-size: rem(28px);
        }

        @media (min-width: 992px) {
            font-size: rem(36px);
        }
    }

    .skills-list {
        margin-top: 0;
        margin-bottom: rem(40px);

        @media (min-width: 768px) {
            column-count: 2;
            column-gap: 30px;
            margin-bottom: rem(60px);
        }

        @media (min-width: 992px) {
            margin-bottom: rem(80px);
        }
    }

    .wave {
        animation: wave 2.5s infinite;
        display: inline-block;
        transform-origin: 70% 70%;
    }

    @keyframes wave {
        0% {
            transform: rotate(0deg);
        }

        10% {
            transform: rotate(14deg)
        }

        20% {
            transform: rotate(-8deg)
        }

        30% {
            transform: rotate(14deg)
        }

        40% {
            transform: rotate(-4deg)
        }

        50% {
            transform: rotate(10deg)
        }

        60% {
            transform: rotate(0deg)
        }

        100% {
            transform: rotate(0deg);
        }
    }
</style>
