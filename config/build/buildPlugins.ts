import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import CircularDependencyPlugin from "circular-dependency-plugin";
import CopyPlugin from "copy-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack, { WebpackPluginInstance } from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { BuildOptions } from "./types/config";

export function buildPlugins({
  paths,
  isDev,
  apiURL,
  project,
}: BuildOptions): WebpackPluginInstance[] {
  const plugins = [
    new webpack.ProgressPlugin(),
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiURL),
      __PROJECT__: JSON.stringify(project),
    }),
    new CopyPlugin({ patterns: [{ from: paths.locales, to: paths.buildLocals }] }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
        mode: "write-references",
      },
    }),
  ];

  if (isDev) {
    plugins.push(
      new CircularDependencyPlugin({ exclude: /node_modules/, failOnError: true, include: /src/ })
    );
    plugins.push(new ReactRefreshWebpackPlugin());
    plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }));
  }

  return plugins;
}
