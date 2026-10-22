(()=>{let e=document.createElement(`style`);e.textContent=`
    /* Keep the footer and pagination, but hide the Sidekick outlet */
    [data-polaris-frame-global-ribbon="true"] [data-frame-footer-outlet="center"] {
      display: none !important;
    }

    /* Hide the floating Sidekick button on mobile screens */
    [data-component-name="mobile-frame-actions-sidekick"] {
      display: none !important;
    }
  `;function t(t){t?e.isConnected||document.documentElement.append(e):e.remove()}chrome.storage.onChanged.addListener(e=>{e.enabled&&t(e.enabled.newValue!==!1)}),chrome.storage.local.get({enabled:!0}).then(({enabled:e})=>{t(e!==!1)})})();