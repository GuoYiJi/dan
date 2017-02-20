var path = require('path');
var cooking = require('cooking');
var webpack = require('webpack');
var examples = './examples';

cooking.set({
  entry: {
    app: examples + '/index.js'
  },
  dist: examples + '/build',
  template: examples + '/index.tpl',
  publicPath: './',
  hash: true,
  devServer: {
    hostname: '0.0.0.0',
    port: 7071,
    log: false,
    publicPath: '/'
  },
  minimize: true,
  chunk: true,
  extractCSS: true,
  sourceMap: true,
  urlLoaderLimit: 200000,
  extends: ['vue2', 'lint', 'sass'],
  alias: {
    'API': path.join(__dirname, '../examples/api')
  }
});
cooking.add('devtool', 'source-map');

cooking.add('plugins.Define', new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('development')
}));

cooking.add('plugins.ProvidePlugin', new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
  'window.jQuery': 'jquery'
}));

cooking.add('loader.jQuery', {
  test: require.resolve('jQuery'),
  loader: 'expose?jQuery'
});

module.exports = cooking.resolve();
