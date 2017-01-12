// Section for header alert functions
// One way to do this is to have the function defined seperately from the query selector

function HeadingAlert() {
	alert('dont touch the headers!!');
}


// Section for query selectors

// QuerySelector1 --> clicking the headings
// note that you did not includ () after HeaderAlert!!
document.querySelector('h1').onclick = HeadingAlert

// QuerySelector2 --> clicking the image
// Note that you can trigger the function immediately without having it separately - compere to above

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