/* --------------------------------------- */
/* Functions Below */



function notifyopt( title, message ) { /* Create Notification */

	var options = {
		"type": "basic",
		"iconUrl": chrome.extension.getURL( "icon/icon192.png" ),
		"title": title,
		"message": message

	};

	return options

}



/* --------------------------------------- */
/* Start Below */



chrome.storage.local.get( [ 'lastVtext' ], function ( lastVtext ) { /* Get saved version name */
	chrome.storage.local.get( [ 'lastV' ], function ( lastV ) { /* Get saved version number */

		var Cversion = chrome.runtime.getManifest().version.toString() /* Get current version name */
		var CversionName = chrome.runtime.getManifest().version_name.toString() /* Get current version number */

		if ( !lastVtext ) { /* If there is no saved version name */
			chrome.storage.local.set( { /* Save current version name */
				lastVtext: CversionName
			}, function () {} )
		}

		try { /* Try to convert the saved version number to a string */
			lastV.lastV.toString()
		} catch {
			var lastV = 'error'
		}

		if ( lastV == 'error' ) { /* If it failed to convert the saved version number to a string */

			chrome.storage.local.set( { /* Save current version number */
				lastV: Cversion
			}, function () {} )

			var versiontext = 'Current Version: ' + CversionName
			var options = notifyopt( 'Manual Dark Mode Installed', versiontext ) { /* Create notification with the current version name */
			chrome.notifications.create( options ); /* Display notification */

		} else if ( Cversion != lastV.lastV.toString() ) { /* If current version number is not the same as the saved version number */

			chrome.storage.local.set( { /* Save current version number */
				lastV: Cversion
			}, function () {} )

			var versiontext = 'Current Version: ' + CversionName

			if ( CversionName.toString() != lastVtext.lastVtext.toString() ) { /* If current version name is not the same as the saved version name */

				var options = notifyopt( 'Manual Dark Mode Updated', versiontext ) /* Create notification */
				chrome.notifications.create( options ); /* Display notification */

			} else {

				var versiontext = 'Minor update, current version: ' + Cversion
				var options = notifyopt( 'Manual Dark Mode Updated', versiontext ) /* Create notification */
				chrome.notifications.create( options ); /* Display notification */

			}

			chrome.storage.local.set( { /* Save current version number */
				lastV: Cversion
			}, function () {} )

		}

		chrome.storage.local.set( { /* Save current version name */
			lastVtext: CversionName
		}, function () {} );

		chrome.storage.local.set( { /* Save current version number */
			lastV: Cversion
		}, function () {} )

	} )
} )

chrome.runtime.requestUpdateCheck( function ( status ) { /* Check if there are updates */

	console.log( "Checking update..." );

	if ( status == "update_available" ) {

		console.log( "Update available..." );
		console.log( "New update:  " + details.version );
		var versiontext = 'New update detected: ' + details.version + '\nUpdate will be installed after browser restart.'

		var options = notifyopt( 'New update detected!', versiontext ) /* Create notification */

		chrome.notifications.create( options ); /* Display notification */

	} else if ( status == "no_update" ) {

		console.log( "No update found." );

	} else if ( status == "throttled" ) {

		console.log( "Throttled." );

	}

} );



// Made by FrostBird347