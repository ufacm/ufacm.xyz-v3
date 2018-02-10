module.exports = [
    {
        entry: './react/src/index.jsx',
        output: {
            filename: './public/javascripts/index.js'
        },
        module: {
            loaders: [
                {
                    test: /.jsx$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    query: {
                        presets: ['react']
                    }
                }
            ]
        }
    }
];
