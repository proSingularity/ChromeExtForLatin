searchWikipedia = function(word){
  var query = word.selectionText;
  chrome.tabs.create({url: `https://en.wiktionary.org/wiki/${query}#Latin`});
};

chrome.contextMenus.create({
  title: "Search on Latin",
  contexts:["selection"],
  onclick: searchWikipedia
});
