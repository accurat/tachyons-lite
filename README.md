# Tachyons Lite

> Like Tachyons but without media-queries, colors and normalize.css

Sometimes you don't need tachyons' media queries, you have your own color palette and you want to use [modern-normalize](https://github.com/sindresorhus/modern-normalize) instead of normalize.css.

This is the library for you! It is **75% smaller** than the original tachyons, weighing only **18KB** (minified) against the **79KB** of the minified tachyons bundle.

## Install

```sh
yarn add @accurat/tachyons-lite
```

## Usage

If you're using **webpack**, you can just do

```js
import 'tachyons-lite'
```

Otherwise you can use it from the CDN, put this in your html

```html
<link rel="stylesheet" href="https://unpkg.com/@accurat/tachyons-lite/tachyons-lite.min.css">
```
