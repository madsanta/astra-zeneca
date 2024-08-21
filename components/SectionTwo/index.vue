<template>
    <div :class="$style.section">
        <h3 :class="[$style.title, 'black']">
            <span class="pink">Цель</span> работы врача – <span class="pink">снижение</span> смертности от сердечно-сосудистых заболеваний <sup>1,9</sup>
        </h3>
        <div :class="[$style.description, 'black']">
            Со временем атеросклероз прогрессирует, приводя к клиническим проявлениям заболевания.
            Атеросклероз – <span class="pink">мультифакториальное</span> заболевание, в основе которого лежат сложные нарушения в биохимических, иммунологических и молекулярно-генетических процессах.<sup>1</sup>
        </div>
        <div :class="$style.image">
            <img src="~/assets/img/section-2/step-by-step-tube.jpg">
        </div>

        <ButtonAction :class="$style.button" :title="!isOpen ? 'Подробнее о патогенезе атеросклероза' : 'Скрыть'" @handleClick="toggleShow" />

        <div v-show="isOpen" :class="[$style.data, 'black']">
            <div :class="$style.dataColumn">
                <div :class="[$style.dataNumber, 'pink']">
                    01
                </div>
                <div :class="$style.dataTitle">
                    Патогенез атеросклероза
                </div>
                <div :class="$style.dataText">
                    Самое раннее видимое поражение атеросклероза – жировая полоска – это скопление пенистых клеток, насыщенных липидами, в интимальном слое артерии. Жировые полоски появляются в раннем детстве и прогрессируют с возрастом, приводя в итоге к клиническим проявлениям заболевания <sup>5,6</sup>.<br>
                    В настоящее время доминируют две гипотезы развития и становления атеросклероза: гипотеза <span class="pink">«ответ на повреждение»</span> и <span class="pink">липидно-инфильтрационная гипотеза</span>.
                </div>
                <div :class="$style.dataContent">
                    <img src="~/assets/img/section-2/scheme-1.png">
                </div>
            </div>
            <div :class="$style.dataColumn">
                <div :class="[$style.dataNumber, 'pink']">
                    02
                </div>
                <div :class="$style.dataTitle">
                    Липидная теория атеросклероза
                </div>
                <div :class="$style.dataContent">
                    <img src="~/assets/img/section-2/scheme-2.png">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ButtonAction from '~/components/common/ButtonAction/index.vue'

export default {
    name: 'SectionTwo',
    components: { ButtonAction },

    data: function () {
        return {
            isOpen: false
        }
    },

    methods: {
        toggleShow () {
            this.isOpen = !this.isOpen
        }
    }
}
</script>

<style module lang="scss">
    .section {
        padding-top: rem(180);
        padding-bottom: rem(120);

        @include wrapper;
    }

    .title {
        @include title;

        font-weight: $fw-extraBold;
    }

    .description {
        font-size: rem(24);
        line-height: rem(34);
        font-weight: $fw-medium;
        margin-top: rem(60);
    }

    .image {
        @include rainbow-block(top, 'full', false, true, 50);

        box-shadow: 0 rem(20) rem(80) rem(-20) rgba(#000, 0.4);
        margin-top: rem(60);
    }

    .button {
        margin-top: rem(60);
    }

    .data {
        display: flex;
        justify-content: space-between;
        padding-top: rem(80);

        span {
            font-weight: $fw-bold;
        }

        &Column {
            position: relative;

            &:first-child {
                width: calc(946 * 100% / 1440);
            }

            &:last-child {
                width: calc(331 * 100% / 1440);
                margin-top: rem(133);
            }
        }

        &Number {
            position: absolute;
            top: rem(-92);
            left: rem(-40);
            opacity: 0.1;
            font-size: rem(120);
            font-weight: $fw-extraBold;
        }

        &Title {
            @include block-title;
        }

        &Text {
            font-size: rem(18);
            font-weight: $fw-medium;
            margin-top: rem(25);
        }

        &Content {
            margin-top: rem(40);
        }
    }
</style>
