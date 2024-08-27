export default {
    data () {
        return {
            width: 0,
            index: 0
        }
    },
    methods: {
        onScrollDebounce ({ scrollWidth, width, left }) {
            this.width = Math.round(scrollWidth / this.count)
            this.index = Math.ceil(left / this.width)
        },
        onPageClick (i) {
            if (i === this.pages - 1) {
                // If last page, always scroll to last item
                this.$refs.horizontal.scrollToIndex(this.count - 1)
            } else {
                this.$refs.horizontal.scrollToLeft(i * this.width)
            }
        }
    }
}
