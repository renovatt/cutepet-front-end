module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:tailwindcss/recommended',
    '@nuxtjs/eslint-config-typescript'
  ],
  plugins: ['tailwindcss'],
  rules: {
    'no-console': 'off',
    'vue/html-indent': 'off',
    'vue/first-attribute-linebreak': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    'space-before-function-paren': ['error', 'never'],
    'tailwindcss/no-custom-classname': 'off'
  }
}
