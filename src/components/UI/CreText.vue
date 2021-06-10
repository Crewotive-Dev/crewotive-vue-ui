<script>
export default {
  name: "CreText",
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
  computed:{
    styleClasses(){
      const vm = this
      return {
      [`text-${vm.color}`] : vm.color,
      [`fw-${vm.weight}`] : vm.weight,
      [`fs-${vm.size}`] : vm.size
    }
    }
  }
};
</script>

<template>
  <component
    :is="el"
    :class="styleClasses"
  >
    <slot />
  </component>
</template>
