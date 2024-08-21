<template>
    <!-- eslint-disable vue/no-v-html -->
    <div
        :class="[
            $style.image,
            $style[align],
            {
                [$style.isShadow]: isShadow,
                [$style.isSlider]: isSlider,
            }
        ]"
    >
        <div :class="$style.content">
            <div
                v-if="title"
                :class="$style.title"
                v-html="title"
            />
            <div v-if="isSlider" :class="$style.slider">
                <div v-for="(source, index) in src" :key="index" :class="$style.sliderItem">
                    <img :src="require(`~/assets/img/${source}`)">
                </div>
            </div>
            <img v-for="(source, index) in src" v-else :key="index" :src="require(`~/assets/img/${source}`)" :class="$style.img">
            <div
                v-if="caption"
                :class="[
                    $style.caption,
                    {
                        [$style.isCenter]: isCaptionCenter
                    }
                ]"
                v-html="caption"
            />
        </div>
    </div>
    <!-- eslint-enable -->
</template>

<script>
export default {
    name: 'ImageBlock',
    props: {
        src: {
            type: Array,
            required: true
        },
        align: {
            type: String,
            default: 'center'
        },
        title: {
            type: String,
            default: ''
        },
        caption: {
            type: String,
            default: ''
        },
        isSlider: {
            type: Boolean,
            default: false
        },
        isShadow: {
            type: Boolean,
            default: false
        },
        isCaptionCenter: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style module lang="scss">
    .image {
        position: relative;
        margin-top: rem(40);

        &:first-child {
            margin-top: 0;
        }

        &.isShadow .img {
            overflow: hidden;
            border-radius: rem(30);
            box-shadow: 0 rem(20) rem(40) rem(-20) #000;
        }
    }

    .isCenter {
        text-align: center;
    }

    .content {
        position: relative;
    }

    .title {
        font-size: rem(18);
        line-height: rem(28);
        font-weight: $fw-bold;
        margin-bottom: rem(20);
        text-align: center;
    }

    .img {
        width: auto;
        display: block;

        .image.center & {
            margin-left: auto;
            margin-right: auto;
        }

        .image.left & {
            margin-right: auto;
        }

        .image.right & {
            margin-left: auto;
        }
    }

    .slider {
        display: grid;
        grid-template-columns: rem(484) repeat(2, rem(432));
        grid-gap: rem(40);

        &Item {
            position: relative;
        }
    }

    .caption {
        font-size: rem(18);
        line-height: rem(28);
        margin-top: rem(20);
    }
</style>
