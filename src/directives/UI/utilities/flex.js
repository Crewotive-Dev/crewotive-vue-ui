import Vue from 'vue';
import * as sassVariables from '@/assets/js/sassVariables.js';

const { flexibles,breakPoints } = sassVariables

Vue.directive('flex',{
  bind(el,binding){
    
    const modifiers = binding.rawName.replace(`v-${binding.name}.`,'').split('.')

    const flex = modifiers.filter(modifier=>flexibles.includes(modifier))

    const breakpoint = modifiers.filter(modifier=>!!breakPoints.includes(modifier))

    console.log(flex)

    if(flex.length>0)
      flex.forEach((f,i)=>{
        el.classList.add(`flex${ !!breakpoint[i] && `-${breakpoint[i]}` || ''}-${f}`)
      })
  }
})