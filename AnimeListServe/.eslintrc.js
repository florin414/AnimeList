module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'linearbreak-style': 0,
    'no-console': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-unused-vars': 0,
    'no-restricted-globals': 0,
    'linebreak-style': 0,
  },
};
