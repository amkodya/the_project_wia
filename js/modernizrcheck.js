/* modernizrcheck.js ASHLEY M. KODYA THE PROJECT WIA w/ Eric Silvay July 2015 Full Sail University */
if(Modernizr.canvas){
	//Canvas is supported
	
	var theCanvas = document.getElementById("Canvas1");
	var ctx = theCanvas.getContext("2d");
	
	ctx.font = "12pt Helvetica"
	ctx.fillText("Canvas is Supported", 25, 25)
	
	} else {
		//Canvas is not supported
		//Polyfill would go here

		var img = document.createElement("img");
    	img.src = 'images/necklace.png"';
    	img.width = 300;
    	img.height = 150;
    	img.alt = '';

    document.body.appendChild(img);
		
		
		};

	console.log(Modernizr);

