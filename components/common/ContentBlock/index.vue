<template>
    <div :class="$style.content">
        <!-- eslint-disable vue/no-v-html -->
        <template v-for="(block, index) in content">
            <div
                v-if="block.type === 'columns'"
                :key="index"
                :class="$style.columns"
            >
                <div v-for="(column, indexColumn) in block.content" :key="indexColumn" :class="$style.column">
                    <template v-for="(blockColumn, blockColumnIndex) in column">
                        <TextBlock
                            v-if="blockColumn.type === 'text'"
                            :key="blockColumnIndex"
                            :is-center="blockColumn.content.isCenter"
                            :is-rainbow="blockColumn.content.isRainbow"
                            :size="blockColumn.content.size"
                            :font-style="blockColumn.content.style"
                            :is-list="Array.isArray(blockColumn.content.text)"
                            :text="Array.isArray(blockColumn.content.text) ? prepareContent(blockColumn.content.text) : blockColumn.content.text ? [prepareContent(blockColumn.content.text)] : []"
                            :title="prepareContent(blockColumn.content.title)"
                            :caption="prepareContent(blockColumn.content.caption)"
                        />
                        <ImageBlock
                            v-if="blockColumn.type === 'image'"
                            :key="blockColumnIndex"
                            :is-shadow="blockColumn.content.isShadow"
                            :src="Array.isArray(blockColumn.content.src) ? blockColumn.content.src : [blockColumn.content.src]"
                            :is-slider="Array.isArray(blockColumn.content.src)"
                            :caption="prepareContent(blockColumn.content.caption)"
                            :is-caption-center="blockColumn.content.isCaptionCenter"
                            :title="prepareContent(blockColumn.content.title)"
                            :align="blockColumn.content.align"
                        />
                        <LinksBlock
                            v-if="blockColumn.type === 'links'"
                            :key="blockColumnIndex"
                            :buttons="mappedLinks(blockColumn.content.buttons)"
                        />
                    </template>
                </div>
            </div>
            <TextBlock
                v-if="block.type === 'text'"
                :key="index"
                :is-center="block.content.isCenter"
                :is-rainbow="block.content.isRainbow"
                :size="block.content.size"
                :font-style="block.content.style"
                :is-list="Array.isArray(block.content.text)"
                :text="Array.isArray(block.content.text) ? prepareContent(block.content.text) : block.content.text ? [prepareContent(block.content.text)] : []"
                :title="prepareContent(block.content.title)"
                :caption="prepareContent(block.content.caption)"
            />
            <ImageBlock
                v-if="block.type === 'image'"
                :key="index"
                :is-shadow="block.content.isShadow"
                :src="Array.isArray(block.content.src) ? block.content.src : [block.content.src]"
                :is-slider="Array.isArray(block.content.src)"
                :caption="prepareContent(block.content.caption)"
                :is-caption-center="block.content.isCaptionCenter"
                :title="prepareContent(block.content.title)"
                :align="block.content.align"
            />
            <LinksBlock
                v-if="block.type === 'links'"
                :key="index"
                :buttons="mappedLinks(block.content.buttons)"
            />
        </template>
        <!-- eslint-enable -->
    </div>
</template>

<script>
import TextBlock from './components/TextBlock/index.vue'
import ImageBlock from './components/ImageBlock/index.vue'
import LinksBlock from './components/LinksBlock/index.vue'

export default {
    name: 'ContentBlock',
    components: {
        TextBlock,
        ImageBlock,
        LinksBlock
    },
    props: {
        content: {
            type: Array,
            required: true
        }
    },
    methods: {
        /*
        * Функция по маркерам в тексте заменяет на верстку
        * ^^{text}^^ -> <sup>text</sup>
        * ##{text}## -> <p>text</p>
        * **{text}** -> <span class="pink">text</span>
        * */
        formattedText (text) {
            return text
                .replace(/\^\^{/g, '<sup>')
                .replace(/}\^\^/g, '</sup>')
                .replace(/\*\*{/g, '<span class="pink">')
                .replace(/}\*\*/g, '</span>')
                .replace(/##{/g, '<p>')
                .replace(/}##/g, '</p>')
        },
        prepareContent (text) {
            if (Array.isArray(text)) {
                return text.map(item => this.formattedText(item))
            }

            return text ? this.formattedText(text) : null
        },
        mappedLinks (links) {
            const buttons = [...links]

            return buttons.map(link => ({
                ...link,
                title: this.prepareContent(link.title)
            }))
        }
    }
}
</script>

<style module lang="scss">
    .content {
        position: relative;
        padding-top: rem(30);
        padding-bottom: rem(20);

        &:last-child {
            padding-bottom: 0;
        }

        span {
            font-weight: $fw-bold;
        }
    }

    .columns {
        display: flex;
        justify-content: space-between;
        margin-top: rem(40);

        &:first-child {
            margin-top: 0;
        }
    }

    .column {
        flex: 0 0 auto;
        width: calc(700 * 100% / 1440);
        margin-left: rem(40);

        &:first-child {
            flex: 1 1 auto;
            width: 100%;
            margin-left: 0;
        }
    }
</style>
