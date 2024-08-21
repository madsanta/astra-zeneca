<template>
    <div :class="[$style.wrapper, 'white']">
        <div :class="$style.header">
            <div :class="$style.headerIcon">
                <img src="~/assets/img/section-17/tab-3/icon-jupiter.png">
            </div>
            <div :class="$style.headerText">
                <div :class="$style.headerTextTitle">
                    JUPITER
                </div>
                <div :class="$style.headerTextCaption">
                    Эффективность и безопасность розувастатина в первичной профилактике ССЗ была изучена в исследовании JUPITER 66
                </div>
            </div>
        </div>
        <div :class="$style.blocks">
            <ContentBlock :content="data.jupiter" />
        </div>
        <div :class="$style.bg">
            <img src="~/assets/img/section-17/tab-3/bg-jupiter.png">
        </div>
    </div>
</template>

<script>
import jupiterData from '~/static/data/jupiter-content.json'
import ContentBlock from '~/components/common/ContentBlock/index.vue'

export default {
    name: 'TabThree',
    components: {
        ContentBlock
    },
    data: function () {
        return {
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
        display: flex;
        align-items: center;
        padding: rem(20) rem(30);
        width: calc(1192 * 100% / 1440);

        @include rainbow-block(top);

        &Icon {
            flex: 0 0 auto;
            position: relative;
            width: rem(60);
            height: rem(60);
            margin-right: rem(25);

            img {
                @include absoluteCoverImg();
            }
        }

        &Text {
            &Title {
                font-size: rem(24);
                line-height: rem(34);
                font-weight: $fw-bold;
                color: $c-blackBlue;
            }

            &Caption {
                margin-top: rem(10);
                font-size: rem(18);
                color: $c-blackBlue;
            }
        }
    }

    .blocks {
        margin-top: rem(20);
    }

    .bg {
        position: absolute;
        width: rem(574);
        height: rem(574);
        top: rem(370);
        left: rem(-42);
        transform: translateX(-50%);
    }
</style>
