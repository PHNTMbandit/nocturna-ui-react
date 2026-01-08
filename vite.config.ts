/// <reference types="vitest/config" />

import path from "node:path"
import { fileURLToPath } from "node:url"
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin"
import tailwindCss from "@tailwindcss/vite"
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
		react(),
		dts({
			tsconfigPath: "./tsconfig.app.json",
			exclude: ["**/*.test.tsx", "**/*.stories.tsx"],
			insertTypesEntry: true,
			rollupTypes: true,
		}),
		tailwindCss(),
	],
	build: {
		lib: {
			entry: fileURLToPath(new URL("./src/index.ts", import.meta.url)),
			fileName: (format) => `suwa-ui.${format}.js`,
			formats: ["es"],
		},
		rollupOptions: {
			external: (id) => {
				if (
					Object.keys(peerDependencies).some(
						(dep) => id === dep || id.startsWith(`${dep}/`),
					)
				) {
					return true
				}

				if (id.startsWith("react") || id.startsWith("react-dom")) {
					return true
				}

				if (id.startsWith("use-sync-external-store")) {
					return true
				}

				return false
			},
		},
	},
	test: {
		globals: true,
		environment: "jsdom",
		css: true,
		passWithNoTests: true,
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
