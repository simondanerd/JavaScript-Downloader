function getLocation() {
	const promptText = "Please enter the full address of the file to download: ";
	alert("<p>Do you want to download the file at " + location + " now? <br>If so, click <a href=&quot" + location + "&quot>here.</a></p>");
	var location = readLine(promptText);
	if (location.toLowerCase().indexOf('https:') === true || location.toLowerCase().indexOf('http:') === true) { 
		window.open(location);
	}
}

function start() {
	getLocation();
}
