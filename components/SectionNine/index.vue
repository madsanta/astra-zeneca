<template>
    <div :class="[$style.section, 'black']">
        <div :class="$style.block">
            <h3 :class="$style.title">
                Оценка<br>
                сердечно-сосудистого риска <sup>17,18</sup>
            </h3>
            <div :class="$style.content">
                <div :class="[$style.contentTitle, 'pink']">
                    SCORE 2
                </div>
                <div :class="$style.contentText">
                    <p>В  РФ для расчета риска фатальных и нефатальных ССО в процентах в течение ближайших 10 лет следует использовать шкалу SCORE2 для стран с очень высоким ССР.</p>
                    <p>Шкала SCORE 2 используется для:</p>
                    <ul>
                        <li>Всех <b>бессимптомных</b> взрослых старше 40 лет</li>
                        <li>Пациентов <b>без</b> ССЗ, СД, ХБП, СГХС</li>
                        <li>{{ 'Всех с ХС ЛНП < 4, 9 ммоль / л' }}</li>
                    </ul>
                </div>
                <ButtonAction
                    :class="$style.contentButton"
                    preset="pink"
                    title="Шкала SCORE 2 на русском языке"
                    href="/"
                    target="_blank"
                >
                    <template #icon>
                        <IconDownload />
                    </template>
                </ButtonAction>
                <!--                <ButtonAction-->
                <!--                    :class="$style.contentButton"-->
                <!--                    preset="pink"-->
                <!--                    title="Шкала SCORE 2 на русском языке"-->
                <!--                    href="/pdf/SCORE 2_1.pdf"-->
                <!--                    download="Шкала SCORE 2 на русском языке"-->
                <!--                    target="_blank"-->
                <!--                >-->
                <!--                    <template #icon>-->
                <!--                        <IconDownload />-->
                <!--                    </template>-->
                <!--                </ButtonAction>-->
            </div>
            <div :class="$style.device">
                <img src="~/assets/img/section-9/device.png">
            </div>
            <div :class="$style.qr">
                <img src="~/assets/img/section-9/qr-code.png">
            </div>
        </div>
    </div>
</template>

<script>
import ButtonAction from '~/components/common/ButtonAction/index.vue'
import IconDownload from '~/assets/svg/icon-download.svg'

export default {
    name: 'SectionNine',
    components: {
        ButtonAction,
        IconDownload
    }
}
</script>

<style module lang="scss">
    .section {
        @include wrapper;

        position: relative;
        top: rem(-120);

        @include mobile {
            top: rem(-100);
        }
    }

    .block {
        position: relative;
        padding: rem(50);

        @include rainbow-block(null, null, false, false);

        overflow: visible;

        @include rainbow-shadow();

        @include mobile {
            padding: rem(20) rem(20) rem(205);
        }
    }

    .title {
        @include title;

        letter-spacing: 0;
        font-weight: $fw-extraBold;
    }

    .content {
        margin-top: rem(40);
        width: calc(650 * 100% / 1340);

        @include mobile {
            width: 100%;
            margin-top: rem(10);
        }

        &Title {
            @include block-title;
        }

        &Text {
            margin-top: rem(15);

            @include mobile {
                margin-top: rem(10);
            }

            p {
                font-family: Kanit, sans-serif;
                font-size: rem(18);
                font-weight: $fw-semiBold;

                @include mobile {
                    font-size: rem(15);
                }

                & + p {
                    margin-top: rem(30);

                    @include mobile {
                        margin-top: rem(10);
                    }
                }
            }

            ul {
                margin-top: rem(15);
                font-size: rem(17);

                @include mobile {
                    margin-top: rem(5);
                    font-size: rem(15);
                }

                @include ul;
            }
        }

        &Button {
            margin-top: rem(30);
            margin-left: 0 !important;
        }
    }

    .device {
        position: absolute;
        right: 0;
        bottom: 0;
        width: rem(454);

        @include mobile {
            width: rem(125);
            right: rem(20);
        }
    }

    .qr {
        position: absolute;
        width: rem(200);
        right: 36%;
        bottom: rem(50);

        @include mobile {
            width: rem(140);
            right: auto;
            left: rem(20);
            bottom: rem(35);
        }
    }
</style>
