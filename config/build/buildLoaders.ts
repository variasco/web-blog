import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import webpack, { LoaderContext } from "webpack";
import { BuildOptions } from "./types/config";

// function getLocalIndent(context: webpack.LoaderContext<{}>, localName: string, isDev: boolean): string {
//   const base = path.parse(context.resourcePath)?.name?.replace(/\.module$/, "");

//   if (localName.startsWith("root") && isDev) {
//     return base;
//   }

//   return isDev ? `${base}__${localName}--[hash:base64:5]` : "[hash:base64:8]";
// }

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: "/node_modules/",
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes(".module.")),
            // getLocalIndent: (context: LoaderContext<{}>,localIdentName: string, localName: string, ) => {
            //   return getLocalIndent(context,localName, isDev);
            // },
            localIdentName: isDev ? "[name]__[local]--[hash:base64:5]" : "[hash:base64:8]",
          },
        },
      },
      "sass-loader",
    ],
  };

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ["@svgr/webpack"],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

  return [typescriptLoader, cssLoader, svgLoader, fileLoader];
}
