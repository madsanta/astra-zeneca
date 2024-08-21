<template>
    <div :class="[$style.wrapper, 'black']">
        <div :class="$style.header">
            <div :class="$style.blockTitle">
                Розувастатин является гидрофильным статином с высокой гепатоселективностью, при этом ограничено проникающим во внепеченочные ткани, что снижает риск его миотоксичности
            </div>
            <div :class="$style.checks">
                <div :class="$style.checksColumn">
                    <div :class="$style.check">
                        <div :class="$style.checkIcon">
                            <IconCheck />
                        </div>
                        <div :class="$style.checkText">
                            Прием 1 раз в сутки, вне зависимости от времени.<sup>35</sup>
                        </div>
                    </div>
                    <div :class="$style.check">
                        <div :class="$style.checkIcon">
                            <IconCheck />
                        </div>
                        <div :class="$style.checkText">
                            Розувастатин минимально вовлечекает в метаболизм системы цитохрома Р450 (CYP), в основном за счет участия энзима 2С9, что оказывает положительное влияние на его переносимость.<sup>67,68</sup>
                        </div>
                    </div>
                    <div :class="$style.check">
                        <div :class="$style.checkIcon">
                            <IconCheck />
                        </div>
                        <div :class="$style.checkText">
                            Розувастатин выводится из организма практически в неизмененном виде.<sup>35,69</sup>
                        </div>
                    </div>
                    <div :class="$style.check">
                        <div :class="$style.checkIcon">
                            <IconCheck />
                        </div>
                        <div :class="$style.checkText">
                            Не требует ограничения потребления грейпфрутового сока.<sup>68</sup>
                        </div>
                    </div>
                </div>
                <div :class="$style.checksColumn">
                    <div :class="$style.check">
                        <div :class="$style.checkIcon">
                            <IconCheck />
                        </div>
                        <div :class="$style.checkText">
                            Период полувыведения розувастатина составляет около 20 часов.<sup>35</sup>
                        </div>
                    </div>
                    <div :class="$style.check">
                        <div :class="$style.checkIcon">
                            <IconCheck />
                        </div>
                        <div :class="$style.checkText">
                            Выведение из плазмы розувастатина происходит с помощью белков-переносчиков печени, обеспечивающих его поступление в печень и экскрецию с желчью.
                        </div>
                    </div>
                    <div :class="$style.check">
                        <div :class="$style.checkIcon">
                            <IconCheck />
                        </div>
                        <div :class="$style.checkText">
                            Около 10% препарата выводится почками.<sup>35</sup>
                        </div>
                    </div>
                </div>
            </div>
            <div :class="$style.doctor">
                <img src="~/assets/img/section-18/doctor.png">
            </div>
        </div>
        <div :class="$style.blocks">
            <AccordionBlock
                v-model="showBlocks.jupiter"
                is-rainbow
                :image="require('~/assets/img/section-17/tab-3/icon-jupiter.png')"
            >
                <template #title>
                    JUPITER <sup>66</sup>
                </template>
            </AccordionBlock>
            <ContentBlock
                v-show="showBlocks.jupiter"
                :content="data.jupiter"
            />
        </div>
        <div :class="$style.footer">
            <div :class="$style.footerTitle">
                Более подробная информация о нежелательных явлениях, лекарственных взаимодействиях <span class="pink">доступна в инструкции</span> к медицинскому применению препарата
            </div>
            <div :class="$style.footerBlocks">
                <div :class="$style.footerBlock">
                    <div :class="$style.footerBlockImages">
                        <img src="~/assets/img/section-18/tab-1/krestor-1.png">
                    </div>
                    <ButtonAction
                        title="Скачать инструкцию Крестор® 5 мг"
                        preset="pink"
                        href="/"
                        target="_blank"
                    >
                        <template #icon>
                            <IconDownload />
                        </template>
                    </ButtonAction>
                </div>
                <div :class="$style.footerBlock">
                    <div :class="$style.footerBlockImages">
                        <img src="~/assets/img/section-18/tab-1/krestor-2.png">
                        <img src="~/assets/img/section-18/tab-1/krestor-3.png">
                        <img src="~/assets/img/section-18/tab-1/krestor-4.png">
                    </div>
                    <ButtonAction
                        title="Скачать инструкцию Крестор® 10, 20, 40 мг"
                        preset="blue"
                        href="/"
                        target="_blank"
                    >
                        <template #icon>
                            <IconDownload />
                        </template>
                    </ButtonAction>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import jupiterData from '~/static/data/jupiter-2-content.json'
import AccordionBlock from '~/components/common/AccordionBlock/index.vue'
import ContentBlock from '~/components/common/ContentBlock/index.vue'
import ButtonAction from '~/components/common/ButtonAction/index.vue'
import IconCheck from '~/assets/svg/icon-check.svg'
import IconDownload from '~/assets/svg/icon-download.svg'

export default {
    name: 'TabOne',
    components: {
        AccordionBlock,
        ContentBlock,
        ButtonAction,
        IconCheck,
        IconDownload
    },
    data: function () {
        return {
            showBlocks: {
                jupiter: false
            },
            data: {
                jupiter: jupiterData.content
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
        padding-bottom: rem(60);
        padding-right: rem(371);
    }

    .blockTitle {
        @include block-title;

        margin-top: rem(90);

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

    .doctor {
        width: rem(390);
        position: absolute;
        bottom: 0;
        right: rem(-40);
    }

    .footer {
        margin-top: rem(80);

        &Title {
            @include block-title;

            text-align: center;
        }

        &Blocks {
            margin-top: rem(79);
            display: grid;
            grid-template-columns: calc(577 * 100% / 1440) calc(823 * 100% / 1440);
            grid-column-gap: rem(40);
        }

        &Block {
            @include rainbow-block(top, $preset: 'full', $is-bg-rainbow: false);

            overflow: visible;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0 rem(40) rem(40);

            &Images {
                display: flex;
                margin-top: rem(-27);

                img {
                    width: auto;
                    margin-left: rem(17);
                    height: rem(110);

                    &:first-child {
                        margin-left: 0;
                    }
                }
            }

            &Text {
                margin-top: rem(9);
            }
        }
    }
</style>
