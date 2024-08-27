<template>
    <div :class="$style.wrapper">
        <MainIntro />
        <div :class="$style.popupWrapper">
            <div :class="$style.popup">
                <a :href="`https://sso.az-most.ru/signin?source=${source}&next_url=${next}`">Войти</a>
            </div>
            <div :class="$style.popupOverflow" />
        </div>
    </div>
</template>

<script>
import MainIntro from '~/components/MainIntro/index.vue'

export default {
    name: 'Login',
    components: {
        MainIntro
    },
    data: function () {
        return {
            source: '',
            next: ''
        }
    },
    mounted () {
        const host = window.location.host
        const href = window.location.href
        this.source = href
        this.next = host
    }
}
</script>

<style module lang="scss">
    .wrapper {
        width: 100%;
        height: 100vh;
        overflow: hidden;
    }

    .popupWrapper {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        z-index: 1000;
    }

    .popup {
        position: absolute;
        top: 50%;
        left: 50%;
        width: rem(300);
        height: rem(150);
        background: #fff;
        padding: rem(30);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 3;
        transform: translate(-50%, -50%);

        a {
            font-size: rem(20);
            color: $c-blackBlue;
            padding: rem(10);
            border: 1px solid $c-blackBlue;
        }

        &Overflow {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            z-index: 2;
            background: rgba(#000, 0.8);
        }
    }
</style>
