<template>
    <div :class="[$style.section, 'black']">
        <h3 :class="$style.title">
            Стартовая доза препарата Розувастатин (Крестор®) = 5-10 мг<sup>35</sup>
        </h3>
        <div :class="$style.items">
            <ModalVideo
                is-hover
                :class="$style.item"
                type="video/mp4"
                :preview="require('~/assets/img/section-16/preview-1.jpg')"
                video-url="https://vjs.zencdn.net/v/oceans.mp4"
            />
            <ModalVideo
                is-hover
                :class="$style.item"
                type="video/mp4"
                :preview="require('~/assets/img/section-16/preview-2.jpg')"
                video-url="https://vjs.zencdn.net/v/oceans.mp4"
            />
            <ModalVideo
                is-hover
                :class="$style.item"
                type="video/mp4"
                :preview="require('~/assets/img/section-16/preview-3.jpg')"
                video-url="https://vjs.zencdn.net/v/oceans.mp4"
            />
            <ModalVideo
                is-hover
                :class="$style.item"
                type="video/mp4"
                :preview="require('~/assets/img/section-16/preview-4.jpg')"
                video-url="https://vjs.zencdn.net/v/oceans.mp4"
            />
            <ModalVideo
                is-hover
                :class="$style.item"
                type="video/mp4"
                :preview="require('~/assets/img/section-16/preview-5.jpg')"
                video-url="https://vjs.zencdn.net/v/oceans.mp4"
            />
        </div>
    </div>
</template>

<script>
import ModalVideo from '~/components/common/ModalVideo/index.vue'

export default {
    name: 'SectionSixteen',
    components: {
        ModalVideo
    }
}
</script>

<style module lang="scss">
    .section {
        @include wrapper;

        margin-top: rem(100);
        padding-bottom: rem(147);
    }

    .title {
        @include title;

        font-weight: $fw-extraBold;
    }

    .items {
        margin-top: rem(20);
        display: flex;
        flex-wrap: wrap;
    }

    .item {
        width: calc(452 * 100% / 1440);
        margin-top: rem(40);
        margin-left: rem(40);

        &:first-child {
            margin-left: 0;
        }

        &:nth-child(4) {
            margin-left: auto;
        }

        &:nth-child(5) {
            margin-right: auto;
        }
    }
</style>
