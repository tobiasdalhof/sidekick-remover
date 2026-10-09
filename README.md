<div align="center">
  <img src="https://raw.githubusercontent.com/tobiasdalhof/sidekick-remover/main/extension/icons/icon64.png" alt="Sidekick Remover" width="64" height="64">

  <h1>Sidekick Remover</h1>

  <p>A browser extension that removes the floating Sidekick chat bar from Shopify Admin.</p>

  <a href="https://chromewebstore.google.com/detail/sidekick-remover/lneifodgmhfelpffdkemfgeaogcpkcjn">
    <img src="https://img.shields.io/chrome-web-store/v/lneifodgmhfelpffdkemfgeaogcpkcjn?style=for-the-badge&logo=google-chrome&logoColor=white&label=Chrome%20Web%20Store" alt="Chrome Web Store version">
  </a>
</div>

## Why?

I built this extension because I'm tired of Shopify forcing unwanted AI slop into an interface that worked perfectly fine without it. Sidekick Remover simply hides the intrusive floating Sidekick bar and gets it out of the way.

## Installation

### Chrome

Install [Sidekick Remover from the Chrome Web Store](https://chromewebstore.google.com/detail/sidekick-remover/lneifodgmhfelpffdkemfgeaogcpkcjn).

### Firefox

Sidekick Remover has been submitted to Firefox Add-ons and is currently awaiting review.

In the meantime, you can load the extension temporarily using the development instructions below.

## Development

1. Clone this repository.
2. Install dependencies with `pnpm install`.
3. Build the extension with `pnpm build`.

### Chrome

Open `chrome://extensions/`, enable **Developer mode**, click **Load unpacked**, and select the `extension` directory.

### Firefox

Open `about:debugging#/runtime/this-firefox`, click **Load Temporary Add-on**, and select `extension/manifest.json`.

Requires Firefox 142 or later. Temporary add-ons are removed when Firefox restarts.

### Building

Run `pnpm dev` to automatically rebuild the extension when files change. Reload the extension in your browser to apply changes.

Run `pnpm zip` to create a distribution archive (requires `7z`).

## License

[MIT](LICENSE)

Not affiliated with or endorsed by Shopify.
