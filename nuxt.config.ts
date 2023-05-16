// https://nuxt.com/docs/api/configuration/nuxt-config
const title = 'Jake Neal - Freelance Front-End Engineer';

export default defineNuxtConfig({
    srcDir: './src',

    css: ['@/assets/scss/app.scss'],

    modules: [
        '@nuxt/image-edge',
        '@nuxt/content',
        '@nuxtjs/color-mode',
    ],

    runtimeConfig: {
        public: {
            appTitle: title,
        }
    },

    app: {
        head: {
            title,
            meta: [
                {
                    name: 'description',
                    content: 'Freelance Front-End Engineer based in Manchester, UK',
                },
                {
                    name: 'keywords',
                    content: [
                        'freelance',
                        'contractor',
                        'front-end',
                        'frontend',
                        'front end',
                        'engineer',
                        'developer',
                        'Manchester',
                    ].join(', '),
                }
            ],
        },
    }
})
