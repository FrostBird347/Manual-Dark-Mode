# **Manual-Dark-Mode**

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

----
 


