import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
import svgr from "vite-plugin-svgr";
import fs from "fs/promises";

export default defineConfig({
    server: {
        open: true,
    },
    build: {
        outDir: "build",
    },
    resolve: {
        // eslint-disable-next-line no-undef
        alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
    },
    css: {
        modules: {
            localsConvention: "dashes",
            generateScopedName:
                // eslint-disable-next-line no-undef
                process.env.NODE_ENV === "production" ? "[hash:base64:10]" : "[folder]_[local]_[hash:base64:5]",
        },
    },
    plugins: [
        react(),
        svgr({
            svgrOptions: {
                dimensions: false,
            },
        }),
    ],
    esbuild: {
        loader: "jsx",
        include: /src\/.*\.jsx?$/,
        exclude: [],
    },
    optimizeDeps: {
        esbuildOptions: {
            plugins: [
                {
                    name: "load-js-files-as-jsx",
                    setup(build) {
                        build.onLoad({ filter: /src\/.*\.js$/ }, async (args) => ({
                            loader: "jsx",
                            contents: await fs.readFile(args.path, "utf8"),
                        }));
                    },
                },
            ],
        },
    },
});
