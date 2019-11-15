chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg.action === "isdark") {
        if (msg.value) {
            chrome.browserAction.setIcon({path: "/icon/icon128_2.png"});
        } else {
            chrome.browserAction.setIcon({path: "/icon/icon128.png"});
        }
    }
});


chrome.tabs.onRemoved.addListener(function(tabid, removed) {
    chrome.tabs.executeScript(null, {
        file: "darkmodecheck.js"
    }, function(isdark) {})
})

chrome.windows.onRemoved.addListener(function(windowid) {
    chrome.tabs.executeScript(null, {
        file: "darkmodecheck.js"
    }, function(isdark) {})
})


chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(null, {
        file: "darkmode.js"
    }, function(isdark) {})
});




// Made by FrostBird347