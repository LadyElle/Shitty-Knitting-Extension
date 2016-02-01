var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
			//k1 k2 k3 k2tog p1 p2 p3 p2tog
				var replacedText = text.replace(/(\bknit\b)/gi, 'computer');
				

				replacedText = replacedText.replace(/(\bpurl\b)/gi, 'pudding');
				replacedText = replacedText.replace(/(\bpudding\b)/gi, 'Knit');
				replacedText = replacedText.replace(/(\bcomputer\b)/gi, 'Purl');
				
				replacedText = replacedText.replace(/(\bK\b)/gi, 'butts');

				replacedText = replacedText.replace(/(\bP\b)/gi, 'plunger');
				replacedText = replacedText.replace(/(\bBUTTS\b)/gi, 'P');
				replacedText = replacedText.replace(/(\bPLUNGER\b)/gi, 'K');
				
				replacedText = replacedText.replace(/(\bK1\b)/gi, 'somethingsome');
				replacedText = replacedText.replace(/(\bP1\b)/gi, 'plungersome');
				replacedText = replacedText.replace(/(\bsomethingsome\b)/gi, 'P1');
				replacedText = replacedText.replace(/(\bplungersome\b)/gi, 'K1');
				
				replacedText = replacedText.replace(/(\bK2\b)/gi, 'thingsome');
				replacedText = replacedText.replace(/(\bP2\b)/gi, 'grossthing');
				replacedText = replacedText.replace(/(\bthingsome\b)/gi, 'P2');
				replacedText = replacedText.replace(/(\bgrossthing\b)/gi, 'K2');
				
				replacedText = replacedText.replace(/(\bK3\b)/gi, 'somesome');
				replacedText = replacedText.replace(/(\bP3\b)/gi, 'someplunger');
				replacedText = replacedText.replace(/(\bsomesome\b)/gi, 'P3');
				replacedText = replacedText.replace(/(\bsomeplunger\b)/gi, 'K3');
				
				replacedText = replacedText.replace(/(\bK2tog\b)/gi, 'funthung');
				replacedText = replacedText.replace(/(\bP2tog\b)/gi, 'gersome');
				replacedText = replacedText.replace(/(\bfunthung\b)/gi, 'P2tog');
				replacedText = replacedText.replace(/(\bgersome\b)/gi, 'K2tog');
				
			

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}