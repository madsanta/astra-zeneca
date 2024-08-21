<template>
    <div :class="$style.wrapper">
        <div :class="[$style.tabs, {[$style.rainbow]: isRainbow}]">
            <div
                v-for="(tab, index) in tabs"
                :key="tab"
                :class="[$style.tab, {[$style.active]: index === value}]"
                :style="{
                    width: (100 / tabs.length) + '%'
                }"
                @click="changeTab(index)"
            >
                <div :class="$style.tabText">
                    {{ tab }}
                </div>
            </div>
            <div
                :class="$style.tabBg"
                :style="{
                    width: (100 / tabs.length) + '%',
                    left: offsetTab + '%'
                }"
            />
        </div>
        <div :class="$style.content">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: 'TabsBlock',
    props: {
        tabs: {
            type: Array,
            required: true
        },
        isRainbow: {
            type: Boolean,
            default: false
        },
        value: {
            type: Number,
            required: true
        }
    },
    emits: ['input'],
    computed: {
        offsetTab () {
            return (100 / this.tabs.length) * this.value
        }
    },
    methods: {
        changeTab (tab) {
            this.$emit('input', tab)
        }
    }
}
</script>

<style module lang="scss">
    .wrapper {
        position: relative;
    }

    .tabs {
        position: relative;
        border-radius: rem(30);
        background-color: rgba(#fff, 0.1);
        border: 1px solid rgba(#fff, 0.3);
        backdrop-filter: blur(25px);
        box-shadow: 0 rem(20) rem(40) rem(-20) rgba(#000, 0.6);
        height: rem(92);
        display: flex;
        align-items: center;
        justify-content: center;

        &.rainbow {
            @include rainbow-block();

            .tab:not(.active) {
                text-shadow: none;
                color: $c-blackBlue;
                border-left-color: $c-blackBlue;
            }
        }
    }

    .tab {
        color: #fff;
        font-size: rem(20);
        font-weight: $fw-medium;
        text-shadow: 0 1px 1px rgba(#000, 0.4);
        border-left: 1px solid rgba(#fff, 0.3);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: text-shadow 0.2s, color 0.2s, font-weight 0.2s, border-color 0.2s;

        &:first-child {
            border: none;
        }

        &.active {
            font-weight: $fw-bold;
            border-left-color: transparent !important;

            & + .tab {
                border-left-color: transparent !important;
                transition: text-shadow 0.2s, color 0.2s, font-weight 0.2s, border-color 0s 0.2s;
            }
        }

        &Text {
            position: relative;
            padding: rem(11) rem(20) rem(12);
            text-align: center;
            z-index: 2;
        }

        &Bg {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            z-index: 1;
            border-radius: rem(30);
            background: $c-pink;
            backdrop-filter: blur(25px);
            box-shadow: 0 rem(20) rem(30) rem(-30) rgba(#000, 0.55);
            transform: translate(0, 0);
            transition: left 0.2s;
        }
    }

    .content {
        margin-top: rem(50);
    }
</style>
