<script>
export default {
  name: "CreContainer",
  props: {
    fluid: {
      type: Boolean,
      default: false,
    },
  },
  computed:{
    styleClasses(){
      const vm = this
      return [vm.fluid ? `container-fluid`:`container`]
    }
  }
};
</script>

<template>
  <div :class="styleClasses">
    <slot />
  </div>
</template>
