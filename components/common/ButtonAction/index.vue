<template>
    <component
        :is="download ? 'a' : 'button'"
        :href="href"
        :class="[$style.button, $style[preset]]"
        role="button"
        :download="download"
        :target="target"
        @click="onClick"
    >
        {{ title }}<slot name="icon" />
    </component>
</template>

<script>
export default {
    name: 'ButtonAction',
    props: {
        title: {
            type: String,
            required: true
        },
        href: {
            type: String,
            default: null
        },
        target: {
            type: String,
            default: null
        },
        download: {
            type: String,
            default: null
        },
        preset: {
            type: String,
            default: 'black' // ['black', 'white', 'pink', 'blue', 'darkBlue', 'blueWhite']
        }
    },

    emits: ['handleClick'],

    methods: {
        onClick () {
            if (this.href) {
                const isBlank = ['blank', '_blank'].includes(this.target?.toLowerCase())

                if (isBlank || this.href.match(/http(s)*:\/\//)) {
                    window.open(this.href, isBlank ? '_blank' : '_self')
                } else {
                    this.$router.push(this.href)
                }
            }

            this.$emit('handleClick')
        }
    }
}
</script>

<style module lang="scss">
    .button {
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
        padding: rem(24) rem(45);
        border-radius: rem(500);
        text-shadow: 0 1px 1px rgba(#000, 0.4);
        border: 1px solid transparent;
        background-color: transparent;
        margin-left: auto;
        margin-right: auto;
        font-size: rem(16);
        width: fit-content;
        font-weight: $fw-semiBold;
        cursor: pointer;
        transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.2s, opacity 0.2s;

        @include mobile {
            letter-spacing: 0;
            font-size: rem(15);
            min-height: rem(61);
            padding: rem(9) rem(40) rem(8);
        }

        @include desktop {
            &:hover {
                opacity: 0.8;
            }
        }

        svg {
            margin-left: rem(10);
            width: rem(24);
            height: rem(24);
            fill: currentColor;

            @include mobile {
                display: inline;
                margin-left: rem(10);
            }
        }

        &.black {
            text-shadow: none;
            color: $c-blackBlue;
            border-color: $c-blackBlue;

            @include desktop {
                &:hover {
                    background-color: $c-blackBlue;
                    color: #fff;
                    opacity: 1;
                }
            }
        }

        &.white {
            background-color: rgba(#fff, 0.1);
            text-shadow: none;
            color: #fff;
            border-color: #fff;

            @include desktop {
                &:hover {
                    background-color: #fff;
                    color: $c-blackBlue;
                    opacity: 1;
                }
            }
        }

        &.pink {
            color: #fff;
            background-color: $c-pink;
            border-color: $c-pink;
        }

        &.blue {
            color: $c-blackBlue;
            background-color: $c-blue;
            border-color: $c-blue;
            text-shadow: none;
        }

        &.blueWhite {
            color: #fff;
            background-color: $c-blue;
            border-color: $c-blue;
        }

        &.darkBlue {
            color: #fff;
            background-color: #6174FC;
            border-color: #6174FC;
        }

        &.gradient-1 {
            color: #fff;
            border: none;
            background: lg-1();
        }

        &.gradient-2 {
            color: #fff;
            border: none;
            background: lg-2();
        }

        &.gradient-3 {
            color: #fff;
            border: none;
            background: lg-3();
        }

        &.gradient-4 {
            color: #fff;
            border: none;
            background: lg-4();
        }

        &.gradient-5 {
            color: #fff;
            border: none;
            background: lg-5();
        }
    }
</style>
