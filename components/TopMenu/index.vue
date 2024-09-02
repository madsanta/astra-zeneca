<template>
    <div id="TopMenu" :class="$style.wrapper">
        <div :class="$style.logo">
            <NuxtLink to="/">
                <Logo />
            </NuxtLink>
        </div>
        <div :class="[$style.burger, 'onlyMobile']" @click="openMenu">
            <IconMenuBurger />
        </div>
        <div :class="[$style.menu, {[$style.isOpen]: isOpen}]">
            <div :class="[$style.menuTop, 'onlyMobile']">
                <div :class="$style.menuTopLogo">
                    <LogoInvert />
                </div>
                <div :class="$style.menuTopIcon" @click="closeMenu">
                    <IconCloseCircle />
                </div>
            </div>
            <nav :class="$style.menuInner">
                <NuxtLink to="#about" :custom="true">
                    <a @click="closeMenu">Об атеросклерозе</a>
                </NuxtLink>
                <NuxtLink to="#diagnostic" :custom="true">
                    <a @click="closeMenu">Диагностика дислипидемий</a>
                </NuxtLink>
                <!--                <NuxtLink to="/">-->
                <!--                    Лечение дислипидемий-->
                <!--                </NuxtLink>-->
                <!--                <NuxtLink to="/">-->
                <!--                    Исследования GALAXY-->
                <!--                </NuxtLink>-->
                <!--                <NuxtLink to="/">-->
                <!--                    Безопасность лечения-->
                <!--                </NuxtLink>-->
            </nav>
        </div>
    </div>
</template>

<script>
import Logo from '~/assets/svg/logo.svg'
import LogoInvert from '~/assets/svg/logo-invert.svg'
import IconMenuBurger from '~/assets/svg/icon-menu-burger.svg'
import IconCloseCircle from '~/assets/svg/icon-close-circle.svg'

export default {
    name: 'TopMenu',
    components: {
        Logo,
        LogoInvert,
        IconMenuBurger,
        IconCloseCircle
    },
    data: function () {
        return {
            isOpen: false
        }
    },
    methods: {
        openMenu () {
            this.isOpen = true
        },
        closeMenu () {
            this.isOpen = false
        }
    }
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
        border-top: none;
        border-radius: 0 0 rem(40) rem(40);
        backdrop-filter: blur(15px);
        z-index: 99;

        @include mobile {
            border-radius: 0;
            background: rgba(#011039, 0.7);
            backdrop-filter: blur(10px);
            padding: rem(10) rem(15);
            border-left: none;
            border-right: none;
        }
    }

    .logo {
        width: rem(120);
    }

    .burger {
        width: rem(40);
        height: rem(40);
    }

    .menu {
        padding-top: rem(8);

        @include mobile {
            position: fixed;
            display: none;
            top: 0;
            right: 0;
            bottom: 0;
            height: 100dvh;
            width: rem(316);
            padding: rem(30) rem(15) rem(30) rem(32);
            background: #fff;
            overflow: auto;
        }

        &.isOpen {
            display: block;
        }

        &Top {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            padding-bottom: rem(20);
            border-bottom: 2px solid rgba(#00215F, 0.1);

            &Logo {
                width: rem(120);
            }

            &Icon {
                width: rem(40);
                height: rem(40);
            }
        }

        &Inner {
            @include mobile {
                margin-top: rem(40);
                display: flex;
                flex-direction: column;
            }
        }

        & a {
            color: #fff;
            font-weight: $fw-medium;
            font-size: rem(16);
            transition: opacity 0.1s ease-out;

            @include mobile {
                color: $c-blackBlue;
            }

            &.nuxt-link-active {
                @include mobile {
                    color: $c-pink;
                }
            }

            &:hover {
                opacity: 0.7;

                @include mobile {
                    opacity: 1;
                }
            }

            &:not(:first-child) {
                margin-left: rem(40);

                @include mobile {
                    margin-left: 0;
                    margin-top: rem(24);
                }
            }
        }
    }
</style>
