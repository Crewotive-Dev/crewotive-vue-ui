import Vue from 'vue'
import * as sassVariables from '@/stories/assets/variables.js';

const { themeColors, xAlignment, breakpoints, fontSizes, fontWeightKeys, lineHeights } = sassVariables

Vue.directive('t',{
  bind(el,binding){

    const modifiers = binding.rawName.replace(`v-${binding.name}.`,'').split('.')

    // themecolors like 'primary, red,' __String
    const textColor = modifiers.find(modifier=>{
      return !!themeColors.map(e=>e[0]).find(color=>color==modifier)
    })

    // breakpoint values like 'sm, xl __Array
    const textBreakpoints = modifiers.filter(modifier=>{
      return !!breakpoints.map(breakpoint=>breakpoint[0]).includes(modifier)
    })

    // text alingments of  x axis like 'start, center, end' __Array
    const textAlignments = modifiers.filter(modifier=>{
      return !!xAlignment.map(e=>e[1].value).includes(modifier)
    })

    // font size __String
    const fs = modifiers.find(modifier=>{
      return !!fontSizes.map(e=>e[0]).find(size=>size==modifier)
    })
    
    // font weight __String
    const fw = modifiers.find(modifier=>{
      return !!fontWeightKeys.find(weight=>weight==modifier)
    })

    // font style __String
    const fst = modifiers.find(modifier=>{
      return !!['italic','normal'].find(style=>style==modifier)
    })

    // line height __String
    const lh = modifiers.find(modifier=>{
      return !!lineHeights.find(height=>height==modifier)
    })

    if(textColor)
      el.classList.toggle(`text-${textColor}`)

    if(textAlignments.length>0)
      if(textBreakpoints.length>0)
        textBreakpoints.forEach((breakpoint,i)=>{
          el.classList.toggle(`text-${breakpoint}-${textAlignments[i] || textAlignments[0]}`)
        })
      else
        el.classList.toggle(`text-${textAlignments[0]}`)
    
    if(fs)
      el.classList.toggle(`fs-${fs}`)
    
    if(fw)
      el.classList.toggle(`fw-${fw}`)

    if(lh)
      el.classList.toggle(`lh-${lh}`)
  }
})