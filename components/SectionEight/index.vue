<template>
    <div :class="[$style.section, 'black']" data-id="lipidogram">
        <h3 :class="$style.title">
            <span class="pink">Основные</span> показатели липидограммы <sup>1,11</sup>
        </h3>
        <div :class="$style.description">
            <span>Всем лицам старше 40 лет рекомендуется скрининг,</span> включающий в себя оценку липидного профиля с целью стратификации <span>сердечно-сосудистого риска по шкале SCORE2 <sup>1,11</sup></span>
        </div>
        <div :class="[$style.content, {[$style.isShowMore]: isShowMore}]">
            <div :class="$style.columns">
                <div :class="$style.column">
                    <div :class="$style.block">
                        <span class="pink">ХС ЛНП</span> – главный показатель оценки сердечно-сосудистого риска у всех пациентов старше 40 лет. Как правило, уровень ХС ЛНП рассчитывается автоматически по формуле Фридвальда, которая имеет ограничения при ТГ более 4,5 ммоль/л, в таких случаях следует проводить определение концентрации ХС ЛНП прямым методом.
                    </div>
                    <div :class="$style.block">
                        <span class="pink">ХС ЛВП</span> – рекомендовано определять всем пациентам для дополнительной оценки риска в системе SCORE2.
                    </div>
                    <div :class="$style.block">
                        Пациентам высокого/очень высокого риска рекомендуется, кроме уровня ХС ЛНП, <span class="pink">рассчитать ХС неЛВП в крови</span>.
                    </div>
                </div>
                <div :class="$style.column">
                    <div :class="$style.block">
                        В случаях, когда трактовка сердечно-сосудистого риска вызывает затруднения, особенно у пациентов с гипертриглицеридемией, сахарным диабетом, ожирением, метаболическим синдромом, рекомендовано лабораторное исследование уровня атерогенного <span class="pink">аполипопротеина В100</span>.
                    </div>
                    <div :class="$style.block">
                        У пациентов с гипертриглицеридемией, СД, ожирением, метаболическим синдромом рекомендовано проводить лабораторную оценку <span class="pink">ХС неЛВП</span> — для более точной оценки сердечно-сосудистого риска.
                    </div>
                    <div :class="$style.block">
                        <span class="pink">Липопротеин (а)</span> в крови – рекомендовано измерить хотя бы раз в жизни у любого взрослого.
                    </div>
                </div>
            </div>
            <div :class="[$style.contentOverflow, 'onlyMobile']" />
            <div :class="[$style.caption, {[$style.isShowMore]: isShowMore}]">
                Пациентам с дислипидемией рекомендуется лабораторное исследование с определением уровня глюкозы, креатинина, мочевины, общего билирубина в крови, определение активности аланинаминотрансферазы (АЛТ), аспартатаминотрансферазы (АСТ), креатинфосфокиназы (КФК) в крови и общий (клинический) анализ крови.
            </div>
        </div>
        <ButtonAction
            :class="[$style.button, 'onlyMobile']"
            preset="black"
            :title="!isShowMore ? 'Показать полностью' : 'Скрыть'"
            @handleClick="isShowMore = !isShowMore"
        />
    </div>
</template>

<script>
import ButtonAction from '~/components/common/ButtonAction/index.vue'

export default {
    name: 'SectionEight',
    components: { ButtonAction },
    data: function () {
        return {
            isShowMore: false
        }
    }
}
</script>

<style module lang="scss">
    .section {
        @include wrapper;

        padding-top: rem(120);
        padding-bottom: rem(240);

        @include mobile {
            padding-top: rem(90);
            padding-bottom: rem(190);
        }
    }

    .title {
        @include title;

        width: calc(700 * 100% / 1440);
        font-weight: $fw-extraBold;

        @include mobile {
            width: 100%;
        }
    }

    .description {
        @include block-title;

        font-weight: $fw-regular;
        margin-top: rem(50);

        @include mobile {
            margin-top: rem(25);
        }

        span {
            font-weight: $fw-extraBold;
        }
    }

    .content {
        position: relative;

        @include mobile {
            height: rem(474);
            overflow: hidden;

            &.isShowMore {
                height: auto;
            }
        }

        &Overflow {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: rem(300);
            background: linear-gradient(to bottom, rgba(#fff, 0), #fff);

            .isShowMore & {
                opacity: 0;
            }
        }
    }

    .button {
        margin-top: rem(30);
    }

    .columns {
        display: flex;
        justify-content: space-between;
        margin-top: rem(40);

        @include mobile {
            margin-top: rem(30);
            flex-wrap: wrap;
        }
    }

    .column {
        width: calc(700 * 100% / 1440);

        @include mobile {
            width: 100%;
        }
    }

    .block {
        padding: rem(19) rem(29);
        font-size: rem(18);
        margin-top: rem(20);
        font-weight: $fw-medium;

        @include rainbow-block(bottom, 'full', true, false);

        @include mobile {
            padding: rem(19);
            font-size: rem(15);
            margin-top: 0;
            margin-bottom: rem(10);
        }

        &:first-child {
            margin-top: 0;
        }

        span {
            font-weight: $fw-bold;
        }
    }

    .caption {
        font-size: rem(18);
        margin-top: rem(30);
        font-weight: $fw-medium;

        @include mobile {
            display: none;
            font-size: rem(16);

            &.isShowMore {
                display: block;
            }
        }
    }
</style>
