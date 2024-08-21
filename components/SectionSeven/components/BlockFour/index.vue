<template>
    <div :class="$style.block">
        <div :class="[$style.title, 'pink', 'text-shadow-2']">
            Измерение лодыжечно-плечевого индекса (ЛПИ)
        </div>
        <div :class="[$style.description, 'white', 'text-shadow-2']">
            Это неинвазивный метод для диагностики и мониторинга заболевания артерий нижней конечности (ЗАНК). ЛПИ является чувствительным показателем генерализованного поражения атеросклерозом и&nbsp;маркером сердечно-сосудистый риска.<sup>15</sup>
        </div>
        <div :class="$style.steps">
            <div
                :class="[$style.step, {[$style.active]: activeTab === 1}, 'text-shadow-1']"
                @click="clickTab(1)"
            >
                Шаг I
            </div>
            <div
                :class="[$style.step, {[$style.active]: activeTab === 2}, 'text-shadow-1']"
                @click="clickTab(2)"
            >
                Шаг II
            </div>
            <div
                :class="[$style.step, {[$style.active]: activeTab === 3}, 'text-shadow-1']"
                @click="clickTab(3)"
            >
                Шаг III
            </div>
        </div>
        <div :class="$style.items">
            <div v-show="activeTab === 1" :class="[$style.item, 'white']">
                <div :class="[$style.itemTitle, 'text-shadow-2']">
                    I. Кому показано данное обследование в клинической практике?
                </div>
                <div :class="$style.itemContent">
                    <div :class="[$style.itemUlTitle, 'text-shadow-2']">
                        1. Пациенты с клиническими признаками ЗАНК:
                    </div>
                    <ul>
                        <li>Отсутствие пульса в&nbsp;нижней конечности и/или артериальный шум</li>
                        <li>Наличие типичной перемежающейся хромоты или косвенные признаки ЗАНК</li>
                        <li>Незаживающая рана на&nbsp;нижней конечности</li>
                    </ul>
                    <div :class="[$style.itemUlTitle, 'text-shadow-2']">
                        2. Пациенты с&nbsp;риском ЗАНК по&nbsp;следующим клиническим признакам:
                    </div>
                    <ul>
                        <li>Атеросклеротическое поражение сосудов: КБС, одна из форм ЗПА</li>
                        <li>Другие поражения: АБА, ХЗП, СН</li>
                    </ul>
                    <div :class="[$style.itemUlTitle, 'text-shadow-2']">
                        3. Бессимптомные случаи заболеваний без клинической картины, но с риском ЗАНК:
                    </div>
                    <ul>
                        <li>Мужчины и&nbsp;женщины в&nbsp;возрасте >65 лет</li>
                        <li>
                            {{
                                'Мужчины и&nbsp;женщины в&nbsp;возрасте < 65 лет, но&nbsp;в&nbsp;группе высокого риска в&nbsp;соответствии                                    Рекомендациями ЕОКа'
                            }}
                        </li>
                        <li>Мужчины и&nbsp;женщины в&nbsp;возрасте >50 лет с&nbsp;ЗАНК в&nbsp;семейном анамнезе</li>
                    </ul>
                </div>
            </div>
            <div v-show="activeTab === 2" :class="[$style.item, 'white']">
                <div :class="[$style.itemTitle, 'text-shadow-2']">
                    II. Как определять ЛПИ?
                </div>
                <div :class="$style.itemContent">
                    <div :class="$style.itemImageWithText">
                        <div :class="$style['itemImageWithText-img']">
                            <img src="~/assets/img/section-7/block-4/step-2/image.jpg">
                        </div>
                        <div :class="[$style['itemImageWithText-text'], 'white', 'text-shadow-2']">
                            В положении супинации манжета накладывается сразу над лодыжкой, не&nbsp;касаясь при этом пораженных участков. Спустя 5-10 минут отдыха, САД измеряется допплеровским датчиком (5-10 МГц) на&nbsp;задней и&nbsp;передней большеберцовых (или тыльной) артериях каждой ноги и&nbsp;на&nbsp;плечевых артериях каждой руки. Автоматическая манжета в&nbsp;большинстве случаев не&nbsp;подходит для измерения давления на&nbsp;лодыжке и&nbsp;может давать завышенное значение. ЛПИ обеих нижних конечностей рассчитывается путем деления наивысшего значения САД на&nbsp;лодыжке на&nbsp;аналогичное на&nbsp;плече.
                        </div>
                    </div>
                </div>
            </div>
            <div v-show="activeTab === 3" :class="[$style.item, 'white']">
                <div :class="[$style.itemTitle, 'text-shadow-2']">
                    III. Как интерпретировать ЛПИ?
                </div>
                <div :class="$style.itemContent">
                    <ul>
                        <li>Для диагностики ЗАНК необходима оценка результатов для каждой нижней конечности по отдельности.</li>
                        <li>Для оценки сердечно-сосудистого риска применяют самый низкий из показателей.</li>
                        <li>Интерпретация слева направо:</li>
                    </ul>
                    <div :class="$style.itemImage">
                        <img src="~/assets/img/section-7/block-4/step-3/image.jpg">
                    </div>
                </div>
            </div>
        </div>
        <div :class="[$style.caption, 'white']">
            <span style="font-weight: 600;">Примечание:</span> <sup>а</sup> – субъекты со: значительно повышенным единичным фактором риска; сахарный диабет (кроме молодых людей с&nbsp;диабетом I типа и&nbsp;отсутствием других факторов риска); рассчитанный показатель ≥5% и&nbsp;{{ '<' }}10%.<br>
            <span style="font-weight: 600;">Сокращения:</span> АБА&nbsp;— аневризма брюшной аорты, ЕОК&nbsp;— Европейское общество кардиологов,<br>
            ЗАНК&nbsp;— заболевание артерий нижних конечностей, ЗПА&nbsp;— заболевание периферических артерий,<br>
            КБС&nbsp; — коронарная болезнь сердца, ЛПИ&nbsp; — лодыжечно-плечевой индекс, САД&nbsp; — систолическое артериальное давление, СН&nbsp;— сердечная недостаточность, ХЗП&nbsp;— хроническое заболевание почек.
        </div>
    </div>
</template>

<script>
export default {
    name: 'BlockFour',
    data: function () {
        return {
            activeTab: 1
        }
    },
    methods: {
        clickTab (activeTab) {
            if (activeTab === this.activeTab) {
                return null
            }

            this.activeTab = activeTab
        }
    }
}
</script>

<style module lang="scss">
    .block {
        width: 100%;
        padding-bottom: rem(20);
    }

    .title {
        @include block-title;
    }

    .description {
        font-size: rem(18);
        line-height: rem(28);
        font-weight: $fw-medium;
        margin-top: rem(25);
    }

    .steps {
        margin-top: rem(40);
        display: flex;
        align-items: center;
    }

    .step {
        border-radius: rem(20);
        border: 1px solid rgba(#fff, 0.4);
        padding: rem(9) rem(23) rem(11);
        background: rgba(#212121, 0.6);
        color: rgba(#fff, 0.6);
        text-align: center;
        font-size: rem(18);
        font-weight: $fw-bold;
        margin-right: rem(10);
        min-width: rem(100);
        backdrop-filter: blur(15px);
        cursor: pointer;
        box-shadow: inset 0 rem(4) rem(9) 0 rgba(#000, 0.55);
        transition: border-color 0.2s, background 0.2s, box-shadow 0.2s, color 0.2s;

        &:hover,
        &.active {
            box-shadow: none;
            background: lg-1();
            color: #fff;
            border-color: rgba(#fff, 0.5);
        }
    }

    .items {
        margin-toP: rem(25);
    }

    .item {

        &:nth-child(1) {
            width: calc(878 * 100% / 823);
            margin-bottom: rem(96);
        }

        &:nth-child(2) {
            width: calc(884 * 100% / 823);
            margin-bottom: rem(38);
        }

        &:nth-child(3) {
            margin-bottom: rem(69);
        }

        &Title {
            font-size: rem(22);
            line-height: rem(32);
            font-weight: $fw-extraBold;
        }

        &Content {
            font-size: rem(17);
            line-height: rem(27);
            margin-top: rem(20);
        }

        &Ul {
            &Title {
                font-weight: $fw-bold;

                & + ul {
                    margin-top: rem(10);
                }

                &:not(:first-child) {
                    margin-top: rem(20);
                }
            }
        }

        ul {
            @include ul();
        }

        &ImageWithText {
            padding-top: rem(5);
            display: flex;
            justify-content: space-between;
            align-items: center;

            &-img {
                position: relative;
                width: calc(454 * 100% / 884);
                overflow: hidden;
                border-radius: rem(30);

                @include relativeHeight(454, 400);

                img {
                    @include absoluteCoverImg();
                }
            }

            &-text {
                width: calc(390 * 100% / 884);
                font-size: rem(17);
                line-height: rem(27);
                font-weight: $fw-medium;
            }
        }

        &Image {
            position: relative;
            margin-top: rem(30);

            @include rainbow-block(null);
            @include relativeHeight(798, 237);

            img {
                @include absoluteCoverImg();
            }
        }
    }

    .caption {
        width: calc(863 * 100% / 823);
        font-size: rem(16);
        line-height: rem(20);
        color: #fff;
        opacity: 0.7;
    }
</style>
