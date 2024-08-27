export default {
    data: function () {
        return {
            show: false,
            currentScroll: 0
        }
    },
    methods: {
        openModal () {
            this.currentScroll = document.documentElement.scrollTop
            const root = document.getElementById('root')
            root.style.top = -this.currentScroll + 'px'
            root.classList.add('showModal')
            this.show = true
        },
        closeModal () {
            document.getElementById('root').classList.remove('showModal')
            const root = document.getElementById('root')
            window.scroll({
                top: this.currentScroll
            })
            root.style.top = 0
            this.show = false
        }
    }
}
