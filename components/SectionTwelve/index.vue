<template>
    <div :class="$style.section" data-id="treatment">
        <div :class="$style.bg" />
        <div :class="$style.bgBottom">
            <img src="~/assets/img/section-12/bg-bottom.png">
        </div>
        <div :class="[$style.wrapper, 'white']">
            <div :class="$style.bgStars">
                <img src="~/assets/img/section-12/bg-stars.png">
            </div>
            <div :class="$style.title">
                Принципы лечения дислипидемий <sup>1,10,11,15</sup>
            </div>
            <div :class="[$style.block, $style.blockTop]">
                <div :class="$style.blockTitle">
                    Основа немедикаментозных вмешательств – <span class="pink">модификация образа жизни</span> <sup>1, 10, 11, 15</sup>
                </div>
                <div :class="[$style.blockTopItems, {[$style.active]: isShow}]">
                    <div :class="$style.blockTopItem">
                        <div :class="$style.blockTopItemImg">
                            <img src="~/assets/img/section-12/block-1/icon-1.png">
                        </div>
                        <div :class="$style.blockTopItemContent">
                            <div :class="$style.blockTopItemContentTitle">
                                Отказ от вредных привычек
                            </div>
                            <div :class="$style.blockTopItemContentText">
                                или снижение потребления алкоголя и курения
                            </div>
                        </div>
                    </div>
                    <div :class="$style.blockTopItem">
                        <div :class="$style.blockTopItemImg">
                            <img src="~/assets/img/section-12/block-1/icon-2.png">
                        </div>
                        <div :class="$style.blockTopItemContent">
                            <div :class="$style.blockTopItemContentTitle">
                                Физические нагрузки
                            </div>
                            <div :class="$style.blockTopItemContentText">
                                Минимум 150 минут кардионагрузки в неделю, поделённой на занятия интервалами не менее 45-60 минут и распределенные в течение недели
                            </div>
                        </div>
                    </div>
                    <div :class="$style.blockTopItem">
                        <div :class="$style.blockTopItemImg">
                            <img src="~/assets/img/section-12/block-1/icon-3.png">
                        </div>
                        <div :class="$style.blockTopItemContent">
                            <div :class="$style.blockTopItemContentTitle">
                                Диета
                            </div>
                            <div :class="$style.blockTopItemContentText">
                                С  высоким уровнем употребления фруктов, овощей, цельнозерновых злаков и  клетчатки, орехов, рыбы, птицы и  молочных продуктов с  низким содержанием жира и  ограниченным потреблением сладостей, сладких напитков и  красного мяса. Рекомендуется использовать жиры растительных масел
                            </div>
                        </div>
                    </div>
                    <div :class="$style.blockTopItem">
                        <div :class="$style.blockTopItemImg">
                            <img src="~/assets/img/section-12/block-1/icon-4.png">
                        </div>
                        <div :class="$style.blockTopItemContent">
                            <div :class="$style.blockTopItemContentTitle">
                                Снижение массы тела
                            </div>
                            <div :class="$style.blockTopItemContentText">
                                Рекомендовано достижение индекса массы тела(ИМТ) 20 - 25 кг / м<sup>2</sup>, окружности талии
                                {{ '< 94 см(мужчины) и < 80 см(женщины)' }}
                            </div>
                        </div>
                    </div>
                </div>
                <div :class="[$style.blockMore, 'onlyMobile', 'blue']" @click="isShow = !isShow">
                    {{ !isShow ? 'Показать полностью' : 'Скрыть' }}
                </div>
            </div>
            <div :class="[$style.block, $style.blockBottom]">
                <div :class="$style.blockTitle">
                    <span class="pink">Основа медикаментозного лечения</span> – использование статинов <sup>1, 11</sup>
                </div>
                <div :class="[$style.blockBottomText, 'text-shadow-2']">
                    Согласно действующим международным и национальным клиническим рекомендациям по нарушениям липидного обмена статины или ингибиторы 3-гидрокси-3-метилглютарил-кофермента А редуктазы (ГМГ-КоА-редуктазы) – препараты первой линии при лечении дислипидемии. 1, 2 Это хорошо изученный в многочисленных рандомизированных клинических исследованиях класс гиполипидемических препаратов, способных кардинально менять течение сердечно-сосудистых заболеваний, снижая риск сердечно-сосудистой и общей смертности.<br>
                    Механизм действия статинов заключается в конкурентном ингибировании печеночного фермента ГМГ-КоА-редуктазы, участвующего в образовании мевалоната на начальном этапе, что в последствии снижает синтез холестерина. <sup>1, 11, 23-28</sup>
                </div>
                <div :class="[$style.blockBottomItemsTitle, 'text-shadow-2']">
                    В течение 1 года при снижении уровня ХС ЛНП на <span class="pink">1 ммоль/л</span> связано со снижением частоты <sup>23</sup> :
                </div>
                <div :class="[$style.blockBottomItems, 'text-shadow-2']">
                    <VueHorizontal ref="horizontal" :class="$style.horizontal" :button="false" snap="center" @scroll-debounce="onScrollDebounce">
                        <div :class="$style.blockBottomItem">
                            <div :class="$style.blockBottomItemInner">
                                <div :class="$style.blockBottomItemText">
                                    Смертности<br>
                                    от&nbsp;всех&nbsp;причин&nbsp;на
                                </div>
                                <div :class="$style.blockBottomItemIcon">
                                    <img src="~/assets/img/section-12/block-2/icon-1.png">
                                </div>
                            </div>
                        </div>
                        <div :class="$style.blockBottomItem">
                            <div :class="$style.blockBottomItemInner">
                                <div :class="$style.blockBottomItemText">
                                    Крупных сердечно-сосудистых событий&nbsp;на
                                </div>
                                <div :class="$style.blockBottomItemIcon">
                                    <img src="~/assets/img/section-12/block-2/icon-2.png">
                                </div>
                            </div>
                        </div>
                        <div :class="$style.blockBottomItem">
                            <div :class="$style.blockBottomItemInner">
                                <div :class="$style.blockBottomItemText">
                                    Нефатальных и фатальных коронарных осложнений&nbsp;на
                                </div>
                                <div :class="$style.blockBottomItemIcon">
                                    <img src="~/assets/img/section-12/block-2/icon-3.png">
                                </div>
                            </div>
                        </div>
                        <div :class="$style.blockBottomItem">
                            <div :class="$style.blockBottomItemInner">
                                <div :class="$style.blockBottomItemText">
                                    Инсульта&nbsp;на
                                </div>
                                <div :class="$style.blockBottomItemIcon">
                                    <img src="~/assets/img/section-12/block-2/icon-4.png">
                                </div>
                            </div>
                        </div>
                    </VueHorizontal>
                    <div :class="['paginationWrapper', 'onlyMobile']">
                        <SliderPagination
                            class="pagination"
                            :count="count"
                            :index="index"
                            @onPageClick="onPageClick"
                        />
                        <IconSwipeLeft />
                    </div>
                </div>
            </div>
            <div :class="$style.man">
                <img class="onlyDesktop" src="~/assets/img/section-12/man.png">
                <img class="onlyMobile" src="~/assets/img/section-12/man-mobile.png">
            </div>
        </div>
    </div>
</template>

<script>
import VueHorizontal from 'vue-horizontal'
import IconSwipeLeft from '~/assets/svg/icon-swipe-left.svg'
import SliderPagination from '~/components/common/SliderPagination/index.vue'
import pagination from '~/mixins/pagination'

export default {
    name: 'SectionTwelve',
    components: {
        VueHorizontal,
        IconSwipeLeft,
        SliderPagination
    },
    mixins: [pagination],
    data: function () {
        return {
            isShow: false,
            count: 4
        }
    }
}
</script>

<style module lang="scss">
    .section {
        position: relative;
        overflow-x: clip;

        @include block-rounded-top(-47);
    }

    .bg {
        @include section-gradient-bg;

        position: absolute;
        z-index: 2;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
    }

    .bgStars {
        position: absolute;
        top: rem(-35);
        right: rem(-325);
        width: rem(932);
        z-index: -1;

        @include mobile {
            right: rem(-400);
        }
    }

    .bgBottom {
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 2;
        overflow: hidden;
        height: rem(1120);

        @include mobile {
            height: rem(1000);
        }

        img {
            @include mobile {
                @include absoluteCoverImg();
            }
        }
    }

    .man {
        position: absolute;
        bottom: 0;
        right: rem(-394);
        width: rem(1063);
        z-index: 3;
        pointer-events: none;

        @include mobile {
            width: rem(351);
            left: 0;
            right: 0;
        }
    }

    .wrapper {
        @include wrapper;

        position: relative;
        padding-top: rem(122);
        padding-bottom: rem(223);
        z-index: 3;

        @include mobile {
            padding-top: 0;
        }
    }

    .title {
        @include title;
    }

    .block {
        position: relative;
        left: 50%;
        right: 50%;
        width: calc(1540 * 100% / 1440);
        margin-top: rem(50);
        border-radius: rem(30);
        backdrop-filter: blur(25px);
        background: rgba(#fff ,0.1);
        border: 1px solid rgba(#fff, 0.3);
        transform: translate(-50%, 0);

        @include mobile {
            margin-top: rem(20);
            width: 100%;
            border-radius: rem(20);

            &:first-child {
                margin-top: rem(30);
            }
        }

        &Title {
            @include block-title;

            text-align: center;
        }

        &Top {
            padding: rem(50) rem(52) rem(50) rem(12);

            @include mobile {
                padding: rem(20) rem(20) rem(30);
            }

            &Items {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;

                @include mobile {
                    margin-top: 0;
                    justify-content: flex-start;
                }
            }

            &Item {
                margin-top: rem(30);
                width: 50%;
                display: flex;
                align-items: start;

                @include mobile {
                    margin-top: rem(20);
                    width: 100%;
                    flex-direction: column;
                    align-items: center;
                    display: none;

                    .active & {
                        display: flex;
                    }

                    &:first-child {
                        margin-top: 0;
                        display: flex;
                    }
                }

                &Img {
                    flex: 0 0 auto;
                    position: relative;
                    width: rem(246);

                    @include mobile {
                        width: rem(123);
                        margin-left: rem(-23);
                    }

                    @include relativeHeight(246, 180);

                    img {
                        @include absoluteCoverImg(contain);
                    }
                }

                &Content {
                    margin-left: rem(40);

                    @include mobile {
                        margin-top: rem(20);
                        margin-left: 0;
                    }

                    &Title {
                        margin-top: rem(50);
                        font-size: rem(24);
                        line-height: rem(34);
                        font-weight: $fw-bold;

                        @include mobile {
                            margin-top: 0;
                            font-size: rem(18);
                            line-height: rem(28);
                            text-align: center;
                        }
                    }

                    &Text {
                        margin-top: rem(20);
                        font-size: rem(18);
                        font-weight: $fw-medium;

                        @include mobile {
                            margin-top: rem(10);
                            font-size: rem(15);
                            text-align: center;
                        }
                    }
                }
            }
        }

        &Bottom {
            padding: rem(50) rem(50) 0;

            @include mobile {
                padding: rem(20) rem(20) rem(30);
            }

            &Text {
                margin-top: rem(30);
                font-size: rem(18);
                line-height: rem(28);
                font-weight: $fw-medium;
                text-align: center;

                @include mobile {
                    margin-top: rem(20);
                    font-size: rem(15);
                    line-height: rem(24);
                }
            }

            &Items {
                margin-top: rem(40);
                margin-bottom: rem(-103);

                @include mobile {
                    margin-top: rem(25);
                    margin-bottom: rem(-160);
                    width: rem(344);
                    margin-left: rem(-20);
                }

                &Title {
                    margin-top: rem(40);
                    font-size: rem(22);
                    line-height: rem(32);
                    font-weight: $fw-bold;
                    text-align: center;

                    @include mobile {
                        font-size: rem(18);
                        line-height: rem(28);
                    }
                }
            }

            &Item {
                width: rem(329);

                @include mobile {
                    width: rem(345);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                &Inner {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: flex-end;

                    @include mobile {
                        width: rem(210);
                    }
                }

                &Text {
                    font-size: rem(18);
                    line-height: rem(28);
                    font-weight: $fw-medium;
                    text-align: center;

                    @include mobile {
                        font-size: rem(16);
                        line-height: rem(26);
                    }
                }

                &Icon {
                    flex: 0 0 auto;
                    width: 100%;
                }
            }
        }

        &More {
            @include moreButton;

            margin-top: rem(20);
            text-align: center;
        }
    }
</style>

<style scoped>
    ::v-deep .v-hl-container {
        align-items: flex-end;
    }
</style>
