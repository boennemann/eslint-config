module.exports = {
  plugins: ['json', 'ava', 'lodash', 'prettier'],
  extends: [
    'standard',
    'plugin:ava/recommended',
    'prettier',
    'prettier/react',
    'prettier/standard',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: false,
        jsxBracketSameLine: false,
        printWidth: 80,
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
        useTabs: false,
      },
    ],
    'import/no-cycle': ['error', {maxDepth: 2}],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
        },
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
    'import/no-named-as-default': ['error'],
    'import/no-named-as-default-member': ['error'],
    'lodash/prefer-lodash-method': 'off',
    'lodash/prefer-constant': 'off',
    'lodash/prefer-lodash-chain': 'off',
    'lodash/path-style': ['error', 'as-needed'],
    'promise/prefer-await-to-then': 'error',
    'no-process-env': 'error',
    'prefer-const': 'error',
    'no-unused-vars': [
      'error',
      {vars: 'all', args: 'after-used', ignoreRestSiblings: true},
    ],
  },
}
