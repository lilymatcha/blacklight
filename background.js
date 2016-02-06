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
        $(selectedText).addClass("blacked_out");

        var w = getSelection().getRangeAt(0);
        w.surroundContents(selectedText);

        console.log("you got the text!")
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

// change the color of the text returned by selectHTML

chrome.browserAction.onClicked.addListener(function(tab) {
	console.log('i was clicked!!');
    var mytext = selectHTML();
    $('span').css({"background-color":"black"});
});


// function blockAndDisplay() {


//     console.log('yolo! I am now running')



//     $('*::selection').css('background', 'black')



//     if (feed.length == 0) {
//         message.remove();
//     } else if (message.length == 0) {
//         message = $('<h1>')
//             .attr('id', 'distracted')
//             .text("Don't get distracted by Facebook!")
//             .css('font-size', '30px')
//             .css('font-family', "'Helvetica Neue', Helvetica, Arial, 'lucida grande', tahoma, verdana, arial, sans-serif")
//             .css('position', 'relative')
//             .css('top', '75px');
//         $('[data-location=maincolumn]').append(message);
//      }

// }
