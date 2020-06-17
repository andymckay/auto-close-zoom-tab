function maybeClose(tabId, changeInfo, tab) {
	// example url: https://foo.zoom.us/j/634874123#success
	if (tab.url.match(/https:\/\/(?:[a-z0-9_]+[.])?zoom.us\/[a-z]\/[0-9]+\/?[?#](?:.*status=)?success/) ||
			tab.url.match(/https:\/\/[a-z]+\.zoom\.us\/postattendee.*/)) {
		setTimeout(function() {
			browser.tabs.remove(tab.id);
		}, 2000);
	}
}

browser.tabs.onUpdated.addListener(maybeClose);
