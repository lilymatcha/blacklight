chrome.tabs.query({ currentWindow: true, active: true }, 
  function(tabs){
     chrome.tabs.executeScript(tabs[0].id, {"file": "contents.js"}); 
});