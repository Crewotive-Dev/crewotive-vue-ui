import Vue from 'vue'
import * as sassVariables from '@/assets/js/sassVariables.js';

Vue.directive('d',{
  bind(el,binding){
    const modifiers = binding.rawName.replace(`v-${binding.name}.`,'').split('.')
    const { displays, breakpoints } = sassVariables

    const d = modifiers.filter(modifier=>{
      return !!displays.includes(modifier)
    })
    
    const dBreakpoints = [...modifiers.filter(modifier=>{
      return !!breakpoints.map(breakpoint=>breakpoint[0]).includes(modifier)
    }),'print']
    
    console.log(d,dBreakpoints)

    if(dBreakpoints.length>0)
      if(d.length>0)
        d.forEach((display,i)=>{
          el.classList.add(`d${ !!dBreakpoints[i] && `-${dBreakpoints[i]}` || ''}-${display}`)
        })
      else
        el.classList.add(`d-${d[d.length-1]}`)

  }
})