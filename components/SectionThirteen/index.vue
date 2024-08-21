<template>
    <div :class="[$style.section, 'black']">
        <h3 :class="$style.title">
            <span class="pink">Тактика ведения пациента</span> в зависимости от сердечно-сосудистого риска <sup>1, 11, 23</sup>
        </h3>
        <div :class="$style.image">
            <img src="~/assets/img/section-13/image.png">
        </div>
        <ModalVideo
            :class="$style.video"
            is-big
            type="video/mp4"
            :preview="require('~/assets/img/section-13/preview.jpg')"
            video-url="https://vjs.zencdn.net/v/oceans.mp4"
        />
    </div>
</template>

<script>
import ModalVideo from '~/components/common/ModalVideo/index.vue'

export default {
    name: 'SectionThirteen',
    components: {
        ModalVideo
    }
}
</script>

<style module lang="scss">
    .section {
        @include wrapper;

        padding-top: rem(120);
        padding-bottom: rem(240);
    }

    .title {
        @include title;

        font-weight: $fw-extraBold;
        width: calc(1232 * 100% / 1440);
    }

    .image {
        margin-top: rem(60);
    }

    .video {
        margin: rem(100) auto 0;
        width: calc(944 * 100% / 1440);
    }
</style>
