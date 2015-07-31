/* images.js ASHLEY M. KODYA THE PROJECT WIA w/ Eric Silvay July 2015 Full Sail University */

window.onload = function() {
	var theCanvas = document.getElementById('Canvas2');
	if (theCanvas && theCanvas.getContext) {
		var ctx = theCanvas.getContext("2d");

		if(ctx) {

			//create variable to hold image
			var srcImg = document.getElementById('img2');

			//sliced image
			
			ctx.beginPath();
  			ctx.moveTo(250,0);
  			ctx.lineTo(500,400);
  			ctx.lineTo(0,400);
  			ctx.closePath();

  			ctx.clip();

  			ctx.drawImage(srcImg, 0,0);


		}
	}
}