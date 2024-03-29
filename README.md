﻿# **Manual-Dark-Mode**

A simple chrome extension that inverts and changes the hue of the current page.

## Installation

- [Download the latest release](https://github.com/FrostBird347/Manual-Dark-Mode/releases/latest)
- Download and extract the zip
- Go to chrome://extensions/
- Drag the .crx file into the window

## How it works

When the extension icon is clicked, it runs a script that checks the id of the page's \<html> tag. If it does not match a certain value, sets the style to 

    style="filter: invert(1) hue-rotate(180deg); background: black;"

and sets the id to certain value. If it matches the value, it removes the style from the \<html> tag and changes the value of the id to something else.

## FAQ

- **Q:**  Nothing is happening! 
- **A:** Try clicking the extension's icon, if that does not work, please submit an issue. 

 <br>
 
- **Q:** There has not been any update notifications
- **A:** Go to chrome://extensions/ and check the version of the extension by enabling developer mode. If it is not up to date, try clicking the update button. If it still does not update, please submit an issue.

 <br>
 
- **Q:** Do I have to download the latest version when a new update is released?
- **A:** No, because the extension auto-updates, even if you download an old version of the extension, it should later update to the latest version.

 <br>
 
- **Q:** The extension needs permission to "Read my browsing history".
- **A:** To change the icon, the content script (that inverts the page and checks if the page is already inverted) needs to be able to communicate directly with the extension. The "Tabs" permission needs to be enabled to allow this. I am currently trying to find another way that does not require the permission.

## Screenshots


Without extension | With extension
-------- | -----
![Error loading image](https://i.imgur.com/vBzRv4t.png) | ![Error loading image](https://i.imgur.com/aLV3dCR.png)
![Error loading image](https://i.imgur.com/J4Vzcwh.png) | ![Error loading image](https://i.imgur.com/DpnSXyO.png)

----
 


