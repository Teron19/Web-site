/*Menu*/ 
menu.onclick = function myFunction() {
	var x = document.getElementById("myTopnav")

	if (x.className === "topnav"){
		x.className += " responsive";
	} else{
		x.className = "topnav";
	}
}
/*Menu*/ 
/*Slider*/
var sideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}
function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");

	if (n > slides.lenght){
		slideIndex = 1
	}
	if (n < 1){
		slideIndex = slides.lenght
	}
	for (i = 0; i < slides.lenght; i++){
		slides[i].style.display= "none";
	}
	for (i = 0; i < dost.lenght; i++){
		dots[i].className = dots[i].className.replace("active","");
	}
	slides[slideIndex-1].style.display = "block";
	dots[sldeIndex-1].className+= " active";
}
 

/*Slider*/