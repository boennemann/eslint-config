module.exports = {
  plugins: ['ava', 'lodash', 'prettier'],
  extends: ['standard', 'plugin:ava/recommended', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: false,
        jsxBracketSameLine: true,
        printWidth: 80,
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'es5',
        useTabs: false,
      },
    ],
    'import/no-cycle': ['error', {maxDepth: 2}],
    'lodash/prefer-lodash-method': 'off',
    'lodash/prefer-constant': 'off',
    'lodash/prefer-lodash-chain': 'off',
    'lodash/path-style': ['error', 'as-needed'],
    'promise/prefer-await-to-then': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'no-process-env': 'error',
    'prefer-const': 'error',
  },
}
