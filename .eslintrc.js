module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'import/extensions': [1, { extensions: ['.tsx', '.ts'] }],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'jsx-a11y/label-has-associated-control': 'off',
    'react/require-default-props': 'off',
    camelcase: 'off',
    'no-unused-vars': 'off',
    'no-underscore-dangle': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
