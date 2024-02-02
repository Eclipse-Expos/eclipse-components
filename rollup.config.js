import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import tailwindcss from "tailwindcss";
/**
 * ES Module imports
 */
const autoprefixer = require("autoprefixer");
const tailwindConfig = require("./tailwind.config.cjs");
const packageJson = require("./package.json");

/**
 * Default export
 */
export default [
  {
    external: ["react", "react-dom"],
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      postcss({
        config: {
          path: "./postcss.config.cjs",
        },
        extract: true,
        inject: true,
        extensions: [".css"],
        plugins: [autoprefixer(), tailwindcss(tailwindConfig)],
      }),

      typescript({ tsconfig: "./tsconfig.json" }),
      peerDepsExternal(),

      resolve(),
      commonjs(),

      terser(),
    ],
  },
];
