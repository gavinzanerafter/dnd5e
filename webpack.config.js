const path = require('path')
const TerserPlugin = require("terser-webpack-plugin")

module.exports = {
  entry: './src/lambda.ts',
  output: {
    library: 'api',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    path: path.resolve(__dirname, 'dist'),
    filename: 'api.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: [
      'node_modules'
    ]
  },
  target: 'node',
  mode: 'production',
  ignoreWarnings: [/^(?!CriticalDependenciesWarning$)/],
  module: {
    rules: [{
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      test: /\.tsx?$/,
      use: [{
        loader: 'ts-loader',
      }]
    }]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  }
}
