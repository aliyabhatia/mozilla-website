document.querySelector('h1').onclick = function() {
	alert('dont touch the headers!!');
}

var myImage = document.querySelector('img');

myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/firefox-icon.png'){
		myImage.setAttribute ('src','images/firefox-icon-snazzy.png');
	}
	else {
		myImage.setAttribute ('src','images/firefox-icon.png');
	}
}