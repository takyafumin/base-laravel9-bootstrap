const mix = require('laravel-mix');
require('laravel-mix-eslint');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .eslint({
        fix: true,
        extensions: ['js'],
    })
    .sass('resources/sass/app.scss', 'public/css', []);

// ソースマップ生成
mix.sourceMaps(false, 'eval-source-map');
