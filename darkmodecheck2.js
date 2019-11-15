/* --------------------------------------- */
/* Functions Below */



function loop() { /* Simple 0.5 second loop to check if darkmode is active if the window is open */
	setTimeout( function () {
		if ( document.hasFocus() ) {
			checkdark();
		}
		loop();
	}, 500 );
}



function checkdark() { /* Check if darkmode is active and trigger icon change */

	if ( document.documentElement.id != "DarkModeOnFrostBird347" ) {
		chrome.runtime.sendMessage( { /* Trigger icon reset */
			action: 'isdark',
			value: false
		} );
	} else {
		chrome.runtime.sendMessage( { /* Trigger icon change */
			action: 'isdark',
			value: true
		} );
	}

}

window.onfocus = function () { /* Run on window focus */
	checkdark()
	focused = true;
};

window.onblur = function () { /* Run on window change */
	try {
		chrome.runtime.sendMessage( { /* Trigger icon reset */
			action: 'isdark',
			value: false
		} );
		checkdark()
		focused = false;

	} catch {
		console.debug( "Error changing icon... Reload page?" ) /* Error message */
	}
};



/* --------------------------------------- */
/* Vars Below */



var focused = true;



/* --------------------------------------- */
/* Start Below */



loop()

// Made by FrostBird347