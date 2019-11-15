  function loop() {
    setTimeout(function () {
	if (document.hasFocus()) {
        checkdark();
        }
        loop();
    }, 500);
}



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
	checkdark()
    focused = false;
    
    }
    catch {
    console.debug("Error changing icon... Reload page?")
    }
};



loop()

// Made by FrostBird347