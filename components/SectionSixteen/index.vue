<template>
    <div :class="[$style.section, 'black']">
        <h3 :class="$style.title">
            Видео
        </h3>
        <div :class="$style.items">
            <VueHorizontal ref="horizontal" :button="false" snap="center" @scroll-debounce="onScrollDebounce">
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
            </VueHorizontal>
            <div :class="['paginationWrapper', 'onlyMobile']">
                <SliderPagination
                    class="pagination"
                    :count="count"
                    :index="index"
                    @onPageClick="onPageClick"
                />
                <IconSwipeLeft />
            </div>
        </div>
    </div>
</template>

<script>
import VueHorizontal from 'vue-horizontal'
import ModalVideo from '~/components/common/ModalVideo/index.vue'
import IconSwipeLeft from '~/assets/svg/icon-swipe-left.svg'
import SliderPagination from '~/components/common/SliderPagination/index.vue'
import pagination from '~/mixins/pagination'

export default {
    name: 'SectionSixteen',
    components: {
        ModalVideo,
        VueHorizontal,
        IconSwipeLeft,
        SliderPagination
    },
    mixins: [pagination],
    data: function () {
        return {
            count: 5
        }
    }
}
</script>

<style module lang="scss">
    .section {
        @include wrapper;

        margin-top: rem(100);
        padding-bottom: rem(147);

        @include mobile {
            margin-top: rem(90);
            //padding-bottom: rem(190); // Правильный отступ при всех блоках
            padding-bottom: rem(40);
        }
    }

    .title {
        @include title;

        font-weight: $fw-extraBold;
    }

    .items {
        margin-top: rem(20);

        @include mobile {
            margin-top: rem(30);
            display: block;
        }
    }

    .item {
        width: calc(452 * 100% / 1440);
        margin-top: rem(40);
        margin-left: rem(40);

        @include mobile {
            width: rem(344);
            margin-top: 0;
            margin-left: 0 !important;
            margin-right: rem(20) !important;
        }

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
