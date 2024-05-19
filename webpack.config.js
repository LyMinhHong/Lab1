// Importing the 'path' module from Node.js to handle and transform file paths
const path = require("path");

// Importing the HtmlWebpackPlugin to simplify the creation of HTML files to serve your bundles
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // Entry point of the application
  entry: "./src/index.js",

  // Output configuration for the bundled file
  output: {
    // Directory to output the bundled file
    path: path.join(__dirname, "/dist"),
    // Name of the output bundled file
    filename: "index-bundle.js"
  },

  // Module rules to handle different types of files
  module: {
    rules: [
      {
        // Rule to process JavaScript files
        test: /\.js$/,
        // Exclude node_modules directory from processing
        exclude: /node_modules/,
        // Use Babel loader to transpile JavaScript files
        use: ["babel-loader"]
      },
      {
        // Rule to process CSS files
        test: /\.css$/,
        // Use style-loader and css-loader to handle CSS files
        use: ["style-loader", "css-loader"]
      }
    ]
  },

  // Plugins used in the configuration
  plugins: [
    // HtmlWebpackPlugin to generate an HTML file to serve the bundled JavaScript
    new HtmlWebpackPlugin({
      // Template HTML file
      template: "./src/index.html"
    })
  ]
};
