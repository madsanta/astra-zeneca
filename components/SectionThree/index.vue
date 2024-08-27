<template>
    <div :class="$style.section">
        <div :class="$style.map">
            <img src="~/assets/img/section-3/map.png">
        </div>
        <div :class="$style.inner">
            <div :class="$style.header">
                <h3 :class="[$style.headerTitle, 'pink']">
                    Дислипидемии
                </h3>
                <div :class="[$style.headerDescription, 'black']">
                    — состояния, когда концентрация липидов и липопротеидов крови выходят за пределы нормы, могут быть вызваны как приобретенными (вторичными), так и наследственными (первичными) причинами<sup>1</sup>
                </div>
            </div>
            <div :class="[$style.description, 'black']">
                Распространенность дислипидемий в популяции мужчин и женщин 35-74 лет, проживающих в Российской Федерации в 2020-2022гг. (ЭССЕ РФ)<sup>8</sup>
            </div>
            <div :class="['iconSwipe', 'onlyMobile']">
                <IconSwipeLeft />
            </div>
            <div :class="$style.blocks">
                <VueHorizontal ref="horizontal" :button="false" snap="center" @scroll-debounce="onScrollDebounce">
                    <div :class="$style.block">
                        <div :class="$style.blockIcon">
                            <IconBlock1 />
                        </div>
                        <div :class="[$style.blockText, 'black']">
                            имеют уровень общего холестерина<br>
                            <span class="pink">≥5 ммоль/л</span>
                        </div>
                    </div>
                    <div :class="$style.block">
                        <div :class="$style.blockIcon">
                            <IconBlock2 />
                        </div>
                        <div :class="[$style.blockText, 'black']">
                            имеют уровень ХС ЛНП<br>
                            <span class="pink">>3 ммоль/л</span>
                        </div>
                    </div>
                    <div :class="$style.block">
                        <div :class="$style.blockIcon">
                            <IconBlock3 />
                        </div>
                        <div :class="[$style.blockText, 'black']">
                            имеют уровень триглицеридов<br>
                            <span class="pink">>1,7 ммоль/л</span>
                        </div>
                    </div>
                    <div :class="$style.block">
                        <div :class="$style.blockIcon">
                            <IconBlock4 />
                        </div>
                        <div :class="[$style.blockText, 'black']">
                            имеют сниженный уровень<br>
                            ХС ЛВП – <span class="pink">{{ "<1, 0 ммоль / л у мужчин" }}</span><br>
                            и <span class="pink">{{ "<1,2 ммоль/л у женщин" }}</span>
                        </div>
                    </div>
                </VueHorizontal>
            </div>
            <SliderPagination
                :count="count"
                :index="index"
                @onPageClick="onPageClick"
            />
        </div>
    </div>
</template>

<script>
import VueHorizontal from 'vue-horizontal'
import IconBlock1 from '~/assets/svg/section-3/icon-1.svg'
import IconBlock2 from '~/assets/svg/section-3/icon-2.svg'
import IconBlock3 from '~/assets/svg/section-3/icon-3.svg'
import IconBlock4 from '~/assets/svg/section-3/icon-4.svg'
import IconSwipeLeft from '~/assets/svg/icon-swipe-left.svg'
import pagination from '~/mixins/pagination'
import SliderPagination from '~/components/common/SliderPagination/index.vue'

export default {
    name: 'SectionThree',
    components: {
        SliderPagination,
        IconBlock1,
        IconBlock2,
        IconBlock3,
        IconBlock4,
        IconSwipeLeft,
        VueHorizontal
    },
    mixins: [pagination],
    data: function () {
        return {
            count: 4
        }
    }
}
</script>

<style module lang="scss">
    .section {
        position: relative;
        overflow: hidden;
    }

    .inner {
        @include wrapper;

        padding-top: rem(120);
        padding-bottom: rem(197);

        @include mobile {
            padding-top: rem(90);
            padding-bottom: rem(220);
        }
    }

    .map {
        position: absolute;
        opacity: 0.1;
        width: rem(1630);
        left: 50%;
        right: 50%;
        transform: translate(-50%, 0);
        bottom: rem(-488); // ~-48%

        @include mobile {
            width: rem(413);
            bottom: rem(13);
        }
    }

    .header {
        display: flex;
        justify-content: stretch;

        @include mobile {
            justify-content: flex-start;
            flex-wrap: wrap;
        }

        &Title {
            @include title;

            flex: 0 0 auto;
            font-weight: $fw-extraBold;
        }

        &Description {
            font-size: rem(24);
            line-height: rem(34);
            font-weight: $fw-medium;
            margin-top: rem(26);
            margin-left: rem(43);

            @include mobile {
                margin-top: rem(10);
                margin-left: 0;
                font-size: rem(16);
                line-height: rem(26);
            }
        }
    }

    .description {
        @include block-title;

        width: calc(1315 * 100% / 1440);
        margin-top: rem(60);

        @include mobile {
            margin-top: rem(40);
            font-size: rem(20);
            line-height: rem(30);
            width: 100%;
        }
    }

    .blocks {
        margin-top: rem(40);
        display: flex;

        & > div {
            @include desktop {
                width: 100%;
            }

            & > div {

                @include desktop {
                    justify-content: space-between;
                }
            }
        }

        @include mobile {
            margin-top: rem(10);
        }
    }

    .block {
        width: calc(329 * 100% / 1440);

        @include mobile {
            width: rem(210);
            margin-right: rem(20);
        }

        &Icon {
            position: relative;
            width: 100%;

            @include relativeHeight(329, 296);

            svg {
                position: absolute;
                width: 100%;
                left: 0;
                right: 0;
            }
        }

        &Text {
            margin-top: rem(8);
            text-align: center;
            font-size: rem(18);
            line-height: rem(28);
            font-weight: $fw-medium;

            @include mobile {
                margin-top: rem(10);
                font-size: rem(16);
                line-height: rem(26);
            }

            span {
                font-weight: $fw-bold;
            }
        }
    }
</style>
