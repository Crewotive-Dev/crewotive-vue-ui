const variables = require('sass-extract-loader!@/assets/css/ui/main.scss');

export const themeColors = Object.entries(variables.global['$theme-colors'].value)
export const colorTints = Object.entries(variables.global['$color-tints'].value)
export const borderWidths = Object.entries(variables.global['$border-widths'].value)

// console.log(variables.global['$font-sizes'])

export default variables.global