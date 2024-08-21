<template>
    <div :class="$style.section">
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
                <div :class="$style.blockTopItems">
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
                    <div :class="$style.blockBottomItem">
                        <div :class="$style.blockBottomItemText">
                            Смертности<br>
                            от&nbsp;всех&nbsp;причин&nbsp;на
                        </div>
                        <div :class="$style.blockBottomItemIcon">
                            <img src="~/assets/img/section-12/block-2/icon-1.png">
                        </div>
                    </div>
                    <div :class="$style.blockBottomItem">
                        <div :class="$style.blockBottomItemText">
                            Крупных сердечно-сосудистых событий&nbsp;на
                        </div>
                        <div :class="$style.blockBottomItemIcon">
                            <img src="~/assets/img/section-12/block-2/icon-2.png">
                        </div>
                    </div>
                    <div :class="$style.blockBottomItem">
                        <div :class="$style.blockBottomItemText">
                            Нефатальных и фатальных коронарных осложнений&nbsp;на
                        </div>
                        <div :class="$style.blockBottomItemIcon">
                            <img src="~/assets/img/section-12/block-2/icon-3.png">
                        </div>
                    </div>
                    <div :class="$style.blockBottomItem">
                        <div :class="$style.blockBottomItemText">
                            Инсульта&nbsp;на
                        </div>
                        <div :class="$style.blockBottomItemIcon">
                            <img src="~/assets/img/section-12/block-2/icon-4.png">
                        </div>
                    </div>
                </div>
            </div>
            <div :class="$style.man">
                <img src="~/assets/img/section-12/man.png">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SectionTwelve'
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
    }

    .man {
        position: absolute;
        bottom: 0;
        right: rem(-394);
        width: rem(1063);
        z-index: 3;
    }

    .wrapper {
        @include wrapper;

        position: relative;
        padding-top: rem(122);
        padding-bottom: rem(223);
        z-index: 3;
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

        &Title {
            @include block-title;

            text-align: center;
        }

        &Top {
            padding: rem(50) rem(52) rem(50) rem(12);

            &Items {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
            }

            &Item {
                margin-top: rem(30);
                width: 50%;
                display: flex;
                align-items: start;

                &Img {
                    flex: 0 0 auto;
                    position: relative;
                    width: rem(246);

                    @include relativeHeight(246, 180);

                    img {
                        @include absoluteCoverImg(contain);
                    }
                }

                &Content {
                    margin-left: rem(40);

                    &Title {
                        margin-top: rem(50);
                        font-size: rem(24);
                        line-height: rem(34);
                        font-weight: $fw-bold;
                    }

                    &Text {
                        margin-top: rem(20);
                        font-size: rem(18);
                        font-weight: $fw-medium;
                    }
                }
            }
        }

        &Bottom {
            padding: rem(50) rem(50) 0;

            &Text {
                margin-top: rem(30);
                font-size: rem(18);
                line-height: rem(28);
                font-weight: $fw-medium;
                text-align: center;
            }

            &Items {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                margin-top: rem(40);
                margin-bottom: rem(-103);

                &Title {
                    margin-top: rem(40);
                    font-size: rem(22);
                    line-height: rem(32);
                    font-weight: $fw-bold;
                    text-align: center;
                }
            }

            &Item {
                width: rem(329);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: flex-end;

                &Text {
                    font-size: rem(18);
                    line-height: rem(28);
                    font-weight: $fw-medium;
                    text-align: center;
                }

                &Icon {
                    flex: 0 0 auto;
                    width: 100%;
                }
            }
        }
    }
</style>
