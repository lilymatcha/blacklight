function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

function sayHi() {
  renderStatus("dsklfjskdl jinas update!!");
}

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('Turning ' + tab.url + ' red!');
  chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor="red"'
  });
});

document.addEventListener('DOMContentLoaded', function() {
  sayHi();
});


// function selectHTML() {
//     try {
//         if (window.ActiveXObject) {
//             var c = document.selection.createRange();
//             return c.htmlText;
//         }
    
//         var nNd = document.createElement("span");
//         var w = getSelection().getRangeAt(0);
//         w.surroundContents(nNd);
//         return nNd.innerHTML;
//     } catch (e) {
//         if (window.ActiveXObject) {
//             return document.selection.createRange();
//         } else {
//             return getSelection();
//         }
//     }
// }

// $(function() {
//     $('#changeColor').click( function() {
//         var mytext = selectHTML();
//         $('span').css({"color":"red"});
//     });
// });
