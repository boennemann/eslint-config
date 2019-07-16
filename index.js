module.exports = {
  plugins: ['json', 'ava', 'lodash', 'prettier', 'import-order-alphabetical'],
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
    'import-order-alphabetical/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
        ],
        'newlines-between': 'always',
      },
    ],
    'import/no-unassigned-import': [
      'error',
      {
        allow: ['**/*.css'],
      },
    ],
    'import/newline-after-import': ['error'],
    'import/no-useless-path-segments': [
      'error',
      {
        noUselessIndex: true,
      },
    ],
    'import/named': ['error'],
    'import/no-named-as-default': ['error'],
    'import/no-named-as-default-member': ['error'],
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
