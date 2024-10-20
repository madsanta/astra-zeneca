<template>
    <div :class="[$style.section, 'black']">
        <div :class="[$style.block, {[$style.active]: isShow}]">
            <div :class="$style.header">
                <div :class="$style.headerImg">
                    <img src="~/assets/img/section-14/krestor.jpg">
                </div>
                <div :class="$style.headerText">
                    Розувастатин (Крестор®) <span class="pink">является одним из самых эффективных препаратов</span> в классе ингибиторов ГМГ-КоА-редуктазы
                </div>
            </div>
            <div :class="$style.items">
                <div :class="$style.item">
                    <IconCheck />
                    <div :class="$style.itemText">
                        Эффективность розувастатина обусловлена полярной метансульфонамидной группой, которая обеспечивает взаимодействие с ГМГ-КоА-редуктазой, образуя наибольшее количество связывающих доменов. <sup>29</sup>
                    </div>
                </div>
                <div :class="$style.item">
                    <IconCheck />
                    <div :class="$style.itemText">
                        Период полувыведения розувастатина составляет около 19 часов и является самым продолжительным среди препаратов своего класса. <sup>30</sup>
                    </div>
                </div>
                <div :class="$style.item">
                    <IconCheck />
                    <div :class="$style.itemText">
                        Такие факторы как, возраст, пол, время приема препарата или пищи не оказывают значимого клинического влияния на фармакокинетические свойства розувастатина. <sup>31, 32, 35</sup>
                    </div>
                </div>
                <div :class="$style.item">
                    <IconCheck />
                    <div :class="$style.itemText">
                        Абсолютная биодоступность розувастатина примерно равна 20% и сопоставима с таковыми у аторвастатина, флувастатина, правастатина и выше, чем у ловастатина и симвастатина
                        {{ '< 5 %' }}. <sup>34</sup>
                    </div>
                </div>
                <div :class="$style.item">
                    <IconCheck />
                    <div :class="$style.itemText">
                        Гидрофильность розувастатина, в отличие от остальных статинов, являющихся липофильными, определяет низкую миотоксичность препарата в связи с незначительным проникновением во внепеченочные ткани. <sup>33</sup>
                    </div>
                </div>
                <div :class="[$style.itemsOverflow, 'onlyMobile']" />
            </div>
            <div :class="[$style.more, 'onlyMobile', 'pink']" @click="isShow = !isShow">
                {{ !isShow ? 'Показать полностью' : 'Скрыть' }}
            </div>
        </div>
    </div>
</template>

<script>
import IconCheck from '~/assets/svg/icon-check.svg'

export default {
    name: 'SectionFourteen',
    components: {
        IconCheck
    },
    data: function () {
        return {
            isShow: false
        }
    }
}
</script>

<style module lang="scss">
    .section {
        @include wrapper;

        position: relative;
        top: rem(-120);

        @include mobile {
            top: rem(-100);
        }
    }

    .block {
        padding: rem(50);

        @include rainbow-block(top, null, false);

        @include mobile {
            position: relative;
            padding: rem(20) rem(20) rem(30);
        }
    }

    .header {
        display: flex;

        @include mobile {
            flex-direction: column;
        }

        &Img {
            position: relative;
            flex: 0 0 auto;
            width: rem(201);
            margin-top: rem(-19);
            margin-left: rem(-10);

            @include relativeHeight(201, 132);

            @include mobile {
                width: rem(115);
                margin-top: 0;
                margin-left: 0;
            }

            img {
                @include absoluteCoverImg();
            }
        }

        &Text {
            @include block-title;

            margin-left: rem(47);

            @include mobile {
                margin-top: rem(10);
                margin-left: 0;
                font-size: rem(17);
                line-height: rem(26);
            }
        }
    }

    .items {
        margin-top: rem(30);

        @include mobile {
            margin-top: rem(20);
        }

        &Overflow {
             position: absolute;
             left: 0;
             right: 0;
             bottom: 0;
             width: 100%;
             height: rem(300);
             background: linear-gradient(to bottom, rgba(#fff, 0), #fff 70%);

             .active & {
                 opacity: 0;
             }
         }
    }

    .item {
        display: flex;
        align-items: center;
        margin-top: rem(15);

        @include mobile {
            display: none;
            align-items: flex-start;

            .active & {
                display: flex;
            }
        }

        &:first-child {
            margin-top: 0;

            @include mobile {
                display: flex;
            }
        }

        svg {
            flex: 0 0 auto;
            width: rem(51);
            height: rem(51);

            @include mobile {
                width: rem(30);
                height: rem(30);
            }
        }

        &Text {
            margin-left: rem(10);
            font-size: rem(18);
            font-weight: $fw-medium;

            @include mobile {
                margin-left: rem(15);
                font-size: rem(15);
            }
        }
    }

    .more {
        @include moreButton;

        margin-top: rem(20);
        text-align: center;
    }
</style>
