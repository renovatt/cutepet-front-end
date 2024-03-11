module.exports = {
  root: true,
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:tailwindcss/recommended',
    'plugin:vue/vue3-recommended',
    '@nuxtjs/eslint-config-typescript'
  ],
  plugins: ['tailwindcss'],
  rules: {
    'no-console': 'off',
    'comma-dangle': 'off',
    'no-tabs': 'off',
    'vue/no-template-shadow': 'off',
    'vue/html-indent': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/require-default-prop': 'off',
    'vue/first-attribute-linebreak': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    'space-before-function-paren': ['error', 'never'],
    'tailwindcss/no-custom-classname': 'off',
    'vue/multiline-html-element-content-newline': 'off'
  }
}
