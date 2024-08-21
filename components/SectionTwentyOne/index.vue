<template>
    <div :class="[$style.section, 'black']">
        <h3 :class="$style.title">
            Поделиться с пациентом
        </h3>
        <div :class="$style.blocks">
            <div :class="[$style.block, $style.blockRainbow]">
                <div :class="$style.blockIcon">
                    <Icon1 />
                </div>
                <div :class="$style.blockText">
                    Как подготовиться к анализу крови на липидный профиль?
                </div>
                <ButtonAction
                    :class="$style.blockButton"
                    title="скачать"
                    preset="pink"
                    href="/"
                    target="_blank"
                >
                    <template #icon>
                        <IconDownload />
                    </template>
                </ButtonAction>
            </div>
            <div :class="$style.block">
                <img src="~/assets/img/section-21/image.jpg">
            </div>
            <div :class="[$style.block, $style.blockRainbow]">
                <div :class="$style.blockIcon">
                    <Icon2 />
                </div>
                <div :class="$style.blockText">
                    Изменение образа жизни с целью снизить влияние факторов риска
                </div>
                <ButtonAction
                    :class="$style.blockButton"
                    title="скачать"
                    preset="blueWhite"
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
</template>

<script>
import ButtonAction from '~/components/common/ButtonAction/index.vue'
import IconDownload from '~/assets/svg/icon-download.svg'
import Icon1 from '~/assets/svg/section-21/icon-1-1.svg'
import Icon2 from '~/assets/svg/section-21/icon-2-1.svg'

export default {
    name: 'SectionTwentyOne',
    components: {
        ButtonAction,
        IconDownload,
        Icon1,
        Icon2
    }
}
</script>

<style module lang="scss">
    .section {
        @include wrapper;

        position: relative;
        padding-top: rem(120);
    }

    .title {
        @include title;

        font-weight: $fw-extraBold;
    }

    .blocks {
        margin-top: rem(120);
        display: flex;
        justify-content: space-between;
    }

    .block {
        position: relative;
        border-radius: rem(30);
        overflow: hidden;
        width: calc(452 * 100% / 1440);

        img {
            @include absoluteCoverImg();
        }

        &Rainbow {
            padding: 0 rem(40) rem(29) rem(20);

            @include rainbow-block();

            overflow: visible;

            @include rainbow-shadow();

            &::before {
                height: rem(200);
            }
        }

        &:first-child {
            .blockIcon {
                @include rainbow-shadow('gradient-1');
            }
        }

        &:last-child {
            .blockIcon {
                @include rainbow-shadow('gradient-5');
            }
        }

        &Icon {
            position: relative;
            overflow: visible;
            width: rem(200);
            margin: rem(-60) auto 0;
            z-index: 2;

            &::before {
                height: calc(100% - rem(33));
                border-radius: rem(500);
                z-index: 1;
            }
        }

        &Text {
            margin-top: rem(40);
            text-align: center;
            font-size: rem(24);
            line-height: rem(34);
            font-weight: $fw-medium;
        }

        &Button {
            margin-top: rem(78);
        }
    }
</style>
