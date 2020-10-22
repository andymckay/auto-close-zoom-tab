function maybeClose(tabId, changeInfo, tab) {
	if (tab.url.match(/https:\/\/([a-z]+).zoom.us\/[a-z]\/([0-9]+)\?(.*)(status=success|\#success)/)) {
		setTimeout(function() {
			browser.tabs.remove(tab.id);
		}, 2000);
	}
}

browser.tabs.onUpdated.addListener(maybeClose);
