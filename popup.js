var pleasework = false;

function click(e) {
	chrome.tabs.query({ currentWindow: true, active: true }, 
        function(tabs) {
          if (pleasework == false) {
            chrome.tabs.executeScript(tabs[0].id, { "file" : "contents.js" });
            pleasework = true;
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

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('div');

  // chrome.tabs.executeScript(tabs[0].id, { "file" : "contents.js" });
  // pleasework = true;

  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});