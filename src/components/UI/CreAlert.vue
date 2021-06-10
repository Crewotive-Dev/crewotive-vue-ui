<script>
export default {
  name: "CreAlert",
  props: {
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
    dismissible: {
      required: false,
      type: Boolean
    }
  },
  computed:{
    styleClasses(){
      const vm = this
      return{
        [`alert-dismissible`]: vm.dismissible,
        [`alert-${vm.variant}${vm.tint && `-${vm.tint}`}`]: vm.variant
      }
    }
  }
};
</script>

<template>
  <div
    class="alert"
    :class="styleClasses"
    role="alert"
  >
    <slot />
    <button
      data-bs-dismiss="alert"
      class="btn btn-close"
      v-if="dismissible"
    />
  </div>
</template>
