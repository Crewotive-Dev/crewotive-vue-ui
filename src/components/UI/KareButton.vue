<script>
export default {
  name: "KareButton",
  props: {
    color: {
      type: String,
      default: "",
    },
    outline: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <button
    type="button"
    @click="$emit('click')"
    class="btn"
    :disabled="disabled"
    :class="{ [`btn-${color}`]: color, [`btn-outline-${outline}`]: outline }"
  >
    <slot />
  </button>
</template>
