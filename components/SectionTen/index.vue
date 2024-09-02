<template>
    <div :class="[$style.section, 'black']">
        <div :class="$style.description">
            <div :class="$style.descriptionText">
                Шкала глобальной оценки 10-летнего сердечно-сосудистого риска и выбор тактики в зависимости от степени риска и уровня ХС ЛНП <sup>1</sup>
            </div>
            <ButtonAction
                :class="$style.descriptionButton"
                preset="pink"
                title="скачать шкалу"
                href="/pdf/global-score.pdf"
                download="Шкала глобальной оценки"
                target="_blank"
            >
                <template #icon>
                    <IconDownload />
                </template>
            </ButtonAction>
        </div>
        <div :class="[$style.content, {[$style.isShowMore]: isShowMore}]">
            <img class="onlyDesktop" src="~/assets/img/section-10/image.png">
            <img class="onlyMobile" src="~/assets/img/section-10/image-mobile.png">
            <div :class="[$style.contentOverflow, 'onlyMobile']" />
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
import IconDownload from '~/assets/svg/icon-download.svg'

export default {
    name: 'SectionTen',
    components: {
        ButtonAction,
        IconDownload
    },
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

        position: relative;
    }

    .description {
        display: flex;
        justify-content: space-between;
        align-items: center;

        @include mobile {
            flex-wrap: wrap;
            justify-content: flex-start;
        }

        &Text {
            @include block-title;

            letter-spacing: 0;
            width: calc(1070 * 100% / 1440);

            @include mobile {
                width: 100%;
            }
        }

        &Button {
            margin: 0 !important;

            @include mobile {
                margin-top: rem(25) !important;
                margin-left: auto !important;
                margin-right: auto !important;
            }
        }
    }

    .content {
        margin-top: rem(50);

        @include mobile {
            position: relative;
            margin-top: rem(29);
            height: rem(662);
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
            background: linear-gradient(to bottom, rgba(#F2F4F7, 0), #F2F4F7);

            .isShowMore & {
                opacity: 0;
            }
        }
    }

    .button {
        margin-top: rem(30);
    }
</style>
