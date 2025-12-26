import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "node:path";
import { copyFileSync } from "node:fs";
import { nodeExternals } from "rollup-plugin-node-externals";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
    nodeExternals(),
    dts({
      rollupTypes: true,
      afterBuild: () => {
        copyFileSync("dist/index.d.ts", "dist/index.d.cts");
      },
    }),
    tailwindcss(),
  ],
  build: {
    lib: {
      entry: [resolve(__dirname, "src/index.ts")],
      formats: ["es", "cjs"],
    },
    emptyOutDir: true,
    minify: false,
    rollupOptions: {
      output: {
        preserveModules: true,
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
