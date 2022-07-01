searchWikipedia = function(word){
  var query = word.selectionText;
  chrome.tabs.create({url: `https://en.wiktionary.org/wiki/${query}#Latin`;
};

chrome.contextMenus.create({
  title: "Search in Wikipedia",
  contexts:["selection"],
  onclick: searchWikipedia
});
