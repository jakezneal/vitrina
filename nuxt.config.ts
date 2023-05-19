// https://nuxt.com/docs/api/configuration/nuxt-config
const meta = {
    title: 'Jake Neal - Freelance Front-End Engineer',
    description: 'Freelance Front-End Engineer based in Manchester, UK',
    url: 'jakeneal.co.uk',
    image: '',
};

const socialShareImage = `https://${ meta.url }/images/social-share.png`;

meta.image = socialShareImage;

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
            appTitle: meta.title,
        }
    },

    app: {
        head: {
            htmlAttrs: {
                lang: 'en',
            },
            link: [
                {
                    rel: 'icon',
                    type: 'image/png',
                    href: '/favicon.png',
                },
            ],
            meta: [
                {
                    name: 'description',
                    content: meta.description,
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
                        'web developer',
                        'Manchester',
                        'Congleton',
                        'Cheshire',
                        'UK',
                        'freelance web developer',
                        'contract web developer',
                    ].join(', '),
                },
                {
                    property: 'og:url',
                    content: `https://${ meta.url }`,
                },
                {
                    property: 'og:type',
                    content: 'website',
                },
                {
                    property: 'title',
                    content: meta.title,
                },
                {
                    property: 'description',
                    content: meta.description,
                },
                {
                    property: 'og:image',
                    content: meta.image,
                },
                {
                    name: 'twitter:card',
                    content: 'summary_large_image',
                },
                {
                    property: 'twitter:domain',
                    content: meta.url,
                },
                {
                    property: 'twitter:url',
                    content: `https://${ meta.url }`,
                },
                {
                    name: 'twitter:title',
                    content: meta.title,
                },
                {
                    name: 'twitter:description',
                    content: meta.description,
                },
                {
                    name: 'twitter:image',
                    content: meta.image,
                },
            ],
        },
    }
})
