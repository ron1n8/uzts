let side_menu_additional = document.querySelectorAll('.side-menu-additional')
let side_menu_main = document.querySelector('.side-menu-main')
let side_menu_button = document.getElementById('side-menu-button')
let side_menu_cover = document.getElementById('navbar-cover')
let side_menu_state = false
let top_menu = document.querySelector('.top-nav')


function close_additional(){
	for (var i = side_menu_additional.length - 1; i >= 0; i--) {
		side_menu_additional[i].style.transform = 'translateX(-27vw)'
	}
}


document.querySelector('body').addEventListener('click', event => {
	if (event.target.id == 'navbar-cover'){
		close_additional()
		side_menu_main.style.transform = 'translateX(-27vw)'
		side_menu_button.style.background = 'transparent'
		side_menu_button.style.color = 'white'
		side_menu_cover.style.display = 'none'
		side_menu_cover.style.visibility = 'hidden'
		side_menu_state = false

		side_menu_button.textContent = 'MENU'

	}
})
side_menu_button.addEventListener('click', event => {
	if (side_menu_state){
		close_additional()
		side_menu_main.style.transform = 'translateX(-27vw)'
		side_menu_button.style.background = 'transparent'
		side_menu_button.style.color = 'white'
		side_menu_cover.style.display = 'none'
		side_menu_cover.style.visibility = 'hidden'
		side_menu_state = false

		side_menu_button.textContent = 'MENU'
	}
	else{
		side_menu_button.style.background = 'white'
		side_menu_button.style.color = 'black'
		side_menu_main.style.transform = 'translateX(5vw)'
		side_menu_cover.style.visibility = 'visible'
		side_menu_cover.style.display = 'block'
		side_menu_state = true

		event.target.textContent = 'CLOSE'
	}
})
let triggers = document.querySelectorAll('.additional-menu-trigger')
for (var i = triggers.length - 1; i >= 0; i--) {
	triggers[i].addEventListener('click', event => {
		close_additional()
		document.getElementById(event.target.getAttribute('data-target')).style.transform = 'translateX(31vw)'
	})
}




play = true
play_button = document.querySelector('.home button')
play_button.addEventListener('click', event => {
	if(play){
		document.getElementById('home-video').pause()
		play_button.innerHTML = '<i class="fal fa-play"></i>'
		play = false
	}
	else{
		document.getElementById('home-video').play()
		play_button.innerHTML = '<i class="fal fa-pause"></i>'
		play = true
	}
})



let count_state = true
var stat_cards = document.querySelectorAll('.stat-card strong')
var stat_cards_percent = Array()

function counter(card) {
	for (var i = Number(card.textContent) - 1; i >= 0; i--) {
		card.textContent = Number(card.textContent) + 1
		setTimeout(1000)
	}
}


window.addEventListener('scroll', event => {
	if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
		top_menu.style.background = '#203239'
		side_menu_button.style.borderRightColor = '#2C3333'
		side_menu_button.style.color = '#2C3333'
	}
	else {
		top_menu.style.background = 'transparent'
		side_menu_button.style.borderRightColor = 'white'
		side_menu_button.style.color = 'white'
	}

	if(count_state){
		if (document.body.scrollTop > 2100 || document.documentElement.scrollTop > 2100) {
			count_state = false
			timer = setInterval(()=>{
				for (var i = 0; i < stat_cards.length; i++) {
					// counter(stat_cards[i])
				}
			}, 100)
		}
	}
})