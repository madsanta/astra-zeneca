<template>
    <div :class="$style.wrapper">
        <div :class="$style.logo">
            <NuxtLink to="/">
                <Logo />
            </NuxtLink>
        </div>
        <nav :class="$style.menu">
            <NuxtLink to="/">
                Об атеросклерозе
            </NuxtLink>
            <NuxtLink to="/">
                Диагностика дислипидемий
            </NuxtLink>
            <NuxtLink to="/">
                Лечение дислипидемий
            </NuxtLink>
            <NuxtLink to="/">
                Исследования GALAXY
            </NuxtLink>
            <NuxtLink to="/">
                Безопасность лечения
            </NuxtLink>
        </nav>
    </div>
</template>

<script>
import Logo from '~/assets/svg/logo.svg'

export default {
    name: 'TopMenu',
    components: { Logo }
}
</script>

<style module lang="scss">
    .wrapper {
        position: fixed;
        max-width: 1600px;
        width: 100%;
        top: 0;
        left: 50%;
        right: 50%;
        transform: translate(-50%, 0);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: rem(11) rem(40) rem(19);
        background: rgba(#011039, 0.75);
        border: 1px solid rgba(#fff, 0.4);
        border-radius: 0 0 rem(40) rem(40);
        backdrop-filter: blur(15px);
        z-index: 99;
    }

    .logo {
        width: calc(120 * 100% / 1440);
    }

    .menu {
        padding-top: rem(8);

        & a {
            color: #fff;
            font-weight: $fw-medium;
            font-size: rem(16);
            transition: opacity 0.1s ease-out;

            &:hover {
                opacity: 0.7;
            }

            &:not(:first-child) {
                margin-left: rem(40);
            }
        }
    }
</style>
