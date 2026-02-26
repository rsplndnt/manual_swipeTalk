
// バージョン表示範囲（この範囲内のバージョンのみ表示）
const VERSION_RANGE = { min: "1.0", max: "1.2" };

// 全バージョンの新着情報データ
const _allWhatsNewData = [
  {
    date: "2025-02-15",
    version: "1.2",
    title: "バージョン1.2の新機能と改善",
    modalTitle: "新バージョンがリリースされました",
    manualTitle: "バージョン1.2",
    contents: [
      {
        heading: "キーボード入力モードの追加",
        text: "音声入力に加え、キーボードからテキストを入力してしゃべり描きができるようになりました。設定から入力方式をキーボード入力に切り替えて使用します。",
        image: "https://lp.melbridge.mitsubishielectric.co.jp/hubfs/images/manual/swipeTalk/img-usage-swipetalk-keyboard-1.jpg",
        link: "/use-swipe-talk"
      },
      {
        heading: "キャンバス画像の保存機能",
        text: "シート管理エリアから、開いているシートのキャンバスエリアをPNG画像として保存できるようになりました。",
        image: "https://lp.melbridge.mitsubishielectric.co.jp/hubfs/images/manual/swipeTalk/img-usage-export-1.png",
        link: "/export-canvas"
      },
      {
        heading: "設定メニューの追加",
        text: "しゃべり描きの入力方式（音声入力／キーボード入力）や文字サイズを設定画面から変更できるようになりました。",
        link: "/screen-layout"
      },
      {
        heading: "トランスクリプトの吹き出し区切り操作",
        text: "発話内容が長い場合、一呼吸置くか、マイクボタンをダブルクリック・ダブルタップすることで、吹き出しを区切って翻訳できるようになりました。",
        link: "/use-transcript"
      },
      {
        heading: "しゃべり描き文字の編集機能",
        text: "キャンバス上のしゃべり描き文字をダブルタップしてテキストを直接編集できるようになりました。編集後、翻訳文・折り返し翻訳文も自動で更新されます。",
        link: "/edit-elements"
      },
      {
        heading: "トランスクリプトCSV保存機能",
        text: "トランスクリプトの内容をCSV UTF-8形式で書き出し、ブラウザのダウンロード機能で保存できるようになりました。",
        link: "/export-canvas"
      },
      {
        heading: "画像ストレージ上限の通知",
        text: "画像の枚数が増えてストレージがいっぱいになった場合、通知が表示されるようになりました。シートから画像を削除するとストレージが空き、新しい画像を貼り付けられます。"
      },
      {
        heading: "音声入力非対応言語の明示",
        text: "一部の言語が音声入力に対応していない旨を、言語選択画面に明示しました。対応言語は製品仕様の翻訳言語一覧をご確認ください。"
      }
    ]
  },
  {
    date: "2026-01-12",
    version: "1.1",
    title: "バージョン1.1の改善",
    modalTitle: "",
    manualTitle: "バージョン1.1",
    contents: [
      {
        heading: "安定性の向上",
        text: "アプリケーションの安定性を向上させました。"
      }
    ]
  },
  {
    date: "2025-10-01",
    version: "1.0",
    title: "初版リリース",
    modalTitle: "",
    manualTitle: "バージョン1.0",
    contents: [
      {
        heading: "初版リリース",
        text: "しゃべり描き翻訳をリリースしました。"
      }
    ]
  }
];

// VERSION_RANGEでフィルタリングされたデータ
const whatsNewData = _allWhatsNewData.filter(item => {
  const v = parseFloat(item.version);
  return v >= parseFloat(VERSION_RANGE.min) && v <= parseFloat(VERSION_RANGE.max);
});

// ページネーション設定
const ITEMS_PER_PAGE = 5;
