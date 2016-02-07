function click(e) {
	chrome.tabs.query({ currentWindow: true, active: true }, 
        function(tabs){
			chrome.tabs.executeScript(tabs[0].id, {"file": "contents.js"});    
			chrome.tabs.sendMessage(tabs[0].id, {greeting: e.target.id}, function(response) {
				console.log(response.farewell);
			});
        });
  	// window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});