import Vue from 'vue'
import * as sassVariables from '@/stories/assets/variables.js';

Vue.directive('border',{
  bind(el,binding){
    const { borderWidths,themeColors, clockWay } = sassVariables

    const modifiers = binding.rawName.replace(`v-${binding.name}.`,'').split('.')

    const borders = modifiers.filter(modifier=>{
      return !!clockWay.includes(modifier)
    })

    const borderSizes = modifiers.filter(modifier=>{
      return !!borderWidths.map(e=>e[0]).includes(modifier)
    })
    
    const borderColor = modifiers.find(modifier=>{
      return !!themeColors.map(e=>e[0]).find(color=>color==modifier)
    })

    if(borders)
      el.classList.toggle(`border`)

    if(borderColor)
      el.classList.toggle(`border-${borderColor}`)

    if(borderSizes.length>1){
      borderSizes.forEach((size,i)=>{
        el.classList.toggle(`border-${clockWay[i]}-${size}`)
      })      
    }
    else
      el.classList.toggle(`border-${borderSizes[0]}`)
  }
})