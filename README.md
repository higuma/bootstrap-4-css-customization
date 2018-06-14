# Bootstrap 4 CSS customization

English(en) | [日本語(ja)](README.ja.md)

⇒ [GO TO SITE](http://higuma.github.io/bootstrap-4-css-customization/en/)

## Table of contents

* About this tutorial
* Learning Sass
* [How to customize](http://higuma.github.io/bootstrap-4-css-customization/en/howto.html)
* [Importing Sass partials](http://higuma.github.io/bootstrap-4-css-customization/en/partials.html)
* [Manupulating variables](http://higuma.github.io/bootstrap-4-css-customization/en/variables.html)
* [Using Sass mixins](http://higuma.github.io/bootstrap-4-css-customization/en/mixins.html)
* [Gradient and shadow effects](http://higuma.github.io/bootstrap-4-css-customization/en/gradient+shadow.html)

## About this tutorial

This short turorial explains how to customize Bootstrap 4 styles. Bootstrap CSS is written in [Sass](https://sass-lang.com/). You can customize styles by extending Bootstrap source code. Usually you do not have to modify original code.

The tutorial is written in [pug](https://pugjs.org/) and built with [npm](https://npmjs.org/) on [node.js](https://nodejs.org/). The source code is maintained by [GitHub](https://github.com/). The site is hosted by [GitHub Pages](https://pages.github.com/).

## Learning Sass

Sass is required to customize Bootstrap. But Bootstrap source code is also good material to study Sass. You can read Bootstrap code and study Sass with referencing Sass documents.

Sass was originally coded in Ruby and several implementations have been created for other languages (see [Wikipedia](https://en.wikipedia.org/wiki/Sass_(stylesheet_language))). Three official implementations exist ([Ruby](https://sass-lang.com/ruby-sass), [C++](https://sass-lang.com/libsass), and [Dart](https://sass-lang.com/dart-sass)).

The following are selected documents for studying Sass. It is imcomplete but propably enough for you.

* [Sass reference](https://sass-lang.com/documentation/file.SASS_REFERENCE.html) (for Ruby Sass)
    * [Sass builtin functions](https://sass-lang.com/documentation/Sass/Script/Functions.html)
    * No command line reference (see `sass --help`)
* [libsass](https://github.com/sass/libsass) (C++ implementation)
    * [node-sass](https://github.com/sass/node-sass) (node.js interface, used in this tutorial)
        * [node-sass CLI](https://github.com/sass/node-sass#command-line-interface)
* [Wikipedia: Sass (Stylesheet language)](https://en.wikipedia.org/wiki/Sass_(stylesheet_language))
