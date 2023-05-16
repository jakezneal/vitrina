<template>
    <li class="item"><b>{{ category }}:</b> {{ skillsList }}</li>
</template>

<script lang="ts">
    export default defineComponent({
        props: {
            category: {
                type: String,
                required: true,
            },
            skills: {
                type: Array,
                required: true,
            },
        },

        setup(props) {
            const skillsList = computed(() => props.skills.join(', '));

            return {
                skillsList,
            }
        }
    });
</script>

<style lang="scss" scoped>
    @function rem($size) {
        @return calc($size / 16px) * 1rem;
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
</style>
