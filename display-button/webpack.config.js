const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  entry: './src/index',
  cache: false,

  mode: 'development',
  devtool: 'source-map',

  optimization: {
    minimize: false
  },

  output: {
    publicPath: 'http://localhost:8085/'
  },

  resolve: {
    extensions: ['.jsx', '.js', '.json']
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: require.resolve('babel-loader'),
        options: {
          presets: [require.resolve('@babel/preset-react')]
        }
      },
    ]
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'displayButton',
      library: { type: 'var', name: 'displayButton' },
      filename: 'remoteEntry.js',
      remotes: {
        home: 'home',
        storeActions: 'storeActions',
      },
      exposes: {
        './displayButton': './src/projetFyc-display-button'
      },
      shared: ['react', 'react-dom', 'single-spa-react']
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      chunks: ['main']
    }),
  ]
};
