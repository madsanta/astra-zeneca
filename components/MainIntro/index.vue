<template>
    <div :class="$style.section">
        <div :class="$style.man">
            <img class="onlyDesktop" src="~/assets/img/intro/man.png">
            <img class="onlyMobile" src="~/assets/img/intro/man-mobile.png">
        </div>
        <div :class="[$style.bubbles, 'white', 'onlyMobile']">
            <div :class="[$style.bubble, 'text-shadow-1']" @click="showBubble(0)">
                Подробнее
            </div>
            <div :class="[$style.bubble, 'text-shadow-1']" @click="showBubble(1)">
                Подробнее
            </div>
            <div :class="[$style.bubble, 'text-shadow-1']" @click="showBubble(2)">
                Подробнее
            </div>
            <Teleport v-if="show" to="#modals">
                <div :class="$style.bubblesPopup">
                    <div :class="$style.bubblesPopupClose" @click="closeBubble">
                        <IconClose />
                    </div>
                    <img v-if="isShowBubble[0]" src="~/assets/img/intro/bubble-1.png">
                    <img v-if="isShowBubble[1]" src="~/assets/img/intro/bubble-2.png">
                    <img v-if="isShowBubble[2]" src="~/assets/img/intro/bubble-3.png">
                </div>
            </Teleport>
        </div>
        <div :class="$style.inner">
            <h1 :class="$style.title">
                Объединяет поколения
            </h1>
            <div :class="$style.description">
                Крестор® – первый статин*, доказывающий снижение общей смертности в рамках первичной профилактики сердечно-сосудистых осложнений<sup>55-59</sup>
            </div>
            <div :class="$style.planets">
                <div :class="$style.planet">
                    <img src="~/assets/img/intro/planet-1.png">
                </div>
                <div :class="$style.planet">
                    <img src="~/assets/img/intro/planet-2.png">
                </div>
                <div :class="$style.logo">
                    <Logo />
                </div>
                <div :class="$style.planet">
                    <img src="~/assets/img/intro/planet-3.png">
                </div>
                <div :class="$style.planet">
                    <img src="~/assets/img/intro/planet-4.png">
                </div>
            </div>
            <div :class="$style.block">
                <div :class="$style.info">
                    <div :class="$style.infoTitle">
                        <div :class="$style.infoSubTitle">
                            Программа
                        </div>
                        <div :class="$style.infoName">
                            GALAXY
                        </div>
                    </div>
                    <div :class="$style.infoDescription">
                        <p>– многоэтапная, долговременная научная инициатива компании АстраЗенека по изучению эффективности, переносимости  безопасности розувастатина у пациентов с различной патологией.</p>
                        <br>
                        <p><span class="blue">28 клинических исследований</span> со статинами для изучения связи между оптимальным контролем липидов, атеросклерозом и сердечно-сосудистой заболеваемостью и смертностью.<sup>55-59</sup></p>
                    </div>
                </div>
                <div :class="$style.caption">
                    Примечание: *По данным исследований статинов по первичной профилактике сердечно-сосудистых заболеваний.<sup>66,81,82</sup>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Teleport from 'vue2-teleport'
import Logo from '~/assets/svg/intro-logo.svg'
import IconClose from '~/assets/svg/icon-close.svg'
import modal from '~/mixins/modal'

export default {
    name: 'MainIntro',
    components: {
        Logo,
        IconClose,
        Teleport
    },
    mixins: [modal],
    data: function () {
        return {
            isShowBubble: [false, false, false]
        }
    },
    methods: {
        showBubble (bubble) {
            const newBubbles = [...this.isShowBubble]
            newBubbles[bubble] = true
            this.isShowBubble = [...newBubbles]

            this.openModal()
        },
        closeBubble () {
            this.isShowBubble = [false, false, false]

            this.closeModal()
        }
    }
}
</script>

<style module lang="scss">
    .section {
        position: relative;
        background-image: url('~/assets/img/intro/intro.jpg');
        background-attachment: scroll;
        background-size: cover;
        background-position: center center;
        width: 100%;

        @include relativeHeight(1920, 1458);

        @include mobile {
            background-image: url('~/assets/img/intro/intro-mobile.jpg');

            @include relativeHeight(375, 859);
        }
    }

    .bubbles {
        &Popup {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #fff;
            overflow: hidden;
            border-radius: rem(20);
            padding: rem(40) rem(20) rem(50);
            z-index: 200;
            width: rem(344);

            &Close {
                position: absolute;
                top: rem(10);
                right: rem(10);
                width: rem(32);
                height: rem(32);
            }
        }
    }

    .bubble {
        position: absolute;
        font-size: rem(12);
        font-weight: $fw-semiBold;
        text-decoration: underline;
        z-index: 11;

        &:nth-child(1) {
            left: rem(28);
            bottom: rem(338);
        }

        &:nth-child(2) {
            right: rem(38);
            bottom: rem(327);
        }

        &:nth-child(3) {
            right: rem(38);
            bottom: rem(127);
        }
    }

    .inner {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 50%;
        right: 50%;
        transform: translate(-50%, 0);
        z-index: 10;

        @include wrapper;
    }

    .title {
        font-size: rem(80);
        opacity: 0.3;
        font-weight: $fw-black;
        background: -webkit-linear-gradient(rgba(#FFFFFF, 0.9) 0%, rgba(#FFFFFF, 0.65) 40%, rgba(#576083, 0.7) 70%, rgba(#16183E, 0) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-align: center;
        text-transform: uppercase;
        margin: rem(100) auto 0;

        @include mobile {
            font-size: rem(40);
            line-height: rem(40);
            background: -webkit-linear-gradient(rgba(#FFFFFF, 0.9) 0%, rgba(#FFFFFF, 0.65) 56%, rgba(#576083, 0.7) 82%, rgba(#16183E, 0) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }

    .description {
        width: calc(777 * 100% / 1440);
        font-size: rem(26);
        line-height: rem(36);
        font-weight: $fw-extraBold;
        color: #fff;
        text-align: center;
        margin: rem(-42) auto 0;
        text-shadow: 0 2px 2px #000;

        @include mobile {
            font-size: rem(17);
            line-height: rem(24);
            width: 100%;
            margin-top: rem(-15);
        }
    }

    .planets {
        position: relative;
        width: 100%;
        margin-top: rem(-10);
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        @include mobile {
            margin-top: rem(15);
        }
    }

    .planet {
        position: relative;
        display: flex;
        flex: 1 1 auto;
        width: calc(288 * 100% / 1440);

        @include relativeHeight(288, 164);

        @include mobile {
            flex: 0 0 auto;
            position: absolute;
            width: rem(110);
            top: 0;
            left: 0;
        }

        &:nth-child(1),
        &:nth-child(5) {
            @include mobile {
                top: rem(24);
            }
        }

        &:nth-child(2),
        &:nth-child(4) {
            margin-top: rem(60);

            @include mobile {
                margin-top: 0;
                top: rem(100);
                left: rem(54);
            }
        }

        &:nth-child(4) {
            @include relativeHeight(288, 170);

            @include mobile {
                left: auto;
                right: rem(54);
            }
        }

        &:nth-child(5) {
            @include mobile {
                left: auto;
                right: 0;
            }
        }

        img {
            @include absoluteCoverImg(containt);
        }
    }

    .logo {
        width: calc(208 * 100% / 1440);
        margin: rem(60) rem(39) 0;

        @include mobile {
            flex: 0 0 auto;
            position: absolute;
            top: 0;
            margin: 0;
            width: rem(100);
            left: 50%;
            transform: translateX(-50%);
        }
    }

    .man {
        position: absolute;
        width: calc(909 * 100% / 1920);
        right: 0;
        bottom: rem(-51);

        @include relativeHeight(909, 688);

        @include mobile {
            width: rem(354);
            left: rem(-36);
            right: auto;
            bottom: -2px;

            @include relativeHeight(354, 172);
        }

        img {
            @include absoluteCoverImg;
        }
    }

    .block {
        position: absolute;
        bottom: rem(-53);
        color: #fff;
        left: 50%;
        right: 50%;
        transform: translate(-50%, 0);

        @include wrapper;

        @include mobile {
            bottom: rem(30);
            transform: translate(-50%, 100%);
        }
    }

    .info {
        width: 100%;
        border: 1px solid $c-blue;
        border-radius: rem(30);
        padding: rem(60) rem(85) rem(45);
        backdrop-filter: blur(25px);
        box-shadow: 0 rem(20) rem(80) rem(-20) #000;
        display: flex;
        justify-content: space-between;

        @include mobile {
            border-radius: rem(20);
            padding: rem(30) rem(20) rem(20);
            flex-direction: column;
            justify-content: flex-start;
        }

        &SubTitle {
            font-size: rem(30);
            font-weight: $fw-extraBold;
            text-shadow: 0 0 2px rgba(#000, 0.4);

            @include mobile {
                font-size: rem(20);
            }
        }

        &Name {
            font-family: Kanit, sans-serif;
            font-size: rem(120);
            font-weight: $fw-bold;
            text-shadow: 0 2px 2px rgba(#000, 0.4);
            margin-top: rem(-18);

            @include mobile {
                font-size: rem(60);
                margin-top: rem(-9);
            }
        }

        &Description {
            width: calc(738 * 100% / 1270);
            font-size: rem(18);
            font-weight: $fw-medium;
            text-shadow: 0 1px 1px rgba(#000, 0.4);

            @include mobile {
                width: 100%;
                font-size: rem(14);
            }
        }
    }

    .caption {
        margin-top: rem(20);
        opacity: 0.6;
        font-size: rem(14);

        @include mobile {
            font-size: rem(12);
        }
    }
</style>
