module.exports = {
   env: {
      browser: true,
      es2021: true,
   },
   extends: [
      'plugin:react/recommended',
      'standard-with-typescript',
      'prettier',
      'plugin:prettier/recommended',
   ],
   overrides: [],
   parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: './tsconfig.json',
      parser: '@typescript-eslint/parser',
   },
   plugins: ['react', '@typescript-eslint', 'prettier'],
   rules: {
      'react/react-in-jsx-scope': 'off', // import react 제어
      '@typescript-eslint/explicit-function-return-type': 'off', // function return type 제어
      '@typescript-eslint/space-before-function-paren': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
   },
}
