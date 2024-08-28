<template>
    <div :class="$style.wrapper">
        <MainIntro />
        <div :class="$style.popupWrapper">
            <div :class="$style.popup">
                <ButtonAction preset="pink" title="Войти" :href="`https://sso.az-most.ru/signin?source=${source}&next_url=${next}`" />
            </div>
            <div :class="$style.popupOverflow" />
        </div>
    </div>
</template>

<script>
import MainIntro from '~/components/MainIntro/index.vue'
import ButtonAction from '~/components/common/ButtonAction/index.vue'

export default {
    name: 'Login',
    components: {
        ButtonAction,
        MainIntro
    },
    data: function () {
        return {
            source: '',
            next: ''
        }
    },
    mounted () {
        this.source = window.location.href
        this.next = window.location.origin
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
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 3;
        transform: translate(-50%, -50%);

        &Overflow {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            z-index: 2;
            background: rgba(#000, 0.65);

            @include mobile {
                height: 100svh;
            }
        }
    }
</style>
