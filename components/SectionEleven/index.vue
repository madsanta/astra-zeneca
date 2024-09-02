<template>
    <div :class="[$style.section, 'black']" data-id="instrumental-methods">
        <div :class="$style.title">
            Инструментальные методы диагностики <sup>1</sup>
        </div>
        <div :class="$style.items">
            <div
                :class="[$style.item, {[$style.active]: tabs[0]}]"
                @click="clickTab(0)"
            >
                <div :class="$style.itemHeader">
                    <div :class="$style.itemHeaderText">
                        Дуплексное сканирование экстракраниальных отделов брахиоцефальных артерий
                    </div>
                    <div :class="$style.itemHeaderIcon">
                        <div :class="$style.itemHeaderIconLine" />
                        <div :class="$style.itemHeaderIconLine" />
                    </div>
                </div>
                <div v-show="tabs[0]" :class="$style.itemContent">
                    <div :class="$style.itemContentLine" />
                    <ul>
                        <li>Исследование сонных артерий не рекомендовано в рутинной практике при отсутствии специальных показаний (например, наличия шума в проекции сонных артерий, транзиторной ишемической атаки (ТИА) или цереброваскулярной болезни (ЦВБ) в анамнезе, а также в качестве обследования пациента с признаками поражения сосудов).</li>
                        <li>Наличие атеросклеротической бляшка в сонной артерии по данным дуплексного сканирования может являться основанием для перевода пациента в категорию более высокого риска.</li>
                        <li>Оценка толщины комплекса интима-медиа (КИМ): наличие бляшки может быть диагностировано при толщине КИМ ≥1,5 мм или при наличии локального увеличения толщины на 0,5 мм или на 50% по сравнению с окружающей толщиной КИМ. В настоящее время нет убедительных данных о целесообразности использования параметра КИМ в клинической практике для оценки СС риска при СГХС или эффективности терапии, но этот параметр может быть полезен с научной точки зрения.<sup>19, 20</sup></li>
                        <li>Наличие стенозирующией бляшки в сонных артериях является мощными предикторами развития инсульта и инфаркта миокарда, независимо от присутствия традиционных факторов сердечно-сосудистого риска, а также обладает более отчетливым прогностическим эффектом в отношении развития ИМ в будущем, чем толщина КИМ.<sup>21, 22</sup></li>
                    </ul>
                </div>
            </div>
            <div
                :class="[$style.item, {[$style.active]: tabs[1]}]"
                @click="clickTab(1)"
            >
                <div :class="$style.itemHeader">
                    <div :class="$style.itemHeaderText">
                        УЗИ артерий нижних конечностей <sup>1</sup>
                    </div>
                    <div :class="$style.itemHeaderIcon">
                        <div :class="$style.itemHeaderIconLine" />
                        <div :class="$style.itemHeaderIconLine" />
                    </div>
                </div>
                <div v-show="tabs[1]" :class="$style.itemContent">
                    <div :class="$style.itemContentLine" />
                    <p>Наличие атеросклеротической бляшки в бедренной артерии по данным дуплексного сканирования может являться основанием для перевода пациента в категорию более высокого риска.</p>
                </div>
            </div>
            <div
                :class="[$style.item, {[$style.active]: tabs[2]}]"
                @click="clickTab(2)"
            >
                <div :class="$style.itemHeader">
                    <div :class="$style.itemHeaderText">
                        Визуализация коронарных артерий с помощью компьютерной томографии (КТ) <sup>1</sup>
                    </div>
                    <div :class="$style.itemHeaderIcon">
                        <div :class="$style.itemHeaderIconLine" />
                        <div :class="$style.itemHeaderIconLine" />
                    </div>
                </div>
                <div v-show="tabs[2]" :class="$style.itemContent">
                    <div :class="$style.itemContentLine" />
                    <ul>
                        <li>КТ-ангиография имеет высокую чувствительность 95-99% и специфичность 64-83% для диагностики ИБС.</li>
                        <li>Для скрининга атеросклероза коронарных артерий может использоваться кальциевый индекс (КИ), определяемый при КТ по Agatston.</li>
                        <li>У пациентов с коронарным атеросклерозом и значением КИ >100 единиц по данным КТ сердца рекомендовано реклассифицировать категорию риска от низкого и умеренного до высокого с целью эффективной коррекции ФР.</li>
                        <li>При этом КИ имеет низкую специфичность у&nbsp;пациентов моложе 45 лет с&nbsp;тяжелой СГХС, включая гомозиготную СГХС.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SectionEleven',
    data: function () {
        return {
            activeTabs: [false, false, false]
        }
    },
    computed: {
        tabs () {
            return this.activeTabs
        }
    },
    methods: {
        clickTab (activeTab) {
            this.activeTabs[activeTab] = !this.activeTabs[activeTab]
            this.activeTabs = [...this.activeTabs]
        }
    }
}
</script>

<style module lang="scss">
    .section {
        @include wrapper;

        position: relative;
        padding-top: rem(120);
        padding-bottom: rem(160);

        @include mobile {
            padding-top: rem(90);
            //padding-bottom: rem(200); // Правильный отступ при всех блоках
            padding-bottom: rem(50);
        }
    }

    .title {
        @include title;

        font-weight: $fw-extraBold;
        width: calc(700 * 100% / 1440);

        @include mobile {
            width: 100%;
        }
    }

    .items {
        margin-top: rem(60);

        @include mobile {
            margin-top: rem(30);
        }
    }

    .item {
        position: relative;
        padding: rem(27) rem(30);
        cursor: pointer;
        margin-top: rem(20);
        transition: box-shadow 0.2s;

        @include rainbow-block(top);

        overflow: visible;

        @include rainbow-shadow();

        @include mobile {
            padding: rem(20);
            margin-top: rem(10);
        }

        &:first-child {
            margin-top: 0;
        }

        &::before {
            opacity: 0;
            transition: opacity 0.2s;
        }

        @include desktop {
            &:hover {
                box-shadow: none;

                &::before {
                    opacity: 1;
                }
            }
        }

        &Header {
            display: flex;
            justify-content: space-between;
            align-items: center;

            @include mobile {
                align-items: flex-start;
            }

            &Text {
                font-size: rem(24);
                line-height: rem(34);
                font-weight: $fw-bold;
                margin-right: rem(15);
                letter-spacing: 0;

                @include mobile {
                    font-size: rem(18);
                    line-height: rem(28);
                    margin-right: rem(10);
                }
            }

            &Icon {
                flex: 0 0 auto;
                position: relative;
                border: 1px solid $c-blackBlue;
                border-radius: 100%;
                width: rem(40);
                height: rem(40);
                transition: background-color 0.2s, border-color 0.2s;

                &Line {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 9px;
                    height: 1px;
                    border-radius: 20px;
                    background-color: $c-blackBlue;
                    transition: background-color 0.2s, transform 0.2s;

                    &:first-child {
                        margin-left: -3px;
                        transform: translate(-50%, -50%) rotate(45deg);
                    }

                    &:last-child {
                        margin-left: 3px;
                        transform: translate(-50%, -50%) rotate(-45deg);
                    }
                }
            }
        }

        &.active {
            .item {
                &HeaderIcon {
                    @include desktop {
                        background-color: $c-pink;
                        border-color: $c-pink;
                    }

                    &Line {
                        @include desktop {
                            background-color: #fff;
                        }

                        &:first-child {
                            transform: translate(-50%, -50%) rotate(-45deg);
                        }

                        &:last-child {
                            transform: translate(-50%, -50%) rotate(45deg);
                        }
                    }
                }
            }
        }

        &Content {
            margin-top: rem(30);
            font-size: rem(17);
            font-weight: $fw-medium;
            padding-bottom: rem(3);
            letter-spacing: 0;

            @include mobile {
                margin-top: rem(20);
                font-size: rem(15);
                padding-bottom: 0;
            }

            &Line {
                height: 1px;
                margin-bottom: rem(30);
                background: lg-rainbow();

                @include mobile {
                    margin-top: rem(20);
                }
            }

            ul {
                @include ul;
            }
        }
    }
</style>
