const variables = require('sass-extract-loader!@/assets/css/ui/main.scss');

const vg = variables.global

export const themeColors = Object.entries(vg['$theme-colors'].value)
export const breakpoints = Object.entries(vg['$grid-breakpoints'].value)
export const colorTints = Object.entries(vg['$color-tints'].value)
export const borderWidths = Object.entries(vg['$border-widths'].value)
export const clockWay = Object.entries(vg['$clock-way'].value).map(e=>e[1].value)
export const xAlignment = Object.entries(vg['$x-alignment'].value)
export const yAlignment = Object.entries(vg['$y-alignment'].value)
export const fontSizes = Object.entries(vg['$font-sizes'].value)
export const fontWeightKeys = vg['$font-weights'].declarations[0]
.expression.replace(/\$font-weight-|\(|\)/g,'').split(',')
export const lineHeights = Object.keys(Object.entries(vg['$utilities'].value).find(u=>u[0]=='line-height')[1].value.values.value)


export default vg