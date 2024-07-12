import { FlatCompat } from '@eslint/eslintrc'
import path from 'path'
import { fileURLToPath } from 'url'
import typescriptEslintParser from '@typescript-eslint/parser'
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
	baseDirectory: __dirname,
})

// export default tseslint.config(
//   eslint.configs.recommended,
//   ...tseslint.configs.recommended,
//   eslintConfigPrettier,
//   eslintPluginReactHooks,
//   // {
//   //   env: { browser: true, es2020: true },
//   //   files: ["**/*.ts", "**/*.tsx", "**/*.vue", "**/*.json"],
//   //   languageOptions: {
//   //     parser: typescriptEslintParser
//   //   },
//   //   ignores: ['dist', '.eslintrc.js'],
//   // }
// )

export default [
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	eslintConfigPrettier,
	eslintPluginReactHooks,
	// {
	//   env: { browser: true, es2020: true },
	//   files: ["**/*.ts", "**/*.tsx", "**/*.vue", "**/*.json"],
	//   languageOptions: {
	//     parser: typescriptEslintParser
	//   },
	//   ignores: ['dist', '.eslintrc.js'],
	// }
]
