<template>
    <div class="container">
        <div class="section">
            <h1 class="page-title">🛠 Skills</h1>
            <p>
                Whilst I started my professional career as a full-stack developer,
                I made the switch to focus mostly on front-end over {{ frontEndExperience }}
                years ago. This allowed me to focus on an evergrowing discapline and
                keep up-to-date with the latest technologies and techniques to ensure
                I can offer the best solutions possible to complex problems.
            </p>

            <ul class="skills-list">
                <SkillItem
                    v-for="{ category, list } in skills"
                    :key="category"
                    :category="category"
                    :skills="list"
                />
            </ul>

            <h2>Vue.js and React</h2>
            <p>
                I have worked exclusively in Vue.js and Nuxt.js commercially for the
                past few years, and before that in React. I still enjoy working with
                React and Next.js for personal projects to keep up-to-date. Whilst
                my commercial work of recent has been solely in Vue.js I have a solid
                understanding of framework core concepts, and using this knowledge
                I'm able to switch between frameworks with ease.
            </p>

            <h2>Back-end</h2>
            <p>
                Beginning my career as a full-stack developer meant I had to operate
                in the back-end space as well as the front-end space. Most of my work
                was in PHP, primarily with Laravel&mdash;with work ranging from full-blown
                Laravel apps to architecturing APIs to power API-driven front-end apps.
                Although this isn't a core requirement of most of my day-to-day work,
                I still use Laravel for personal projects.
            </p>

            <h2>Misc.</h2>
            <p>
                Along the way I've learnt and used various other tools and services
                that play a part in professional career. GraphQL&mdash;from both the
                consumption, and the creation of APIs&mdash;is my favourite query
                language for interacting with APIs. Terraform is something I learnt
                out of curiosity having previously created and managed cloud services
                manually, and it's helped me massively. Most of the organisations I
                have worked with use AWS so I chose to learn as much as I can about
                the different services they offer to make my life easier.
            </p>

            <h2>Testing</h2>
            <p>
                Jest and Vue Test Utils are my go-to tools nowadays for writing unit
                and component tests. I use Storycap to create automated visual regression
                testing.I also have some prior experience with Cypress, Testing Library,
                Mocha, Chai, and Sinon.
            </p>

            <h2>Mentoring and leadership</h2>
            <p>
                In my current role I get to lead and mentor a team which is something
                I've always wanted to do. Whilst I've had elements of this in previous
                jobs, I've been able to do it properly this time around with regular
                1:1s, IDPs, development-focused regular check-ins, amongst other things.
                I find it very rewarding to mentor people at different stages in their
                careers and to help them get to where they want to be, whilst also
                sharing my knowledge and experience with them.
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>
    const frontEndExperience = computed(() => new Date().getFullYear() - 2018);

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

    useHead({
        title: 'Skills',
    });
</script>

<style lang="scss" scoped>
    @function rem($size) {
        @return calc($size / 16px) * 1rem;
    }

    .skills-list {
        margin-bottom: rem(40px);

        @media (min-width: 768px) {
            column-count: 2;
            column-gap: 30px;
        }
    }

    * + * {
        margin-top: rem(20px);

        @media (min-width: 768px) {
            margin-top: rem(40px);
        }
    }

    p {
        font-size: rem(18px);

        @media (min-width: 992px) {
            font-size: rem(22px);
        }
    }

    h2 {
        font-size: rem(32px);
        margin-bottom: rem(10px);

        @media (min-width: 768px) {
            font-size: rem(36px);
            margin-bottom: rem(20px);
        }

        @media (min-width: 1200px) {
            font-size: rem(40px);
        }
    }
</style>
