<template>
    <div :class="[$style.section, 'black']">
        <div :class="$style.title">
            Стартовая доза препарата Розувастатин (Крестор®) = 5-10 мг<sup>35</sup>
        </div>
        <div :class="$style.image">
            <img src="~/assets/img/section-15/image.png">
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
export default {
    name: 'SectionFifteen'
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
    }

    .image {
        margin: rem(49) auto;
        width: calc(845 * 100% / 1440);
    }

    .caption {
        margin-top: rem(40);
        font-size: rem(18);
        line-height: rem(28);
    }

    .description {
        margin-top: rem(30);
        font-size: rem(18);
        line-height: rem(28);
        font-weight: $fw-medium;

        p + p {
            margin-top: rem(10);
        }
    }
</style>
