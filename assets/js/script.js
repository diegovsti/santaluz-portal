var slideItem = 0;
window.onload = function() {
	setInterval(passarSlide, 5000);

	var slidewidth = document.getElementById("slideshow").offsetWidth;
	var objs = document.getElementsByClassName("slide");
	for(var i=0;i<objs.length;i++) {
		objs[i].style.width = slidewidth+"px";
	}
}
function passarSlide() {
	var slidewidth = document.getElementById("slideshow").offsetWidth;
	
	if(slideItem >= 3) {
		slideItem = 0;
	} else {
		slideItem++;
	}
	document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";

	var x = document.getElementsByClassName("ident_bola");
	for(var i = 0; i< x.length; i++){
		x[i].style.background = "#ff5555"
	}
	document.getElementsById(slideItem).style.background = "#ff5555";
}

function mudarSlide(pos) {
	slideItem = pos;
	var slidewidth = document.getElementById("slideshow").offsetWidth;
	document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";


	var x = document.getElementsByClassName("ident_bola");

	for(var i = 0; i< x.length; i++){
		x[i].style.background = "#cccccc"
	}
	document.getElementsById(slideItem).style.background = "#ff5555";
}



function toggleMenu(){
	var menu = document.getElementById("menu");

	if(menu.style.display == 'none' || menu.style.display == ''){
		menu.style.display = "block";
	}else{
		menu.style.display = "none";
	}
}
