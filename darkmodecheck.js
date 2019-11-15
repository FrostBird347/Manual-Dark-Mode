/* --------------------------------------- */
/* Functions Below */



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



/* --------------------------------------- */
/* Start Below */



checkdark()



// Made by FrostBird347