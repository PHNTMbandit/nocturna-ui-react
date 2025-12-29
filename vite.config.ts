/// <reference types="vitest/config" />

import path from "node:path"
import { fileURLToPath } from "node:url"
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin"
import react from "@vitejs/plugin-react"
import { playwright } from "@vitest/browser-playwright"
import dts from "vite-plugin-dts"
import { defineConfig } from "vitest/config"
import { peerDependencies } from "./package.json"

const dirname =
	typeof __dirname !== "undefined"
		? __dirname
		: path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
	plugins: [
		react({
			babel: {
				plugins: [["babel-plugin-react-compiler"]],
			},
		}),
		dts({
			tsconfigPath: "./tsconfig.app.json",
			exclude: ["**/*.test.tsx", "**/*.stories.tsx"],
			insertTypesEntry: true,
			outDir: "dist",
		}),
	],
	build: {
		lib: {
			entry: fileURLToPath(new URL("./src/index.ts", import.meta.url)),
			name: "strata-ui-react",
			fileName: (format) => `strata-ui-react.${format}.js`,
			formats: ["es"],
		},
		rollupOptions: {
			external: Object.keys(peerDependencies),
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
					"react/jsx-runtime": "jsxRuntime",
				},
			},
		},
	},
	test: {
		globals: true,
		environment: "jsdom",
		css: true,
		projects: [
			{
				extends: true,
				plugins: [
					// The plugin will run tests for the stories defined in your Storybook config
					// See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
					storybookTest({
						configDir: path.join(dirname, ".storybook"),
					}),
				],
				test: {
					name: "storybook",
					browser: {
						enabled: true,
						headless: true,
						provider: playwright({}),
						instances: [
							{
								browser: "chromium",
							},
						],
					},
					setupFiles: [".storybook/vitest.setup.ts"],
				},
			},
		],
	},
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
})
