# SwipeTalk マニュアル

## 環境について

このリポジトリ（manual_swipeTalk_test）は**テスト環境**です。

## デプロイフロー

```
テスト環境（manual_swipeTalk_test）
    ↓ 動作確認・修正
    ↓ 完成
    ├→ HubSpot へコピー＆デプロイ
    └→ 各childリポジトリへコピー＆更新
```

### 1. テスト環境で開発・確認

このリポジトリ（manual_swipeTalk_test）で以下を行います：
- マニュアルの更新・修正
- 動作確認
- 最終調整

### 2. 完成後の展開

テスト環境で内容が固まったら、以下の2箇所へコピーしてデプロイします：

#### HubSpotへのデプロイ
- `index-hubl.html` をHubSpotへコピー
- 本番環境として公開

#### childリポジトリの更新
- 各childリポジトリへ最新版をコピー
- 各環境を最新状態に同期

## テスト環境URL

https://melbridge-dev.github.io/manual_swipeTalk_test/

## ファイル構成

- `index.html` - GitHub Pages用のマニュアル
- `index-hubl.html` - HubSpot用のマニュアル（HubL対応）
- `404.html` - SPAルーティング用リダイレクト
- `js/` - JavaScriptファイル
- `css/` - スタイルシート
