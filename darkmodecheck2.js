function checkdark() {

    if (document.documentElement.id != "DarkModeOnFrostBird347") {
    chrome.runtime.sendMessage({action: 'isdark', value: false});
    } else {
    chrome.runtime.sendMessage({action: 'isdark', value: true});
    }

}

var focused = true;

window.onfocus = function() {
	checkdark()
    focused = true;
};
window.onblur = function() {
try {
    chrome.runtime.sendMessage({action: 'isdark', value: false});
    focused = false;
    
    }
    catch {
    console.debug("error changing icon...")
    }
};





// Made by FrostBird347