var video;

// page load
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.loop = false;
	video.autoplay = false;

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
	console.log(video.playbackRate);
});

// speed up
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate /= 0.9;
	console.log(video.playbackRate);
});

// skip ahead
document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime == 67.403333){
		video.currentTime = 0;
		video.play() // do i need this to automatically play at the beginning
	} else {
		video.currentTime += 10;
	}
	console.log(video.currentTime)
});

// mute
document.querySelector("#mute").addEventListener("click", function() {
	video.volume = 0;
	// video.volume = document.querySelector("#slider > min")
	//document.querySelector("#volume").innerHTML = document.querySelector("#slider").volume;
});

// // volume slider
// document.querySelector("#slider").addEventListener("click", function() {
// 	document.querySelector("#volume").innerHTML = video.volume;
// });

// // styled
// document.querySelector("#vintage").addEventListener("click", function() {
// 	document.querySelector("body").style.background = document.querySelector("#oldSchool")

// });


// // original
// document.querySelector("#orig").addEventListener("click", function() {
	
// });