<script>
export default {
  name: "KareRow",
  props:{
    cols:{
      required: false,
      type: String || Number
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
  <div :class="styleClasses" class="row" >
    <slot />
  </div>
</template>
