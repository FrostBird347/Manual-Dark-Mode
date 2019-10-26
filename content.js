chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(null, {
        file: "darkmode.js"
    }, function(isdark) {})
});



// Made by FrostBird347