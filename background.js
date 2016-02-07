
// change the color of the text returned by selectHTML

chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(null, {"file": "contents.js"});
});
