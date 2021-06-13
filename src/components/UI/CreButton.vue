<script>
export default {
  name: "CreButton",
  props: {
    variant: {
      required: false,
      type: String,
      default: "primary",
    },
    label: {
      required: false,
      type: String,
      default: "",
    },
    type:{
      required: false,
      type: String,
      default: "button"
    },
    size: {
      required: false,
      type: String,
      default: "",
    },
    tint: {
      required: false,
      type: [String, Number],
      default: "",
    },
    outline: {
      required: false,
      type: Boolean,
      default: false,
    },
    active: {
      required: false,
      type: Boolean,
      default: false,
    },
    disabled: {
      required: false,
      type: Boolean,
      default: false,
    },
  },
  computed:{
    styleClasses(){
      const vm = this
      return{
        [`btn-link`]: vm.variant=="link",
        [`btn${vm.outline ? '-outline':''}-${vm.variant}${vm.tint && `-${vm.tint}`}`]: vm.variant && vm.variant!='link',
        [`btn-${vm.size}`] : vm.size,
        [`active`] : vm.active,
      }
    }
  }
};
</script>

<template>
  <button
    :type="type"
    class="btn"
    :disabled="disabled"
    :class="styleClasses"
    @click="$emit('click')"
  >
    {{ label }}
  </button>
</template>
