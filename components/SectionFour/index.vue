<template>
    <div :class="$style.section">
        <div :class="$style.bg" />
        <div :class="$style.inner">
            <div :class="$style.stars">
                <img src="~/assets/img/section-4/stars.png">
            </div>
            <h3 :class="[$style.title, 'white', 'text-shadow-2']">
                Причины дислипидемий <sup>1,10</sup>
            </h3>
            <div :class="[$style.columns, 'white']">
                <div :class="[$style.column, {[$style.active]: showBlock[0]}]">
                    <div :class="$style.columnHeader">
                        <div :class="[$style.columnHeaderNumber, 'text-shadow-1']">
                            <div :class="$style.columnHeaderNumberBg" />
                            <div :class="$style.columnHeaderNumberText">
                                01
                            </div>
                        </div>
                        <div :class="$style.columnHeaderTitle">
                            Первичные (семейные) дислипидемии
                        </div>
                    </div>
                    <div :class="$style.columnContent">
                        <p>Первичные дислипидемии имеют генетическую природу, развиваются в результате аномалий генов, которые регулируют функции рецепторов, ферментов или транспортных белков, участвующих в липидном обмене. В этих случаях они проявляются как семейные (наследственные) нарушения липидного метаболизма и относятся к первичным моногенным ДЛП.</p>
                        <ul>
                            <li>Дефицит липопротеинлипазы</li>
                            <li>Дефицит Апо-Сll</li>
                            <li>Семейная гиперхолестеринемия</li>
                            <li>Семейная комбинированная гиперхолестеринемия</li>
                            <li>Семейная гиперлипопротеинемия 3-го типа</li>
                            <li>Семейная гипертриглицеридемия</li>
                        </ul>
                        <p>Семейная гиперхолестеринемия — это наиболее распространенное наследственное аутосомно-доминантное заболевание, обусловленное мутациями генов, кодирующие рецептор липопротеидов низкой плотности (ХС ЛНП), аполипопротеин В-100 (APOB) и профермента пропротеин-конвертаза субтилин / кексин типа 9 (PCSK9), сопровождающееся стойким повышением уровня ХС ЛНП и ранним развитием атеросклероза. Заболевание проявляется в виде двух форм: менее тяжелой гетерозиготной и более тяжелой гомозиготной.</p>
                    </div>
                    <div :class="[$style.columnContentOverflow, 'onlyMobile']" />
                    <div :class="[$style.columnMore, 'onlyMobile', 'pink']" @click="showMore(0)">
                        {{ !showBlock[0] ? 'Показать полностью' : 'Скрыть' }}
                    </div>
                </div>
                <div :class="[$style.column, {[$style.active]: showBlock[1]}]">
                    <div :class="$style.columnHeader">
                        <div :class="[$style.columnHeaderNumber, 'text-shadow-1']">
                            <div :class="$style.columnHeaderNumberBg" />
                            <div :class="$style.columnHeaderNumberText">
                                02
                            </div>
                        </div>
                        <div :class="$style.columnHeaderTitle">
                            Вторичные дислипидемии
                        </div>
                    </div>
                    <div :class="[$style.columnContent, {[$style.active]: showBlock[1]}]">
                        <p>Вторичные дислипидемии возникают на фоне метаболических изменений при ряде заболеваний. <span class="pink">До старта и перед коррекцией</span> уже проводимого лечения рекомендовано оценивать основные состояния, которые могут вызывать или усугублять дислипидемии:</p>
                        <ul>
                            <li>Избыточное употребление насыщенных жиров</li>
                            <li>Избыточное потребление простых углеводов</li>
                            <li>Избыточное употребление алкоголя</li>
                            <li>Ожирение</li>
                            <li>Сахарный диабет 1 и 2-го типа</li>
                            <li>Синдром по ликистозных яичников</li>
                            <li>Гипотиреоз</li>
                            <li>Хроническая почечная недостаточность/Нефротический синдром</li>
                            <li>Билиарный цирроз</li>
                            <li>Холестаз</li>
                            <li>Парапротеинемии</li>
                            <li>Неврогенная анорексия</li>
                            <li>Полицитемия</li>
                            <li>Синдром Кушинга</li>
                            <li>Беременность</li>
                            <li>Стресс</li>
                            <li>Аутоиммунные заболевания (СКВ)</li>
                            <li>Прием лекарств: оральные эстрогены, анаболические стероиды, ретиноиды, иммуносупрессанты, ингибиторы протеаз, тиазидные диуретики, антипсихотические препараты, циклоспорин.</li>
                        </ul>
                    </div>
                    <div :class="[$style.columnContentOverflow, 'onlyMobile']" />
                    <div :class="[$style.columnMore, 'onlyMobile', 'blue']" @click="showMore(1)">
                        {{ !showBlock[1] ? 'Показать полностью' : 'Скрыть' }}
                    </div>
                </div>
            </div>
            <div :class="[$style.secondTitle, 'white']">
                <span class="pink">Причины изменения</span><br>
                показателей липидного профиля <sup>1,10</sup>
            </div>
            <div :class="[$style.tableWrapper, 'mobileScrollBlock']">
                <div :class="$style.table">
                    <img src="~/assets/img/section-4/table.png">
                </div>
            </div>
            <div :class="[$style.iconSwipe, 'iconSwipe']">
                <IconSwipeLeft />
            </div>
            <div :class="[$style.caption, 'white']">
                Примечание:<br>
                НАЖБП – Неалкогольная жировая болезнь печени; ЛПНП – СД – сахарный диабет; СПКЯ – синдром поликистозных яичников; ХБП – хроническая болезнь почек; ХС ЛВП – холестерин липопротеинов высокой плотности; ХС ЛНП – холестерин липопротеинов низкой плотности; ↑ – повышение уровня показателя.
            </div>
            <div :class="[$style.heart, 'onlyDesktop']">
                <img src="~/assets/img/section-4/heart.png">
            </div>
        </div>
    </div>
</template>

<script>
import IconSwipeLeft from '~/assets/svg/icon-swipe-left.svg'

export default {
    name: 'SectionFour',
    components: {
        IconSwipeLeft
    },
    data: function () {
        return {
            showBlock: [false, false]
        }
    },
    methods: {
        showMore (index) {
            const newShowBlock = [...this.showBlock]
            newShowBlock[index] = !newShowBlock[index]
            this.showBlock = [...newShowBlock]
        }
    }
}
</script>

<style module lang="scss">
    .section {
        position: relative;
        overflow-x: clip;

        @include block-rounded-top;
        @include block-rounded-bottom;
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

    .stars {
        position: absolute;
        top: rem(808);
        right: rem(-182); // плюс 86px границы картинки
        width: rem(820);
        z-index: -1;

        @include relativeHeight(820, 809);

        @include mobile {
            top: 37%;
            right: rem(-166); // плюс 86px границы картинки
            width: rem(412);
        }

        img {
            @include absoluteCoverImg();
        }
    }

    .inner {
        @include wrapper;

        position: relative;
        padding-top: rem(72);
        z-index: 2;

        @include mobile {
            padding-top: 0;
        }
    }

    .title {
        @include title;
    }

    .columns {
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        margin-top: rem(50);

        @include mobile {
            margin-top: rem(30);
            flex-wrap: wrap;
        }
    }

    .column {
        width: calc(700 * 100% / 1440);
        background-color: rgba(#fff, 0.1);
        border-radius: rem(30);
        border: 1px solid rgba(#fff, 0.3);
        box-shadow: 0 rem(20) rem(80) rem(-20) rgba(#000, 0.6);
        padding: rem(30) rem(30) rem(40);
        backdrop-filter: blur(25px);

        @include mobile {
            width: 100%;
            border-radius: rem(20);
            overflow: hidden;
            padding: rem(20) rem(20) rem(30);
            box-shadow: 0 rem(30) rem(30) rem(-20) rgba(#000, 0.6);
        }

        &:first-child {
            li::marker {
                color: $c-pink;
            }
        }

        &:last-child {
            .columnHeaderNumberBg {
                left: auto;
                right: 0;
            }

            li::marker {
                color: $c-blue;
            }

            @include mobile {
                margin-top: rem(20);
            }
        }

        &Header {
            display: flex;
            align-items: center;

            &Number {
                @include block-title;

                flex: 0 0 auto;
                position: relative;
                border-radius: rem(25);
                border: 1px solid rgba(#fff, 0.5);
                overflow: hidden;
                padding: rem(37) rem(41) rem(41);
                font-weight: $fw-bold;

                @include mobile {
                    border-radius: rem(15);
                    font-size: rem(20);
                    line-height: rem(30);
                    padding: rem(13) rem(18) rem(17);
                }

                &Bg {
                    position: absolute;
                    width: 200%;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    background: lg-rainbow();
                    z-index: 1;
                }

                &Text {
                    position: relative;
                    z-index: 2;
                }
            }

            &Title {
                @include block-title;

                position: relative;
                margin-left: rem(40);
                font-weight: $fw-bold;

                @include mobile {
                    margin-left: rem(20);
                }
            }
        }

        &Content {
            position: relative;
            margin-top: rem(30);
            font-weight: $fw-medium;
            font-size: rem(17);

            @include mobile {
                font-size: rem(15);
                margin-top: rem(20);
                height: rem(175);
                overflow: hidden;
                text-overflow: ellipsis;

                .active & {
                    height: auto;
                }
            }

            &Overflow {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(to bottom, rgba(#1A366A, 0) 40%, rgba(#1A3260, 1) 80%);
                pointer-events: none;
                z-index: 4;

                .active & {
                    opacity: 0;
                }
            }

            span {
                font-weight: $fw-bold;
            }

            ul {
                margin: rem(15) 0 rem(30);

                @include ul();

                @include mobile {
                    margin: rem(10) 0 rem(20);
                }
            }
        }

        &More {
            @include mobile {
                @include moreButton;

                margin-top: rem(12);
            }
        }
    }

    .secondTitle {
        @include title;

        margin-top: rem(120);

        @include mobile {
            margin-top: rem(90);
        }
    }

    .tableWrapper {
        margin-top: rem(60);

        @include mobile {
            margin-top: rem(20);
        }
    }

    .table {
        @include mobile {
            width: rem(913);
        }
    }

    .iconSwipe {
        @include mobile {
            margin-top: rem(30);
        }
    }

    .caption {
        width: calc(1315 * 100% / 1440);
        margin-top: rem(30);
        font-size: rem(16);

        @include mobile {
            width: 100%;
            font-size: rem(12);
            margin-top: rem(0);
        }
    }

    .heart {
        width: rem(231);
        position: absolute;
        right: rem(-36); // минус padding-right
        bottom: rem(-106);

        @include relativeHeight(231, 247);

        img {
            @include absoluteCoverImg(contain);
        }
    }
</style>
