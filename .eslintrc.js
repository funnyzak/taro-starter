const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  root: true,
  env: {
    browser: true,
    es2017: true,
    node: true
  },
  extends: ['taro/react', 'prettier'],
  plugins: ['import', 'react', '@typescript-eslint', 'react-hooks', 'jsx-a11y', 'html'],
  parser: '@typescript-eslint/parser',
  globals: {
    _: 'readonly',
    wxsdk: 'writable',
    Component: 'readonly',
    wx: 'readonly',
    getCurrentPages: 'readonly',
    Page: 'readonly'
  },
  rules: {
    'semi': ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'no-undef': 'off',
    'jsx-quotes': ['error', 'prefer-double'],
    'func-names': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-plusplus': 'off',
    'camelcase': 'off',
    'import/extensions': 'off',
    'no-use-before-define': 'off',
    'no-var-requires': 'off',
    'import/no-commonjs': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    ]
  }
})
