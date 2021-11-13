---
title: '".blog"ドメインとCloudflare'
description: 
date: 2016-11-27
---
::: warning
この記事は以前の環境の内容です。
:::

.blogドメインはWordPress.comを提供する Automattic, Inc. が管理しているドメインです。
[.blogドメインの取得（get.blog）](https://get.blog/ja/)

ドメインをサーバーに割り当てるネームサーバーは [Cloudflare](https://www.cloudflare.com/) を使用。

ブログサービスはとりあえず（独自ドメインが無料で割り当てられる） livedoor Blog を選択したので、CNAMEレコードで `www` (`www.kohji.blog`) を `blog-01.livedoor.jp` に設定。
livedoor Blog側で wwwありのURLを、 wwwなしへの転送設定をし、完了。
