# &lt;vaadin-split-layout&gt;

[Live Demo ↗](https://vaadin.com/components/vaadin-split-layout/html-examples)
|
[API documentation ↗](https://vaadin.com/components/vaadin-split-layout/html-api)

[&lt;vaadin-split-layout&gt;](https://vaadin.com/components/vaadin-split-layout) is a Web Component implementing a split layout for two content elements with a draggable splitter between them, part of the [Vaadin components](https://vaadin.com/components).

[![npm version](https://badgen.net/npm/v/@vaadin/vaadin-split-layout)](https://www.npmjs.com/package/@vaadin/vaadin-split-layout)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/vaadin/vaadin-split-layout)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/vaadin/web-components?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![Published on Vaadin  Directory](https://img.shields.io/badge/Vaadin%20Directory-published-00b4f0.svg)](https://vaadin.com/directory/component/vaadinvaadin-split-layout)
[![Stars on vaadin.com/directory](https://img.shields.io/vaadin-directory/star/vaadinvaadin-split-layout.svg)](https://vaadin.com/directory/component/vaadinvaadin-split-layout)

```html
<vaadin-split-layout>
  <vaadin-split-layout orientation="vertical">
    <div>First layout content</div>
    <div>Second layout content</div>
  </vaadin-split-layout>
  <vaadin-split-layout orientation="vertical">
    <div>Third layout content</div>
    <div>Fourth layout content</div>
  </vaadin-split-layout>
</vaadin-split-layout>
```

## Installation

Install `vaadin-split-layout`:

```sh
npm i @vaadin/vaadin-split-layout --save
```

Once installed, import it in your application:

```js
import '@vaadin/vaadin-split-layout/vaadin-split-layout.js';
```

## Getting started

Vaadin components use the Lumo theme by default.

To use the Material theme, import the correspondent file from the `theme/material` folder.

## Entry points

- The component with the Lumo theme:

  `theme/lumo/vaadin-split-layout.js`

- The component with the Material theme:

  `theme/material/vaadin-split-layout.js`

- Alias for `theme/lumo/vaadin-split-layout.js`:

  `vaadin-split-layout.js`

## Big Thanks

Cross-browser Testing Platform and Open Source <3 Provided by [Sauce Labs](https://saucelabs.com).

## License

Apache License 2.0

Vaadin collects development time usage statistics to improve this product. For details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.
