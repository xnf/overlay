overlay
=======

Javascript function that adds an overlay to the screen. Its like shade of the modal window, but without the window :)

What it does
It adds an overlay <div> element to the website and you can trigger it on and off by calling
overlay.on();
or
overlay.off();

for example:
<button onclick="javascript:overlay.on();">Show overlay</button>
<button onclick="javascript:overlay.off();">Hide overlay</button>


it is self initializing, so just add the contents of the .js file to your script or include it separetly by placing this anywhere in your document.

<script src="[path-to-script]/overlay.js" type="text/javascript"></script>

Requirements:
- javascript enabled. no jquery.

