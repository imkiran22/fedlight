import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import babel from "rollup-plugin-babel";
import typescript from 'rollup-plugin-typescript2';

const extensions = [".js", ".jsx", ".ts", ".tsx"];

export default {
    input: "./src/index.tsx",
    external: ["react", "react-dom"],
    output: {
        file: "./dist/index.js",
        globals: {
            react: "React",
            "react-dom": "ReactDOM"
        },
        format: "cjs"
    },
    plugins: [
        resolve({ extensions }),
        commonjs(),
        babel({
            exclude: "node_modules/**",
            include: ["src/**/*"],
            extensions
        }),
        typescript({
            exclude: "node_modules/**",
            rollupCommonJSResolveHack: false,
            clean: true,
        })
    ]
};
