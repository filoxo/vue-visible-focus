# vue-visible-focus

This component attempts to emulate the [:focus-visible pseudoselector](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible) behavior using similar heuristics.

See it in action at https://filoxo.github.io/vue-visible-focus/

## Installation

```sh
yarn add -S vue-visible-focus
# or
npm i -S vue-visible-focus
```

## Usage

### Register as a global component

In your project's `main.js` file

```js
import Vue from "vue"
import App from "./App.vue"
// import FocusVisible
import FocusVisible from "vue-visible-focus"

// Register as a global component
Vue.component("focus-visible", FocusVisible)

new Vue({
  render: (h) => h(App),
}).$mount("#app")
```

### Import in a single component

```vue
<template>
  <focus-visible elem="main">
    // more components
  </focus-visible>
</template>

<script>
import FocusVisible from "vue-visible-focus"
import "vue-visible-focus/dist/vue-visible-focus.css" // or include `[data-focus-visible="false"] * { outline: none; }` in your own styles

export default {
  name: "YourApp",
  components: {
    "focus-visible": FocusVisible,
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
