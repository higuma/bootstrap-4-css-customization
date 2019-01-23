# Bootstrap 4 CSSのカスタマイズ

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

この短いチュートリアルはBootstrap 4のスタイルをカスタマイズする方法についての解説です。Bootstrap CSSは[Sass](https://sass-lang.com/)で記述されており、拡張コードを書き加えることによりカスタマイズすることができます(通常Bootstrapのライブラリソースコードを書き換える必要はありません)。

このチュートリアルは[pug](https://pugjs.org/)で記述し、[node.js](https://pugjs.org/)上の[npm](https://npmjs.org/)でビルドしています。ソースコードは[GitHub](https://github.com/)、サイトは[GitHub Pages](https://pages.github.com/)で公開しています。

## Sassの学習

Bootstrapのカスタマイズには[Sass](https://sass-lang.com/)の知識が必要ですが、BootstrapのソースコードはSassを学ぶための良い教材にもなります。コードを読みドキュメントを参照しながら自然にSassを学習することができます。

Sassは始めRubyで作られましたが、その後様々な環境や言語へ移植されています([Wikipedia](https://ja.wikipedia.org/wiki/Sass)を参照)。公式サイトが扱う実装も[Ruby](https://sass-lang.com/ruby-sass)、[C++](https://sass-lang.com/libsass)、[Dart](https://sass-lang.com/dart-sass)の3種類あります。

Sassの主要な公開ドキュメントは次の通りです。実装はたくさん種類がありますが言語仕様の詳しい解説はRuby版しかありません。ただし基本的な言語仕様に違いはないのでRuby版ドキュメントを読めば理解できます。

* [Sassリファレンス](https://sass-lang.com/documentation/file.SASS_REFERENCE.html) (Ruby Sass用、文法と組み込み関数の詳しい解説はここのみ)
    * [組み込み関数](https://sass-lang.com/documentation/Sass/Script/Functions.html)
    * コマンドラインリファレンスは`sass --help`で確認すること(ドキュメントなし)
* [libsass](https://github.com/sass/libsass) (C++実装)
    * [node-sass](https://github.com/sass/node-sass) (libsassのnode.js用インターフェース、本チュートリアルで使用)
        * [node-sass CLI (コマンドラインオプション)](https://github.com/sass/node-sass#command-line-interface)
* [Wikipedia: Sass](https://ja.wikipedia.org/wiki/Sass)
