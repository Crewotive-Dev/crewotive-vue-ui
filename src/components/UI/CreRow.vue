<script>
export default {
  name: "CreRow",
  props:{
    cols:{
      required: false,
      type: [String , Number],
      default: ""
    }
  },
  computed:{
    styleClasses(){
      const vm=this
      return [
        {
          [`row-cols-${vm.cols}`]: vm.cols
        }
      ]
    }
  }
};
</script>

<template>
  <div
    :class="styleClasses"
    class="row"
  >
    <slot />
  </div>
</template>
