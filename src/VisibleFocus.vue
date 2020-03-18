<template>
  <component
    v-bind:is="elem"
    :data-focus-visible="focusVisible.toString()"
    v-on:mousedown="onMouseDown"
    v-on:keydown="onKeyDown"
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
      focusVisible: false
    };
  },
  methods: {
    onMouseDown: function(e) {
      this.$data.focusVisible = e.target.nodeName === "INPUT";
    },
    onKeyDown: function(e) {
      this.$data.focusVisible = [
        "Tab",
        "ArrowUp",
        "ArrowDown",
        "ArrowRight",
        "ArrowLeft"
      ].includes(e.key);
    }
  }
};
</script>

<style>
[data-focus-visible="false"] * {
  outline: none;
}
</style>
