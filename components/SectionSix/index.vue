<template>
    <div :class="$style.section" data-id="risk-factors">
        <h3 :class="[$style.title, 'black']">
            <span class="pink">Факторы риска</span> развития и прогрессирования атеросклероза<sup>1</sup>
        </h3>
        <div :class="$style.blocks">
            <VueHorizontal ref="horizontal" :button="false" snap="center" @scroll-debounce="onScrollDebounce">
                <div :class="$style.block">
                    <div :class="[$style.blockTop, 'white', 'text-shadow-1']">
                        <div :class="$style.blockTopIcon">
                            <img src="~/assets/img/section-6/icon-1.png">
                        </div>
                        <div :class="$style.blockTopText">
                            Возраст
                        </div>
                    </div>
                    <div :class="[$style.blockBottom, 'black']">
                        Мужчины >40 лет, женщины&nbsp;>55&nbsp;лет&nbsp;или с ранней менопаузой
                    </div>
                </div>
                <div :class="$style.block">
                    <div :class="[$style.blockTop, 'white', 'text-shadow-1']">
                        <div :class="$style.blockTopIcon">
                            <img src="~/assets/img/section-6/icon-2.png">
                        </div>
                        <div :class="$style.blockTopText">
                            Курение
                        </div>
                    </div>
                    <div :class="[$style.blockBottom, 'black']">
                        Вне зависимости от количества
                    </div>
                </div>
                <div :class="$style.block">
                    <div :class="[$style.blockTop, 'white', 'text-shadow-1']">
                        <div :class="$style.blockTopIcon">
                            <img src="~/assets/img/section-6/icon-3.png">
                        </div>
                        <div :class="$style.blockTopText">
                            Артериальная гипертония
                        </div>
                    </div>
                    <div :class="[$style.blockBottom, 'black']">
                        АД ≥140/90 мм рт.ст. или постоянный прием антигипертензивных препаратов
                    </div>
                </div>
                <div :class="$style.block">
                    <div :class="[$style.blockTop, 'white', 'text-shadow-1']">
                        <div :class="$style.blockTopIcon">
                            <img src="~/assets/img/section-6/icon-4.png">
                        </div>
                        <div :class="$style.blockTopText">
                            Сахарный диабет 2-го типа
                        </div>
                    </div>
                    <div :class="[$style.blockBottom, 'black']">
                        Глюкоза натощак >6,1 и 7,0 ммоль/л (капиллярная и венозная кровь, соответственно)
                    </div>
                </div>
                <div :class="$style.block">
                    <div :class="[$style.blockTop, 'white', 'text-shadow-1']">
                        <div :class="$style.blockTopIcon">
                            <img src="~/assets/img/section-6/icon-5.png">
                        </div>
                        <div :class="$style.blockTopText">
                            Раннее начало ИБС у ближайших родственников (отягощенная наследственность)
                        </div>
                    </div>
                    <div :class="[$style.blockBottom, 'black']">
                        {{ 'Инфаркт миокарда или нестабильная стенокардия у мужчин в возрасте < 55 лет, у женщин < 60 лет' }}
                    </div>
                </div>
                <div :class="$style.block">
                    <div :class="[$style.blockTop, 'white', 'text-shadow-1']">
                        <div :class="$style.blockTopIcon">
                            <img src="~/assets/img/section-6/icon-6.png">
                        </div>
                        <div :class="$style.blockTopText">
                            Семейная гиперлипидемия, по&nbsp;данным&nbsp;анамнеза
                        </div>
                    </div>
                    <div :class="[$style.blockBottom, 'black']">
                        IIа, IIb и III тип
                    </div>
                </div>
                <div :class="$style.block">
                    <div :class="[$style.blockTop, 'white', 'text-shadow-1']">
                        <div :class="$style.blockTopIcon">
                            <img src="~/assets/img/section-6/icon-7.png">
                        </div>
                        <div :class="$style.blockTopText">
                            Абдоминальное ожирение
                        </div>
                    </div>
                    <div :class="[$style.blockBottom, 'black']">
                        Окружность талии: у мужчин ≥94 см, у&nbsp;женщин&nbsp;≥80&nbsp;см
                    </div>
                </div>
                <div :class="$style.block">
                    <div :class="[$style.blockTop, 'white', 'text-shadow-1']">
                        <div :class="$style.blockTopIcon">
                            <img src="~/assets/img/section-6/icon-8.png">
                        </div>
                        <div :class="$style.blockTopText">
                            Хроническая болезнь почек
                        </div>
                    </div>
                    <div :class="[$style.blockBottom, 'black']">
                        {{
                            'Снижение скорости клубочковой фильтрации <&nbsp;60&nbsp;мл&nbsp;/&nbsp;мин'
                        }}
                    </div>
                </div>
                <div :class="$style.block">
                    <div :class="[$style.blockTop, 'white', 'text-shadow-1']">
                        <div :class="$style.blockTopIcon">
                            <img src="~/assets/img/section-6/icon-9.png">
                        </div>
                        <div :class="$style.blockTopText">
                            Избыточный вес и ожирение
                        </div>
                    </div>
                    <div :class="[$style.blockBottom, 'black']">
                        Повышение ИМТ >25 кг/м2
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
        <div :class="[$style.caption, 'black']">
            Сокращения: <b>АД</b> — артериальное давление, <b>ИБС</b> — ишемическая болезнь сердца, <b>ИМТ</b> — индекс массы тела.
        </div>
    </div>
</template>

<script>
import VueHorizontal from 'vue-horizontal'
import SliderPagination from '~/components/common/SliderPagination/index.vue'
import pagination from '~/mixins/pagination'
import IconSwipeLeft from '~/assets/svg/icon-swipe-left.svg'

export default {
    name: 'SectionSix',
    components: {
        VueHorizontal,
        SliderPagination,
        IconSwipeLeft
    },
    mixins: [pagination],
    data: function () {
        return {
            count: 9
        }
    }
}
</script>

<style module lang="scss">
    .section {
        @include wrapper;

        padding-top: rem(290); // 290 = 250+40 потому что у секции выше отступы снизу для анимации ховера
        padding-bottom: rem(100);

        @include mobile {
            padding-top: rem(80);
            padding-bottom: rem(121);
        }
    }

    .title {
        @include title;

        width: calc(1192 * 100% / 1440);
        font-weight: $fw-extraBold;

        @include mobile {
            width: 100%;
        }
    }

    .blocks {
        margin-top: rem(105);
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;

        @include mobile {
            margin-top: rem(9); // 49 - 40 из-за слайдера и показа при overflow:hidden;
            flex-wrap: nowrap;
        }
    }

    .block {
        width: calc(452 * 100% / 1440);
        margin-left: rem(40);

        @include mobile {
            width: rem(280) !important;
            margin-left: 0 !important;
            margin-right: rem(15) !important;
            margin-top: rem(40);
        }

        &:nth-child(1),
        &:nth-child(5),
        &:nth-child(8) {
            margin-left: 0;
        }

        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3),
        &:nth-child(4) {
            width: calc(329 * 100% / 1440);
        }

        &:nth-child(5) {
            @include mobile {
                width: rem(344) !important;
            }
        }

        &:nth-child(8) {
            margin-left: auto;
        }

        &:nth-child(9) {
            margin-right: auto;
        }

        &Top {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: end;

            @include mobile {
                justify-content: center;
                align-items: center;
                margin-top: 0 !important;
                height: rem(150);

                &::after {
                    display: none;
                }
            }

            .block:nth-child(1) &,
            .block:nth-child(2) &,
            .block:nth-child(3) &,
            .block:nth-child(4) & {
                @include relativeHeight(329, 150);

            }

            .block:nth-child(5) &,
            .block:nth-child(6) &,
            .block:nth-child(7) & {
                @include relativeHeight(452, 208);

                &Text {
                    height: rem(96);
                    bottom: rem(26);
                }
            }

            .block:nth-child(8) &,
            .block:nth-child(9) & {
                @include relativeHeight(452, 150);

            }

            .block:nth-child(n + 5) & {
                margin-top: rem(75);
            }

            @for $i from 1 through 9 {
                .block:nth-child(#{$i}) & {
                    background-image: url('~/assets/img/section-6/bg-#{$i}.png');
                    background-size: contain;
                    background-repeat: no-repeat;

                    @include mobile {
                        background-image: url('~/assets/img/section-6/bg-#{$i}-mobile.png');
                    }
                }
            }

            &Icon {
                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                top: 0;
                left: 50%;
                right: 50%;
                width: rem(120);
                height: rem(120);
                background-color: #fff;
                border-radius: 100%;
                z-index: 1;
                transform: translate(-50%, -50%);

                @include mobile {
                    width: rem(80);
                    height: rem(80);
                }

                img {
                    width: rem(70);
                    height: rem(70);

                    @include mobile {
                        width: rem(42);
                        height: rem(42);
                    }
                }
            }

            &Text {
                position: absolute;
                width: 100%;
                bottom: rem(32);
                left: 0;
                right: 0;
                font-size: rem(22);
                line-height: rem(32);
                font-weight: $fw-bold;
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;

                @include mobile {
                    height: rem(78) !important;
                    bottom: rem(16) !important;
                    font-size: rem(16);
                    line-height: rem(26);
                }
            }
        }

        &Bottom {
            @include rainbow-block(top);

            margin-top: rem(10);
            padding: rem(20);
            height: rem(90);
            font-size: rem(17);
            font-weight: $fw-medium;
            text-align: center;

            @include mobile {
                padding: rem(15) rem(20);
                height: rem(96) !important;
                font-size: rem(15);
            }

            .block:nth-child(-n+4) & {
                height: rem(115);
            }
        }
    }

    .paginationWrapper {
        position: relative;
        margin-top: rem(20);
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

    .caption {
        margin-top: rem(40);
        font-size: rem(16);

        @include mobile {
            margin-top:  rem(20);
            font-size: rem(14);
        }
    }
</style>
