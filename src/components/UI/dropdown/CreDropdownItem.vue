<script>
export default {
  props:{
    property: {
      type: Boolean,
      required: false,
    },
  },
  computed:{
    styleClasses(){
      const vm = this
      return {
        [`active`]: vm.active
      }
    }
  }
}
</script>

<template>
  <li>
    <span
      class="dropdown-item"
      :class="styleClasses"
    >
      <slot />
    </span>
  </li>
</template>

<style>

</style>