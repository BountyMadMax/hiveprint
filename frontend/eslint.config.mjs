// @ts-check
/* import withNuxt from './.nuxt/eslint.config.mjs' */
import eslintConfigPrettier from 'eslint-config-prettier';
import js from '@eslint/js';

/* export default withNuxt(
  // Your custom configs here
  eslintConfigPrettier,
) */
export default [
  js.configs.recommended,
  eslintConfigPrettier,
  {
    "ignores": [".nuxt/", ".node_modules/", "models/*.js"]
  }
]
