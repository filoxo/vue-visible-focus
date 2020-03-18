<template>
  <FocusVisible elem="main">
    <p tabindex="0">Focusable paragraph</p>
    <input type="text" />
    <button type="button">A button</button>
  </FocusVisible>
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
