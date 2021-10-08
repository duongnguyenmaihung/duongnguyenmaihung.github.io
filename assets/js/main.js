
const header = document.querySelector('header')
const headerElement = document.querySelector('.header-nav__description')

document.onscroll = () => {
	let space = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (space > 60) {
        header.style.backgroundColor = '#000'
        header.style.marginTop = '0'
		headerElement.style.display = 'none'
    } else {
        header.style.backgroundColor = 'transparent'
        header.style.marginTop = '14px'
		headerElement.style.display = 'block'
    }
}