function maybeClose(tabId, changeInfo, tab) {
	if (tab.url.match(/https:\/\/([a-z]+).zoom.us\/j\/([0-9]+)\?pwd=\&status=success/)) {
		setTimeout(function() {
			browser.tabs.remove(tab.id);
		}, 2000);
	}
}

browser.tabs.onUpdated.addListener(maybeClose);
