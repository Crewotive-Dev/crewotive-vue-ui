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
      type: String,
      default: "",
    },
    variant: {
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
        [`btn-link`]: vm.variant=="link",
        [`btn${vm.outline ? '-outline':''}-${vm.variant}${vm.tint && `-${vm.tint}`}`]: vm.variant && vm.variant!='link',
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
    :class="styleClasses"
    @click="$emit('click')"
  >
    {{ label }}
  </button>
</template>
