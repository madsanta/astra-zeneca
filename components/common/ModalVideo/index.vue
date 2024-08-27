<template>
    <div>
        <div
            :class="[
                $style.preview,
                {
                    [$style.isHover]: isHover,
                    [$style.isBig]: isBig,
                }
            ]"
            @click="openModal"
        >
            <div :class="$style.previewInner">
                <img :class="$style.previewImg" :src="preview">
                <div :class="$style.previewOverload" />
                <div :class="$style.previewPlay">
                    <IconPlay />
                </div>
            </div>
        </div>

        <transition>
            <Teleport v-if="show" to="#modals">
                <div :class="$style.modal">
                    <div :class="$style.modalOverload" @click="closeModal" />
                    <div :class="$style.modalContent">
                        <div :class="[$style.modalClose, 'white']" @click="closeModal">
                            Закрыть
                        </div>
                        <video v-if="type !== 'youtube'" controls crossorigin autoplay playsinline>
                            <source :src="videoUrl" :type="type">
                        </video>
                        <iframe
                            v-else
                            :src="videoUrl"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                        />
                    </div>
                </div>
            </Teleport>
        </transition>
    </div>
</template>

<script>
import Teleport from 'vue2-teleport'
import IconPlay from '~/assets/svg/icon-play.svg'
import modal from '~/mixins/modal'

export default {
    name: 'ModalVideo',
    components: {
        Teleport,
        IconPlay
    },
    mixins: [modal],
    props: {
        type: {
            type: String,
            default: 'video' // ['video/<ext>', 'youtube']
        },
        preview: {
            type: String,
            required: true
        },
        videoUrl: {
            type: String,
            required: true
        },
        isHover: {
            type: Boolean,
            default: false
        },
        isBig: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style module lang="scss">
    .preview {
        position: relative;
        cursor: pointer;
        border-radius: rem(30);
        transition: box-shadow 0.2s;

        @include rainbow-shadow();

        &::before {
            opacity: 0;
            transition: opacity 0.2s;
        }

        &:hover {
            &.isHover {
                box-shadow: none;

                &::before {
                    opacity: 1 !important;
                }
            }

            .preview{
                &Play {
                    opacity: 1 !important;
                    transform: translate(-50%, -50%) scale(1.2);
                }

                &Overload {
                    opacity: 1 !important;
                }
            }
        }

        &.isHover {
            box-shadow: 0 rem(30) rem(30) rem(-30) rgba(#000, 0.85);

            &::before {
                height: rem(74);
            }

            .preview{
                &Play {
                    opacity: 0;
                }

                &Overload {
                    opacity: 0;
                }
            }
        }

        &Inner {
            position: relative;
            overflow: hidden;
            border-radius: rem(30);

            @include relativeHeight(452, 254);

            .isBig & {
                @include relativeHeight(944, 533);
            }
        }

        &Img {
            @include absoluteCoverImg();
        }

        &Play {
            position: absolute;
            top: 50%;
            left: 50%;
            width: rem(110);
            height: rem(110);
            transform: translate(-50%, -50%);
            transition: opacity 0.2s, transform 0.2s;
        }

        &Overload {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            opacity: 1;
            background: rgba(#000, 0.5);
            transition: opacity 0.2s;
        }
    }

    .modal {
        position: fixed;
        z-index: 200;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;

        &Overload {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            cursor: pointer;
            background: rgba(#000, 0.8);
        }

        &Close {
            position: absolute;
            top: -5px;
            right: 0;
            font-size: rem(18);
            cursor: pointer;
            transform: translate(0, -100%);
            transition: opacity 0.2s;

            &:hover {
                opacity: 0.7;
            }
        }

        &Content {
            position: relative;
            width: 80%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            @include relativeHeight(560, 315);

            iframe,
            video {
                @include absoluteCoverImg();
            }
        }
    }
</style>
