import config from './webpack.common.babel';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin'

config.plugins = [
  ...config.plugins,
  new HtmlWebpackPlugin({ template: './src/assets/index.tpl.html' }),
  new CopyWebpackPlugin([
    {from: './src/assets/vendor', to: './vendor'}
  ])
];

export default {
  ...config,
  devtool: '#cheap-module-inline-source-map',
  devServer: {
    port: 8000,
    historyApiFallback: true,
    inline:   true,
    progress: true,
    proxy: {
      "/logout": "http://localhost:8080",
      "/login": "http://localhost:8080",
      "/api": "http://localhost:8080",
      "/me": "http://localhost:8080"
    }
  }
};
