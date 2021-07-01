<script>
export default {
  name: 'CreListGroup',
  props:{
    flush: {
      type: Boolean,
      required: false,
      default: false
    },
    numbered:{
      type: Boolean,
      required: false,
      default: false
    },
    horizontal:{
      type: [Boolean, String],
      required: false,
      default: false
    }
  },
  computed:{
    styleClasses(){
      const vm = this
      return {
        [`list-group-flush`]: vm.flush,
        [`list-group-numbered`]: vm.numbered,
        [`list-group-horizontal${vm.horizontal == 'xs' ? '':'-'+vm.horizontal }`]: vm.horizontal,
      }
    }
  }
};
</script>

<template>
  <ul
    class="list-group"
    :class="styleClasses"
  >
    <slot />
  </ul>
</template>

<style lang="scss" scoped>

</style>