import path from "path";
import webpack from "webpack";
import crc32 from "crc-32";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default function cssLoader(isDev: boolean) {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes(".module.")),
            getLocalIdent: myGetLocalIdent,
          },
        },
      },
      "sass-loader",
    ],
  };
}

function myGetLocalIdent(context: webpack.LoaderContext<object>, _: string, localName: string): string {
  const base = path.parse(context.resourcePath)?.name?.replace(/\.module$/, "");
  const localIdentHash = getLocalIdentHash(localName);

  if (localName.startsWith("root")) {
    return `${base}--${localIdentHash}`;
  }

  return `${base}__${localName}--${localIdentHash}`;
}

function getLocalIdentHash(localName: string) {
  return Math.abs(crc32.str(localName, parseInt((Math.random() * 100000).toFixed()))) % 100000;
}
