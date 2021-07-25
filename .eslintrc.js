module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['@vue/eslint-config-airbnb', 'plugin:vue/base', 'plugin:vue/essential', 'eslint:recommended'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
};
