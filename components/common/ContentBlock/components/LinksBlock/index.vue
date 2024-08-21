<template>
    <!-- eslint-disable vue/no-v-html -->
    <div :class="$style.links">
        <div :class="$style.content">
            <div :class="$style.buttons">
                <div v-for="(button, index) in buttons" :key="index" :class="$style.button">
                    <div
                        v-if="button.caption"
                        :class="$style.caption"
                        v-html="button.caption"
                    />
                    <ButtonAction
                        :title="button.title"
                        :preset="button.preset"
                        :href="button.href"
                        target="_blank"
                    />
                </div>
            </div>
        </div>
    </div>
    <!-- eslint-enable -->
</template>

<script>
import ButtonAction from '~/components/common/ButtonAction/index.vue'

export default {
    name: 'LinksBlock',
    components: {
        ButtonAction
    },
    props: {
        buttons: {
            type: Array,
            required: true
        }
    }
}
</script>

<style module lang="scss">
    .links {
        position: relative;
        margin-top: rem(40);
        padding-bottom: rem(30);

        &:first-child {
            margin-top: 0;
        }

        &:last-child {
            padding-bottom: 0;
        }
    }

    .content {
        position: relative;

        .buttons {
            display: flex;
            justify-content: center;
            margin-left: auto;
            margin-right: auto;
        }

        .button {
            margin-left: rem(57);

            &:first-child {
                margin-left: 0;
            }

            .caption {
                font-family: Kanit, sans-serif;
                font-size: rem(18);
                font-weight: $fw-semiBold;
                margin-bottom: rem(20);
                text-align: center;
            }
        }
    }
</style>
