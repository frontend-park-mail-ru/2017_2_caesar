const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public/dist/'),
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
          },
        },
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true,
        },
      },
      {
        test: /pixi\.js/,
        use: [{
          loader: 'expose-loader',
          options: 'PIXI',
        }],
      },
      {
        test: /phaser-split\.js$/,
        use: [{
          loader: 'expose-loader',
          options: 'Phaser',
        }],
      },
      {
        test: /p2\.js/,
        use: [{
          loader: 'expose-loader',
          options: 'p2',
        }],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  resolve: {
    alias: {
      Components: path.resolve(__dirname, 'src/components/'),
      Modules: path.resolve(__dirname, 'src/modules/'),
      Services: path.resolve(__dirname, 'src/services/'),
      Views: path.resolve(__dirname, 'src/views/'),
      Game: path.resolve(__dirname, 'src/games/'),
      phaser: path.resolve(__dirname, 'node_modules/phaser/build/custom/phaser-split.js'),
      pixi: path.resolve(__dirname, 'node_modules/phaser/build/custom/pixi.js'),
      p2: path.resolve(__dirname, 'node_modules/phaser/build/custom/p2.js'),
    },
  },
};
