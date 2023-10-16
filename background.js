// Listen for a click on the extension icon
chrome.action.onClicked.addListener((tab) => {
    // clear local storage that tracks article reads
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      function: () => {
        localStorage.clear();
        console.log("Local storage cleared!");
      }
    }).then(() => {
      // Reload the current tab
      chrome.tabs.reload(tab.id);
      console.log("Tab reloaded!");
    });
  });
