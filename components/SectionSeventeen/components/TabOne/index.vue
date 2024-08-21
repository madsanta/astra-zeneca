<template>
    <div :class="[$style.wrapper, 'white']">
        <div :class="$style.blockTitle">
            Результаты исследований STELLAR, COMETS, LUNAR, POLARIS, PULSAR убедительно продемонстрировали превосходство розувастатина над другими статинами <span class="blue">в снижении уровня ЛНП</span>
        </div>
        <div :class="$style.notice">
            <IconClick />
            Раскройте исследование, чтобы узнать больше
        </div>
        <div :class="$style.blocks">
            <AccordionBlock
                v-model="showBlocks.stellar"
                title="STELLAR"
                :image="require('~/assets/img/section-17/tab-1/icon-stellar.png')"
            />
            <ContentBlock
                v-show="showBlocks.stellar"
                :content="data.stellar"
            />
            <AccordionBlock
                v-model="showBlocks.lunar"
                title="LUNAR"
                :image="require('~/assets/img/section-17/tab-1/icon-lunar.png')"
            />
            <ContentBlock
                v-show="showBlocks.lunar"
                :content="data.lunar"
            />
            <AccordionBlock
                v-model="showBlocks.comets"
                title="COMETS"
                :image="require('~/assets/img/section-17/tab-1/icon-comets.png')"
            />
            <ContentBlock
                v-show="showBlocks.comets"
                :content="data.comets"
            />
            <AccordionBlock
                v-model="showBlocks.polaris"
                title="POLARIS"
                :image="require('~/assets/img/section-17/tab-1/icon-polaris.png')"
            />
            <ContentBlock
                v-show="showBlocks.polaris"
                :content="data.polaris"
            />
            <AccordionBlock
                v-model="showBlocks.pulsar"
                title="PULSAR"
                :image="require('~/assets/img/section-17/tab-1/icon-pulsar.png')"
            />
            <ContentBlock
                v-show="showBlocks.pulsar"
                :content="data.pulsar"
            />
        </div>
        <div :class="$style.blockTitle">
            Эффективность розувастатина <span class="blue">в достижении целевых уровней ХС ЛНП</span> была изучена в исследованиях MERCURY I и II, DISCOVERY, ECLIPSE, ORBITAL
        </div>
        <div :class="$style.blocks">
            <AccordionBlock
                v-model="showBlocks.discovery"
                title="DISCOVERY"
                :image="require('~/assets/img/section-17/tab-1/icon-discovery.png')"
            />
            <ContentBlock
                v-show="showBlocks.discovery"
                :content="data.discovery"
            />
            <AccordionBlock
                v-model="showBlocks.mercury"
                title="MERCURY-I и MERCURY-II"
                :image="require('~/assets/img/section-17/tab-1/icon-mercury.png')"
            />
            <ContentBlock
                v-show="showBlocks.mercury"
                :content="data.mercury"
            />
            <AccordionBlock
                v-model="showBlocks.eclipse"
                title="ECLIPSE"
                :image="require('~/assets/img/section-17/tab-1/icon-eclipse.png')"
            />
            <ContentBlock
                v-show="showBlocks.eclipse"
                :content="data.eclipse"
            />
            <AccordionBlock
                v-model="showBlocks.orbital"
                title="ORBITAL"
                :image="require('~/assets/img/section-17/tab-1/icon-orbital.png')"
            />
            <ContentBlock
                v-show="showBlocks.orbital"
                :content="data.orbital"
            />
            <AccordionBlock
                v-model="showBlocks.voyager"
                title="VOYAGER"
                :image="require('~/assets/img/section-17/tab-1/icon-voyager.png')"
            />
            <ContentBlock
                v-show="showBlocks.voyager"
                :content="data.voyager"
            />
        </div>
        <div :class="$style.imageTitle">
            Исследования снижения уровня ХС ЛНП
        </div>
        <div :class="$style.image">
            <img src="~/assets/img/section-17/image.png">
        </div>
    </div>
</template>

<script>
import stellarData from '~/static/data/stellar-content.json'
import lunarData from '~/static/data/lunar-content.json'
import cometsData from '~/static/data/comets-content.json'
import polarisData from '~/static/data/polaris-content.json'
import pulsarData from '~/static/data/pulsar-content.json'
import discoveryData from '~/static/data/discovery-content.json'
import mercuryData from '~/static/data/mercury-content.json'
import eclipseData from '~/static/data/eclipse-content.json'
import orbitalData from '~/static/data/orbital-content.json'
import voyagerData from '~/static/data/voyager-content.json'
import AccordionBlock from '~/components/common/AccordionBlock/index.vue'
import ContentBlock from '~/components/common/ContentBlock/index.vue'
import IconClick from '~/assets/svg/icon-click.svg'

export default {
    name: 'TabOne',
    components: {
        AccordionBlock,
        ContentBlock,
        IconClick
    },
    data: function () {
        return {
            showBlocks: {
                stellar: false,
                lunar: false,
                comets: false,
                polaris: false,
                pulsar: false,
                discovery: false,
                mercury: false,
                eclipse: false,
                orbital: false,
                voyager: false
            },
            data: {
                stellar: stellarData.content,
                lunar: lunarData.content,
                comets: cometsData.content,
                polaris: polarisData.content,
                pulsar: pulsarData.content,
                discovery: discoveryData.content,
                mercury: mercuryData.content,
                eclipse: eclipseData.content,
                orbital: orbitalData.content,
                voyager: voyagerData.content
            }
        }
    }
}
</script>

<style module lang="scss">
    .wrapper {
        position: relative;
    }

    .blockTitle {
        @include block-title;

        margin-top: rem(90);

        &:first-child {
            margin-top: 0;
        }
    }

    .notice {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-top: rem(10);
        font-size: rem(17);
        font-weight: $fw-medium;

        svg {
            flex: 0 0 auto;
            width: rem(30);
            height: rem(30);
            margin-right: rem(15);
            fill: currentColor;
        }
    }

    .blocks {
        margin-top: rem(20);

        .blockTitle + & {
            margin-top: rem(40);
        }
    }

    .image {
        margin-top: rem(30);

        &Title {
            @include block-title;

            font-weight: $fw-bold;
            text-align: center;
            margin-top: rem(90);
        }
    }
</style>
