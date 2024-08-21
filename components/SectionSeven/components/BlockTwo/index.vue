<template>
    <div :class="$style.block">
        <div :class="[$style.title, 'pink', 'text-shadow-2']">
            Аускультация <sup>15</sup>
        </div>
        <div :class="[$style.description, 'white', 'text-shadow-2']">
            Систолический шум над сонной артерией увеличивает риск инфаркта миокарда и смерти от ССЗ в два раза по сравнению с теми, у кого он не выслушивается.
            <br>
            Выявленный систолический шум на уровне бедренной артерии также является независимым маркером ишемической болезни сердца (ИБС).
        </div>
        <div :class="$style.image">
            <img src="~/assets/img/section-7/block-2/image.jpg">
        </div>
    </div>
</template>

<script>
export default {
    name: 'BlockTwo'
}
</script>

<style module lang="scss">
    .block {
        width: 100%;
        padding-bottom: rem(50);
    }

    .title {
        @include block-title;
    }

    .description {
        margin-top: rem(25);
        font-size: rem(18);
        line-height: rem(28);
        font-weight: $fw-medium;
    }

    .image {
        position: relative;
        border-radius: rem(30);
        overflow: hidden;
        margin-top: rem(40);

        @include relativeHeight(823, 632);

        img {
            @include absoluteCoverImg();
        }
    }
</style>
