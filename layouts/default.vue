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
    },
    data: function () {
        return {
            hash: ''
        }
    },
    watch: {
        $route (to) {
            this.hash = to?.hash?.slice(1)

            this.scrollTo()
        }
    },
    mounted () {
        this.hash = window.location?.hash?.slice(1)

        this.scrollTo()

        setTimeout(() => {
            window.location.reload()
        }, 1000 * 60 * 60 * 24) // every day reload
    },
    methods: {
        scrollTo () {
            if (this.hash) {
                const element = document.querySelector(`[data-id=${this.hash}]`)

                if (element) {
                    setTimeout(() => {
                        element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' })
                    }, 1)
                }
            }
        }
    }
}
</script>
