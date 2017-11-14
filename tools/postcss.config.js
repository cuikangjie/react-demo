module.exports = {
  plugins: [
    require('precss'),

    require('postcss-global-import')(),
    
    require('postcss-import')(),

    require('postcss-custom-properties')(),

    require('postcss-custom-media')(),

    require('postcss-media-minmax')(),

    require('postcss-custom-selectors')(),

    require('postcss-calc')(),

    require('postcss-nesting')(),

    require('postcss-nested')(),

    require('postcss-color-function')(),

    require('pleeease-filters')(),

    require('pixrem')(),

    require('postcss-selector-matches')(),

    require('postcss-selector-not')(),

    require('postcss-flexbugs-fixes')(),

    require('autoprefixer')(/* package.json/browserslist */)
  ]
}
