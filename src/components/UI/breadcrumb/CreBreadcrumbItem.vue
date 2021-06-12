<script>
export default {
  name: "CreBreadcrumbItem",
  props: {
    active: {
      required: false,
      type: Boolean,
      default: false
    }
  },
  computed:{
    styleClasses(){
      const vm = this
      return{
        'active': vm.active
      }
    }
  }
};
</script>

<template>
  <li
    class="breadcrumb-item"
    :class="styleClasses"
  >
    <slot />
  </li>
</template>
