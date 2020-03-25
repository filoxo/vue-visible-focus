<template>
  <main>
    <FocusVisible>
      <h1>vue-visible-focus</h1>
      <h2 tabindex="0">focusable subheader (click on me)</h2>
      <input type="text" placeholder="An input" />
      <button type="button">A button</button>
    </FocusVisible>
    <p>
      This component attempts to emulate the
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible"
        >:focus-visible pseudoselector</a
      >
      behavior using similar heuristics but does not follow the spec completely.
    </p>
    <p>Focus styles are still displayed when focus is given to an input.</p>
  </main>
</template>

<script>
import FocusVisible from "./VisibleFocus";

export default {
  name: "App",
  components: {
    FocusVisible
  }
};
</script>

<style></style>
