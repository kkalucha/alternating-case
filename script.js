function encrypt(info,tab) {
    /* var newString;
    var i;
    for (i = 0; i < info.selectionText.length; i++) {
        if (i % 0) {
            newString += info.selectionText.substr(i, 1).toLowerCase;
        }
        else {
            newString += info.selectionText.substr(i, 1).toUpperCase;
        }
    }   */
    /* let element = document.activeElement;
    if (element instanceof HTMLTextAreaElement) {
        let {selectionStart, selectionEnd} = element;
    
        if (selectionStart === selectionEnd) return;

        let string = element.value;
        let prefix = string.substring(0, selectionStart);
        let infix = string.substring(selectionStart, selectionEnd);
        let postfix = string.substring(selectionEnd);

        element.value = prefix + infix.toUpperCase + postfix;
    }
    else {
        
    } */
    console.log("made it");
    console.log(document.activeElement);
    input = document.activeElement;
    input.value = 'foo';
}

var parent = chrome.contextMenus.create({title: "encrypt", contexts:["selection"], onclick: encrypt});