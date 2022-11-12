module.exports = {
  extends: ['turbo', 'prettier', 'eslint:recommended'],
  settings: {
    next: {
      rootDir: ['apps/*/', 'packages/*/'],
    },
  },
  rules: {
    'react/jsx-key': 'off',
  },
}
