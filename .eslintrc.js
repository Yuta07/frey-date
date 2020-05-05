module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    project: './tsconfig.json',
  },
  extends: [
    'react-app',
    'plugin:react-app/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  plugins: ['@typescript-eslint', 'prettier', 'react'],
  rules: {
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-require-imports': 'warn',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/prefer-for-of': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-empty-function': 'off',
  },
  settings: {
    react: {
      version: 'detect', // detect the version of React to use
    },
  },
};
