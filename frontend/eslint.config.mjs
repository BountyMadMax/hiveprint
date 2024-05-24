// @ts-ignore
import withNuxt from './.nuxt/eslint.config.mjs'
import style from '@stylistic/eslint-plugin';

export default withNuxt(
  {
    ignores: ['models/**'],
  },

  style.configs['recommended-flat'],

  {
    rules: {
      '@stylistic/semi': [
        'off',
      ],
      '@stylistic/brace-style': [
        'error',
        '1tbs',
      ],
    },
  },
);
