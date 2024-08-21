<template>
    <div :class="[$style.section, 'black']">
        <h3 :class="$style.title">
            Безопасность лечения
        </h3>
        <Tabs
            v-model="activeTab"
            is-rainbow
            :tabs="tabs"
            :class="$style.tabs"
        >
            <TabOne v-show="activeTab === 0" />
            <TabTwo v-show="activeTab === 1" />
        </Tabs>
    </div>
</template>

<script>
import TabOne from './components/TabOne/index.vue'
import TabTwo from './components/TabTwo/index.vue'
import Tabs from '~/components/common/TabsBlock/index.vue'

export default {
    name: 'SectionEighteen',
    components: {
        Tabs,
        TabOne,
        TabTwo
    },
    data: function () {
        return {
            activeTab: 0,
            tabs: [
                'Фармакологические особенности',
                'Особые группы пациентов'
            ]
        }
    }
}
</script>

<style module lang="scss">
    .section {
        @include wrapper;

        position: relative;
        padding-top: rem(120);
        padding-bottom: rem(120);
        z-index: 3;
    }

    .title {
        @include title;

        font-weight: $fw-extraBold;
    }

    .tabs {
        margin-top: rem(60);
    }
</style>
