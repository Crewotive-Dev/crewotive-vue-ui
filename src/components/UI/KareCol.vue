<script>
export default {
  name: "KareCol",
  props: {
    col: {
      type: [String, Number],
      default: "auto",
    },
    sm: {
      type: [String, Number],
      default: "",
    },
    md: {
      type: [String, Number],
      default: "",
    },
    lg: {
      type: [String, Number],
      default: "",
    },
  },
};
</script>

<template>
  <div
    :class="{
      [`col-${col}`] : col,
      [`col-sm-${sm}`] : sm,
      [`col-md-${md}`] : md,
      [`col-lg-${lg}`] : lg,
      }"
  >
    <slot />
  </div>
</template>
