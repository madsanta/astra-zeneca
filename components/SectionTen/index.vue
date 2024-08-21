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
                href="/"
                target="_blank"
            >
                <template #icon>
                    <IconDownload />
                </template>
            </ButtonAction>
        </div>
        <div :class="$style.content">
            <img src="~/assets/img/section-10/image.png">
        </div>
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

        &Text {
            @include block-title;

            letter-spacing: 0;
            width: calc(1070 * 100% / 1440);
        }

        &Button {
            margin: 0;
        }
    }

    .content {
        margin-top: rem(50);
    }
</style>
