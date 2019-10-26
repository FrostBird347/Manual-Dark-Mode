chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(null, {
        file: "darkmode.js"
    }, function(isdark) {



    })


});


chrome.runtime.requestUpdateCheck(function() {});

chrome.storage.local.get(['lastVtext'], function(lastVtext) {


    chrome.storage.local.get(['lastV'], function(lastV) {


        var Cversion = chrome.runtime.getManifest().version.toString()
        var CversionName = chrome.runtime.getManifest().version_name.toString()

        if (!lastVtext) {

            chrome.storage.local.set({
                lastVtext: CversionName
            }, function() {})

        }


        try {


            lastV.lastV.toString()


        } catch {


            var lastV = 'error'


        }

        if (lastV == 'error') {


            chrome.storage.local.set({
                lastV: Cversion
            }, function() {})

            var versiontext = 'Current Version: ' + CversionName

            var options = {
                "type": "basic",
                "iconUrl": chrome.extension.getURL("icon/icon192.png"),
                "title": 'Manual Dark Mode Installed',
                "message": versiontext

            };

            chrome.notifications.create(options);


        } else if (Cversion != lastV.lastV.toString()) {


            chrome.storage.local.set({
                lastV: Cversion
            }, function() {})

            var versiontext = 'Current Version: ' + CversionName


            if (CversionName.toString() != lastVtext.lastVtext.toString()) {


                var options = {
                    "type": "basic",
                    "iconUrl": chrome.extension.getURL("icon/icon192.png"),
                    "title": 'Manual Dark Mode Updated',
                    "message": versiontext

                };

                chrome.notifications.create(options);


            } else {


                var versiontext = 'Minor update, current version: ' + Cversion

                var options = {
                    "type": "basic",
                    "iconUrl": chrome.extension.getURL("icon/icon192.png"),
                    "title": 'Manual Dark Mode Updated',
                    "message": versiontext

                };

                chrome.notifications.create(options);


            }


            chrome.storage.local.set({
                lastV: Cversion
            }, function() {})


        }


        chrome.storage.local.set({
            lastVtext: CversionName
        }, function() {});

        chrome.storage.local.set({
            lastV: Cversion
        }, function() {})


    })


})



// Made by FrostBird347