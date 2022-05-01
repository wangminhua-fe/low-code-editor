/*
 * @Author: Marshall
 * @Date: 2022-04-27 13:27:00
 * @LastEditors: Marshall
 * @LastEditTime: 2022-04-28 00:09:58
 * @Description: 
 * @FilePath: /low-code-editor/.eslintrc.js
 */
const { defineConfig } = require('eslint-define-config')
 
module.exports = defineConfig({
  env: {
    es6: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest'
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:eslint-plugin/recommended'
  ],
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
        ecmaVersion: 'latest'
      },
    }
  ]
})
