<template>
    <div :class="[$style.section, 'black']">
        <h3 :class="$style.title">
            Видео
        </h3>
        <ModalVideo
            :class="$style.video"
            type="video/mp4"
            is-big
            :preview="require('~/assets/img/section-19/preview.jpg')"
            video-url="https://vjs.zencdn.net/v/oceans.mp4"
        />
        <div :class="$style.image">
            <img src="~/assets/img/section-19/image-1.png">
        </div>
        <div :class="$style.caption">
            Примечание: АЛТ – аланинаминотрансфераза; ВГН – верхняя граница нормы; ТГ – гипертриглицеридемия; КФК – креатинфосфокиназа; ЛП (а) – липопротеид (а); ОКС – острый коронарный синдром.<br>
            Источники 1, 11.
        </div>
        <div :class="$style.blockTitle">
            Расчет степени снижения ХС ЛНП при различных вариантах гиполипидемической терапии <sup>1,11</sup>
        </div>
        <div :class="$style.block">
            <img src="~/assets/img/section-19/image-2.png">
        </div>
        <div :class="[$style.caption, $style.blockCaption]">
            Сокращения: ЛНП — липопротеиды низкой плотности, ХС — холестерин.
        </div>
    </div>
</template>

<script>
import ModalVideo from '~/components/common/ModalVideo/index.vue'

export default {
    name: 'SectionNineteen',
    components: {
        ModalVideo
    }
}
</script>

<style module lang="scss">
    .section {
        @include wrapper;

        padding-top: rem(120);
        padding-bottom: rem(150);
    }

    .title {
        @include title;

        font-weight: $fw-extraBold;
    }

    .video {
        width: calc(944 * 100% / 1440);
        margin: rem(60) auto 0;
    }

    .image {
        margin-top: rem(120);
    }

    .caption {
        font-size: rem(18);
        margin-top: rem(20);
    }

    .block {
        margin: rem(40) auto 0;
        width: calc(700 * 100% / 1440);

        @include rainbow-block();

        &Title {
            @include block-title;

            margin-top: rem(100);
            width: calc(823 * 100% / 1440);
        }

        &Caption {
            margin-top: rem(30);
        }
    }
</style>
