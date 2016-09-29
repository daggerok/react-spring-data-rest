import path from 'path';
import ExtractPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

const include = [path.resolve(process.cwd(), './src')];
const assetsInclude   = [path.resolve(process.cwd(), './src/assets')];

const config = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: '../src/main/resources/static/',
    filename: '[name].js',
    // sourceMapFilename: 'maps/[file].map'
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'source-map-loader'
    }],
    loaders: [{
      test: /\.js$/,
      include,
      loader: 'babel',
      query: {
        presets: [
          'stage-0',
          'es2015',
          'react'
        ],
        plugins: [
          'react-html-attrs',
          'add-module-exports',
          'transform-class-properties'
        ]
      }
    }, {
      test: /\.css/,
      include: assetsInclude,
      exclude: /node_modules/, // comment exclusion out if you are using `import bootstrap/**/*.css`
      // include: bsInclude,
      // // fix: Module build failed: ReferenceError: window is not defined
      // loader: ExtractPlugin.extract('style!css')
      // loader: ExtractPlugin.extract('style', 'css!postcss')
      loader: ExtractPlugin.extract('style', 'css?importloader=1', 'postcss')
    }, {
      test: /\.less$/,
      include: assetsInclude,
      loader: ExtractPlugin.extract('style','css!postcss!less')
    }, {
      test: /\.styl/,
      include: assetsInclude,
      loader: ExtractPlugin.extract('style','css!postcss!stylus')
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      // include: bsInclude,
      exclude: /node_modules/,
      loader: 'file'
    }, {
      test: /\.(woff|woff2)$/,
      // include: bsInclude,
      exclude: /node_modules/,
      loader:'url?prefix=font/&limit=1024'
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      // include: bsInclude,
      exclude: /node_modules/,
      loader: 'url?limit=1024&mimetype=application/octet-stream'
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      // include: bsInclude,
      exclude: /node_modules/,
      loader: 'url?limit=1024&mimetype=image/svg+xml'
    }]
  },
  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules']
  },
  plugins: [
    new ExtractPlugin('[name].css', { allChunks: true })
  ],
  postcss: [
    autoprefixer,
    cssnano
  ],
  externals: {
    'jquery': '$',
    'react-dom': 'ReactDOM',
    'react': 'React'
  },
  node:{
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};

export default config;
