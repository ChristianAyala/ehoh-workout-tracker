module.exports = {
  extends: ['universe/native', 'universe/shared/typescript-analysis'],
  ignorePatterns: ['App.ts'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json'
      },
      rules: {
        '@typescript-eslint/prefer-nullish-coalescing': 0
      }
    }
  ]
};
