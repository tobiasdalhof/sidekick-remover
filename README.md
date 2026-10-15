<div align="center">
  <a href="#sidekick-remover"><img src="https://raw.githubusercontent.com/tobiasdalhof/sidekick-remover/main/extension/icons/icon64.png" alt="Sidekick Remover" width="64" height="64"></a>

  <h1>Sidekick Remover</h1>

  <p>A browser extension that removes the floating Sidekick chat bar from Shopify Admin.</p>

  <p>
    <a href="https://chromewebstore.google.com/detail/sidekick-remover/lneifodgmhfelpffdkemfgeaogcpkcjn"><img src="https://img.shields.io/chrome-web-store/v/lneifodgmhfelpffdkemfgeaogcpkcjn?style=for-the-badge&logo=google-chrome&logoColor=white&label=Chrome" alt="Chrome Web Store version"></a>
    <a href="https://addons.mozilla.org/en-US/firefox/addon/sidekick-remover/"><img src="https://img.shields.io/amo/v/sidekick-remover?style=for-the-badge&logo=firefoxbrowser&logoColor=white&label=Firefox" alt="Firefox Add-ons version"></a>
  </p>

  <img src="https://raw.githubusercontent.com/tobiasdalhof/sidekick-remover/main/.github/screenshot.png" alt="Sidekick Remover screenshot">
</div>


## Why?

Nothing against Sidekick. I'm sure it's useful for many merchants, but not everyone needs or wants a floating chat bar following them around Shopify Admin.

What bothers me most is that Sidekick appears even inside third-party apps, most of which don't integrate with it. This means the chat bar takes up valuable screen space even where it can't do much.

I prefer a cleaner, less cluttered interface, so I built this extension for anyone who feels the same. It's a small fix for something that should really be a personal choice.

If Shopify introduces a native option to hide Sidekick or moves it somewhere less intrusive, I'll happily archive this extension.

## Installation

### Chrome

[Install from Chrome Web Store](https://chromewebstore.google.com/detail/sidekick-remover/lneifodgmhfelpffdkemfgeaogcpkcjn)

### Firefox

[Install from Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/sidekick-remover/)

## Development

Development requires [Node.js](https://nodejs.org/) and [pnpm](https://pnpm.io/).

### Setup

1. Clone this repository.
2. Install dependencies with `pnpm install`.
3. Start development mode with `pnpm dev`.

### Chrome

Open `chrome://extensions/`, enable **Developer mode**, click **Load unpacked**, and select the `extension` directory.

### Firefox

Open `about:debugging#/runtime/this-firefox`, click **Load Temporary Add-on**, and select `extension/manifest.json`.

Requires Firefox 142 or later. Temporary add-ons are removed when Firefox restarts.

### Building

| Command          | Description                                                                  |
| ---------------- | ---------------------------------------------------------------------------- |
| `pnpm dev`       | Watch for changes and automatically rebuild the extension.                   |
| `pnpm build`     | Type-check and create a production build.                                    |
| `pnpm typecheck` | Check TypeScript types without building.                                     |
| `pnpm lint`      | Check for ESLint errors.                                                     |
| `pnpm lint:fix`  | Automatically fix ESLint errors where possible.                              |
| `pnpm zip`       | Create a production build and package it as `extension.zip` (requires `7z`). |

## License

[MIT](LICENSE)

Not affiliated with or endorsed by Shopify.
