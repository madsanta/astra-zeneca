<template>
    <div :class="[$style.pagination, 'onlyMobile']">
        <div v-for="i in count" :key="i" :class="[$style.dot, {[$style.active]: i - 1 === index}]" @click="onPageClick(i - 1)">
            <div />
        </div>
    </div>
</template>

<script>
export default {
    name: 'SliderPagination',
    props: {
        count: {
            type: Number,
            required: true
        },
        index: {
            type: Number,
            required: true
        }
    },
    emits: ['onPageClick'],
    methods: {
        onPageClick (i) {
            this.$emit('onPageClick', i)
        }
    }
}
</script>

<style module lang="scss">
    .pagination {
        position: relative;
        margin-top: rem(10);
        display: flex;
        justify-content: center;
        z-index: 15;
    }

    .dot {
        margin: rem(5);
    }

    .dot > div {
        border-radius: 100%;
        width: rem(10);
        height: rem(10);
        background: #8090AF;
    }

    .dot.active > div {
        background: $c-pink;
    }
</style>
