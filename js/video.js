var video;

// page load
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.loop = false;
	console.log("Autoplay is set to false")
	video.autoplay = false;
	console.log("Loop is set to false")

});

// play button
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = (video.volume * 100) + "%";
	video.play();
});

// pause button
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// slow down
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate *= 0.9;
	console.log("Speed is", video.playbackRate);
});

// speed up
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate /= 0.9;
	console.log("Speed is", video.playbackRate);
});

// skip ahead
document.querySelector("#skip").addEventListener("click", function() {
	if (video.ended == true){
		video.currentTime = 0;
	} else {
		video.currentTime += 10;
	}
	console.log("Current time is", video.currentTime)
});

// mute
// Mute/unmute the video and update the text in the button.
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false){
		video.muted = true;
		document.querySelector('#mute').innerHTML = "Unmute";
		console.log("Mute")
	} else if (video.muted == true){
		video.muted = false;
		document.querySelector('#mute').innerHTML = "Mute";
		console.log("Unmute")
	}
});

// volume slider
// Change the volume based on the slider and update the volume information.
document.querySelector("#slider").addEventListener("click", function() {
	console.log('the current volume is', video.volume)
	video.volume = this.value / 100
	console.log('the current volume is', video.volume)
	console.log(document.querySelector('#volume'))
	document.querySelector('#volume').innerHTML = (video.volume * 100) + '%'
	
});

// styled
// Utilize the existing oldSchool class on the video element
document.querySelector("#vintage").addEventListener("click", function() {
	let el = document.querySelector("video");
	el.classList.add("oldSchool");
	console.log("Old School Mode")
});


// original
// Remove the oldSchool class from the video.
document.querySelector("#orig").addEventListener("click", function() {
	let el = document.querySelector("video");
	el.classList.remove("oldSchool");
	console.log("Default Mode")
});