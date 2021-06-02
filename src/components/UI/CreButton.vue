<script>
export default {
  name: "CreButton",
  props: {
    label: {
      required: true,
      type: String,
      default: "Button",
    },
    size: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "",
    },
    tint: {
      type: [String, Number],
      default: "",
    },
    outline: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed:{
    styleClasses(){
      const vm = this
      return{
        [`btn-link`]: vm.color=="link",
        [`btn${vm.outline ? '-outline':''}-${vm.color}${vm.tint ? `-${vm.tint}`:''}`]: vm.color && vm.color!='link',
        [`btn-${vm.size}`] : vm.size,
      }
    }
  }
};
</script>

<template>
  <button
  type="button"
  class="btn"
  :disabled="disabled"
  @click="$emit('click')"
  :class="styleClasses"
  > {{label}}
  </button>
</template>
