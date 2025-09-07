const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
//variable
let compteur = 0;
const totalSlides = slides.length;

const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const bannerImg = document.querySelector('.banner-img');
const tagLine = document.querySelector('#banner p');
//fonction
function changeImage() {
	bannerImg.src = `./assets/images/slideshow/${slides[compteur].image}`;
	tagLine.innerHTML = slides[compteur].tagLine;
	initDots();
}

function nextSlide() {
    compteur = (compteur + 1) % totalSlides; 
    changeImage();
}
function prevSlide() {
    compteur = (compteur - 1 + totalSlides) % totalSlides;
    changeImage();
}


//evenement
arrowLeft.addEventListener('click', function() {
    prevSlide();
});

arrowRight.addEventListener('click', function() {
    nextSlide();
});

//dots
function initDots() {
	const dotsContainer = document.querySelector('.dots');
	dotsContainer.innerHTML = '';
	slides.forEach((slide, index) => {
		const dot = document.createElement('span');
		dot.classList.add('dot');
		if (index === compteur) {
			dot.classList.add('dot_selected');
		}
		dot.addEventListener('click', function() {
			compteur = index;
			changeImage();
		});

		dotsContainer.appendChild(dot);
	});
}
