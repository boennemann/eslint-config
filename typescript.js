const jsConfig = require('./')

module.exports = {
  ...jsConfig,
  extends: [
    'standard-with-typescript',
    'prettier',
    'prettier/react',
    'prettier/standard',
    'prettier/@typescript-eslint',
  ],
}
