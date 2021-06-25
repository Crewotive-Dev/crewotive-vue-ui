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
    close: {
      required: false,
      type: Boolean,
      default: false,
    }
  },
  computed:{
    styleClasses(){
      const vm = this
      let styles = {}
      if(!vm.close)
        styles = {
          ...styles,
          [`btn-link`]: vm.variant=="link",
          [`btn${vm.outline ? '-outline':''}-${vm.variant}${vm.tint && `-${vm.tint}`}`]: vm.variant && vm.variant!='link',
          [`btn-${vm.size}`] : vm.size,
        }
      styles = {
        ...styles,
        [`active`] : vm.active,
        [`btn-close`] : vm.close,
        [`btn-close-white`] : vm.variant == 'white',
      }
      return styles
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
    <template v-if="!close">
      {{ label }}
    </template>
    <slot />
  </button>
</template>