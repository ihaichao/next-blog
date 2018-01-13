// const webpack = require('webpack')

module.exports = {
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        {
          loader: 'emit-file-loader',
          options: {
            name: 'dist/[path][name].[ext]',
          },
        },
        'babel-loader',
        'styled-jsx-css-loader',
      ],
    })
    // config.module.rules.push({
    //   test: /\.scss$/,
    //   use: [
    //     'style-loader',
    //     'css-loader',
    //     'sass-loader'
    //   ],
    //   exclude: /node_modules/
    // })

    // config.plugins.push(
    //   new webpack.DefinePlugin({
    //     "process.env": {
    //       // flag to indicate this is for browser-side
    //       BROWSER: JSON.stringify(true)
    //    }
    //   })
    // )
    return config
  }
}
