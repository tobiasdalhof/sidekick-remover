(()=>{let e=document.createElement(`style`);e.textContent=`
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
  `;function t(t){if(!t){e.remove();return}e.isConnected||document.documentElement.append(e)}chrome.storage.onChanged.addListener(e=>{e.enabled&&t(e.enabled.newValue!==!1)}),chrome.storage.local.get({enabled:!0}).then(({enabled:e})=>{t(e!==!1)})})();