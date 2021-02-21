// JavaScript Document

/***** High Slide *****/
hs.graphicsDir = 'highslide/graphics/';
hs.align = 'center';
hs.transitions = ['expand', 'crossfade'];
hs.outlineType = 'rounded-white';
hs.fadeInOut = true;
hs.dimmingOpacity = 0.5;
hs.blockRightClick = true;
hs.showCredits = false;
hs.numberPosition = "caption";
hs.lang.number = "Image %1 of %2";


if (typeof(bMultipleGallery) === "undefined"){
	// Add the controlbar
	hs.addSlideshow({
	//slideshowGroup: 'group1',
		interval: 5000,
		repeat: false,
		useControls: true,
		fixedControls: 'fit',
		overlayOptions: {
			opacity: 0.75,
			position: 'bottom center',
			hideOnMouseOut: true
		}
	});
}



/***** iPad *****/
var agent=navigator.userAgent.toLowerCase();
var iPad = (agent.indexOf('iphone')!=-1 || agent.indexOf('ipad')!=-1);



/***** Rollover thumbnails *****/
function swapImage(obj) {
	
	x = obj.parentNode.childNodes
	sCaptionHidden = "";
	
	for (i=0;i<x.length;i++)
  { 
		if (x[i].childNodes[0]){
			for (j=0;j<x[i].attributes.length;j++){
				if (x[i].attributes[j].name == "class"){

					switch (x[i].attributes[j].value)
					{
						case "highslide":
							sLargeImageURL = x[i];
							break;
							
						case "highslide-caption":
							sHighslideCaption = x[i].innerHTML;
							break;
							
						case "caption_hidden":
							sCaptionHidden = x[i].innerHTML;
							break;
					}
				}
			}
		}
	}
	
	document.big.src = sLargeImageURL;
	var captionObj = document.getElementById('onpageCaption');
	captionObj.innerHTML = sCaptionHidden;
	
}


function swapImageAbsolute(image) {
	document.big.src = image;
}








