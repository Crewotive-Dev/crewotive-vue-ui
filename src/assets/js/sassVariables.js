const variables = require('sass-extract-loader!@/assets/css/ui/vendors/cre-bootstrap.scss');

export const vg = variables.global

export function getUtilityVariable(utilityName){
  const variables = Object.entries(vg['$utilities'].value).find(u=>u[0]==utilityName)[1].value.values
  const value = variables.value
  const type = variables.type
  if(type == 'SassMap')
    return Object.keys(value)
  if(type == 'SassList')
    return value.map(e=>e.value)
  return value
}

export function getVariable(variableName){
  const value = vg[`$${variableName}`].value
  const type = vg[`$${variableName}`].type
  if(type == 'SassList')
    return value.map(e=>e.value)
  if(type == 'SassMap')
    return Object.keys(value)
  return value
}


// variables
export const borderWidths = getVariable('border-widths')
export const breakpoints = getVariable('grid-breakpoints')
export const breadcrumbDivider = getVariable('breadcrumb-divider')
export const clockWays = getVariable('clock-way')
export const colorTints = getVariable('color-tints')
export const fontSizes = getVariable('font-sizes')
export const themeColors = getVariable('theme-colors')
export const xAlignments = getVariable('x-alignments')
export const yAlignments = getVariable('y-alignments')

// utility variables
export const aligns = {
  'items': [...getUtilityVariable('align-items')],
  'content': [...getUtilityVariable('align-content')],
  'self': [...getUtilityVariable('align-self')],
}
export const displays = [...getUtilityVariable('display'),'print']
export const fontWeights = getUtilityVariable('font-weight')
export const fontStyles = getUtilityVariable('font-style')
export const flexibles = [
  ...getUtilityVariable('flex'),
  ...getUtilityVariable('flex-wrap'),
  ...getUtilityVariable('flex-grow'),
  ...getUtilityVariable('flex-shrink'),
  ...getUtilityVariable('flex-direction')
]
export const justifies = getUtilityVariable('justify-content')
export const lineHeights = getUtilityVariable('line-height')
export const orders = getUtilityVariable('order')
export const utilitiesVariables = Object.entries(vg['$utilities'].value)
export const textColors = getUtilityVariable('color')
export const textDecorations = getUtilityVariable('text-decoration')
export const textTransforms = getUtilityVariable('text-transform')
export const whiteSpaces = [...getUtilityVariable('white-space'),...getUtilityVariable('word-wrap')]