<template>
    <div :class="$style.section">
        <div :class="$style.inner">
            <div :class="$style.title">
                В мире...
            </div>
            <div :class="$style.blocks">
                <div :class="$style.block">
                    <p>Атеросклеросклеротические сердечно-сосудистые заболевания (ССЗ) остаются <span class="pink">ведущей</span> причиной смертности во всем мире и РФ<sup>1</sup></p>
                </div>
                <div :class="$style.block">
                    <div :class="[$style.blockTitle, 'pink']">
                        ~50%
                    </div>
                    <p>
                        смертей в РФ в 2018 году по причине ССЗ<sup>4</sup>
                    </p>
                </div>
                <div :class="$style.block">
                    <div :class="[$style.blockTitle, 'pink']">
                        18 млн
                    </div>
                    <p>
                        смертей ежегодно по причине атеросклеротических ССЗ<sup>3</sup>
                    </p>
                </div>
                <div :class="$style.block">
                    <div :class="[$style.blockTitle, 'pink']">
                        80%
                    </div>
                    <p>
                        смертей от ССЗ связаны с ишемической болезнью сердца (ИБС) и цереброваскулярными заболеваниями<sup>4</sup>
                    </p>
                </div>
            </div>
            <div :class="$style.description">
                <div :class="$style.descriptionShadow" />
                <div :class="$style.descriptionInner">
                    <div :class="$style.descriptionIcon">
                        <img src="~/assets/img/section-1/icon.png">
                    </div>
                    <div :class="[$style.descriptionTitle, 'black']">
                        АТЕРОСКЛЕРОЗ
                    </div>
                    <div :class="[$style.descriptionText, 'black']">
                        <p>— патологический процесс, вызывающий поражение коронарных, церебральных, периферических артерий и аорты, который проявляется уплотнением сосудистой стенки и образованием атеросклеротических бляшек (АСБ)<sup>1,2</sup></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SectionOne'
}
</script>

<style module lang="scss">
    .section {
        position: relative;
        background-image: url('~/assets/img/section-1/earth.jpg');
        background-attachment: scroll;
        background-size: cover;
        background-position: top center;
        width: 100%;
        margin-top: rem(-143);
        z-index: 1;

        @include relativeHeight(1920, 1016);
    }

    .inner {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 50%;
        right: 50%;
        transform: translate(-50%, 0);
        z-index: 10;
        padding-top: rem(247);

        @include wrapper;
    }

    .title {
        @include title;

        color: #fff;
        text-shadow: 0 2px 2px rgba(#000, 0.4);
    }

    .blocks {
        display: flex;
        justify-content: space-between;
        margin-top: rem(53);
    }

    .block {
        border-radius: rem(30);
        border: 1px solid rgba(#fff, 0.4);
        -webkit-background-clip: padding-box; /* for Safari */
        background-clip: padding-box; /* for IE9+, Firefox 4+, Opera, Chrome */
        background: rgba(#212121, 0.6);
        backdrop-filter: blur(25px);
        box-shadow: 0 rem(20) rem(80) rem(-20) #000;
        width: calc(331 * 100% / 1440);
        min-height: rem(258);
        padding: rem(40) rem(30) rem(65);
        color: #fff;
        font-size: rem(17);
        font-weight: $fw-medium;

        &Title {
            font-size: rem(40);
            font-weight: $fw-bold;
            margin-bottom: rem(6);
        }
    }

    .description {
        position: absolute;
        bottom: rem(-60);
        left: 50%;
        right: 50%;
        transform: translate(-50%, 0);
        width: calc(1440 * 100% / 1600);

        @include rainbow-shadow;

        &::before {
            height: calc(100% - rem(20));
        }

        &Inner {
            border: 1px solid $c-blue;
            border-radius: rem(30);
            background:
                lg-rainbow(0.1),
                linear-gradient(to right, rgba(#fff, 0.9), rgba(#fff, 0.9));
            backdrop-filter: blur(25px);
            padding: rem(28) rem(85) rem(23) rem(30);
            display: flex;
            justify-content: stretch;
        }

        &Icon {
            flex: 0 0 auto;
            position: relative;
            width: calc(190 * 100% / 1325);

            @include relativeHeight(190, 150);

            img {
                @include absoluteCoverImg(containt);
            }
        }

        &Title {
            font-size: rem(40);
            font-weight: $fw-black;
            text-transform: uppercase;
            margin-left: rem(28);
            margin-right: rem(60);
            margin-top: rem(25);
        }

        &Text {
            font-size: rem(18);
            font-weight: $fw-medium;
            margin-top: rem(32);
        }
    }
</style>
