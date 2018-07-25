"use strict";

import clear from "rollup-plugin-clear";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import screeps from "rollup-plugin-screeps";

let cfg;
const dest = process.env.DEST;
if (!dest) {
  console.log("No destination specified - code will be compiled but not uploaded");
} else if ((cfg = require("./screeps")[dest]) == null) {
  throw new Error("Invalid upload destination");
}

export default {
  input: "src/main.ts",
  output: {
    file: "C:/Users/Dethharmonic/AppData/Local/Screeps/scripts/127_0_0_1___21025/main/main.js",
    format: "cjs",
    sourcemap: true
  },

  plugins: [
    clear({ targets: ["C:/Users/Dethharmonic/AppData/Local/Screeps/scripts/127_0_0_1___21025/main"] }),
    resolve(),
    commonjs(),
    typescript({tsconfig: "./tsconfig.json"}),
    screeps({config: cfg, dryRun: cfg == null})
  ]
}
