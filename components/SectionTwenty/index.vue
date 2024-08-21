<template>
    <div :class="$style.section">
        <div :class="$style.bg" />
        <div :class="$style.bgBottom">
            <img src="~/assets/img/section-20/bg.png">
        </div>
        <div :class="[$style.wrapper, 'white']">
            <div :class="$style.title">
                Предлагаем вам пройти несколько полезных активностей
            </div>
            <div :class="$style.blocks">
                <div :class="$style.block">
                    <div :class="$style.blockIcon">
                        <IconQuize />
                    </div>
                    <div :class="$style.blockText">
                        GALAXY квиз
                    </div>
                    <div :class="$style.blockButton">
                        <ButtonAction
                            :class="$style.blockButton"
                            title="пройти"
                            preset="pink"
                            href="/"
                            target="_blank"
                        />
                    </div>
                </div>
                <div :class="$style.block">
                    <div :class="$style.blockIcon">
                        <IconPuzzle />
                    </div>
                    <div :class="$style.blockText">
                        Найдите слова
                    </div>
                    <div :class="$style.blockButton">
                        <ButtonAction
                            :class="$style.blockButton"
                            title="пройти"
                            preset="darkBlue"
                            href="/"
                            target="_blank"
                        />
                    </div>
                </div>
                <div :class="$style.block">
                    <div :class="$style.blockIcon">
                        <IconFeedback />
                    </div>
                    <div :class="$style.blockText">
                        Обратная связь
                    </div>
                    <div :class="$style.blockButton">
                        <ButtonAction
                            :class="$style.blockButton"
                            title="перейти"
                            preset="blueWhite"
                            href="/"
                            target="_blank"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ButtonAction from '~/components/common/ButtonAction/index.vue'
import IconQuize from '~/assets/svg/section-20/icon-quize.svg'
import IconPuzzle from '~/assets/svg/section-20/icon-puzzle.svg'
import IconFeedback from '~/assets/svg/section-20/icon-feedback.svg'

export default {
    name: 'SectionTwenty',
    components: {
        ButtonAction,
        IconQuize,
        IconPuzzle,
        IconFeedback
    }
}
</script>

<style module lang="scss">
    .section {
        position: relative;
        overflow-x: clip;

        @include block-rounded-top(-50);
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
        z-index: 2;
    }

    .bgBottom {
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 2;
        overflow: hidden;
        height: rem(955);

        img {
            object-fit: cover;
        }
    }

    .wrapper {
        @include wrapper;

        position: relative;
        padding-top: rem(120);
        padding-bottom: rem(120);
        z-index: 3;
    }

    .title {
        @include title;

        width: calc(1231 * 100% / 1440);
    }

    .blocks {
        margin-top: rem(70);
        display: flex;
    }

    .block {
        width: calc(329 * 100% / 1440);
        border-radius: rem(500) rem(500) rem(30) rem(30);
        background:
            linear-gradient(to right, rgba(#00215F, 0.3), rgba(#00215F, 0.3)),
            linear-gradient(to right, rgba(#fff, 0.2), rgba(#fff, 0.2));
        backdrop-filter: blur(25px);
        box-shadow: 0 rem(20) rem(40) rem(-20) rgba(#000, 0.6);
        padding: rem(25) rem(25) rem(40);
        margin-left: rem(40);

        &:first-child {
            margin-left: 0;
        }

        &Icon {
            width: 100%;
        }

        &Text {
            margin: rem(24) auto 0;
            font-size: rem(24);
            line-height: rem(34);
            text-align: center;
            font-weight: $fw-medium;
        }

        &Button {
            margin-top: rem(30);
        }
    }
</style>
