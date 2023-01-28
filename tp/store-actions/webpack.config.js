const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    entry: './src/store-actions',
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
            name: 'storeActions',
            library: { type: 'var', name: 'storeActions' },
            filename: 'remoteEntry.js',
            remotes: {
            },
            exposes: {
                './storeActions': './src/store-actions'
            },
            shared: []
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
    ]
};
