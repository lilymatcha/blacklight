/*
 * selectHTML
 * @return a string of text, the background of which will later be changed
 */ 
function selectHTML() {
    try {

    	console.log("we're starting!");

    	// what does this do????
        if (window.ActiveXObject) {
            var c = document.selection.createRange();
            return c.htmlText;
        }
    
        var selectedText = document.createElement("span");
        // $(selectedText).addClass("blacked_out");

        var w = getSelection().getRangeAt(0);
        w.surroundContents(selectedText);

        console.log("you got the text!")
        console.log(w);
        return selectedText.innerHTML;

    // error checking, fuck yeah
    } catch (e) {

    	console.log("something broke");
        if (window.ActiveXObject) {
            return document.selection.createRange();
        } else {
            return getSelection();
        }
    }
}

 var mytext = selectHTML();
    $('span').css({"background-color": "#000000"}, {"font-color": "#000000"});