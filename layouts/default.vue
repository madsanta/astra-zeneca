<template>
    <div>
        <div id="root">
            <TopMenu />
            <Nuxt />
        </div>
        <div id="modals" />
    </div>
</template>

<script>
import TopMenu from '~/components/TopMenu/index.vue'

export default {
    name: 'Default',
    components: {
        TopMenu
    }
}
</script>
