(() => {
  const style = document.createElement('style')
  style.textContent = `
    /* Hide the entire footer when no start slot is present */
    [data-polaris-frame-global-ribbon="true"]:not(:has([data-frame-footer-slot="start"])) {
      display: none !important;
    }

    /* Keep the footer and pagination, but hide the Sidekick outlet */
    [data-polaris-frame-global-ribbon="true"]:has([data-frame-footer-slot="start"]) [data-frame-footer-outlet="center"] {
      display: none !important;
    }

    /* Hide the floating Sidekick button on mobile screens */
    [data-component-name="mobile-frame-actions-sidekick"] {
      display: none !important;
    }
  `

  function setEnabled(enabled: boolean) {
    if (!enabled) {
      style.remove()
      return
    }
    if (!style.isConnected) {
      document.documentElement.append(style)
    }
  }

  chrome.storage.onChanged.addListener((changes) => {
    if (changes.enabled) {
      setEnabled(changes.enabled.newValue !== false)
    }
  })

  chrome.storage.local.get({ enabled: true }).then(({ enabled }) => {
    setEnabled(enabled !== false)
  })
})()
