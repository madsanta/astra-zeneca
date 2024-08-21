<template>
    <div :class="[$style.wrapper, 'white']">
        <div :class="$style.notice">
            <IconClick />
            Раскройте исследование, чтобы узнать больше
        </div>
        <div :class="$style.blocks">
            <AccordionBlock
                v-model="showBlocks.meteor"
                title="METEOR"
                :image="require('~/assets/img/section-17/tab-2/icon-meteor.png')"
            />
            <ContentBlock
                v-show="showBlocks.meteor"
                :content="data.meteor"
            />
            <AccordionBlock
                v-model="showBlocks.asteroid"
                title="ASTEROID"
                :image="require('~/assets/img/section-17/tab-2/icon-asteroid.png')"
            />
            <ContentBlock
                v-show="showBlocks.asteroid"
                :content="data.asteroid"
            />
            <AccordionBlock
                v-model="showBlocks.orion"
                title="ORION"
                :image="require('~/assets/img/section-17/tab-2/icon-orion.png')"
            />
            <ContentBlock
                v-show="showBlocks.orion"
                :content="data.orion"
            />
            <AccordionBlock
                v-model="showBlocks.cosmos"
                title="COSMOS"
                :image="require('~/assets/img/section-17/tab-2/icon-cosmos.png')"
            />
            <ContentBlock
                v-show="showBlocks.cosmos"
                :content="data.cosmos"
            />
            <AccordionBlock
                v-model="showBlocks.saturn"
                title="SATURN"
                :image="require('~/assets/img/section-17/tab-2/icon-saturn.png')"
            />
            <ContentBlock
                v-show="showBlocks.saturn"
                :content="data.saturn"
            />
        </div>
        <div v-show="showBlocks.saturn" :class="$style.caption">
            Nicholls SJ, Ballantyne CM, Barter PJ, Chapman MJ, Erbel RM, Libby P, Raichlen JS, Uno K, Borgman M, WolskiK, Nissen SE. Effect of two intensive statin regimens on progression of coronary disease. N Engl J Med. 2011;365(22):2078–87. doi: 10.1056/NEJMoa1110874. PMID: 22085316
        </div>
    </div>
</template>

<script>
import meteorData from '~/static/data/meteor-content.json'
import asteroidData from '~/static/data/asteroid-content.json'
import orionData from '~/static/data/orion-content.json'
import cosmosData from '~/static/data/cosmos-content.json'
import saturnData from '~/static/data/saturn-content.json'
import AccordionBlock from '~/components/common/AccordionBlock/index.vue'
import ContentBlock from '~/components/common/ContentBlock/index.vue'
import IconClick from '~/assets/svg/icon-click.svg'

export default {
    name: 'TabTwo',
    components: {
        AccordionBlock,
        ContentBlock,
        IconClick
    },
    data: function () {
        return {
            showBlocks: {
                meteor: false,
                asteroid: false,
                orion: false,
                cosmos: false,
                saturn: false
            },
            data: {
                meteor: meteorData.content,
                asteroid: asteroidData.content,
                orion: orionData.content,
                cosmos: cosmosData.content,
                saturn: saturnData.content
            }
        }
    }
}
</script>

<style module lang="scss">
    .wrapper {
        position: relative;
    }

    .notice {
        display: flex;
        align-items: center;
        justify-content: flex-end;
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
    }

    .caption {
        margin-top: rem(40);
        font-size: rem(14);
        line-height: rem(18);
        opacity: 0.7;
    }
</style>
