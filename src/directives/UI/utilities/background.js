import Vue from 'vue'
import * as sassVariables from '@/stories/assets/variables.js';

Vue.directive('bg',{
  bind(el,binding){

    if(binding.modifiers['gradient'])
      el.classList.toggle(`bg-gradient`)
  
    const {themeColors,colorTints} = sassVariables

    const bgColor = Object.keys(binding.modifiers).find(modifier=>{
      return !!themeColors.map(e=>e[0]).find(color=>color==modifier)
    })

    const tint = Object.keys(binding.modifiers).find(modifier=>{
      return !!colorTints.map(e=>e[0]).find(tint=>tint==modifier)
    })

    if(bgColor){
      el.classList.toggle(`bg-${ bgColor }${ tint ? ''+tint : ''}`)
    }
  }
})