function myFunction(){
	if (myImage.getAttribute("src") == "images/IMG_20231108_181900.jpg") {
		myImage.setAttribute("src", "images/IMG_20231024_201734_201.jpg");
	}
	else{
		myImage.setAttribute("src", "images/IMG_20231108_181900.jpg");
	}
}


var myImage = document.getElementById("img1");
myImage.addEventListener("click", myFunction);