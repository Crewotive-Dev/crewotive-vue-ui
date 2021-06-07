const path = require('path');
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-actions",
  ],
  webpackFinal: async (config, { configType }) => {
    // Make whatever fine-grained changes you need
    config.resolve = {
      alias: {
          "@": path.resolve(__dirname, "../src/"),
          "vue": path.resolve(__dirname, "../node_modules/vue/dist/vue.js")
      }
    };
    config.module.rules.push({
      test: /\.s[ac]ss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    // Return the altered config
    return config;
  },
}