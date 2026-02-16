
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
        text: "音声入力に加え、キーボードからテキストを入力してしゃべり描きができるようになりました。<span class=\"button-label\">設定</span>から入力方式を<span class=\"button-label\">キーボード入力</span>に切り替えて使用します。",
        image: "https://lp.melbridge.mitsubishielectric.co.jp/hubfs/images/manual/swipeTalk/img-update-keyboard-input.png",
        link: "/use-swipe-talk"
      },
      {
        heading: "テキストのみ消去できる消しゴム機能",
        text: "画像保護消しゴムを追加しました。写真や図面はそのまま残し、文字やお絵描きのみを選択的に消去できます。",
        image: "https://lp.melbridge.mitsubishielectric.co.jp/hubfs/images/manual/swipeTalk/img-update-eraser-protect.png",
        link: "/edit-elements"
      },
      {
        heading: "表示切替機能の追加",
        text: "キャンバスとトランスクリプトの表示モードを切り替えられるようになりました。並列表示・キャンバスのみ表示・トランスクリプトのみ表示の3モードから選択できます。",
        image: "https://lp.melbridge.mitsubishielectric.co.jp/hubfs/images/manual/swipeTalk/img-update-view-switch.png",
        link: "/canvas-area"
      },
      {
        heading: "シート管理の改善（100枚対応）",
        text: "保持できるシートの上限を10枚から100枚に拡張しました。100枚に達した場合、最終更新日が古いシートから非表示になります。",
        image: "https://lp.melbridge.mitsubishielectric.co.jp/hubfs/images/manual/swipeTalk/img-update-sheet-100.png",
        link: "/create-new-sheet"
      },
      {
        heading: "設定メニューの追加",
        text: "しゃべり描きの入力方式（音声入力／キーボード入力）や文字サイズを設定画面から変更できるようになりました。",
        image: "https://lp.melbridge.mitsubishielectric.co.jp/hubfs/images/manual/swipeTalk/img-update-settings.png",
        link: "/canvas-area"
      },
      {
        heading: "キャンバス画像の保存機能",
        text: "シート管理エリアから、開いているシートのキャンバスエリアをPNG画像として保存できるようになりました。",
        image: "https://lp.melbridge.mitsubishielectric.co.jp/hubfs/images/manual/swipeTalk/img-update-canvas-export.png",
        link: "/export-canvas"
      },
      {
        heading: "しゃべり描き文字の編集機能",
        text: "キャンバス上のしゃべり描き文字をダブルタップしてテキストを直接編集できるようになりました。編集後、翻訳文・折り返し翻訳文も自動で更新されます。",
        image: "https://lp.melbridge.mitsubishielectric.co.jp/hubfs/images/manual/swipeTalk/img-update-text-edit.png",
        link: "/edit-elements"
      },
      {
        heading: "画像ストレージ上限の通知",
        text: "画像の枚数が増えてストレージがいっぱいになった場合、通知が表示されるようになりました。シートから画像を削除するとストレージが空き、新しい画像を貼り付けられます。"
      },
      {
        heading: "トランスクリプトの吹き出し区切り操作",
        text: "発話内容が長い場合、一呼吸置くか、マイクボタンをダブルクリック・ダブルタップすることで、吹き出しを区切って翻訳できるようになりました。"
      },
      {
        heading: "音声入力非対応言語の明示",
        text: "一部の言語が音声入力に対応していない旨を、言語選択画面に明示しました。対応言語は製品仕様の翻訳言語一覧をご確認ください。",
        link: "/supported-languages"
      },
      {
        heading: "トランスクリプトCSV保存機能",
        text: "トランスクリプトの内容をCSV UTF-8形式で書き出し、ブラウザのダウンロード機能で保存できるようになりました。",
        link: "/export-canvas"
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
