// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('Turning your text black!');
  chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor="red"'
  });
});

/*
 * selectHTML
 * @return a string of text, the background of which will later be changed
 */ 
function selectHTML() {
    try {

    	// what does this do????
        if (window.ActiveXObject) {
            var c = document.selection.createRange();
            return c.htmlText;
        }
    
        var selectedText = document.createElement("span");
        var w = getSelection().getRangeAt(0);
        w.surroundContents(selectedText);
        return selectedText.innerHTML;

    // error checking, fuck yeah
    } catch (e) {
        if (window.ActiveXObject) {
            return document.selection.createRange();
        } else {
            return getSelection();
        }
    }
}

// change the color of the text returned by selectHTML
$(function() {
    $('#changeColor').click( function() {
        var mytext = selectHTML();
        $('span').css({"background-color":"black"});
    });
});
