<script>
export default {
  name: 'CreDropdownItem',
  props:{
    active: {
      type: Boolean,
      required: false,
    },
    divider: {
      type: Boolean,
      required: false,
    },
  },
  computed:{
    styleClasses(){
      const vm = this
      if(vm.divider)
        return{
          ['dropdown-divider']: vm.divider
        }
      return {
        ['dropdown-item']: true,
        [`active`]: vm.active
      }
    }
  }
}
</script>

<template>
  <div
    v-if="divider"
    :class="styleClasses"
  />
  <li v-else>
    <span
      :class="styleClasses"
    >
      <slot />
    </span>
  </li>
</template>

<style>

</style>