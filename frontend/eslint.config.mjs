// @ts-ignore
import withNuxt from './.nuxt/eslint.config.mjs'
import eslintConfigPrettier from 'eslint-config-prettier';
import js from '@eslint/js';

export default withNuxt [
  js.configs.recommended,
  eslintConfigPrettier,
  {
    "ignores": [".nuxt/", ".node_modules/", "models/*.js"]
  }
]
