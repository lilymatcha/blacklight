/*
 * selectHTML
 * @return a string of text, the background of which will later be changed
 */ 
function selectHTML() {
    try {
        if (window.ActiveXObject) {
            var c = document.selection.createRange();
            return c.htmlText;
        }
    
        var selectedText = document.createElement("span");
        $(selectedText).addClass("blacked_out");

        var w = getSelection().getRangeAt(0);
        w.surroundContents(selectedText);

        console.log(w);
        return selectedText.innerHTML;

    } catch (e) {
        if (window.ActiveXObject) {
            return document.selection.createRange();
        } else {
            return getSelection();
        }
    }
}

function checkKeyPressed(e) {
    if (e.keyCode == "66") {
        var mytext = selectHTML();
        $('.blacked_out').css({"background-color": "#000000", "color": "#000000"});
        $('.blacked_out a').css({"background-color": "#000000", "color": "#000000"});
    }
  }
              
window.addEventListener("keydown", checkKeyPressed, false);