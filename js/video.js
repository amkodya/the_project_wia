/*video.js */

var vid;

window.onload=function(){
	

	//link to video
	vid= document.getElementById("vid");
}

function pauseToggle(){

	//is it paused?
	if(vid.paused){
		//play vid
		vid.play();
	} else {
		//pause vid
		vid.pause();
	}
}
