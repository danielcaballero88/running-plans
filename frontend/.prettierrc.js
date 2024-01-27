const config = {
  trailingComma: 'es5', // TODO: change to 'all', I like it more
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  plugins: [require.resolve('prettier-plugin-organize-imports')],
}

module.exports = config
