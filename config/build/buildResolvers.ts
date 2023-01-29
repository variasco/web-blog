import wp from "webpack";

export function buildResolvers(): wp.ResolveOptions {
  return {
    extensions: [".ts", ".tsx", ".js"],
  };
}
