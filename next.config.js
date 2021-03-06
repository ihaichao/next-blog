const withSass = require('@zeit/next-sass')

module.exports = withSass({
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    // config.module.rules.push({
    //   test: /\.scss$/,
    //   use: [
    //     {
    //       loader: 'emit-file-loader',
    //       options: {
    //         name: 'dist/[path][name].[ext]',
    //       },
    //     },
    //     'babel-loader',
    //     'styled-jsx-css-loader',
    //   ],
    // })
    return config
  }
})
