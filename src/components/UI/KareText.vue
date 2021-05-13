<script>
export default {
  name: "KareTitle",
  props: {
    is: {
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
    :is="is"
    :class="[
      color ? `text-${color}` : '',
      weight ? `fw-${weight}` : '',
      size ? `fs-${size}` : '',
    ]"
  >
    <slot />
  </component>
</template>
