import Vue from 'vue'
import * as sassVariables from '@/stories/assets/variables.js';

Vue.directive('border',{
  bind(el,binding){
    const { borderWidths,themeColors } = sassVariables
    const borderWays = ["start","end",'top','bottom']

    const borders = Object.keys(binding.modifiers).filter(modifier=>{
      return !!borderWays.includes(modifier)
    })

    const borderSizes = Object.keys(binding.modifiers).filter(modifier=>{
      return !!borderWidths.map(e=>e[0]).includes(modifier)
    })
    const borderColor = Object.keys(binding.modifiers).find(modifier=>{
      return !!themeColors.map(e=>e[0]).find(color=>color==modifier)
    })

    if(borderColor)
      el.classList.toggle(`border-${borderColor}`)

    if(borderSizes.length>0){
      if(borders.length>0)
        return borders.forEach((border,i)=>{
          el.classList.toggle(`border-${border}-${borderSizes[i]||borderSizes[0]}`)
        })
      return el.classList.toggle(`border-${borderSizes[0]}`)
    }
    // return borders.forEach((border)=>{
    //   el.classList.toggle(`border-${border}-1`)
    // })
    // else{
    //   borders.forEach((border,i)=>{
    //     el.classList.toggle(`border-${border}-${borderSizes[0]||1}`)
    //   })
    // }
  }
})