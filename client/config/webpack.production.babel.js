import config from './webpack.common.babel';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin'

// config.devtool = '#source-map';
config.devtool = false;
config.plugins = [
  ...config.plugins,
  new HtmlWebpackPlugin({ template: './src/assets/index.tpl.prod.html' }),
  new CopyWebpackPlugin([
    // react
    {from: './src/assets/vendor/react/react.min.js',
      to: './vendor/react/'},
    {from: './src/assets/vendor/react/react-dom.min.js',
      to: './vendor/react/'},
    // jquery
    {from: './src/assets/vendor/jquery/dist/jquery.min.js',
      to: './vendor/jquery/dist/'},
    // bootstrap
    {from: './src/assets/vendor/bootstrap/dist/js/bootstrap.min.js',
      to: './vendor/bootstrap/dist/js/'},
    {from: './src/assets/vendor/bootstrap/dist/css/bootstrap.min.css',
      to: './vendor/bootstrap/dist/css/'},
    {from: './src/assets/vendor/bootstrap/dist/fonts',
      to: './vendor/bootstrap/dist/fonts/'},
  ]),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  })
];

export default config;
