import eslintPluginAstro from 'eslint-plugin-astro';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import * as astroParser from 'astro-eslint-parser';

export default [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    ...eslintPluginAstro.configs.recommended,
    {
        ignores: [
            'dist/**',
            'build/**',
            '.astro/**',
            'node_modules/**',
            '*.config.js',
            '*.config.mjs',
        ],
    },
    {
        files: ['**/*.astro'],
        languageOptions: {
            parser: astroParser,
        },
    },
    {
        rules: {},
    },
];
