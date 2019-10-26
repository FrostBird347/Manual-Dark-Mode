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
            var options = notifyopt('Manual Dark Mode Installed', versiontext)
            chrome.notifications.create(options);
            
        } else if (Cversion != lastV.lastV.toString()) {
        
            chrome.storage.local.set({
                lastV: Cversion
            }, function() {})
            
            var versiontext = 'Current Version: ' + CversionName
            
            if (CversionName.toString() != lastVtext.lastVtext.toString()) {

                var options = notifyopt('Manual Dark Mode Updated', versiontext)
                chrome.notifications.create(options);
                
            } else {
            
                var versiontext = 'Minor update, current version: ' + Cversion
                var options = notifyopt('Manual Dark Mode Updated', versiontext)
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


chrome.runtime.requestUpdateCheck(function(status) {

    console.log("Checking update...");
    
    if (status == "update_available") {
    
        console.log("Update available...");
        console.log("New update:  " + details.version);
        var versiontext = 'New update detected: ' + details.version + '\nUpdate will be installed after browser restart.'

        var options = notifyopt('New update detected!', versiontext)

        chrome.notifications.create(options);
        
    } else if (status == "no_update") {
    
        console.log("No update found.");
        
    } else if (status == "throttled") {
    
        console.log("Throttled.");
        
    }
    
});

function notifyopt(title, message) {

    var options = {
        "type": "basic",
        "iconUrl": chrome.extension.getURL("icon/icon192.png"),
        "title": title,
        "message": message

    };

    return options

}