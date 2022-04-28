import path from "path";
import { Configuration } from "webpack";
import "webpack-dev-server";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import HTMLWebpackPlugin from "html-webpack-plugin";

const isDev = process.env.NODE_ENV === "development";

const config: Configuration = {
  mode: isDev ? "development" : "production",
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  devServer: {
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
      progress: true,
    },
    historyApiFallback: true,
    hot: true,
    open: true,
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new HTMLWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};

export default config;
