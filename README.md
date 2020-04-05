# vue-visible-focus

This component attempts to emulate the [:focus-visible pseudoselector](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible) behavior using similar heuristics.

See it in action at https://filoxo.github.io/vue-visible-focus/

## Installation

```sh
yarn add -S vue-visible-focus
# or
npm i -S vue-visible-focus
```

## Import

```vue
<template>
  <FocusVisible elem="main">
    // more components
  </FocusVisible>
</template>

<script>
import FocusVisible from "vue-visible-focus"
import "vue-visible-focus/dist/vue-visible-focus.css" // or include `[data-focus-visible="false"] * { outline: none; }` in your own styles

export default {
  name: "YourApp",
  components: {
    FocusVisible,
  },
}
</script>
```

or via CDN

```html
<script src="https://unpkg.com/vue"></script>
<script src="/vue-visible-focus.umd.js"></script>

<link rel="stylesheet" href="./vue-visible-focus.css" />

<div id="app">
  <demo></demo>
</div>

<script>
  new Vue({
    components: {
      demo: vue - visible - focus,
    },
  }).$mount("#app")
</script>
```

## Props

| prop name | default value | description                                               |
| --------- | ------------- | --------------------------------------------------------- |
| elem      | "div"         | the wrapping element type to be rendered                  |
| ...rest   |               | any additional props are forwarded to the wrapper element |

## Development

Run `yarn start` to run the example page with livereloading enabled.

Run `yarn build` to create a production build.

Run `yarn test:watch` to run tests locally with livereload enabled to test changes.
