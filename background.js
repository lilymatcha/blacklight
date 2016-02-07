
// change the color of the text returned by selectHTML

var pleasework = false;

function click(e) {
	chrome.tabs.query({ currentWindow: true, active: true }, 
        function(tabs) {
          if (pleasework == false) {
            chrome.tabs.executeScript(tabs[0].id, { "file" : "contents.js" });
            chrome.browserAction.setIcon({path: "icon.png", tabId:tab.id});
            pleasework = true;
          } else {
          	pleasework = false;
		    chrome.browserAction.setIcon({path: "icon_off.png", tabId:tab.id});

          }

          // keep track of whether has been sent to tab or not
          // get instance of tab you've sent it to

          // every time you highlight, you end up closing the popup. thus when you go to turn it off,
          // it's a new instance of the popup! and that's why your shit doesn't work!!
    			chrome.tabs.sendMessage(tabs[0].id, { greeting : e.target.id }, function(response) {

    				console.log("what does this do");
            console.log(response.farewell);
    		});
      });
  	// window.close();
}

chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(null, {"file": "contents.js"});
	// // var divs = document.querySelectorAll('div');

	// chrome.tabs.executeScript(tabs[0].id, { "file" : "contents.js" });
	// pleasework = true;

	// // for (var i = 0; i < divs.length; i++) {
	// //   divs[i].addEventListener('click', click);
	// // }
});




// document.addEventListener('DOMContentLoaded', function () {
//   var divs = document.querySelectorAll('div');

//   // chrome.tabs.executeScript(tabs[0].id, { "file" : "contents.js" });
//   // pleasework = true;

//   for (var i = 0; i < divs.length; i++) {
//     divs[i].addEventListener('click', click);
//   }
// });

// chrome.browserAction.onClicked.addListener(function(tab) {
//   toggle = !toggle;
//   if (toggle) {
//     chrome.browserAction.setIcon({path: "icon.png", tabId:tab.id});
//     // chrome.tabs.executeScript(tab.id, {file:"SCRIPT.user.js"});
//     window.addEventListener("keydown", handler, false);
// 	chrome.tabs.executeScript(null, {"file": "contents.js"});

//     console.log("ONNNNN");
//   } else {
//     chrome.browserAction.setIcon({path: "icon_off.png", tabId:tab.id});
//     // chrome.tabs.executeScript(tab.id, {code:"alert()"});
//     window.removeEventListener("keydown", handler, false);
//     console.log("OFFFFFF");
//   }
// });