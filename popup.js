function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}


function sayHi() {
  renderStatus("jinas update!!");
}

document.addEventListener('DOMContentLoaded', function() {
  sayHi(function(url) {
    // Put the image URL in Google search.

    // getImageUrl(url, function(imageUrl, width, height) {

    //   renderStatus('Search term: ' + url + '\n' +
    //       'Google image search result: ' + imageUrl);
    //   var imageResult = document.getElementById('image-result');
    //   // Explicitly set the width/height to minimize the number of reflows. For
    //   // a single image, this does not matter, but if you're going to embed
    //   // multiple external images in your page, then the absence of width/height
    //   // attributes causes the popup to resize multiple times.
    //   imageResult.width = width;
    //   imageResult.height = height;
    //   imageResult.src = imageUrl;
    //   imageResult.hidden = false;

  }, function(errorMessage) {
    renderStatus('Cannot change text. ' + errorMessage);
  });
});


function selectHTML() {
    try {
        if (window.ActiveXObject) {
            var c = document.selection.createRange();
            return c.htmlText;
        }
    
        var nNd = document.createElement("span");
        var w = getSelection().getRangeAt(0);
        w.surroundContents(nNd);
        return nNd.innerHTML;
    } catch (e) {
        if (window.ActiveXObject) {
            return document.selection.createRange();
        } else {
            return getSelection();
        }
    }
}

$(function() {
    $('#changeColor').click( function() {
        var mytext = selectHTML();
        $('span').css({"color":"red"});
    });
});
