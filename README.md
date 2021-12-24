# kohji.blog

[VuePress](https://v2.vuepress.vuejs.org/) で作成し Vercel で運用する

## 記事の作成

`docs` 以下に `.md` ファイルを作成する

完成したら `git commit` し GitHub リポジトリに push する

### GitHub で直接編集

GitHub の記事編集用のリポジトリで編集し Pull Request を送ってもよい

## 記事のデプロイ

GitHub の `main` ブランチに push されたら Vercel が自動的に `vuepress build docs` し公開される
