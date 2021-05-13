<script>
export default {
  name: "KareCol",
  props: {
    cols: {
      type: [String, Number],
      default: "",
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
    :class="[
      cols ? `col-${cols}` : 'col',
      sm ? `col-sm-${sm}` : '',
      md ? `col-md-${md}` : '',
      lg ? `col-lg-${lg}` : '',
    ]"
  >
    <slot />
  </div>
</template>
