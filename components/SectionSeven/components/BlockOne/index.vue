<template>
    <div :class="$style.block">
        <div :class="[$style.title, 'pink', 'text-shadow-2']">
            Осмотр <sup>12-14</sup>
        </div>
        <div :class="[$style.content, {[$style.isShow]: isShowMore}]">
            <div :class="$style.column">
                <div :class="$style.item">
                    <div :class="$style.icon">
                        <img src="~/assets/img/section-7/block-1/icon-1.jpg">
                    </div>
                    <div :class="[$style.text,'white', 'text-shadow-1']">
                        <span class="pink">Ксантомы</span> на теле, чаще в области разгибательных поверхностей локтевых и коленных суставов, копчика и ягодиц
                    </div>
                </div>
                <div :class="$style.item">
                    <div :class="$style.icon">
                        <img src="~/assets/img/section-7/block-1/icon-3.jpg">
                    </div>
                    <div :class="[$style.text,'white', 'text-shadow-1']">
                        <span class="pink">Липоидная дуга роговицы</span> у&nbsp;лиц моложе 45 лет
                    </div>
                </div>
                <div :class="$style.item">
                    <div :class="$style.icon">
                        <img src="~/assets/img/section-7/block-1/icon-5.jpg">
                    </div>
                    <div :class="[$style.text,'white', 'text-shadow-1']">
                        <span class="pink">Симптом Франка</span> – вертикальная или диагональная складка на мочке уха
                    </div>
                </div>
                <div :class="$style.item">
                    <div :class="$style.icon">
                        <img src="~/assets/img/section-7/block-1/icon-7.jpg">
                    </div>
                    <div :class="[$style.text,'white', 'text-shadow-1']">
                        <span class="pink">Симптом Габриелли</span> – обильный рост волос на ушных раковинах
                    </div>
                </div>
                <div :class="$style.item">
                    <div :class="$style.icon">
                        <img src="~/assets/img/section-7/block-1/icon-9.jpg">
                    </div>
                    <div :class="[$style.text,'white', 'text-shadow-1']">
                        Потеря чувствительности и способности распознавать боль и легкое прикосновение
                    </div>
                </div>
            </div>
            <div :class="$style.column">
                <div :class="$style.item">
                    <div :class="$style.icon">
                        <img src="~/assets/img/section-7/block-1/icon-2.jpg">
                    </div>
                    <div :class="[$style.text,'white', 'text-shadow-1']">
                        <span class="pink">Ксантелазмы</span> в области век
                    </div>
                </div>
                <div :class="$style.item">
                    <div :class="$style.icon">
                        <img src="~/assets/img/section-7/block-1/icon-4.jpg">
                    </div>
                    <div :class="[$style.text,'white', 'text-shadow-1']">
                        Раннее поседение волос на голове
                    </div>
                </div>
                <div :class="$style.item">
                    <div :class="$style.icon">
                        <img src="~/assets/img/section-7/block-1/icon-6.jpg">
                    </div>
                    <div :class="[$style.text,'white', 'text-shadow-1']">
                        Утолщение ахилловых сухожилий > 1 см
                    </div>
                </div>
                <div :class="$style.item">
                    <div :class="$style.icon">
                        <img src="~/assets/img/section-7/block-1/icon-8.jpg">
                    </div>
                    <div :class="[$style.text,'white', 'text-shadow-1']">
                        Выпадение волос на икрах и атрофия мышц
                    </div>
                </div>
                <div :class="$style.item">
                    <div :class="$style.icon">
                        <img src="~/assets/img/section-7/block-1/icon-10.jpg">
                    </div>
                    <div :class="[$style.text,'white', 'text-shadow-1']">
                        Нарушение вибрационной чувствительности
                    </div>
                </div>
            </div>
        </div>
        <ButtonAction
            :class="[$style.button, 'onlyMobile']"
            preset="white"
            :title="!isShowMore ? 'Показать полностью' : 'Скрыть'"
            @handleClick="isShowMore = !isShowMore"
        />
    </div>
</template>

<script>
import ButtonAction from '~/components/common/ButtonAction/index.vue'

export default {
    name: 'BlockOne',
    components: {
        ButtonAction
    },
    data: function () {
        return {
            isShowMore: false
        }
    }
}
</script>

<style module lang="scss">
    .block {
        width: calc(944 * 100% / 823);
        padding-bottom: rem(24); // 44 - 20 у каждого блока

        @include mobile {
            width: 100%;
            padding-bottom: rem(85);
        }
    }

    .title {
        @include block-title;
    }

    .content {
        margin-top: rem(35);
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        @include mobile {
            margin-top: rem(20);
        }
    }

    .button {
        margin-top: rem(10);
    }

    .column {
        width: calc(452 * 100% / 944);

        @include mobile {
            width: 100%;

            &:last-child {
                display: none;

                .isShow & {
                    display: block;
                }
            }
        }
    }

    .item {
        display: flex;
        align-items: center;
        margin-bottom: rem(20);

        @include mobile {

            &:nth-child(n + 4) {
                display: none;

                .isShow & {
                    display: flex;
                }
            }
        }
    }

    .icon {
        position: relative;
        width: calc(140 * 100% / 452);
        flex: 0 0 auto;
        border-radius: 100%;
        overflow: hidden;

        @include relativeHeight(140, 140);

        @include mobile {
            width: rem(104);
        }

        img {
            @include absoluteCoverImg();
        }
    }

    .text {
        margin-left: rem(40);
        font-size: rem(18);
        font-weight: $fw-medium;

        @include mobile {
            font-size: rem(15);
            margin-left: rem(20);
        }

        span {
            font-weight: $fw-bold;
        }
    }
</style>
