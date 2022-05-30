console.log('да')

//circle
const firstCircle = document.querySelector('#first-circle')
const secondCircle = document.querySelector('#second-circle')
const thirdCircle = document.querySelector('#third-circle')
const fourthCircle = document.querySelector('#fourth-circle')

//circleText

const firstText = document.querySelector('#first-text')
const secondText = document.querySelector('#second-text')
const thirdText = document.querySelector('#third-text')
const fourthText = document.querySelector('#fourth-text')

//1
firstCircle.addEventListener('mouseenter', () => firstCircle.classList.add('place__inner-item-active'))
firstCircle.addEventListener('mouseenter', () => firstText.classList.add('place__inner-text-item-active'))
firstCircle.addEventListener('mouseenter', () => secondCircle.classList.add('place__inner-item-disactive'))
firstCircle.addEventListener('mouseenter', () => thirdCircle.classList.add('place__inner-item-disactive'))
firstCircle.addEventListener('mouseenter', () => fourthCircle.classList.add('place__inner-item-disactive'))

firstCircle.addEventListener('mouseout', () => firstCircle.classList.remove('place__inner-item-active'))
firstCircle.addEventListener('mouseout', () => firstText.classList.remove('place__inner-text-item-active'))
firstCircle.addEventListener('mouseout', () => secondCircle.classList.remove('place__inner-item-disactive'))
firstCircle.addEventListener('mouseout', () => thirdCircle.classList.remove('place__inner-item-disactive'))
firstCircle.addEventListener('mouseout', () => fourthCircle.classList.remove('place__inner-item-disactive'))

//2
secondCircle.addEventListener('mouseenter', () => secondCircle.classList.add('place__inner-item-active'))
secondCircle.addEventListener('mouseenter', () => secondText.classList.add('place__inner-text-item-active'))
secondCircle.addEventListener('mouseenter', () => firstCircle.classList.add('place__inner-item-disactive'))
secondCircle.addEventListener('mouseenter', () => thirdCircle.classList.add('place__inner-item-disactive'))
secondCircle.addEventListener('mouseenter', () => fourthCircle.classList.add('place__inner-item-disactive'))

secondCircle.addEventListener('mouseout', () => secondCircle.classList.remove('place__inner-item-active'))
secondCircle.addEventListener('mouseout', () => secondText.classList.remove('place__inner-text-item-active'))
secondCircle.addEventListener('mouseout', () => firstCircle.classList.remove('place__inner-item-disactive'))
secondCircle.addEventListener('mouseout', () => thirdCircle.classList.remove('place__inner-item-disactive'))
secondCircle.addEventListener('mouseout', () => fourthCircle.classList.remove('place__inner-item-disactive'))

//3
thirdCircle.addEventListener('mouseenter', () => thirdCircle.classList.add('place__inner-item-active'))
thirdCircle.addEventListener('mouseenter', () => thirdText.classList.add('place__inner-text-item-active'))
thirdCircle.addEventListener('mouseenter', () => firstCircle.classList.add('place__inner-item-disactive'))
thirdCircle.addEventListener('mouseenter', () => secondCircle.classList.add('place__inner-item-disactive'))
thirdCircle.addEventListener('mouseenter', () => fourthCircle.classList.add('place__inner-item-disactive'))

thirdCircle.addEventListener('mouseout', () => thirdCircle.classList.remove('place__inner-item-active'))
thirdCircle.addEventListener('mouseout', () => thirdText.classList.remove('place__inner-text-item-active'))
thirdCircle.addEventListener('mouseout', () => firstCircle.classList.remove('place__inner-item-disactive'))
thirdCircle.addEventListener('mouseout', () => secondCircle.classList.remove('place__inner-item-disactive'))
thirdCircle.addEventListener('mouseout', () => fourthCircle.classList.remove('place__inner-item-disactive'))

//4
fourthCircle.addEventListener('mouseenter', () => fourthCircle.classList.add('place__inner-item-active'))
fourthCircle.addEventListener('mouseenter', () => fourthText.classList.add('place__inner-text-item-active'))
fourthCircle.addEventListener('mouseenter', () => firstCircle.classList.add('place__inner-item-disactive'))
fourthCircle.addEventListener('mouseenter', () => secondCircle.classList.add('place__inner-item-disactive'))
fourthCircle.addEventListener('mouseenter', () => thirdCircle.classList.add('place__inner-item-disactive'))

fourthCircle.addEventListener('mouseout', () => fourthCircle.classList.remove('place__inner-item-active'))
fourthCircle.addEventListener('mouseout', () => fourthText.classList.remove('place__inner-text-item-active'))
fourthCircle.addEventListener('mouseout', () => firstCircle.classList.remove('place__inner-item-disactive'))
fourthCircle.addEventListener('mouseout', () => secondCircle.classList.remove('place__inner-item-disactive'))
fourthCircle.addEventListener('mouseout', () => thirdCircle.classList.remove('place__inner-item-disactive'))


const moscow = document.querySelector('#moscow')
const moscowFirst = document.querySelector('#moscowFirst')
const moscowSecond = document.querySelector('#moscowSecond')
const moscowThird = document.querySelector('#moscowThird')
const moscowFourth = document.querySelector('#moscowFourth')
const moscowFifth = document.querySelector('#moscowFifth')
const moscowSixth = document.querySelector('#moscowSixth')
const moscowSeventh = document.querySelector('#moscowSeventh')

moscowFirst.addEventListener('click', () => moscowFirst.classList.toggle('highlight'))
moscowSecond.addEventListener('click', () => moscowSecond.classList.toggle('highlight'))
moscowThird.addEventListener('click', () => moscowThird.classList.toggle('highlight'))
moscowFourth.addEventListener('click', () => moscowFourth.classList.toggle('highlight'))
moscowFifth.addEventListener('click', () => moscowFifth.classList.toggle('highlight'))
moscowSixth.addEventListener('click', () => moscowSixth.classList.toggle('highlight'))
moscowSeventh.addEventListener('click', () => moscowSeventh.classList.toggle('highlight'))

// modals 
const makeModal = modalSel => {
	const modalEl = document.querySelector(modalSel + 'Popup');
		btnEl = document.querySelector(modalSel + '__preview'),
		closeEl = document.querySelector(modalSel + 'Cross')
		closeBody = document.querySelector('.popup')
		bg = document.querySelector(modalSel + 'Bg')
		

	btnEl.addEventListener('click', () => modalEl.classList.add('open'));
	closeEl.addEventListener('click', () => modalEl.classList.remove('open'));
	bg.addEventListener('click', () => modalEl.classList.remove('open'));
}

makeModal('#smart')
makeModal('#urban')
makeModal('#gov')
makeModal('#civic')

makeModal('#trend-1')
makeModal('#trend-2')
makeModal('#trend-3')
makeModal('#trend-4')
makeModal('#trend-5')
makeModal('#trend-6')


makeModal('#singapore')
makeModal('#gb')
makeModal('#poland')
makeModal('#france')
makeModal('#usa')
makeModal('#niderlands')
makeModal('#korea')
makeModal('#canada')
makeModal('#latvia')
makeModal('#spain')
makeModal('#mexico')
makeModal('#germany')
makeModal('#usaSecond')


//burger
const burger = document.querySelector("#burger")
const sidebar = document.querySelector("#sidebar")


burger.addEventListener('click', () => burger.classList.toggle('nav__burger-active'))
burger.addEventListener('click', () => sidebar.classList.toggle('nav__sidebar-active'))

//burger