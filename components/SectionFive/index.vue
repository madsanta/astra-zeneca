<template>
    <div :class="$style.section">
        <div :class="[$style.description, 'black']">
            Современный алгоритм диагностики дислипидемии и атеросклеротического поражения артерий состоит из следующих основных этапов<sup>1,11</sup>:
        </div>
        <div :class="$style.blocks">
            <div :class="$style.doctor">
                <img src="~/assets/img/section-5/doctor.png">
            </div>
            <div :class="$style.arrow">
                <IconArrow />
            </div>
            <div :class="$style.blocksInner">
                <div :class="$style.block">
                    <div :class="$style.blockIcon">
                        <IconBlock1 />
                    </div>
                    <div :class="[$style.blockText, 'black']">
                        Выявление основных факторов риска
                    </div>
                    <div :class="$style.blockButton">
                        <ButtonAction preset="gradient-1" title="Подробнее" href="/" target="_blank" />
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
                        <ButtonAction preset="gradient-2" title="Подробнее" href="/" target="_blank" />
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
                        <ButtonAction preset="gradient-3" title="Подробнее" href="/" target="_blank" />
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
                        <ButtonAction preset="gradient-4" title="Подробнее" href="/" target="_blank" />
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
                        <ButtonAction preset="gradient-5" title="Подробнее" href="/" target="_blank" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import IconArrow from '~/assets/svg/section-5/arrow.svg'
import IconBlock1 from '~/assets/svg/section-5/icon-1-1.svg'
import IconBlock2 from '~/assets/svg/section-5/icon-2-1.svg'
import IconBlock3 from '~/assets/svg/section-5/icon-3-1.svg'
import IconBlock4 from '~/assets/svg/section-5/icon-4-1.svg'
import IconBlock5 from '~/assets/svg/section-5/icon-5-1.svg'
import ButtonAction from '~/components/common/ButtonAction/index.vue'

export default {
    name: 'SectionFive',
    components: {
        ButtonAction,
        IconArrow,
        IconBlock1,
        IconBlock2,
        IconBlock3,
        IconBlock4,
        IconBlock5
    }
}
</script>

<style module lang="scss">
    .section {
        @include wrapper;

        padding-top: rem(207);
    }

    .description {
        @include block-title;

        width: calc(823 * 100% / 1440);
    }

    .blocks {
        position: relative;
        margin-top: rem(80); // 120 - 40 потому что отступ для ховера

        &Inner {
            display: flex;
            justify-content: space-between;
            align-items: center;
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
    }

    .block {
        position: relative;
        padding: rem(20) rem(20) rem(29);
        width: calc(272 * 100% / 1440);
        margin: rem(40) 0;
        transition: margin 0.2s, box-shadow 0.2s;

        &::before {
            opacity: 0;
            transition: opacity 0.2s;
        }

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

        &Icon {
            position: relative;
            width: calc(200 * 100% / 272);
            margin: rem(-60) auto 0;

            @include relativeHeight(200, 200);

            &::before {
                width: calc(100% - rem(30));
            }

            svg {
                @include absoluteCoverImg(contain);
            }
        }

        &Text {
            margin-top: rem(40);
            margin-bottom: rem(11); // потому что без ховера отступ у блока 40, а с кнопкой всего 29
            font-size: rem(18);
            font-weight: $fw-medium;
            min-height: rem(156);
            text-align: center;
        }

        &Button {
            height: 0;
            opacity: 0;
            margin-top: rem(20);
            overflow: hidden;
            transition: height 0.2s, opacity 0.2s;
        }

        &:nth-child(1) {
            @include rainbow-block(null, 'gradient-1');
            @include rainbow-shadow('gradient-1');

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
            @include rainbow-shadow('gradient-2');

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
            @include rainbow-shadow('gradient-3');

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
            @include rainbow-shadow('gradient-4');

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
            @include rainbow-shadow('gradient-5');

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
