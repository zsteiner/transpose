const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @use "sass:color";
          @use "sass:math";
          @import "@/styles/_variables.scss";
        `,
      },
    },
  },

  chainWebpack: (config) => {
    if (process.env.NODE_ENV === 'development') {
      config.output.filename('[name].[hash].js').end();
    }
  },

  configureWebpack: (config) => {
    config.plugins.push(
      new StyleLintPlugin({
        files: ['src/**/*.{vue,css,scss}'],
        failOnError: false,
        cache: true,
        fix: true,
      }),
    );
  },
};
