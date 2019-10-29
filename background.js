function getClickHandler(info, tab) {
    chrome.tabs.sendMessage(tab.id, {text: "bar"});
};

chrome.contextMenus.create({
  "title" : "aLtErNaTiNg CaSe'",
  "type" : "normal",
  "contexts" : ["editable"],
  "onclick" : getClickHandler
});