const config = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  plugins: [require.resolve('prettier-plugin-organize-imports')],
}

module.exports = config
