const webpack = require("webpack");
require("now-env");

module.exports = {
  webpack: (config, { dev }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env.SERVER": JSON.stringify(process.env.SERVER),
      }),
    );
    return config;
  },
};
