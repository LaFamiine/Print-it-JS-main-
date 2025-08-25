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

for (compteur = 0; compteur < slides.length; compteur++) { 
    console.log(compteur < slides.length); 
}

compteur = 0;

while (compteur < slides.length) {
    console.log(compteur);
    compteur++;
}

const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const bannerImg = document.querySelector('.banner-img');
const tagLine = document.querySelector('#banner p');
//fonction
function changeImage() {
	bannerImg.src = `./assets/images/slideshow/${slides[compteur].image}`;
	tagLine.innerHTML = slides[compteur].tagLine;
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
	compteur--;
	changeImage();
});

arrowRight.addEventListener('click', function() {
	compteur++;
	changeImage();
});