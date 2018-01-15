module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-import')(),
    require('postcss-each')(),
    require('postcss-mixins')(),
    require('postcss-nested')(),
    require('postcss-at-rules-variables')(),
    require('postcss-for')(),
    require('postcss-custom-properties')(),
    require('postcss-simple-vars')(),
    require('postcss-short')(),
    require('postcss-calc')(),
    require('postcss-color-function')()
  ]
}
