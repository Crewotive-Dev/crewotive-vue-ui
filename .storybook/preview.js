// import '!style-loader!css-loader!sass-loader!@/assets/css/ui/main.scss';
require('./main.scss')
import '@/directives/UI/UIDirectives.js'
import '@/assets/js/bootstrap/bootstrap.esm.min.js'

export const parameters = {
  docs: {
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