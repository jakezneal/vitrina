<template>
    <div class="container">
        <div class="section">
            <h1 class="page-title">👷 Hire me</h1>
            <p class="intro-text">
                I'm currently open to freelance opportunities, so if you'd like
                to work with me then either
                <a
                    href="mailto:work@jakeneal.co.uk?subject=Lets Work Together!"
                    class="email-link"
                    target="_blank"
                    rel="noopener"
                >email</a>
                me, or use the form below.
            </p>

            <form name="contact" method="POST" netlify>
                <div class="input-wrapper">
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name" required />
                </div>
                <div class="input-wrapper">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div class="input-wrapper">
                    <label for="message">Message</label>
                    <textarea name="message" id="message" cols="30" rows="10" required></textarea>
                </div>
                <div class="submit-wrapper">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script lang="ts" setup>
    useHead({
        title: 'Hire me',
    });
</script>

<style lang="scss" scoped>
    @function rem($size) {
        @return calc($size / 16px) * 1rem;
    }

    .input-wrapper {
        display: flex;
        flex-direction: column;

        & + & {
            margin-top: rem(20px);
        }
    }

    label {
        margin-bottom: rem(10px);
        font-size: rem(18px);

        @media (min-width: 768px) {
            font-size: rem(22px);
        }

        @media (min-width: 992px) {
            font-size: rem(28px);
        }
    }

    input,
    textarea {
        border-radius: 0;
        border: none;
        font-size: 16px;
        padding: 10px;

        @media (min-width: 992px) {
            padding: 15px;
        }
    }

    .intro-text {
        font-size: rem(22px);
        margin-bottom: rem(40px);

        @media (min-width: 768px) {
            font-size: rem(28px);
        }

        @media (min-width: 992px) {
            font-size: rem(36px);
            margin-bottom: rem(60px);
        }
    }

    .email-link {
        color: var(--colour-text-primary);
    }

    .submit-wrapper {
        margin-top: rem(20px);

        @media (min-width: 768px) {
            margin-top: rem(40px);
        }
    }

    button {
        background-color: var(--colour-text-secondary);
        border: none;
        border-radius: 0;
        color: white;
        cursor: pointer;
        font-size: rem(18px);
        padding: 10px 30px;

        @media (min-width: 768px) {
            font-size: rem(28px);
            padding: 15px 50px;
        }
    }
</style>
