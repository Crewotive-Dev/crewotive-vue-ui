const variables = require('sass-extract-loader!@/../.storybook/main.scss');

export const themeColors = Object.entries(variables.global['$theme-colors'].value)
export const colorTints = Object.entries(variables.global['$color-tints'].value)

// console.log(variables.global['$font-sizes'])

export default variables.global