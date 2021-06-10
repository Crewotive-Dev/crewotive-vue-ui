<script>
export default {
  name: "CreBadge",
  props: {
    variant: {
      required: false,
      type: String,
      default: "primary",
    },
    tint: {
      type: [String, Number],
      default: "",
    },
  },
  computed:{
    styleClasses(){
      const vm = this
      return{
        [`bg-${vm.variant}${vm.tint && `-${vm.tint}`}`]: vm.variant
      }
    }
  }
};
</script>

<template>
  <span
    class="badge"
    :class="styleClasses"
  >
    <slot />
  </span>
</template>
