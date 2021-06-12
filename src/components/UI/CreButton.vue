<script>
export default {
  name: "CreButton",
  props: {
    label: {
      required: false,
      type: String,
      default: "",
    },
    size: {
      required: false,
      type: String,
      default: "",
    },
    variant: {
      required: false,
      type: String,
      default: "primary",
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
    type="button"
    class="btn"
    :disabled="disabled"
    :class="styleClasses"
    @click="$emit('click')"
  >
    {{ label }}
  </button>
</template>
