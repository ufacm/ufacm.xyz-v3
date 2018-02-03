module.exports = [
    {
        entry: './react/build/index.js',
        output: {
            filename: './public/javascripts/index.js'
        },
        watch: false,
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [ 'style-loader', 'css-loader' ]
                }
            ]
        }
    },
    {
        entry: './react/build/mainapp.js',
        output: {
            filename: './public/javascripts/mainapp.js'
        },
        watch: false,
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [ 'style-loader', 'css-loader' ]
                }
            ]
        }
    }
]
