/*video.js ASHLEY M. KODYA THE PROJECT WIA w/ Eric Silvay July 2015 Full Sail University */

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
