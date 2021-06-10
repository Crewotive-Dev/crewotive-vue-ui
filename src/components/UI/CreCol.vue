<script>
import {breakpoints} from '../../assets/js/sassVariables'
breakpoints.splice(breakpoints.indexOf('xs'),1)
const gridBreakpoints =
    breakpoints.reduce((acc,val)=>{
      acc[val]={ type: [String, Number], default: ""}
      return acc
    },{})

export default {
  name: "KareCol",
  props: {
    col: {
      type: [String, Number],
      default: "",
    },
    ...gridBreakpoints
  },
  computed:{
    styleClasses(){
      const vm = this
      return [
        `col${vm.col ? '-'+ vm.col:''}`,
        Object.keys(gridBreakpoints).reduce((acc,val)=>{
          acc[`col-${val}-${vm[val]}`] = vm[val]
          return acc
        },{})
      ]
    }
  }
};
</script>

<template>
  <div :class="styleClasses">
    <slot />
  </div>
</template>
