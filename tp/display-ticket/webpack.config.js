const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/display-ticket',
    cache: false,

    mode: 'development',
    devtool: 'source-map',

    optimization: {
        minimize: false
    },

    output: {
        publicPath: 'http://localhost:8086/'
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
            {
                test: /\.md$/,
                loader: 'raw-loader'
            }
        ]
    },

    plugins: [
        new ModuleFederationPlugin({
            name: 'displayTicket',
            library: { type: 'var', name: 'displayTicket' },
            filename: 'remoteEntry.js',
            remotes: {
            },
            exposes: {
                './displayTicket': './src/display-ticket'
            },
            shared: []
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
    ]
};
