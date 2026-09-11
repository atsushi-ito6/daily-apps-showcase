/*
 * Central app registry for this site.
 * Add a new app by appending an object here (and its icon/screenshots under assets/) —
 * index.html and app.html both render from this list, so no markup changes are needed.
 */
window.APPS = [
  {
    id: "habit",
    name: "習慣アプリ",
    tagline: "小さな「できた」を、毎日の習慣に。",
    shortDescription: "毎日の習慣を記録して、続ける力を可視化するアプリ。",
    description: "続けたいことを、少しずつ。週間グリッドで実施状況を管理し、ホーム画面ウィジェットで進捗をすぐ確認できます。",
    icon: "assets/habit-icon.png",
    accent: "habit",
    status: "developing",
    storeUrl: null,
    privacyUrl: "https://atsushi-ito6.github.io/habit-tracker-privacy/",
    supportUrl: null,
    features: [
      "週間グリッドで習慣の継続日数がひと目でわかる",
      "朝・昼・夕方などの時間帯でグループ分けして管理できる",
      "ホーム画面ウィジェットで今日の進捗をすぐ確認",
      "生体認証によるアプリロックに対応"
    ],
    screenshots: [
      {
        src: "assets/habit-01_home5.png",
        alt: "習慣アプリのホーム画面。曜日ごとの実施状況が一覧表示されている",
        caption: "曜日ごとの実施状況を、色分けされたチェックで一覧管理できます。"
      },
      {
        src: "assets/habit-06_groups.png",
        alt: "習慣アプリのホーム画面。朝・昼・夕方の時間帯でグループ分けされている",
        caption: "朝・昼・夕方など、時間帯でグループ分けして表示できます。"
      },
      {
        src: "assets/habit-02_detail.png",
        alt: "習慣アプリの詳細画面。連続日数と月間カレンダーが表示されている",
        caption: "習慣ごとに連続日数と月間カレンダーで振り返ることができます。"
      },
      {
        src: "assets/habit-04_widget.jpg",
        alt: "ホーム画面に置いた習慣アプリのウィジェット",
        caption: "ホーム画面ウィジェットを置くと、アプリを開かずに実施状況を確認できます。"
      },
      {
        src: "assets/habit-05_settings.png",
        alt: "習慣アプリの設定画面",
        caption: "表示日数やテーマ、生体認証ロックなど、使い方に合わせて設定できます。"
      },
      {
        src: "assets/habit-03_premium.png",
        alt: "習慣アプリのプレミアムプラン紹介画面",
        caption: "プレミアムプランの内容を確認できる画面です（詳細は下記「無料・有料機能」を参照）。"
      }
    ],
    pricing: {
      free: [
        "習慣の記録・週間グリッド表示",
        "広告が表示されます"
      ],
      premium: [
        "広告を非表示にできる",
        "習慣の登録数が無制限になる",
        "毎月・毎年の習慣を追加できる",
        "アプリアイコンにバッジを表示できる",
        "ウィジェットの中・大サイズが使える",
        "バックアップの復元ができる"
      ],
      plans: [
        "月額プレミアム",
        "年額プレミアム",
        "買い切りプレミアム（一度の支払いでずっと利用可能）"
      ],
      note: "価格・対応OSのバージョンなどは確認中です。正式な内容は公開時にご確認ください。"
    }
  },
  {
    id: "goal",
    name: "目標アプリ",
    tagline: "かなえたいことに、一歩ずつ近づく。",
    shortDescription: "座右の銘から今年の目標まで、カードで一覧管理するアプリ。",
    description: "これからの自分に、目指すものを。座右の銘・人生・今年の目標などをカードで整理し、目標に向かう日々を応援します。",
    icon: "assets/goal-icon.png",
    accent: "goal",
    status: "developing",
    storeUrl: null,
    privacyUrl: "https://atsushi-ito6.github.io/goal-tracker-privacy/",
    supportUrl: null,
    features: [
      "座右の銘や人生・今年の目標をカードで一覧管理",
      "カードのテーマやフォントを自由にカスタマイズ",
      "月次の振り返り機能で達成度を記録",
      "ロック画面・ホーム画面ウィジェットで進捗を表示"
    ],
    screenshots: [
      {
        src: "assets/goal-01_list.png",
        alt: "目標アプリの目標一覧画面。座右の銘、人生の目標、今年の目標がカードで表示されている",
        caption: "座右の銘や人生・今年の目標を、カテゴリーごとのカードで一覧管理できます。"
      },
      { placeholder: true, label: "月次振り返り画面" },
      { placeholder: true, label: "ホーム画面・ロック画面ウィジェット" },
      { placeholder: true, label: "設定画面" },
      { placeholder: true, label: "プレミアムプラン画面" }
    ],
    pricing: {
      free: [],
      premium: [],
      plans: [],
      note: "無料プランと有料プランを用意する予定ですが、具体的な機能・価格・対応OSのバージョンは確認中です。"
    }
  }
];
