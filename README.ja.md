## Bootstrap 4 CSSのカスタマイズ

日本語(ja) | [English(en)](README.md)

⇒ [サイトに進む](http://higuma.github.io/bootstrap-4-css-customization/ja/)

## 目次

* 本チュートリアルについて
* Sassの学習
* [カスタマイズの方法](http://higuma.github.io/bootstrap-4-css-customization/en/howto.html)
* [Sassパーシャルのインポート](http://higuma.github.io/bootstrap-4-css-customization/en/partials.html)
* [Sass変数の操作](http://higuma.github.io/bootstrap-4-css-customization/en/variables.html)
* [Sassミックスインの利用](http://higuma.github.io/bootstrap-4-css-customization/en/mixins.html)
* [グラデーションとシャドウ](http://higuma.github.io/bootstrap-4-css-customization/en/gradient+shadow.html)

## 本チュートリアルについて

この短いチュートリアルはBootstrap 4のスタイルをカスタマイズする方法についての解説です。Bootstrap CSSはSassで記述されており、拡張コードを書き加えることによりカスタマイズすることができます(通常Bootstrapのライブラリソースコードを書き換える必要はありません)。

このチュートリアルはpugで記述し、node.js上のnpmでビルドしています。ソースコードはGitHubにあり、サイトはGitHub Pagesで公開しています。

## Sassの学習

BootstrapのカスタマイズにはSassの知識が必要ですが、BootstrapのソースコードはSassを学ぶための良い教材にもなります。コードを読みドキュメントを参照しながら自然にSassを学習することができます。

Sassは始めRubyで作られましたが、その後様々な環境や言語へ移植されています(Wikipediaを参照)。公式サイトが扱う実装もRuby、C++、Dartの3種類あります。

Sassの主要な公開ドキュメントは次の通りです。実装はたくさん種類がありますが言語仕様の詳しい解説はRuby版しかありません。ただし基本的な言語仕様に違いはないのでRuby版ドキュメントを読めば理解できます。

* Sassリファレンス (Ruby Sass用、文法と組み込み関数の詳しい解説はここのみ)
    * 組み込み関数
    * コマンドラインリファレンスは sass --help で確認すること(ドキュメントなし)
* libsass (C++実装)
    * node-sass (libsassのnode.js用インターフェース、本チュートリアルで使用)
        * node-sass CLI (コマンドラインオプション)
* Wikipedia: Sass







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

This small turorial explains how to customize Bootstrap 4 styles. Bootstrap CSS is written in Sass. You can customize styles by extending Bootstrap source code. Usually you do not have to modify original code.

The tutorial is written in pug and built with npm on node.js. The source code is maintained by GitHub. The site is hosted by GitHub Pages.

## Learning Sass

Sass is required to customize Bootstrap. But Bootstrap source code is also good material to study Sass. You can read Bootstrap code and study Sass with referencing Sass documents.

Sass was originally coded in Ruby and several implementations have been created for other languages (see Wikipedia). Three official implementations exist (Ruby, C++, and Dart).

The following are selected documents for studying Sass. It is imcomplete but propably enough for you.

* Sass reference (for Ruby-Sass)
    * Sass builtin functions
    * No command line reference (see `sass --help`)
* libsass (C++ implementation)
    * node-sass (node.js interface, used in this tutorial)
    * node-sass CLI
* Wikipedia: Sass (Stylesheet language)
