function maybeClose(tabId, changeInfo, tab) {
	if (tab.url.match(/https:\/\/([a-z0-9]+).zoom.us\/[a-z]\/([0-9]+)\?(.*)?status=success/)) {
		setTimeout(function() {
			browser.tabs.remove(tab.id);
		}, 2000);
	}
}

browser.tabs.onUpdated.addListener(maybeClose);
