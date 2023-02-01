import wp from "webpack";
import { BuildOptions } from "./types/config";

export function buildResolvers(options: BuildOptions): wp.ResolveOptions {
  return {
    extensions: [".ts", ".tsx", ".js"],
    preferAbsolute: true,
    modules: [options.paths.src, "node_modules"],
    mainFiles: ["index"],
    alias: {},
  };
}
