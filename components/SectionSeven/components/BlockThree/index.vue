<template>
    <div :class="$style.block">
        <div :class="[$style.title, 'pink', 'text-shadow-2']">
            Измерение АД
        </div>
        <div :class="[$style.description, 'white', 'text-shadow-2']">
            Асимметрия артериального давления (АД) ≥15 мм рт.ст. является маркером сосудистого заболевания и сопряжена с&nbsp;повышенным риском смерти.
        </div>
        <div :class="[$style.warning, 'black']">
            <div :class="$style.warningIcon">
                <img src="~/assets/img/section-7/block-3/icon-warning.png">
            </div>
            <div :class="$style.warningContent">
                <div :class="$style.warningContentTitle">
                    Важно:
                </div>
                <div :class="$style.warningContentText">
                    При выявлении асимметрии и последующей оценке уровня АД, необходимо ориентироваться на значения на той руке, на которой определяются более высокие значения.<sup>15,16</sup>
                </div>
            </div>
        </div>
        <div :class="$style.image">
            <img src="~/assets/img/section-7/block-3/image.jpg">
        </div>
    </div>
</template>

<script>
export default {
    name: 'BlockThree'
}
</script>

<style module lang="scss">
    .block {
        width: 100%;
        padding-bottom: rem(40);
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

    .warning {
        padding: rem(19) rem(39) rem(9) rem(29);
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: rem(40);

        @include rainbow-block();

        &Icon {
            flex: 0 0 auto;
            width: rem(129);
            height: rem(140);
        }

        &Content {
            margin-left: rem(49);

            &Title {
                font-size: rem(28);
                line-height: rem(38);
                font-weight: $fw-extraBold;
            }

            &Text {
                font-size: rem(18);
                font-weight: $fw-medium;
                margin-top: rem(7);
            }
        }
    }

    .image {
        position: relative;
        border-radius: rem(30);
        margin-top: rem(30);
        overflow: hidden;

        @include relativeHeight(823, 498);

        img {
            @include absoluteCoverImg();
        }
    }
</style>
