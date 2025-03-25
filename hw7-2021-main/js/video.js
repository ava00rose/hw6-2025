var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

//Page load: Initialize the video element and turn off autoplay and turn off looping.
window.addEventListener("load", function() {
	video = document.querySelector("#player1");
	video.setAttribute("src", "assets/marchingband.mov");
	console.log("video created")
	video.preload = true; 
	video.autoplay = false; 
	video.loop = false; 
})


//Play Button: Play the video and TODO: update the volume information. 
document.querySelector("#play").addEventListener("click", function() { 
	video.play(); 
	console.log("play_button")
})

//Pause Button: Pause the video
document.querySelector("#pause").addEventListener("click", function() { 
	video.pause(); 
	console.log("pause_button")
})

//Slow Down: Slow the current video speed by 10% each time the button is clicked and log the new speed to the console. 
document.querySelector("#slower").addEventListener("click", function() { 
	video.playbackRate = video.playbackRate - (video.playbackRate * 0.1); 
	console.log(video.playbackRate)
})

//Speed Up: Increase the current video speed each time the button is clicked and log the new speed to the console.  Change it by an amount proportional to the slow down. CHECK THIS!!  If you slow down three times and then speed up three times you should be within 5 digits of 100% again.
document.querySelector("#faster").addEventListener("click", function() { 
	video.playbackRate = video.playbackRate + (video.playbackRate * 0.1); 
	console.log(video.playbackRate)
})

//Skip Ahead: Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.   Log the current location of the video.
document.querySelector("#faster").addEventListener("click", function() { 
	video.currentTime = video.currentTime + 10; 
	if (video.currentTime > video.duration) { 
		video.currentTime = 0; 
	}
	console.log(video.currentTime)
})

//Mute: Mute/unmute the video and TODO: get working update the text in the button.
document.querySelector("#mute").addEventListener("click", function () { 
	video.muted = !video.muted; 
    if (video.muted) {
        this.value = 'Unmute'; 
        console.log("Muted");
    } else {
        this.value = 'Mute'; 
        console.log("Unmuted");
    }
})

//Volume Slider: Change the volume based on the slider and update the volume information.


//Styled: Utilize the existing oldSchool class on the video element

//Original: Remove the oldSchool class from the video.