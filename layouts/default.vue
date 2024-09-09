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
            hash: '',
            topMenuHeight: 0
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

        this.resize()

        setTimeout(() => {
            this.scrollTo()
        }, 100)

        setTimeout(() => {
            window.location.reload()
        }, 1000 * 60 * 60 * 24) // every day reload

        window.addEventListener('resize', this.resize)
    },
    destroyed () {
        window.removeEventListener('resize', this.resize)
    },
    methods: {
        resize () {
            const topMenu = document.getElementById('TopMenu')
            this.topMenuHeight = topMenu.offsetHeight
        },
        scrollTo () {
            if (this.hash) {
                const element = document.querySelector(`[data-id=${this.hash}]`)
                if (!element) {
                    return
                }

                const windowScroll = window.scrollY
                const scrollTop = element.getBoundingClientRect().top + windowScroll - this.topMenuHeight

                window.scrollTo({ top: scrollTop, behavior: 'smooth' })
            }
        }
    }
}
</script>
