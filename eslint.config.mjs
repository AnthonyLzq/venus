import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

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
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
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
  }
]
