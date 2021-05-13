<script>
export default {
  name: "KareContainer",
  props: {
    fluid: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <div :class="[fluid ? 'container-fluid' : 'container']">
    <slot />
  </div>
</template>
