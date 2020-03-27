<template>
  <component
    v-bind:is="elem"
    :data-focus-visible="focusVisible.toString()"
    v-on:mousedown="onMouseDown"
    v-on:keydown="onKeyDown"
    v-on:focusin="onFocusIn"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: "visible-focus",
  props: {
    elem: {
      type: String,
      default: "div"
    }
  },
  data: function() {
    return {
      kbdHeuristic: true,
      focusVisible: false
    };
  },
  methods: {
    onMouseDown(e) {
      this.$data.focusVisible = this.$data.kbdHeuristic =
        e.target.nodeName === "INPUT";
    },
    onKeyDown(e) {
      this.$data.kbdHeuristic = [
        "Tab",
        "ArrowUp",
        "ArrowDown",
        "ArrowRight",
        "ArrowLeft"
      ].includes(e.key);
    },
    onFocusIn() {
      this.$data.focusVisible = this.$data.kbdHeuristic;
    }
  }
};
</script>

<style>
[data-focus-visible="false"] * {
  outline: none;
}
</style>
