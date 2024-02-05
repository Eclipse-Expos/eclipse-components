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
      {
        file: packageJson.types,
        format: "esm",
        sourcemap: true,
      },
    ],

    plugins: [
      typescript({
        tsconfig: "./tsconfig.json",
        declaration: true,
      }),

      peerDepsExternal(),

      resolve(),
      commonjs(),

      terser(),

      postcss({
        config: {
          path: "./postcss.config.cjs",
        },
        extract: true,
        inject: true,
        extensions: [".css"],
        plugins: [autoprefixer(), tailwindcss(tailwindConfig)],
      }),
    ],
  },
];
