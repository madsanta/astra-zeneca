<template>
    <div :class="[$style.section, 'black']">
        <h3 :class="$style.title">
            <span class="pink">Тактика ведения пациента</span> в зависимости от сердечно-сосудистого риска <sup>1, 11, 23</sup>
        </h3>
        <div :class="[$style.image, 'mobileScrollBlock']">
            <img src="~/assets/img/section-13/image.png">
        </div>
        <div :class="[$style.iconSwipe, 'onlyMobile', 'iconSwipe']">
            <IconSwipeLeft />
        </div>
        <div :class="[$style.caption, 'black']">
            Примечание:<br>
            * При наличии потенциального риска лекарственного взаимодействия.<br>
            ** У пациентов после ОКС/ЧКВ – статин в высокой дозе независимо от уровня ХС ЛНП, если на фоне терапии статинами в максимально переносимых дозах уровень ЛНП остается значительно повышенным (>2,5 ммоль/л), можно рассмотреть ингибиторы PCSK9 без предварительного применения эзетимиба.<br>
            *** При непереносимости высокоинтенсивной терапии статинов следует рассмотреть снижение дозы препарата с последующей переооценкой переносимости.
        </div>
        <ModalVideo
            :class="$style.video"
            is-big
            type="video/mp4"
            :preview="require('~/assets/img/section-13/preview.jpg')"
            video-url="/video/Krestor_06.12.23_fin_wn.mp4"
        />
    </div>
</template>

<script>
import ModalVideo from '~/components/common/ModalVideo/index.vue'
import IconSwipeLeft from '~/assets/svg/icon-swipe-left.svg'

export default {
    name: 'SectionThirteen',
    components: {
        ModalVideo,
        IconSwipeLeft
    }
}
</script>

<style module lang="scss">
    .section {
        @include wrapper;

        padding-top: rem(120);
        padding-bottom: rem(240);

        @include mobile {
            padding-top: rem(90);
            padding-bottom: rem(190);
        }
    }

    .title {
        @include title;

        font-weight: $fw-extraBold;
        width: calc(1232 * 100% / 1440);

        @include mobile {
            width: 100%;
        }
    }

    .image {
        margin-top: rem(60);

        @include mobile {
            margin-top: rem(20);
        }

        img {
            @include mobile {
                width: rem(1023);
                max-width: initial;
            }
        }
    }

    .caption {
        font-size: rem(18);

        @include mobile {
            font-size: rem(14);
        }
    }

    .video {
        margin: rem(100) auto 0;
        width: calc(944 * 100% / 1440);

        @include mobile {
            margin: rem(60) auto 0;
            width: 100%;
        }
    }

    .iconSwipe {
        @include mobile {
            margin-top: rem(20);
        }
    }
</style>
