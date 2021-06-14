import Vue from 'vue'
import * as sassVariables from '@/assets/js/sassVariables.js';

Vue.directive('border',{
  bind(el,binding){
    const { borderWidths,themeColors, clockWays } = sassVariables

    const modifiers = binding.rawName.replace(`v-${binding.name}.`,'').split('.')

    const borderSizes = modifiers.filter(modifier=>!!borderWidths.includes(modifier))

    const borderColor = modifiers.find(modifier=>!!themeColors.find(color=>color==modifier))

    const borderWays = modifiers.filter(modifier=>!!clockWays.includes(modifier))

    if(borderColor)
      el.classList.add(`border-${borderColor}`)

    // if(borderWays.length>0){
    //   borderWays.forEach((way,i)=>{
    //     el.classList.add(`border-${way}-${borderSizes[i] || borderSizes[borderSizes.length-1]}`)
    //   })
    // }
    // else
    //   el.classList.add(`border-${borderSizes[0] || 1}`)

    if(borderSizes.length>0){
      borderSizes.forEach((size,i)=>{
        el.classList.add(`border${!!borderWays[i] && `-${borderWays[i]}` || ''}-${size}`)
      })
    }
  }
})

Vue.directive("radius",{
  bind(el,binding){
    const modifiers = binding.rawName.replace(`v-${binding.name}.`,'').split('.')

    const {borderWidths, clockWays} = sassVariables

    const borderRadius = modifiers.filter(modifier=>!!borderWidths.includes(modifier))

    const borderWays = modifiers.filter(modifier=>!!clockWays.includes(modifier))

    if(borderRadius.length>0){
      borderRadius.forEach((radius,i)=>{
        el.classList.add(`radius${!!borderWays[i] && `-${borderWays[i]}` || ''}-${radius}`)
      })
    }
  }
})