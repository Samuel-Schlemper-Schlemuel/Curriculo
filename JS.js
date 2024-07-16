var actual = 0

document.addEventListener('scroll', function() {
    const element = document.getElementsByTagName('nav')[0]
    const scrollTop = window.scrollY

    if (scrollTop > actual) {
        element.className = 'scrolled'
    } else {
        element.className = ''
    }

    actual = scrollTop
})