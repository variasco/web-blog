import webpack from "webpack";
import babelRemovePropsPlugin from "../../babel/babelRemovePropsPlugin";
import { BuildOptions } from "../types/config";

interface BabelLoaderProps extends BuildOptions {
  isTsx: boolean;
}

export default function babelLoader({ isDev, isTsx }: BabelLoaderProps): webpack.RuleSetRule {
  return {
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
        plugins: [
          ["@babel/plugin-transform-typescript", { isTsx }],
          "@babel/plugin-transform-runtime",
          isTsx && [babelRemovePropsPlugin, { props: ["data-testid"] }],
          isDev && require.resolve("react-refresh/babel"),
        ].filter(Boolean),
      },
    },
  };
}
