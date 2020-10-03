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
  },
  extends: [
    'react-app',
    'plugin:react-app/recommended',
    'plugin:react-hooks/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  plugins: ['@typescript-eslint', 'prettier', 'react', 'react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'react/react-in-jsx-scope': "off",
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-require-imports': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/prefer-for-of': 'off',
    '@typescript-eslint/no-explicit-ann': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
    '@typescript-eslint/no-use-before-define': 'off'
  },
  settings: {
    react: {
      version: 'detect', // detect the version of React to use
    },
  },
};