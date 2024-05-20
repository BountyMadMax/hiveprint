// @ts-check
/* import withNuxt from './.nuxt/eslint.config.mjs' */
/* import eslintConfigPrettier from 'eslint-config-prettier'; */
import js from '@eslint/js';
import jsdoc from 'eslint-plugin-jsdoc';

/* export default withNuxt(
  // Your custom configs here
  eslintConfigPrettier,
) */
export default [
  js.configs.recommended,
  jsdoc.configs['flat/recommended'],
  /* eslintConfigPrettier */
  {
    "ignores": [".nuxt/", ".node_modules/"]
  }
]
