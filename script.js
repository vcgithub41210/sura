function getInputValue() {
	// Get the input element by its ID
	var inputElement = document.getElementById('myInput');
	var documentImage = document.getElementById('myImage');
	var displayElement = document.getElementById('display');
	var audio = document.getElementById("myAudio");
	var inputValue = inputElement.value;
	if (inputValue == "sura"){
		documentImage.src = 'images.jpeg';
		audio.muted = false;
		audio.play();
		documentImage.style.display = 'block';
		displayElement.textContent = 'dont try to play the fool with me Niggesh'
	}
	else{
		audio.pause();
		audio.currentTime = 0;
		documentImage.style.display = 'none';
		displayElement.textContent = 'Fuck off';
	}
	// Display the value in the <p> element with ID 'display'
	// displayElement.textContent = 'Input value: ' + inputValue;
}
