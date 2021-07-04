import '@/directives/UI/UIDirectives.js'
import { themes } from '@storybook/theming';
require('./main.scss')
require('bootstrap/dist/js/bootstrap.bundle')

export const parameters = {
  docs: {
    theme: themes.light,
    inlineStories: true,
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      // color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}