module.exports = {
    root: true,
    env: {
      browser: true,
      node: true
    },
    rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error'
    },
    extends: [
      '@nuxtjs/eslint-config-typescript',
      'prettier',
      'prettier/vue',
      'plugin:nuxt/recommended'
    ],
    plugins: [
    ]
  }