import pluginJs from '@eslint/js'
import tsParser from '@typescript-eslint/parser'
import eslintPluginImportX from 'eslint-plugin-import-x'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import pluginReact from 'eslint-plugin-react'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default [
  {
    ignores: ['babel.config.js', 'metro.config.js', 'scripts/**']
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      semi: ['error', 'never'],
      indent: ['error', 2],
      'newline-before-return': 'error',
      quotes: ['error', 'single'],
      'jsx-quotes': ['error', 'prefer-single']
    }
  },
  {
    languageOptions: {
      globals: globals.browser
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    ...eslintPluginPrettierRecommended,
    rules: {
      'prettier/prettier': [
        'error',
        {
          arrowParens: 'avoid',
          bracketSameLine: false,
          bracketSpacing: true,
          semi: false,
          singleQuote: true,
          jsxSingleQuote: true,
          quoteProps: 'as-needed',
          trailingComma: 'none',
          singleAttributePerLine: false,
          htmlWhitespaceSensitivity: 'css',
          vueIndentScriptAndStyle: false,
          proseWrap: 'preserve',
          insertPragma: false,
          printWidth: 80,
          requirePragma: false,
          tabWidth: 2,
          useTabs: false,
          embeddedLanguageFormatting: 'auto'
        }
      ]
    }
  },
  eslintPluginImportX.flatConfigs.recommended,
  eslintPluginImportX.flatConfigs.typescript,
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    ignores: ['eslint.config.mjs'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    rules: {
      'import-x/order': [
        'error',
        {
          alphabetize: {
            order: 'asc',
            caseInsensitive: true
          },
          'newlines-between': 'always',
          groups: [
            'builtin',
            ['external', 'type'],
            'internal',
            'parent',
            'sibling',
            'index',
            'object'
          ],
          pathGroups: [
            {
              pattern: '@assets/**',
              group: 'internal',
              position: 'after'
            },
            {
              pattern: '@components/**',
              group: 'internal',
              position: 'after'
            },
            {
              pattern: '@constants/**',
              group: 'internal',
              position: 'after'
            },
            {
              pattern: '@hooks/**',
              group: 'internal',
              position: 'after'
            },
            {
              pattern: '@store/**',
              group: 'internal',
              position: 'after'
            }
          ],
          pathGroupsExcludedImportTypes: []
        }
      ]
    }
  }
]
