import Vue from 'vue'
import * as sassVariables from '@/assets/js/sassVariables.js';

Vue.directive('d',{
  bind(el,binding){
    const modifiers = binding.rawName.replace(`v-${binding.name}.`,'').split('.')
    const { displays, breakPoints } = sassVariables

    const d = modifiers.filter(modifier=>!!displays.includes(modifier))
    
    const breakpoint = modifiers.filter(modifier=>!!breakPoints.includes(modifier))

    if(d.length>0)
      d.forEach((display,i)=>{
        el.classList.add(`d${ !!breakpoint[i] && `-${breakpoint[i]}` || ''}-${display}`)
      })
  }
})