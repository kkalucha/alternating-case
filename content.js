chrome.runtime.onMessage.addListener(function (request) {
    replaceSelectedText(document.activeElement, request.text);
});

function replaceSelectedText(elem, text) {
    var start = elem.selectionStart;
    var end = elem.selectionEnd;
    var newString = '';
    var i;
    for (i = 0; i < elem.value.slice(start, end).length; i++){
        if (i % 2) {
            newString += elem.value.substr(start + i, 1).toLowerCase();
        }
        else {
            newString += elem.value.substr(start + i, 1).toUpperCase();
        }
    }
    
    elem.value = elem.value.slice(0, start) + newString + elem.value.substr(end);
    elem.selectionStart = start + newString.length;
    elem.selectionEnd = elem.selectionStart;
}