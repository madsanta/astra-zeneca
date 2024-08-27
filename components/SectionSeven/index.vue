<template>
    <div :class="$style.section">
        <div :class="$style.wrapper">
            <div :class="$style.inner">
                <h3 :class="[$style.title, 'white', 'text-shadow-2']">
                    Клинические симптомы атеросклероза <sup>1,15</sup>
                </h3>
                <div :class="$style.tabsWrapper">
                    <div :class="$style.tabsInner">
                        <div :class="[$style.hint, 'white']">
                            <IconClick />
                            <span class="onlyDesktop">Выберите один из пунктов на созвездии ниже</span>
                            <span class="onlyMobile">Выберите один из пунктов, чтобы узнать подробнее</span>
                        </div>
                        <div :class="[$style.arrow, 'onlyDesktop']">
                            <IconArrow />
                        </div>
                        <div :class="[$style.man, 'onlyDesktop']">
                            <img src="~/assets/img/section-7/man.png">
                        </div>
                        <div :class="$style.tabs">
                            <div
                                :class="[
                                    $style.tab,
                                    {[$style.active]: activeTab === 1},
                                    'white',
                                    'text-shadow-1'
                                ]"
                                @click="clickTab(1)"
                            >
                                Осмотр
                            </div>
                            <div
                                :class="[
                                    $style.tab,
                                    {[$style.active]: activeTab === 2},
                                    'white',
                                    'text-shadow-1'
                                ]"
                                @click="clickTab(2)"
                            >
                                Аускультация
                            </div>
                            <div
                                :class="[
                                    $style.tab,
                                    {[$style.active]: activeTab === 3},
                                    'white',
                                    'text-shadow-1'
                                ]"
                                @click="clickTab(3)"
                            >
                                Измерение АД
                            </div>
                            <div
                                :class="[
                                    $style.tab,
                                    {[$style.active]: activeTab === 4},
                                    'white',
                                    'text-shadow-1'
                                ]"
                                @click="clickTab(4)"
                            >
                                <span class="onlyDesktop">Лодыжечно-плечевой индекс&nbsp;(ЛПИ)</span>
                                <span class="onlyMobile">ЛПИ</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div :class="$style.content">
                    <BlockOne v-show="activeTab === 1" />
                    <BlockTwo v-show="activeTab === 2" />
                    <BlockThree v-show="activeTab === 3" />
                    <BlockFour v-show="activeTab === 4" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BlockOne from './components/BlockOne/index.vue'
import BlockTwo from './components/BlockTwo/index.vue'
import BlockThree from './components/BlockThree/index.vue'
import BlockFour from './components/BlockFour/index.vue'
import IconClick from '~/assets/svg/icon-click.svg'
import IconArrow from '~/assets/svg/section-7/arrow.svg'

export default {
    name: 'SectionSeven',
    components: {
        IconClick,
        IconArrow,
        BlockOne,
        BlockTwo,
        BlockThree,
        BlockFour
    },
    data: function () {
        return {
            activeTab: 2
        }
    },
    methods: {
        clickTab (activeTab) {
            if (activeTab === this.activeTab) {
                return null
            }

            this.activeTab = activeTab
        }
    }
}
</script>

<style module lang="scss">
    .section {
        position: relative;
        background-image: url('~/assets/img/section-7/bg.jpg');
        background-size: 100% / cover;
        background-attachment: scroll;
        background-position: top center;
        background-repeat: no-repeat;
        padding-top: rem(130);
        overflow: hidden;

        @include mobile {
            background-image: url('~/assets/img/section-7/bg-mobile.jpg');
            padding-top: rem(110);
        }
    }

    .wrapper {
        @include wrapper;
    }

    .inner {
        width: 100%;
        position: relative;
    }

    .title {
        @include title;

        width: calc(823 * 100% / 1440);

        @include mobile {
            width: 100%;
        }
    }

    .tabsWrapper {
        position: absolute;
        width: rem(504); // по подсказке взята ширина
        right: 0;
        bottom: 0;

        @include mobile {
            position: relative;
            width: 100%;
            left: 0;
            top: 0;
        }
    }

    .tabsInner {
        position: relative;
        width: 100%;
    }

    .hint {
        position: absolute;
        top: rem(-56);
        left: 50%;
        right: 50%;
        display: flex;
        align-items: center;
        width: 100%;
        font-size: rem(17);
        font-weight: $fw-medium;
        padding: rem(17) rem(44);
        border-radius: rem(20);
        background:
            linear-gradient(to right, rgba(#000, 0.2), rgba(#000, 0.2)),
            linear-gradient(to right, rgba(#fff, 0.15), rgba(#fff, 0.15));
        border: 1px solid rgba(#fff, 0.3);
        backdrop-filter: blur(15);
        box-shadow: 0 rem(20) rem(40) rem(-20) rgba(#000, 0.8);
        transform: translate(-50%, -100%);

        @include mobile {
            position: relative;
            width: 100%;
            left: 0;
            right: 0;
            top: 0;
            margin-top: rem(30);
            background: none;
            padding: 0;
            border-radius: 0;
            font-size: rem(12);
            transform: none;
            border: none;
            backdrop-filter: none;
            box-shadow: none;
        }

        svg {
            flex: 0 0 auto;
            width: rem(30);
            height: rem(30);
            margin-right: rem(15);
            fill: currentColor;

            @include mobile {
                margin-right: rem(10);
            }
        }
    }

    .arrow {
        position: absolute;
        top: -4%;
        right: 5%;
        width: rem(126);
        height: rem(120);
    }

    .man {
        width: calc(402 * 100% / 504);
        margin: 0 auto;
    }

    .tabs {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;

        @include mobile {
            position: relative;
            height: auto;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            margin-top: rem(15);
        }
    }

    .tab {
        position: absolute;
        padding: rem(19) rem(26) rem(21);
        min-width: rem(206);
        max-width: rem(330);
        background-color: #000;
        border-radius: rem(30);
        font-size: rem(22);
        font-weight: $fw-medium;
        cursor: pointer;
        text-align: center;
        text-transform: uppercase;
        transition: background-color 0.2s, font-weight 0.2s;

        @include mobile {
            position: relative;
            top: 0 !important;
            right: 0 !important;
            left: 0 !important;
            bottom: 0 !important;
            padding: rem(12) rem(19);
            min-width: auto;
            max-width: initial;
            border-radius: rem(20);
            margin-right: rem(5);
            margin-bottom: rem(5);
            font-size: rem(14);
        }

        &:nth-child(1) {
            top: 10.5%;
            border-top-right-radius: 5px;

            @include mobile {
                border-top-right-radius: rem(20);
                border-bottom-left-radius: 5px;
            }
        }

        &:nth-child(2) {
            top: 20.5%;
            right: -2.5%;
            border-bottom-left-radius: 5px;
        }

        &:nth-child(3) {
            top: 41%;
            left: 3%;
            border-top-right-radius: 5px;

            @include mobile {
                border-top-right-radius: rem(20);
                border-bottom-left-radius: 5px;
            }
        }

        &:nth-child(4) {
            bottom: 18.5%;
            left: 16.5%;
            border-top-left-radius: 5px;

            @include mobile {
                border-top-left-radius: rem(20);
                border-bottom-left-radius: 5px;
            }
        }

        &:hover,
        &.active {
            background-color: $c-pink;
            font-weight: $fw-bold;
        }
    }

    .content {
        width: calc(823 * 100% / 1440);
        margin-top: rem(50);

        @include mobile {
            margin-top: rem(30);
            width: 100%;
        }
    }
</style>
