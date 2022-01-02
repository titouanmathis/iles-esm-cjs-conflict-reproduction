import { promises as fs } from 'fs';
import { join } from 'path';
import { defineConfig, resolveConfig } from 'iles';

export default defineConfig({
	vite: {
		plugins: [
			// Comment/uncomment the following lines to toggle the "Error [ERR_REQUIRE_ESM]: Must use import to load ES Module" error
			{
				name: 'fix-ssr-require-esm-error',
				async writeBundle() {
					const config = await resolveConfig();
					fs.writeFile(
						join(config.tempDir, 'package.json'),
						JSON.stringify({ type: 'commonjs' })
					);
				},
			},
		],
	},
});
