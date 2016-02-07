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

// console.log("on active tab");

var handler = function checkKeyPressed(e) {
                if (e.keyCode == "66") {
                    var mytext = selectHTML();
                    $('.blacked_out').css({"background-color": "#000000", "color": "#000000"});
                }
              }

// var buttonpressed;

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        // console.log("received msg from popup:" + request.greeting);
        // buttonpressed = request.greeting;
        // console.log("in message function, buttonpressed == " + buttonpressed);


        if (request.greeting == "on") {
            window.addEventListener("keydown", handler, false);
            console.log("in handler, ON");
        } else if (request.greeting == "off") {
            window.removeEventListener("keydown", handler, false);
            console.log("in handler, OFF");
        }
    }
)

// var toggle = false;

// chrome.browserAction.onClicked.addListener(function(tab) {
//   toggle = !toggle;
//   if (toggle) {
//     chrome.browserAction.setIcon({path: "icon.png", tabId:tab.id});
//     // chrome.tabs.executeScript(tab.id, {file:"SCRIPT.user.js"});
//     window.addEventListener("keydown", handler, false);
//     console.log("ONNNNN");
//   } else {
//     chrome.browserAction.setIcon({path: "icon_off.png", tabId:tab.id});
//     // chrome.tabs.executeScript(tab.id, {code:"alert()"});
//     window.removeEventListener("keydown", handler, false);
//     console.log("OFFFFFF");
//   }
// });

// console.log("otside message function, buttonpressed == " + buttonpressed);

// if (buttonpressed == "on")
//     window.addEventListener("keydown", handler, false);
// else if (buttonpressed == "off")
//     window.removeEventListener("keydown", handler, false);

