<script>
export default {
  name: "KareTitle",
  props: {
    el: {
      type: String,
      default: "p",
    },
    color: {
      type: String,
      default: "",
    },
    weight: {
      type: [String, Number],
      default: "",
    },
    size: {
      type: [String, Number],
      default: "",
    },
  },
};
</script>

<template>
  <component
    :is="el"
    :class="{
      [`text-${color}`] : color,
      [`fw-${weight}`] : weight,
      [`fs-${size}`] : size
    }"
  >
    <slot />
  </component>
</template>
