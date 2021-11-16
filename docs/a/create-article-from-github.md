---
title: GitHub から更新する手順
description: 
date: 2021-11-16
---
こんにちは。[コワーキングスペース茅場町 Co-Edo](https://www.coworking.tokyo.jp/) の [田中弘治](https://twitter.com/ktanaka) です。
そんなわけで [VuePress v2](https://v2.vuepress.vuejs.org/) + [Vite](https://vitejs.dev/) + [Vercel](https://vercel.com/) なブログになりました。

VuePress は Vue.js でできているブログで SSG （静的ページ生成）の機能により、静的ファイルを書き出してくれ非常に高速に動作します。
ページ生成は GitHub への Push をきっかけに Vercel が `vuepress build docs` し、全記事ページのファイルが `docs/.vuepress/dist` に書き出されます。

ということは。

**記事の更新は GitHub から可能** ということです。

## GitHub から更新する手順

あらかじめ `github` ブランチを作成し GitHub に Push しています。

### Add file

`github` ブランチの [`/docs/a/`](https://github.com/monsat/kohji.blog/new/github/docs/a) フォルダで [ Add file ] - [ Create new file ] します。
ファイル名 `[slug].md` で Markdown ファイルを作成します。

### 記事編集後

GitHub は新規ファイルの保存コミットが Web 上で可能ですので、コミットメッセージを書きます。

`Create a new branch for this commit and start a pull request.` を選択し [ Commit new file ] ボタンでコミット（保存）します。

### Pull Request をマージする

#### `dev` ブランチにマージする

あとで Mac 上のリポジトリにマージするために、一旦 `dev` ブランチにマージします。

#### `main` ブランチにマージする

プレビュー環境で確認し問題なければ `main` ブランチにマージします。

しばらくすると本番環境の [kohji.blog](https://kohji.blog/) が更新されるでしょう。

## GitHub から更新できるのは気分が楽

いざというとき :octocat: GitHub から更新できることを知っていれば、気が楽になると思う。
