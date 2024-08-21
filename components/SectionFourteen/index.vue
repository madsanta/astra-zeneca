<template>
    <div :class="[$style.section, 'black']">
        <div :class="$style.block">
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
    }
}
</script>

<style module lang="scss">
    .section {
        @include wrapper;

        position: relative;
        top: rem(-120);
    }

    .block {
        padding: rem(50);

        @include rainbow-block(top, null, false);
    }

    .header {
        display: flex;

        &Img {
            position: relative;
            flex: 0 0 auto;
            width: rem(201);
            margin-top: rem(-19);
            margin-left: rem(-10);

            @include relativeHeight(201, 132);

            img {
                @include absoluteCoverImg();
            }
        }

        &Text {
            @include block-title;

            margin-left: rem(47);
        }
    }

    .items {
        margin-top: rem(30);
    }

    .item {
        display: flex;
        align-items: center;
        margin-top: rem(15);

        &:first-child {
            margin-top: 0;
        }

        svg {
            flex: 0 0 auto;
            width: rem(51);
            height: rem(51);
        }

        &Text {
            margin-left: rem(10);
            font-size: rem(18);
            font-weight: $fw-medium;
        }
    }
</style>
