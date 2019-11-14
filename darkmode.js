if (document.documentElement.id != "DarkModeOnFrostBird347") {
    dark();
} else {
    normal();
}


function dark() {
    var thing = 'invert(1) hue-rotate(180deg)';
    var thing3 = 'black';
    document.documentElement.style.filter = thing;
    document.documentElement.style.background = thing3;
    document.documentElement.id = "DarkModeOnFrostBird347";
    console.log("Dark Mode Activated");
    chrome.runtime.sendMessage({
    action: 'isdark',
    value: true
});
}


function normal() {
    var thing2 = 'invert(0) hue-rotate(0deg)';
    var thing4 = 'white';
    document.documentElement.style.filter = thing2;
    document.documentElement.style.background = thing4;
    document.documentElement.id = "DarkModeOffFrostBird347";
    console.log("Dark Mode Deactivated");
    chrome.runtime.sendMessage({
    action: 'isdark',
    value: false
});
}

// Made by FrostBird347