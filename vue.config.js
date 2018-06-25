var webpack = require('webpack');

module.exports = {
  css: {
    extract: false,
    sourceMap: true
  },

  baseUrl: undefined,
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,

  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ]
  },

  chainWebpack: function (config) {
    config.module.rule('rawsvg').test(/\.rawsvg$/).use('svg-inline-loader').loader('svg-inline-loader').end();
  }
}
