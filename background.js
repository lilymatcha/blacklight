
// change the color of the text returned by selectHTML

chrome.browserAction.onClicked.addListener(function(tab) {
	console.log('i was clicked!!');
	chrome.tabs.executeScript(null, {"file": "contents.js"});
});
