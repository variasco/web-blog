import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack, { WebpackPluginInstance } from "webpack";
import { BuildOptions } from "./types/config";

export function buildPlugins({ paths }: BuildOptions): WebpackPluginInstance[] {
  return [
    new webpack.ProgressPlugin(),
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
  ];
}
