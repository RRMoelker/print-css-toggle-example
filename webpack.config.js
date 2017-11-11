var path = require("path");

module.exports = {
    context: path.resolve(__dirname),
    entry: {
	    app: ["./src/index.js"]
    },
    output: {
      path: path.resolve(__dirname, "build"),
      publicPath: "/assets/",
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['babel-preset-env']
            }
          }
        }
      ]
    },
    devServer: {
        port: 8000
    }
};
