<template>
    <!-- eslint-disable vue/no-v-html -->
    <div
        :class="[
            $style.text,
            $style[size],
            $style[fontStyle],
            {
                [$style.isCenter]: isCenter,
                [$style.isRainbow]: isRainbow,
                [$style.isList]: isList
            }
        ]"
    >
        <div :class="$style.content">
            <div
                v-if="title"
                :class="$style.title"
                v-html="title"
            />
            <ul v-if="isList">
                <li
                    v-for="(li, index) in text"
                    :key="index"
                    v-html="li"
                />
            </ul>
            <div
                v-for="(p, index) in text"
                v-else-if="text.length"
                :key="index"
                :class="$style.text"
                v-html="p"
            />
        </div>
        <div v-if="caption" :class="$style.caption" v-html="caption" />
    </div>
    <!-- eslint-enable -->
</template>

<script>
export default {
    name: 'TextBlock',
    props: {
        text: {
            type: Array,
            required: true
        },
        title: {
            type: String,
            default: ''
        },
        caption: {
            type: String,
            default: ''
        },
        size: {
            type: String,
            default: ''
        },
        fontStyle: {
            type: String,
            default: ''
        },
        isList: {
            type: Boolean,
            default: false
        },
        isCenter: {
            type: Boolean,
            default: false
        },
        isRainbow: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style module lang="scss">
    .text {
        position: relative;
        display: block;

        &:first-child {
            margin-top: 0 !important;
        }

        &.isList {
            margin-top: rem(15);

            text:first-child & {
                margin-top: 0;
            }
        }

        ul {
            font-size: rem(17);

            @include ul;

            li + li {
                margin-top: rem(10);
            }
        }

        p + p {
            margin-top: rem(10);
        }

        &.isCenter {
            text-align: center;
        }

        &.xs {
            font-size: rem(18);
            line-height: rem(24);
            margin-top: rem(30);
        }

        &.s {
            font-size: rem(18);
            line-height: rem(28);
            margin-top: rem(30);
        }

        &.m {
            font-size: rem(24);
            line-height: rem(32);
            margin-top: rem(40);
        }

        &.l {
            font-size: rem(32);
            line-height: rem(42);
            margin-top: rem(80);
        }

        &.medium {
            font-weight: $fw-medium;
        }

        &.bold {
            font-weight: $fw-bold;
        }

        &.extraBold {
            font-weight: $fw-extraBold;
        }
    }

    .content {
        position: relative;

        .isRainbow & {
            font-size: rem(18);
            line-height: rem(28);
            color: $c-blackBlue;
            padding: rem(20) rem(30);
            margin-top: rem(30);

            @include rainbow-block();

            &::after {
                content: '';
                display: block;
                height: 100%;
                width: rem(10);
                position: absolute;
                background-color: $c-pink;
                top: 0;
                left: 0;
                bottom: 0;
                z-index: 1;
            }

            ul {
                font-size: rem(18);
                line-height: rem(28);
            }
        }

        .isCenter & {
            width: calc(1024 * 100% / 1440);
            margin-left: auto;
            margin-right: auto;
        }

        .title {
            font-weight: $fw-medium;

            & + ul,
            & + .text {
                margin-top: rem(11);
            }
        }
    }

    .caption {
        font-size: rem(18);
        font-weight: $fw-regular;
        line-height: rem(28);
        margin-top: rem(20);
    }
</style>
