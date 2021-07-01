<script>
  export default {
    name: "CreListGroupItem",
    props:{
      variant:{
        type: String,
        required: false,
        default: ''
      },
      tint:{
        type: [String, Number],
        required: false,
        default: '5'
      },
      action:{
        type: Boolean,
        required: false,
        default: false
      },
      active:{
        type: Boolean,
        required: false,
        default: false
      },
      disabled:{
        type: Boolean,
        required: false,
        default: false
      }
    },
    computed:{
      styleClasses(){
        const vm = this
        return{
          [`list-group-item-${vm.variant}${vm.tint && '-'+vm.tint}`]: vm.variant,
          [`list-group-item-action`]: vm.action,
          [`active`]: vm.active,
          [`disabled`]: vm.disabled,
        }
      }
    }
  }
</script>
<template>
  <li
    class="list-group-item"
    :role="action && 'button'"
    :class="styleClasses"
  >
    <slot />
  </li>
</template>

<style>

</style>