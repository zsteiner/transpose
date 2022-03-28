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

    const svgRule = config.module.rule('svg');

    svgRule
      .use('vue-loader')
      .loader('vue-loader-v16')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
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
