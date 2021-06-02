<script>
export default {
  name: "KareCol",
  props: {
    col: {
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
  computed:{
    styleClasses(){
      const vm = this
      return [
        `col${vm.col ? '-'+ vm.col:''}`,
        {
          [`col-sm-${vm.sm}`] : vm.sm,
          [`col-md-${vm.md}`] : vm.md,
          [`col-lg-${vm.lg}`] : vm.lg,
        }
      ]
    }
  }
};
</script>

<template>
  <div :class="styleClasses">
    <slot />
  </div>
</template>
