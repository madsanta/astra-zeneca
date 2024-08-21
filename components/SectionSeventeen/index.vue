<template>
    <div :class="$style.section">
        <div :class="$style.bg" />
        <div :class="$style.bgStars">
            <img src="~/assets/img/section-12/bg-stars.png">
        </div>
        <div :class="$style.bgCenter">
            <img src="~/assets/img/section-17/bg-center.png">
        </div>
        <div :class="[$style.wrapper, 'white']">
            <div :class="$style.title">
                Программа клинических исследований GALAXY
            </div>
            <Tabs
                v-model="activeTab"
                :tabs="tabs"
                :class="$style.tabs"
            >
                <TabOne v-show="activeTab === 0" />
                <TabTwo v-show="activeTab === 1" />
                <TabThree v-show="activeTab === 2" />
            </Tabs>
        </div>
    </div>
</template>

<script>
import TabOne from './components/TabOne/index.vue'
import TabTwo from './components/TabTwo/index.vue'
import TabThree from './components/TabThree/index.vue'
import Tabs from '~/components/common/TabsBlock/index.vue'

export default {
    name: 'SectionSeventeen',
    components: {
        Tabs,
        TabOne,
        TabTwo,
        TabThree
    },
    data: function () {
        return {
            activeTab: 0,
            tabs: [
                'Атерогенный липидный профиль и\u00A0маркеры\u00A0воспаления',
                'Влияние на развитие атеросклероза',
                'Влияние на сердечно-сосудистые исходы'
            ]
        }
    }
}
</script>

<style module lang="scss">
    .section {
        position: relative;
        overflow: clip;

        @include block-rounded-top(-47);
    }

    .bg {
        @include section-gradient-bg;

        position: absolute;
        z-index: 2;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
    }

    .bgStars {
        position: absolute;
        top: rem(-35);
        right: rem(-325);
        z-index: 2;
    }

    .bgCenter {
        position: absolute;
        width: 100%;
        top: rem(507);
        left: 0;
        right: 0;
        z-index: 2;
    }

    .wrapper {
        @include wrapper;

        position: relative;
        padding-top: rem(93);
        padding-bottom: rem(120);
        z-index: 3;
    }

    .title {
        @include title;

        width: calc(823 * 100% / 1440);
    }

    .tabs {
        margin-top: rem(60);
    }
</style>
