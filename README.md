# @boennemann/eslint-config

[![Build Status](https://travis-ci.com/boennemann/eslint-config.svg?branch=master)](https://travis-ci.com/boennemann/eslint-config) [![Greenkeeper badge](https://badges.greenkeeper.io/boennemann/eslint-config.svg)](https://greenkeeper.io/)

This is a base configuration for eslint. It contains all styling related
settings, which should stay the same everywhere. They are controlled via [prettier](http://npm.im/prettier)
and offer auto-fixing. Additional static analysis may be added on a per project
basis, e.g. for react, react-native etc.

```bash
npm install -D eslint @boennemann/eslint-config

echo '{"extends": "@boennemann"}' > .eslintrc.json

npx eslint .

# if you want to lint json, too
npx eslint --ext=.json,.js .
```
