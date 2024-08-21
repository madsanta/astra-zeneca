<template>
    <div :class="$style.section">
        <div :class="$style.man">
            <img src="~/assets/img/intro/man.png">
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
import Logo from '~/assets/svg/intro-logo.svg'

export default {
    name: 'MainIntro',
    components: {
        Logo
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
    }

    .description {
        width: calc(777 * 100% / 1440);
        font-size: rem(26);
        font-weight: $fw-extraBold;
        color: #fff;
        line-height: rem(36);
        text-align: center;
        margin: rem(-42) auto 0;
        text-shadow: 0 2px 2px #000;
    }

    .planets {
        position: relative;
        width: 100%;
        margin-top: rem(-10);
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }

    .planet {
        position: relative;
        display: flex;
        flex: 1 1 auto;
        width: calc(288 * 100% / 1440);

        @include relativeHeight(288, 164);

        &:nth-child(2),
        &:nth-child(4) {
            margin-top: rem(60);
        }

        &:nth-child(4) {
            @include relativeHeight(288, 170);
        }

        img {
            @include absoluteCoverImg(containt);
        }
    }

    .logo {
        width: calc(208 * 100% / 1440);
        margin: rem(60) rem(39) 0;
    }

    .man {
        position: absolute;
        width: calc(909 * 100% / 1920);
        right: 0;
        bottom: rem(-51);

        @include relativeHeight(909, 688);

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

        &SubTitle {
            font-size: rem(30);
            font-weight: $fw-extraBold;
            text-shadow: 0 0 2px rgba(#000, 0.4);
        }

        &Name {
            font-family: Kanit, sans-serif;
            font-size: rem(120);
            font-weight: $fw-bold;
            text-shadow: 0 2px 2px rgba(#000, 0.4);
            margin-top: rem(-18);
        }

        &Description {
            width: calc(738 * 100% / 1270);
            font-size: rem(18);
            font-weight: $fw-medium;
            text-shadow: 0 1px 1px rgba(#000, 0.4);
        }
    }

    .caption {
        margin-top: rem(20);
        opacity: 0.6;
        font-size: rem(14);
    }
</style>
