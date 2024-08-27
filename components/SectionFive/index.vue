<template>
    <div :class="$style.section">
        <div :class="[$style.description, 'black']">
            Современный алгоритм диагностики дислипидемии и атеросклеротического поражения артерий состоит из следующих основных этапов<sup>1,11</sup>:
        </div>
        <div :class="$style.blocks">
            <div :class="[$style.doctor, 'onlyDesktop']">
                <img src="~/assets/img/section-5/doctor.png">
            </div>
            <div :class="$style.arrow">
                <IconArrow class="onlyDesktop" />
                <IconArrowMobile class="onlyMobile" />
            </div>
            <div :class="$style.blocksInner">
                <VueHorizontal ref="horizontal" :button="false" snap="center" @scroll-debounce="onScrollDebounce">
                    <div :class="$style.block">
                        <div :class="$style.blockIcon">
                            <IconBlock1 />
                        </div>
                        <div :class="[$style.blockText, 'black']">
                            Выявление основных факторов риска
                        </div>
                        <div :class="$style.blockButton">
                            <ButtonAction class="onlyDesktop" preset="gradient-1" title="Подробнее" href="/" target="_blank" />
                            <NuxtLink :class="['onlyMobile', $style.button1]" to="/">
                                Подробнее
                            </NuxtLink>
                        </div>
                    </div>
                    <div :class="$style.block">
                        <div :class="$style.blockIcon">
                            <IconBlock2 />
                        </div>
                        <div :class="[$style.blockText, 'black']">
                            Выявление клинических симптомов атеросклероза (данные опроса и осмотра)
                        </div>
                        <div :class="$style.blockButton">
                            <ButtonAction class="onlyDesktop" preset="gradient-2" title="Подробнее" href="/" target="_blank" />
                            <NuxtLink :class="['onlyMobile', $style.button2]" to="/">
                                Подробнее
                            </NuxtLink>
                        </div>
                    </div>
                    <div :class="$style.block">
                        <div :class="$style.blockIcon">
                            <IconBlock3 />
                        </div>
                        <div :class="[$style.blockText, 'black']">
                            Определение липидного профиля
                        </div>
                        <div :class="$style.blockButton">
                            <ButtonAction class="onlyDesktop" preset="gradient-3" title="Подробнее" href="/" target="_blank" />
                            <NuxtLink :class="['onlyMobile', $style.button3]" to="/">
                                Подробнее
                            </NuxtLink>
                        </div>
                    </div>
                    <div :class="$style.block">
                        <div :class="$style.blockIcon">
                            <IconBlock4 />
                        </div>
                        <div :class="[$style.blockText, 'black']">
                            Оценка ССР и оценка по шкале SCORE2
                        </div>
                        <div :class="$style.blockButton">
                            <ButtonAction class="onlyDesktop" preset="gradient-4" title="Подробнее" href="/" target="_blank" />
                            <NuxtLink :class="['onlyMobile', $style.button4]" to="/">
                                Подробнее
                            </NuxtLink>
                        </div>
                    </div>
                    <div :class="$style.block">
                        <div :class="$style.blockIcon">
                            <IconBlock5 />
                        </div>
                        <div :class="[$style.blockText, 'black']">
                            Исключение/верификация субклинического и клинически значимого атеросклероза (инструментальные методы обследования)
                        </div>
                        <div :class="$style.blockButton">
                            <ButtonAction class="onlyDesktop" preset="gradient-5" title="Подробнее" href="/" target="_blank" />
                            <NuxtLink :class="['onlyMobile', $style.button5]" to="/">
                                Подробнее
                            </NuxtLink>
                        </div>
                    </div>
                </VueHorizontal>
            </div>
            <div :class="[$style.paginationWrapper, 'onlyMobile']">
                <SliderPagination
                    :class="$style.pagination"
                    :count="count"
                    :index="index"
                    @onPageClick="onPageClick"
                />
                <IconSwipeLeft />
            </div>
        </div>
    </div>
</template>

<script>
import VueHorizontal from 'vue-horizontal'
import IconArrow from '~/assets/svg/section-5/arrow.svg'
import IconArrowMobile from '~/assets/svg/section-5/arrow-mobile.svg'
import IconBlock1 from '~/assets/svg/section-5/icon-1-1.svg'
import IconBlock2 from '~/assets/svg/section-5/icon-2-1.svg'
import IconBlock3 from '~/assets/svg/section-5/icon-3-1.svg'
import IconBlock4 from '~/assets/svg/section-5/icon-4-1.svg'
import IconBlock5 from '~/assets/svg/section-5/icon-5-1.svg'
import IconSwipeLeft from '~/assets/svg/icon-swipe-left.svg'
import ButtonAction from '~/components/common/ButtonAction/index.vue'
import SliderPagination from '~/components/common/SliderPagination/index.vue'
import pagination from '~/mixins/pagination'

export default {
    name: 'SectionFive',
    components: {
        ButtonAction,
        SliderPagination,
        IconArrow,
        IconArrowMobile,
        IconBlock1,
        IconBlock2,
        IconBlock3,
        IconBlock4,
        IconBlock5,
        IconSwipeLeft,
        VueHorizontal
    },
    mixins: [pagination],
    data: function () {
        return {
            count: 5
        }
    }
}
</script>

<style module lang="scss">
    .section {
        padding-top: rem(207);

        @include wrapper;

        @include mobile {
            padding-top: rem(180);
        }
    }

    .description {
        width: calc(823 * 100% / 1440);

        @include block-title;

        @include mobile {
            width: 100%;
        }
    }

    .blocks {
        position: relative;
        margin-top: rem(80); // 120 - 40 потому что отступ для ховера

        @include mobile {
            width: 100%;
            margin-top: rem(30);
        }

        &Inner {
            display: flex;
            justify-content: space-between;
            align-items: center;

            @include mobile {
                align-items: stretch;
            }
        }
    }

    .doctor {
        position: absolute;
        width: rem(311);
        right: 0;
        top: 0;
        transform: translateY(-80%);
        z-index: -1;

        @include relativeHeight(311, 415);

        img {
            @include absoluteCoverImg(contain);
        }
    }

    .arrow {
        position: absolute;
        width: calc(1140 * 100% / 1440);
        left: 50%;
        right: 50%;
        bottom: 0;
        transform: translate(-50%, calc(100% - rem(56)));
        z-index: -1;

        @include mobile {
            width: rem(343);
            bottom: rem(30);
            transform: translate(-50%, 0);
        }
    }

    .paginationWrapper {
        position: relative;
        margin-top: rem(70);
        display: flex;
        align-items: center;
        justify-content: center;
        height: rem(30);

        .pagination {
            align-self: center;
            margin-top: 0;
        }

        svg {
            position: absolute;
            right: 0;
            top: 0;
            width: rem(30);
        }
    }

    .block {
        position: relative;
        padding: rem(20) rem(20) rem(29);
        width: calc(272 * 100% / 1440);
        margin: rem(40) 0;
        transition: margin 0.2s, box-shadow 0.2s;

        @include mobile {
            width: rem(240);
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 0;
            margin: rem(60) rem(15) 0 0;
        }

        &::before {
            opacity: 0;
            transition: opacity 0.2s;
        }

        @include desktop {
            &:hover {
                margin: 0;
                box-shadow: none !important;

                &::before {
                    opacity: 1;
                }

                .blockButton {
                    height: rem(80);
                    opacity: 1;
                }
            }
        }

        &Icon {
            position: relative;
            width: calc(200 * 100% / 272);
            margin: rem(-60) auto 0;

            @include relativeHeight(200, 200);

            @include mobile {
                width: rem(120);
            }

            &::before {
                width: calc(100% - rem(30));

                @include mobile {
                    height: rem(100);
                    z-index: 1 !important;
                    bottom: rem(-5) !important;
                }
            }

            svg {
                @include absoluteCoverImg();

                @include mobile {
                    z-index: 2;
                }
            }
        }

        &Text {
            margin-top: rem(40);
            margin-bottom: rem(11); // потому что без ховера отступ у блока 40, а с кнопкой всего 29
            font-size: rem(18);
            font-weight: $fw-medium;
            min-height: rem(156);
            text-align: center;

            @include mobile {
                font-size: rem(15);
                margin-top: rem(15);
                margin-bottom: rem(23);
                min-height: auto;
            }
        }

        &Button {
            height: 0;
            opacity: 0;
            margin-top: rem(20);
            overflow: hidden;
            transition: height 0.2s, opacity 0.2s;

            @include mobile {
                height: auto;
                margin-top: auto;
                opacity: 1;
            }
            .button1,
            .button2,
            .button3,
            .button4,
            .button5 {
                text-align: center;
                margin: 0 auto;
                text-decoration: underline;
                text-transform: uppercase;
                font-size: rem(16);
                font-weight: $fw-semiBold;
            }

            .button1 {
                color: #E795FD;
            }

            .button2 {
                color: #7D76FF;
            }

            .button3 {
                color: #6475FD;
            }

            .button4 {
                color: #6296FD;
            }

            .button5 {
                color: #6BB8FC;
            }
        }

        &:nth-child(1) {
            @include rainbow-block(null, 'gradient-1');

            @include desktop {
                @include rainbow-shadow('gradient-1');
            }

            & {
                overflow: visible;
            }

            &::before {
                height: rem(200);
            }

            .blockIcon {
                @include rainbow-shadow('gradient-1', 40);
            }
        }

        &:nth-child(2) {
            @include rainbow-block(null, 'gradient-2');

            @include desktop {
                @include rainbow-shadow('gradient-2');
            }

            & {
                overflow: visible;
            }

            &::before {
                height: rem(200);
            }

            .blockIcon {
                @include rainbow-shadow('gradient-2', 40);
            }
        }

        &:nth-child(3) {
            @include rainbow-block(null, 'gradient-3');

            @include desktop {
                @include rainbow-shadow('gradient-3');
            }

            & {
                overflow: visible;
            }

            &::before {
                height: rem(200);
            }

            .blockIcon {
                @include rainbow-shadow('gradient-3', 40);
            }
        }

        &:nth-child(4) {
            @include rainbow-block(null, 'gradient-4');

            @include desktop {
                @include rainbow-shadow('gradient-4');
            }

            & {
                overflow: visible;
            }

            &::before {
                height: rem(200);
            }

            .blockIcon {
                @include rainbow-shadow('gradient-4', 40);
            }
        }

        &:nth-child(5) {
            @include rainbow-block(null, 'gradient-5');

            @include desktop {
                @include rainbow-shadow('gradient-5');
            }

            & {
                overflow: visible;
            }

            &::before {
                height: rem(200);
            }

            .blockIcon {
                @include rainbow-shadow('gradient-5', 40);
            }
        }
    }
</style>
