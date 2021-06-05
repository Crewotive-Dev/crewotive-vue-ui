import Vue from 'vue'
import * as sassVariables from '@/assets/js/sassVariables.js';

Vue.directive('border',{
  bind(el,binding){
    const { borderWidths,themeColors, clockWay } = sassVariables

    const modifiers = binding.rawName.replace(`v-${binding.name}.`,'').split('.')

    const borderSizes = modifiers.filter(modifier=>{
      return !!borderWidths.map(e=>e[0]).includes(modifier)
    })
    
    const borderColor = modifiers.find(modifier=>{
      return !!themeColors.map(e=>e[0]).find(color=>color==modifier)
    })

    if(borderColor)
      el.classList.add(`border-${borderColor}`)

    if(borderSizes.length>1){
      borderSizes.forEach((size,i)=>{
        el.classList.add(`border-${clockWay[i*2]}-${size}`)
      })      
    }
    else
      el.classList.add(`border-${borderSizes[0] || 1}`)
  }
})

Vue.directive("radius",{
  bind(el,binding){
    const modifiers = binding.rawName.replace(`v-${binding.name}.`,'').split('.') 
    
    const {borderWidths, clockWay} = sassVariables

    const borderRadius = modifiers.filter(modifier=>{
      return !!borderWidths.map(e=>e[0]).includes(modifier)
    })

    const borderWays = modifiers.filter(modifier=>{
      return !!clockWay.includes(modifier)
    })

    if(borderWays.length>0){
      borderWays.forEach((way,i)=>{
        el.classList.add(`radius-${way}-${borderRadius[i] || borderRadius[borderRadius.length-1]}`)
      })      
    }
    else
      el.classList.add(`radius-${borderRadius[0] || 1}`)

  }
})