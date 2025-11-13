import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: ['node_modules/**', '.next/**', 'out/**', 'build/**', 'next-env.d.ts'],
  },
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      'class-methods-use-this': 'warn',
      curly: 'error',
      'eol-last': ['warn', 'always'],
      indent: ['warn', 2],
      'jsx-a11y/alt-text': 'error',
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'no-trailing-spaces': ['warn'],
      'no-undef': ['warn'],
      'no-unused-expressions': ['warn'],
      'no-unused-vars': 'warn',
      'no-useless-constructor': 0,
      'prefer-const': 'error',
      quotes: ['warn', 'single', { avoidEscape: true }],
      'react/no-unknown-property': 'error',
      semi: ['warn', 'always'],
    },
  },
];

export default eslintConfig;
