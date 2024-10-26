const ReactCompilerConfig = {
  target: '18' // '17' | '18' | '19'
}

module.exports = function (api) {
  api.cache(true)

  return {
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
      'nativewind/babel',
    ],
    plugins: [
      ['babel-plugin-react-compiler', ReactCompilerConfig]
    ]
  }
}
