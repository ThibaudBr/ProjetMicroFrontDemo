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
        publicPath: 'http://localhost:8083/'
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
            }
        ]
    },

    plugins: [
        new ModuleFederationPlugin({
            name: 'nav',
            library: { type: 'var', name: 'nav' },
            filename: 'remoteEntry.js',
            remotes: {
                storeActions: 'storeActions',
            },
            exposes: {
                './header': './src/header',
                './footer': './src/footer',
            },
            shared: ['react', 'react-dom', 'single-spa-react']
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            chunks: ['main']
        })
    ]
};
