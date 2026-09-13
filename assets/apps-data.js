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
    shortDescription: "毎日の習慣を記録して、続ける力を可視化するアプリ。Apple Watchにも対応しています。",
    description: "続けたいことを、少しずつ。週間グリッドで実施状況を管理し、レポートで振り返り、ホーム画面ウィジェットやApple Watchで進捗をすぐ確認できます。",
    icon: "assets/habit-icon.png",
    cardImage: {
      src: "assets/habit-01_home.png",
      alt: "習慣アプリの週間チェック一覧画面。カテゴリごとに並んだ習慣の実施状況が、曜日ごとに色分けされたチェックで表示されている"
    },
    accent: "habit",
    status: "preparing",
    storeUrl: null,
    privacyUrl: "https://atsushi-ito6.github.io/habit-tracker-privacy/",
    supportUrl: null,
    features: [
      "週間グリッドで習慣の実施状況と連続記録がひと目でわかる",
      "カテゴリや朝・昼・夜などの時間帯でグループ分けして管理できる",
      "レポートで全期間・年別の達成率や継続中の記録を振り返れる",
      "お休み券やスキップで、無理なく記録を続けられる",
      "ホーム画面ウィジェットで今日の進捗をすぐ確認",
      "Apple Watchに対応。手首から今日の習慣をチェックでき、記録はiPhoneと同期。文字盤のコンプリケーションで今日の達成数も確認できる",
      "生体認証によるアプリロックに対応"
    ],
    screenshots: [
      {
        src: "assets/habit-01_home.png",
        alt: "習慣アプリのホーム画面。カテゴリごとに並んだ習慣の実施状況が曜日ごとに一覧表示されている",
        caption: "曜日ごとの実施状況を、色分けされたチェックで一覧管理できます。カテゴリや時間帯でのグループ表示にも対応しています。"
      },
      {
        src: "assets/habit-02_detail.png",
        alt: "習慣アプリの詳細画面。連続記録、月間達成率、月間カレンダーが表示されている",
        caption: "習慣ごとに連続記録や月間達成率をカレンダーで振り返れます。日付を長押しするとメモも残せます。"
      },
      {
        src: "assets/habit-03_report.png",
        alt: "習慣アプリのレポート画面。全期間の達成率、年別実績、年別達成率の推移グラフが表示されている",
        caption: "全期間・年別の達成率や推移、継続中の記録をレポートでまとめて確認できます。"
      },
      {
        src: "assets/habit-04_widget.jpg",
        alt: "ホーム画面に置いた習慣アプリのウィジェット。カテゴリごとに習慣の4日分の実施状況が表示されている",
        caption: "ホーム画面ウィジェットを置くと、アプリを開かずに実施状況を確認できます。"
      },
      {
        src: "assets/habit-05_watch.png",
        frame: "watch",
        alt: "Apple Watchの習慣アプリ。今日の習慣がチェックリストで表示されている",
        caption: "Apple Watchから今日の習慣をチェックできます。記録はiPhoneと同期され、文字盤のコンプリケーションで達成数も確認できます。"
      },
      {
        src: "assets/habit-06_settings.png",
        alt: "習慣アプリの設定画面",
        caption: "表示日数や文字サイズ、テーマ、生体認証ロックなど、使い方に合わせて設定できます。"
      },
      {
        src: "assets/habit-07_premium.png",
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
        "過去のレポートや詳しい分析が見られる",
        "アプリアイコンにバッジを表示できる",
        "ウィジェットの大サイズが使える",
        "バックアップの復元ができる"
      ],
      note: "最新の料金はアプリ内の購入画面でご確認ください。"
    }
  },
  {
    id: "goal",
    name: "目標アプリ",
    tagline: "かなえたいことに、一歩ずつ近づく。",
    shortDescription: "座右の銘から今年の目標まで、カードで一覧管理するアプリ。",
    description: "これからの自分に、目指すものを。座右の銘・人生・今年の目標などをカードで整理し、目標に向かう日々を応援します。",
    icon: "assets/goal-icon.png",
    cardImage: {
      src: "assets/goal-01_list.png",
      alt: "目標アプリの目標一覧画面。座右の銘、人生の目標、今年の目標がカードで表示されている"
    },
    accent: "goal",
    status: "preparing",
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
      {
        placeholder: true,
        label: "目標の登録・編集画面",
        caption: "目標の追加や内容の編集ができる画面です。"
      },
      {
        placeholder: true,
        label: "期間の切り替え画面",
        caption: "表示する年や期間を切り替えられる画面です。"
      },
      {
        placeholder: true,
        label: "月次振り返り画面",
        caption: "月ごとに目標の達成度を振り返る画面です。"
      },
      {
        placeholder: true,
        label: "ホーム画面ウィジェット",
        caption: "ホーム画面に置いて目標の進捗を確認できます。"
      },
      {
        placeholder: true,
        label: "ロック画面ウィジェット",
        caption: "ロック画面に置いて目標の進捗を確認できます。"
      },
      {
        placeholder: true,
        label: "設定画面",
        caption: "表示のカスタマイズなどを行う設定画面です。"
      },
      {
        placeholder: true,
        label: "プレミアムプラン画面",
        caption: "プレミアムプランの内容を確認できる画面です。"
      }
    ],
    pricing: {
      free: [],
      premium: [],
      note: "最新の料金はアプリ内の購入画面でご確認ください。"
    }
  }
];
