/* --------------------------------------- */
/* Functions Below */



function dark() { /* Activate Darkmode */
	var thing = 'invert(1) hue-rotate(180deg)';
	var thing3 = 'black';
	document.documentElement.style.filter = thing;
	document.documentElement.style.background = thing3;
	document.documentElement.id = "DarkModeOnFrostBird347";
	console.log( "Dark Mode Activated" );
	chrome.runtime.sendMessage( { /* Trigger icon change */
		action: 'isdark',
		value: true
	} );
}


function normal() { /* Deactivate Darkmode */
	var thing2 = 'invert(0) hue-rotate(0deg)';
	var thing4 = 'white';
	document.documentElement.style.filter = thing2;
	document.documentElement.style.background = thing4;
	document.documentElement.id = "DarkModeOffFrostBird347";
	console.log( "Dark Mode Deactivated" );
	chrome.runtime.sendMessage( { /* Trigger icon reset */
		action: 'isdark',
		value: false
	} );
}



/* --------------------------------------- */
/* Start Below */



if ( document.documentElement.id != "DarkModeOnFrostBird347" ) { /* Check darkmode is active */
	dark();
} else {
	normal();
}



// Made by FrostBird347