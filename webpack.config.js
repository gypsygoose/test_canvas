const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const Path = require("path");
const ExtractCss = new ExtractTextPlugin({
  filename: './styles/[name].css'
});

module.exports = {
    context: Path.resolve(__dirname, "source"),
    entry: {
      "index": "./scripts/index.js",
    },
    devServer: {
      contentBase: Path.resolve(__dirname, "build"),
      open: true,
      inline: true
    },
    output: {
        path: Path.resolve(__dirname, "build"),
        filename: "./scripts/[name].js"
    },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].html",
              outputPath: Path.resolve(__dirname, "build"),
              useRelativePath: true
            }
          },
          "extract-loader",
          "html-loader",
          "pug-html-loader"
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: ExtractCss.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                importLoaders: 1
              }
            },
            "postcss-loader",
            "sass-loader"
          ]
        })
      },
      { 
        test: /\.(jpe?g|png|svg|webp|ico|gif)$/, 
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: './images/'
            }
          },
          {
            loader: "image-webpack-loader",
            options: {
              optipng: {
                optimizationLevel: 3
              },
              pngquant: {
                quality: '65-90',
                speed: 3
              },
              gifsicle: {
                interlaced: false
              },
              mozjpeg: {
                progressive: true,
                quality: 75
              }
            }
          }
        ]
      },
      { 
        test: /\.(woff|woff2|eot|ttf|otf)$/, 
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "./fonts/"
        } 
      },
      { 
        test: /jquery.*\.(js)$/, 
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "./scripts/"
        } 
      },
      { 
        test: /\.(php)$/, 
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "./ajax/"
        } 
      },
      { 
        test: /\.(docx?|xmlx?)$/, 
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "./docs/"
        } 
      }
    ]
  },
  plugins: [
    ExtractCss
    // new UglifyJSPlugin()
  ]
};