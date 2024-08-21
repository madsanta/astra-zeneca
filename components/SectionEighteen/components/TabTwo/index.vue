<template>
    <div :class="[$style.wrapper, 'black']">
        <div :class="$style.header">
            <div :class="$style.blockTitle">
                Беременность и лактация <sup>35</sup>
            </div>
            <div :class="$style.checks">
                <div :class="$style.checksColumn">
                    <div :class="$style.check">
                        <div :class="$style.checkIcon">
                            <IconCheck />
                        </div>
                        <div :class="$style.checkText">
                            Препарат розувастатин противопоказан при беременности и в период грудного вскармливания.
                        </div>
                    </div>
                    <div :class="$style.check">
                        <div :class="$style.checkIcon">
                            <IconCheck />
                        </div>
                        <div :class="$style.checkText">
                            В случае возникновения беременности в процессе терапии прием препарата должен быть прекращен немедленно.
                        </div>
                    </div>
                    <div :class="$style.check">
                        <div :class="$style.checkIcon">
                            <IconCheck />
                        </div>
                        <div :class="$style.checkText">
                            В настоящее время данные о влиянии розувастатина на репродуктивную функцию как у мужчин, так и женщин, отсутствуют.
                        </div>
                    </div>
                </div>
                <div :class="$style.checksColumn">
                    <div :class="$style.check">
                        <div :class="$style.checkIcon">
                            <IconCheck />
                        </div>
                        <div :class="$style.checkText">
                            При планировании или в процессе проведения гиполипидемической терапии женщинам репродуктивного возраста необходимо соблюдение надежных мер контрацепции.
                        </div>
                    </div>
                    <div :class="$style.check">
                        <div :class="$style.checkIcon">
                            <IconCheck />
                        </div>
                        <div :class="$style.checkText">
                            Поскольку холестерин и другие продукты биосинтеза холестерина важны для развития плода, потенциальный риск ингибирования ГМГ-КоА-редуктазы превышает пользу от применения препарата у беременных.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div :class="$style.blockTitle">
            Пациенты с сахарным диабетом
        </div>
        <div :class="$style.notice">
            <IconClick />
            Раскройте исследование, чтобы узнать больше
        </div>
        <div :class="$style.blocks">
            <AccordionBlock
                v-model="showBlocks.andromeda"
                title="ANDROMEDA"
                is-rainbow
                :image="require('~/assets/img/section-18/tab-2/icon-andromeda.png')"
            />
            <ContentBlock
                v-show="showBlocks.andromeda"
                :content="data.andromeda"
            />
            <AccordionBlock
                v-model="showBlocks.hope"
                title="HOPE-3"
                is-rainbow
                :image="require('~/assets/img/section-18/tab-2/icon-hope.png')"
            />
            <ContentBlock
                v-show="showBlocks.hope"
                :content="data.hope"
            />
            <AccordionBlock
                v-model="showBlocks.uranus"
                title="URANUS"
                is-rainbow
                :image="require('~/assets/img/section-18/tab-2/icon-uranus.png')"
            />
            <ContentBlock
                v-show="showBlocks.uranus"
                :content="data.uranus"
            />
        </div>
        <div :class="$style.blockTitle">
            Пациенты с ХБП
        </div>
        <div :class="$style.blocks">
            <AccordionBlock
                v-model="showBlocks.jupiter"
                title="JUPITER"
                is-rainbow
                :image="require('~/assets/img/section-17/tab-3/icon-jupiter.png')"
            />
            <ContentBlock
                v-show="showBlocks.jupiter"
                :content="data.jupiter"
            />
            <AccordionBlock
                v-model="showBlocks.planet"
                title="PLANET I, II и ECLIPSE"
                is-rainbow
                :image="require('~/assets/img/section-18/tab-2/icon-planet.png')"
            />
            <ContentBlock
                v-show="showBlocks.planet"
                :content="data.planet"
            />
        </div>
        <div :class="$style.blockTitle">
            Пациенты с ХСН
        </div>
        <div :class="$style.blockDescription">
            Прием статинов не является основным средством терапии ХСН.79 Однако, у пациентов ХСН терапия статинами <span class="pink">не требует отмены</span>, при наличии обоснованных медицинских показаний к их приему.
        </div>
        <div :class="$style.blocks">
            <AccordionBlock
                v-model="showBlocks.corona"
                title="CORONA"
                is-rainbow
                :image="require('~/assets/img/section-18/tab-2/icon-corona.png')"
            />
            <ContentBlock
                v-show="showBlocks.corona"
                :content="data.corona"
            />
        </div>
        <div :class="$style.blockTitle">
            Пациенты с нарушением функции печени
        </div>
        <div :class="$style.blockDescription">
            Розувастатин противопоказан к применению при заболеваниях печени в активной фазе, включая стойкое повышение сывороточной активности трансаминаз и любое повышение активности трансаминаз в сыворотке крови (более чем в 3 раза по сравнению с верхней границей нормы).<sup>35</sup>
        </div>
    </div>
</template>

<script>
import andromedaData from '~/static/data/andromeda-content.json'
import hopeData from '~/static/data/hope-content.json'
import uranusData from '~/static/data/uranus-content.json'
import jupiterData from '~/static/data/jupiter-3-content.json'
import planetData from '~/static/data/planet-content.json'
import coronaData from '~/static/data/corona-content.json'
import AccordionBlock from '~/components/common/AccordionBlock/index.vue'
import ContentBlock from '~/components/common/ContentBlock/index.vue'
import IconCheck from '~/assets/svg/icon-check.svg'
import IconClick from '~/assets/svg/icon-click.svg'

export default {
    name: 'TabTwo',
    components: {
        AccordionBlock,
        ContentBlock,
        IconCheck,
        IconClick
    },
    data: function () {
        return {
            showBlocks: {
                andromeda: false,
                hope: false,
                uranus: false,
                jupiter: false,
                planet: false,
                corona: false
            },
            data: {
                andromeda: andromedaData.content,
                hope: hopeData.content,
                uranus: uranusData.content,
                jupiter: jupiterData.content,
                planet: planetData.content,
                corona: coronaData.content
            }
        }
    }
}
</script>

<style module lang="scss">
    .wrapper {
        position: relative;
    }

    .header {
        position: relative;
    }

    .blockTitle {
        @include block-title;

        margin-top: rem(90);

        .header + & {
            margin-top: rem(70);
        }

        &:first-child {
            margin-top: 0;
        }
    }

    .checks {
        margin-top: rem(50);
        display: grid;
        grid-template-columns: calc(575 * 100% / 1067) calc(452 * 100% / 1067);
        grid-column-gap: rem(40);
    }

    .check {
        margin-top: rem(20);
        display: grid;
        grid-template-columns: rem(30) 1fr;
        grid-column-gap: rem(20);

        &:first-child {
            margin-top: 0;
        }

        svg {
            width: rem(30);
            height: rem(30);
        }

        &Text {
            font-size: rem(18);
            font-weight: $fw-medium;
            margin-top: 1px;
        }
    }

    .notice {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-top: rem(10);
        font-size: rem(17);
        font-weight: $fw-medium;

        svg {
            flex: 0 0 auto;
            width: rem(30);
            height: rem(30);
            margin-right: rem(15);
        }
    }

    .blockDescription {
        font-size: rem(18);
        line-height: rem(28);
        font-weight: $fw-medium;
        margin-top: rem(25);
    }

    .blocks {
        margin-top: rem(40);

        .notice + & {
            margin-top: rem(20);
        }
    }
</style>
