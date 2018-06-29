module.exports = {
    plugins: [
        require('autoprefixer')(
            {
                browsers: ['> 0.04%', 'last 3 versions'],
                flexbox: true
            }
        )
    ]
}