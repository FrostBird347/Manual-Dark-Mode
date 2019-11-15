/* --------------------------------------- */
/* Functions Below */



chrome.runtime.onMessage.addListener( function ( msg, sender, sendResponse ) { /* Listen for content script trigger icon change */
	if ( msg.action === "isdark" ) {
		if ( msg.value ) {
			chrome.browserAction.setIcon( { /* Change Icon */
				path: "/icon/icon128_2.png"
			} );
		} else {
			chrome.browserAction.setIcon( { /* Reset Icon */
				path: "/icon/icon128.png"
			} );
		}
	}
} );


chrome.tabs.onRemoved.addListener( function ( tabid, removed ) { /* Check darkmode on current tab when a tab is closed */
	chrome.tabs.executeScript( null, { /* Run darkmode check script */
		file: "darkmodecheck.js"
	}, function () {} );
} )

chrome.windows.onRemoved.addListener( function ( windowid ) { /* Check darkmode on current tab when a tab is closed */
	chrome.tabs.executeScript( null, { /* Run darkmode check script */
		file: "darkmodecheck.js"
	}, function () {} );
} )


chrome.browserAction.onClicked.addListener( function ( tab ) { /* Toggle darkmode on current tab when icon is clicked */
	chrome.tabs.executeScript( null, { /* Run darkmode toggle script */
		file: "darkmode.js"
	}, function () {} );
} );




// Made by FrostBird347