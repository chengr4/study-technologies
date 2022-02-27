const path = require("path");

module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  output: {
    // __dirname give current directory of this file
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  // devtool: 'eval-source-map',
  watch: true,
};
