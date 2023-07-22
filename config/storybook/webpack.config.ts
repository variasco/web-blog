import path from "path";
import webpack, { DefinePlugin } from "webpack";
import { BuildPaths } from "../../config/build/types/config";
import cssLoader from "../build/loaders/cssLoader";
import svgLoader from "../build/loaders/svgLoader";
import CopyPlugin from "copy-webpack-plugin";

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: "",
    entry: "",
    html: "",
    src: path.resolve(__dirname, "..", "..", "src"),
    buildLocals: "",
    locales: "",
  };
  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push(".ts", ".tsx");

  if (config.module?.rules) {
    config.module.rules = config.module?.rules?.map((rule: webpack.RuleSetRule | "...") => {
      if (rule !== "..." && /svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }

      return rule;
    });
  }

  config.module?.rules?.push(cssLoader(true));
  config.module?.rules?.push(svgLoader());

  config.plugins?.push(
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
      __API__: JSON.stringify(""),
      __PROJECT__: JSON.stringify("storybook"),
    })
  );

  return config;
};
