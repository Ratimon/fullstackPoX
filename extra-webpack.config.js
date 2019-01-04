// Our very simple example plugin.
// const HelloWorldPlugin = require("./build/hello-world.plugin");
/**
 * This is where you define your additional webpack configuration items to be appended to
 * the end of the webpack config.
 */


const path = require('path');
const webpack = require('webpack');


const envVariables = new webpack.DefinePlugin({
  ENV: JSON.stringify(process.env.ENV)
});

module.exports = {
  module: {

    // node: {
    //   crypto: true,
    //   http: true,
    //   https: true,
    //   os: true,
    //   vm: true,
    //   stream: true
    // },
    
    rules: [
      {
        test: /\.sol/,
        use: [
          {
            loader: 'json-loader'
          },
          {
            loader: 'truffle-solidity-loader',
            options: {
              network: process.env.ENV,
              migrations_directory: path.resolve(__dirname, './migrations'),
              contracts_build_directory: path.resolve(__dirname, '../build/contracts')
            }
          }
        ]
      }
    ]
  },
  plugins: [
    envVariables,
  ],
};
