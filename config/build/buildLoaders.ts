import webpack from "webpack";
import buildCssLoader from "./loaders/cssLoader";
import buildSvgLoader from "./loaders/svgLoader";
import { BuildOptions } from "./types/config";
import buildBabelLoader from "./loaders/babelLoader";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options;

  const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
  const JsxBabelLoader = buildBabelLoader({ ...options, isTsx: true });

  // const typescriptLoader = {
  //   test: /\.tsx?$/,
  //   use: "ts-loader",
  //   exclude: "/node_modules/",
  // };

  const cssLoader = buildCssLoader(isDev);

  const svgLoader = buildSvgLoader();

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

  return [
    codeBabelLoader,
    JsxBabelLoader,
    // typescriptLoader,
    cssLoader,
    svgLoader,
    fileLoader,
  ];
}
