<template>
    <div :class="$style.wrapper">
        <MainIntro />
        <SectionOne />
        <SectionTwo />
        <div :class="$style.bgGray">
            <SectionThree />
        </div>
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <SectionSeven />
        <SectionEight />
        <div :class="$style.bgGray">
            <SectionNine />
            <SectionTen />
            <SectionEleven />
        </div>
        <SectionTwelve />
        <SectionThirteen />
        <div :class="$style.bgGray">
            <SectionFourteen />
            <SectionFifteen />
            <SectionSixteen />
        </div>
        <SectionSeventeen />
        <SectionEighteen />
        <div :class="$style.bgGray">
            <SectionNineteen />
        </div>
        <SectionTwenty />
        <SectionTwentyOne />
        <SectionTwentyTwo />
        <FooterBlock />
    </div>
</template>

<script>
import MainIntro from '~/components/MainIntro/index.vue'
import FooterBlock from '~/components/Footer/index.vue'
import SectionOne from '~/components/SectionOne/index.vue'
import SectionTwo from '~/components/SectionTwo/index.vue'
import SectionThree from '~/components/SectionThree/index.vue'
import SectionFour from '~/components/SectionFour/index.vue'
import SectionFive from '~/components/SectionFive/index.vue'
import SectionSix from '~/components/SectionSix/index.vue'
import SectionSeven from '~/components/SectionSeven/index.vue'
import SectionEight from '~/components/SectionEight/index.vue'
import SectionNine from '~/components/SectionNine/index.vue'
import SectionTen from '~/components/SectionTen/index.vue'
import SectionEleven from '~/components/SectionEleven/index.vue'
import SectionTwelve from '~/components/SectionTwelve/index.vue'
import SectionThirteen from '~/components/SectionThirteen/index.vue'
import SectionFourteen from '~/components/SectionFourteen/index.vue'
import SectionFifteen from '~/components/SectionFifteen/index.vue'
import SectionSixteen from '~/components/SectionSixteen/index.vue'
import SectionSeventeen from '~/components/SectionSeventeen/index.vue'
import SectionEighteen from '~/components/SectionEighteen/index.vue'
import SectionNineteen from '~/components/SectionNineteen/index.vue'
import SectionTwenty from '~/components/SectionTwenty/index.vue'
import SectionTwentyOne from '~/components/SectionTwentyOne/index.vue'
import SectionTwentyTwo from '~/components/SectionTwentyTwo/index.vue'

export default {
    name: 'IndexPage',
    components: {
        MainIntro,
        FooterBlock,
        SectionOne,
        SectionTwo,
        SectionThree,
        SectionFour,
        SectionFive,
        SectionSix,
        SectionSeven,
        SectionEight,
        SectionNine,
        SectionTen,
        SectionEleven,
        SectionTwelve,
        SectionThirteen,
        SectionFourteen,
        SectionFifteen,
        SectionSixteen,
        SectionSeventeen,
        SectionEighteen,
        SectionNineteen,
        SectionTwenty,
        SectionTwentyOne,
        SectionTwentyTwo
    }
}
</script>

<style module lang="scss">
    .wrapper {
        width: 100%;
        position: relative;
    }

    .bgGray {
        width: 100%;
        background-color: rgba($c-blackBlue, 0.05);
    }
</style>
