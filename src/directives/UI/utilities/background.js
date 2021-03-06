import Vue from 'vue'
import * as sassVariables from '@/assets/js/sassVariables.js';

Vue.directive('bg',{
  bind(el,binding){
    
    const modifiers = binding.rawName.replace(`v-${binding.name}.`,'').split('.')
    
    const {themeColors} = sassVariables

    const bgColor = modifiers.find(modifier=>{
      return !!themeColors.find(color=>color==modifier)
    })

    if(modifiers.includes('gradient'))
      el.classList.toggle(`bg-gradient`)

    if(bgColor){
      el.classList.toggle(`bg-${ bgColor }`)
    }
  }
})