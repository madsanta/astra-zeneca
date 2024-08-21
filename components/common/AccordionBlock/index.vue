<template>
    <div :class="[$style.accordion, {[$style.rainbow]: isRainbow, [$style.active]: value}]" @click="toggleShow(value)">
        <div :class="$style.accordionImage">
            <img :src="image">
        </div>
        <div v-if="title" :class="$style.accordionText">
            {{ title }}
        </div>
        <div else :class="$style.accordionText">
            <slot name="title" />
        </div>
        <div :class="$style.accordionIcon">
            <div :class="$style.accordionIconLine" />
            <div :class="$style.accordionIconLine" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'AccordionBlock',
    props: {
        title: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        isRainbow: {
            type: Boolean,
            default: false
        },
        value: {
            type: Boolean,
            required: true
        }
    },
    emits: ['input'],
    methods: {
        toggleShow (isShow) {
            this.$emit('input', !isShow)
        }
    }
}
</script>

<style module lang="scss">
    .accordion {
        position: relative;
        display: flex;
        align-items: center;
        cursor: pointer;
        margin-top: rem(20);
        justify-content: space-between;
        border-radius: 5px rem(30) rem(30) rem(30);
        background-color: rgba(#fff, 0.1);
        border: 1px solid rgba(#fff, 0.3);
        padding: rem(17) rem(30);
        backdrop-filter: blur(25px);
        box-shadow: 0 rem(30) rem(30) rem(-30) rgba(#000, 0.4);

        &:first-child {
            margin-top: 0;
        }

        &.rainbow {
            @include rainbow-block(top);

            border-color: transparent;

            .accordion {
                &Icon {
                    border-color: $c-blackBlue;

                    &Line {
                        background-color: $c-blackBlue;
                    }
                }
            }
        }

        &Image {
            flex: 0 0 auto;
            width: rem(60);
            height: rem(60);
        }

        &Text {
            margin-left: rem(25);
            margin-right: rem(15);
            font-size: rem(24);
            line-height: rem(24);
            font-weight: $fw-bold;
            width: 100%;
        }

        &Icon {
            flex: 0 0 auto;
            position: relative;
            border: 1px solid #fff;
            border-radius: 100%;
            width: rem(40);
            height: rem(40);

            &Line {
                position: absolute;
                top: 50%;
                left: 50%;
                width: 9px;
                height: 1px;
                border-radius: 20px;
                background-color: #fff;
                transition: background-color 0.2s, transform 0.2s;

                &:first-child {
                    margin-left: -3px;
                    transform: translate(-50%, -50%) rotate(45deg);

                    .active & {
                        transform: translate(-50%, -50%) rotate(-45deg);
                    }
                }

                &:last-child {
                    margin-left: 3px;
                    transform: translate(-50%, -50%) rotate(-45deg);

                    .active & {
                        transform: translate(-50%, -50%) rotate(45deg);
                    }
                }
            }
        }
    }
</style>
