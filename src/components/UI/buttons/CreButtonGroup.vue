<script>
export default {
  name: 'CreButtonGroup',
  props:{
    size: {
      required: false,
      type: String,
      default: "",
    },
    vertical:{
      required: false,
      type: Boolean,
      default: false
    },
    gap:{
      required: false,
      type: [Number , String],
      default: '0'
    }
  },
  computed: {
    styleClasses(){
      const vm = this
      return {
        [`btn-group-${vm.size}`] : vm.size,
        [`btn-group-vertical`] : vm.vertical,
        [`gap-${vm.gap}`]: vm.gap
      }
    }
  }
}

</script>

<template>
  <div
    class="btn-group"
    :class="styleClasses"
    role="group"
    aria-label="Button group"
  >
    <slot />
  </div>
</template>

<style>

</style>