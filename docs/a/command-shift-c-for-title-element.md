---
title: ⌘+Shift+C でタイトルタグの内容を取得するようにしたら仕事が捗る
description: 
date: 2016-12-12
---
企業名やサービス名を使うときは、なるべく正式名称を使用するようにしている。
チャット中でもいつでも。

パソコンの場合は、公式サイトのタイトルタグから取得するというのがもっとも手っ取り早いのではないかと思っている。
（もちろん正式にブランドガイドラインがある場合はそちらを見るのだけど、さすがにメッセージを送る程度のときにわざわざ確認できない）

いままではブラウザからHTMLのソースを表示して手動でタイトルタグの内容をコピーしていたけど、かねてから使用しているGoogle Chromeの[Create Linkという拡張機能](https://chrome.google.com/webstore/detail/create-link/gcmghdmnkfdbncmnmlkkglmnnhagajbm)を使うことにした。


> Name: Title Only
> Format: %title%

こんな感じで設定してあげると良い。

その後、Default Format に [Title Only] を指定したうえで
Configure shortcutで、Google Chromeのデフォルトのショートカットに登録する

![Create Link Settings](/images/create-link-large.png)

Current tab in default format のところで ⌘+Shift+C を設定する。


このようにしておくと、開いているタブのなにも文字列を選択していない状態で、⌘+Shift+C をすればクリップボードのなかにタイトルタグの内容がコピーされる。

これでなにかのサービス名を書くときは、公式サイトにいくだけで良くなった。
