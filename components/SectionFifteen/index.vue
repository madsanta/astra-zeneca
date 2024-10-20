<template>
    <div :class="[$style.section, 'black']">
        <div :class="$style.title">
            Стартовая доза препарата Розувастатин (Крестор®) = 5-10 мг<sup>35</sup>
        </div>
        <div :class="[$style.image, 'mobileScrollBlock']">
            <img src="~/assets/img/section-15/image.png">
        </div>
        <div :class="[$style.iconSwipe, 'onlyMobile', 'iconSwipe']">
            <IconSwipeLeft />
        </div>
        <div :class="$style.imageCaption">
            Стартовая доза <b>5 мг</b> рекомендована для пациентов <b>азиатского происхождения</b>, у пациентов с повышенным <b>риском миопатии и умеренным</b> нарушением функции <b>почек</b> (КК менее 60 мл/мин)<sup>35</sup>
        </div>
        <div :class="$style.caption">
            Рекомендуемая начальная доза для пациентов, начинающих принимать препарат, или для пациентов, переведенных с приема других ингибиторов ГМГ-КоА-редуктазы, должна составлять 5 мг или 10 мг препарата Крестор® 1 раз в сутки. При выборе начальной дозы следует руководствоваться индивидуальной концентрацией холестерина и принимать во внимание возможный риск сердечно-сосудистых осложнений, а также необходимо оценивать потенциальный риск развития побочных эффектов. В случае необходимости доза может быть увеличена до большей через 4 недели.<sup>35</sup>
        </div>
        <div :class="$style.description">
            <p>В Российской Федерации Розувастатин (Крестор®) зарегистрирован и применяется в суточной дозе 5, 10, 20, 40 мг.</p>
            <p>Процент снижения уровня ОХ, ХС ЛНП, ХС неЛВП под влиянием розувастатина варьирует в зависимости от применяемой дозы препарата.</p>
            <p>Внедрение в широкую клиническую практику розувастатина основывалось на результатах исследований, выполненных в рамках программы GALAXY.</p>
        </div>
    </div>
</template>

<script>
import IconSwipeLeft from '~/assets/svg/icon-swipe-left.svg'

export default {
    name: 'SectionFifteen',
    components: {
        IconSwipeLeft
    }
}
</script>

<style module lang="scss">
    .section {
        @include wrapper;
    }

    .title {
        font-size: rem(42);
        line-height: rem(52);
        font-weight: $fw-extraBold;

        @include mobile {
            font-size: rem(26);
            line-height: rem(36);
        }
    }

    .image {
        margin: rem(49) auto;
        width: calc(845 * 100% / 1440);

        @include mobile {
            width: rem(375);
            margin: rem(30) 0 rem(-80) rem(-15);
        }

        img {
            @include mobile {
                width: rem(514);
                max-width: initial;
            }
        }

        &Caption {
            margin: 0 auto;
            width: calc(845 * 100% / 1440);
            font-size: rem(18);

            @include mobile {
                width: 100%;
                margin-top: rem(10);
                font-size: rem(15);
            }
        }
    }

    .caption {
        margin-top: rem(40);
        font-size: rem(18);
        line-height: rem(28);

        @include mobile {
            margin-top: rem(30);
            font-size: rem(15);
            line-height: rem(25);
        }
    }

    .description {
        margin-top: rem(30);
        font-size: rem(18);
        line-height: rem(28);
        font-weight: $fw-medium;

        @include mobile {
            margin-top: rem(20);
            font-size: rem(15);
            line-height: rem(25);
        }

        p + p {
            margin-top: rem(10);
        }
    }

    .iconSwipe {
        @include mobile {
            margin-top: rem(10);
        }
    }
</style>
