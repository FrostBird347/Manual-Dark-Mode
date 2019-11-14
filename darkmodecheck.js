function checkdark() {

    if (document.documentElement.id != "DarkModeOnFrostBird347") {
    chrome.runtime.sendMessage({action: 'isdark', value: false});
    } else {
    chrome.runtime.sendMessage({action: 'isdark', value: true});
    }

}

checkdark()



// Made by FrostBird347