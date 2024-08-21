export default function () {
    const html = document.getElementsByTagName('html')[0]
    const base = 100
    let fs = base
    let cf = 0

    const setResponsiveFontSize = () => {
        const currentWidth = document.body.offsetWidth

        if (currentWidth >= 1920) {
            cf = base
        } else if (currentWidth >= 1024) {
            cf = currentWidth * 100 / 1920
        } else {
            cf = currentWidth * 100 / 320
        }

        fs = (base * cf / 100)
        html.style.fontSize = fs + 'px'
    }

    setResponsiveFontSize()

    window.addEventListener('resize', setResponsiveFontSize)
};
