import Vue from 'vue';
import * as sassVariables from '@/assets/js/sassVariables.js';

const { textColors,
  textTransforms,
  textDecorations,
  xAlignments,
  breakpoints,
  fontSizes,
  fontStyles,
  fontWeights,
  lineHeights,
  whiteSpaces
 } = sassVariables

Vue.directive('t',{
  bind(el,binding){

    const modifiers = binding.rawName.replace(`v-${binding.name}.`,'').split('.')

    // textColors like 'primary,red,' __String
    const textColor = modifiers.find(modifier=>!!textColors.find(color=>color==modifier))

    // breakpoint values like 'sm, xl __Array
    const breakpoint = modifiers.filter(modifier=>!!breakpoints.includes(modifier))

    // text alingments of  x axis like 'start, center, end' __Array
    const textAlignments = modifiers.filter(modifier=>!!xAlignments.includes(modifier))

    // font size __String
    const fs = modifiers.find(modifier=>!!fontSizes.find(size=>size==modifier))

    // font weight __String
    const fw = modifiers.find(modifier=>!!fontWeights.find(weight=>weight==modifier))

    // font style __String
    const fst = modifiers.find(modifier=>!!fontStyles.find(style=>style==modifier))

    // line height __String
    const lh = modifiers.find(modifier=>!!lineHeights.find(height=>'lh-'+height==modifier))

    const decoration = modifiers.find(modifier=>!!textDecorations.find(deco=>deco==modifier))

    const transform = modifiers.find(modifier=>!!textTransforms.find(tt=>tt==modifier))

    const whiteSpace = modifiers.find(modifier=>!!whiteSpaces.find(ws=>ws==modifier))

    const monospace = modifiers.includes('monospace')

    if(textColor)
      el.classList.add(`text-${textColor}`)

    if(textAlignments.length>0)
      textAlignments.forEach((alignment,i)=>{
        el.classList.add(`text${ !!breakpoint[i] && `-${breakpoint[i]}` || ''}-${alignment}`)
      })

    if(fs)
      el.classList.add(`fs-${fs}`)

    if(fw)
      el.classList.add(`fw-${fw}`)

    if(fst)
      el.classList.add(`fst-${fw}`)

    if(lh)
      el.classList.add(`${lh}`)

    if(decoration)
      el.classList.add(`text-decoration-${decoration}`)

    if(transform)
      el.classList.add(`text-${transform}`)

    if(monospace)
      el.classList.add(`font-monospace`)

    if(whiteSpace)
      el.classList.add(`text-${whiteSpace}`)

  }
})