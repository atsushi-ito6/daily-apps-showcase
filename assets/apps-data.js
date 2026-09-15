/*
 * Central app registry for this site.
 * Add a new app by appending an object here (and its icon/screenshots under assets/) —
 * index.html and app.html both render from this list, so no markup changes are needed.
 *
 * tagline / spotlight.title: "\n" marks the preferred line break in large headings.
 * stack: the layered device visual on the top page and detail hero
 *   (main phone, optional back phone and Apple Watch).
 * highlights (optional): the detail page's feature showcase — one row per selling point with a
 *   short catchphrase (title), lead text, points ("text" or { label, text }), an optional note,
 *   and a visual: { type: "phone", src, alt } | { type: "duo", phone, watch } | { type: "keep-going" }.
 *   label is the short name used for the top page chips and the in-page index; dark: true
 *   renders the row on a dark card.
 * features: [{ title, text }] — simple feature cards, used when an app has no highlights.
 * premium (optional): heading, text, and plan types shown above the free/premium comparison.
 * screenshots: iPhone screenshots by default; frame: "watch" draws an Apple Watch screenshot
 *   at its real size relative to the iPhone ones. placeholder entries are kept for planning
 *   but not rendered.
 */
window.APPS = [
  {
    id: "habit",
    name: "習慣アプリ",
    tagline: "小さな「できた」を、\n毎日の習慣に。",
    shortDescription: "毎日の習慣を記録して、続ける力を可視化するアプリ。回数や時間での記録、AIによる振り返り、iCloudへの自動バックアップにも対応しています。",
    description: "続けたいことを、少しずつ。週間グリッドで実施状況を管理し、レポートで振り返り、ホーム画面ウィジェットやApple Watchで進捗をすぐ確認できます。回数や時間で記録できる習慣、AIによる月の振り返り、iCloudへの自動バックアップにも対応しています。",
    icon: "assets/habit-icon.png",
    accent: "habit",
    status: "preparing",
    platforms: ["iPhone", "Apple Watch"],
    storeUrl: null,
    privacyUrl: "https://atsushi-ito6.github.io/habit-tracker-privacy/",
    supportUrl: null,
    stack: {
      main: "assets/habit-01_home.png",
      back: "assets/habit-03_report.png",
      watch: "assets/habit-05_watch.png"
    },
    highlights: [
      {
        label: "見やすさを自分好みに",
        eyebrow: "Home",
        title: "見やすさは、\n自分で決める。",
        text: "毎日開くホーム画面だから、文字サイズやカレンダーの表示まで、自分にちょうどいい見た目に整えられます。",
        points: [
          "文字サイズは「小・標準・大」の3段階",
          "表示する日数は1〜7日。今日を何列目に置くかも選べる",
          "カテゴリ別・時間帯別・気分別のグループ表示や、区切り線で自由に整理",
          "連続記録やタグを表示するかどうかも切り替えられる"
        ],
        visual: {
          type: "phone",
          src: "assets/habit-01_home.png",
          alt: "習慣アプリのホーム画面。カテゴリごとに並んだ習慣の実施状況が曜日ごとに一覧表示されている"
        }
      },
      {
        label: "お休み券・スキップ・メモ",
        eyebrow: "Keep going",
        title: "休む日があっても、\n途切れない。",
        text: "体調を崩した日も、旅行や出張の日も。習慣が途切れやすい場面に、ちゃんと仕組みを用意しました。",
        points: [
          {
            label: "お休み券",
            text: "最初の達成で1枚、その後は10回達成するごとに1枚もらえます（最大5枚）。できなかった日は自動で使われ、連続記録を守ります。"
          },
          {
            label: "スキップ",
            text: "予定がない日は前もってスキップ。その日は達成率や連続記録の対象外になります。"
          },
          {
            label: "日別メモ",
            text: "その日のメモに加えて、「時間がなかった」「体調が悪かった」など、できなかった理由も記録できます。"
          }
        ],
        visual: { type: "keep-going" }
      },
      {
        label: "回数・時間でも記録",
        eyebrow: "Daily count / Minutes",
        title: "「水を8杯」も、\n「読書30分」も。",
        text: "1日1回のチェックだけじゃない。回数や時間でも記録できるので、水分補給や読書のような習慣も、そのまま管理できます。",
        points: [
          "1日の目標回数は2〜20回から選べ、マスをタップするたびに数える（多く押しても長押しで直せる）",
          "1日の目標時間は5分〜3時間から選べ、タップするたびに時間を積み上げる",
          "目標に届いた日だけ達成としてカウントし、連続記録やレポートにそのまま反映される",
          "無料版でも利用できます"
        ],
        visual: {
          type: "phone",
          src: "assets/habit-02_detail.png",
          alt: "習慣アプリの詳細画面。目標に対する進み具合が表示されている"
        }
      },
      {
        label: "習慣ごとの詳細",
        eyebrow: "Habit detail",
        title: "ひとつの習慣を、\nじっくり見返す。",
        text: "習慣の詳細画面では、お休み券やスキップ、メモの記録まで、その習慣の歩みをまとめて確認できます。",
        points: [
          "現在の連続記録と、自己ベストの更新がひと目でわかる",
          "お休み券の残り枚数と、次の券までの達成回数",
          "お休み券を使った日やスキップした日を、カレンダーで色分け表示",
          "月間達成率と、その月に残したメモの一覧"
        ],
        visual: {
          type: "phone",
          src: "assets/habit-02_detail.png",
          alt: "習慣アプリの詳細画面。連続記録、お休み券の枚数、月間達成率、月間カレンダーが表示されている"
        }
      },
      {
        label: "多角的なレポート",
        eyebrow: "Report",
        title: "振り返りは、\nいろんな角度から。",
        text: "記録して終わりにしない。達成率の推移から苦手な曜日、できなかった理由まで、さまざまな視点で自分の習慣を振り返れます。",
        points: [
          "全期間・年・月ごとの達成率と推移グラフ",
          "曜日別の達成率や、習慣ごとの苦手な曜日",
          "先月・前年から伸びた習慣／落ちた習慣",
          "できなかった理由や、お休み券・スキップを使った習慣の集計",
          "カテゴリ別・時間帯別の達成率ランキング",
          "月・年ごとに気分とメモで振り返り、満足度の推移も確認",
          "対応端末では、AI（Apple Intelligence）が振り返り文を自然な文章でまとめ直す。処理は端末内で行われ、外部には送信されない",
          "見られる期間の振り返りは、コピー・共有・画像として書き出せる"
        ],
        note: "今月・先月の達成率とカレンダー、振り返り文、共有は無料で利用できます。グラフや詳しい分析、ランキング、それ以前の月・年の振り返りはプレミアムで利用できます。",
        visual: {
          type: "phone",
          src: "assets/habit-03_report.png",
          alt: "習慣アプリのレポート画面。全期間の達成率、年別実績、年別達成率の推移グラフが表示されている"
        }
      },
      {
        label: "ウィジェットとSiri",
        eyebrow: "Widget & Siri",
        title: "アプリを開く前に、\n今日の習慣が目に入る。",
        text: "iPhoneを手に取るたびに、今日やることが自然と目に入る。ホーム画面・ロック画面のウィジェットや、Siri・ショートカットで、やり忘れを防ぎます。",
        points: [
          {
            label: "今日の習慣",
            text: "今日の予定と完了状況をまとめて表示。"
          },
          {
            label: "今日の未完了の習慣",
            text: "まだ終わっていない習慣だけを表示して、やり忘れを防止。"
          },
          {
            label: "習慣カレンダー",
            text: "直近数日の記録をカレンダー形式で表示し、続き具合をひと目で。"
          },
          {
            label: "ロック画面ウィジェット",
            text: "残りの件数と、次にやる習慣をロック画面でひと目で確認。無料で利用できます。"
          },
          {
            label: "Siri・ショートカット",
            text: "「今日の習慣を教えて」「〜を完了にする」と話しかけるだけで、アプリを開かずに確認・記録できます。無料で利用できます。"
          }
        ],
        note: "ホーム画面ウィジェットのサイズは小・中・大から選べます（習慣カレンダーは中・大。大サイズはプレミアム）。",
        visual: {
          type: "phone",
          src: "assets/habit-04_widget.jpg",
          alt: "ホーム画面に置いた習慣アプリのウィジェット。カテゴリごとに習慣の4日分の実施状況が表示されている"
        }
      },
      {
        label: "Apple Watch対応",
        eyebrow: "Apple Watch",
        title: "今日の分は、\n手首でチェック。",
        text: "Apple Watchに今日の習慣が並び、タップするだけで完了に。iPhoneを取り出さなくても、その場で記録できます。",
        points: [
          "今日の習慣を一覧で表示、タップで完了・取り消し",
          "記録はiPhoneと同期",
          "文字盤のコンプリケーションで、今日の達成数を表示"
        ],
        dark: true,
        visual: {
          type: "duo",
          phone: {
            src: "assets/habit-01_home.png",
            alt: "iPhoneの習慣アプリのホーム画面"
          },
          watch: {
            src: "assets/habit-05_watch.png",
            alt: "Apple Watchの習慣アプリ。今日の習慣がチェックリストで表示されている"
          }
        }
      },
      {
        label: "こだわりの設定",
        eyebrow: "Settings",
        title: "細かいところまで、\n自分仕様に。",
        text: "毎日使うものだからこそ、表示・通知・セキュリティまで細かくこだわりました。",
        points: [
          {
            label: "表示",
            text: "テーマ（ライト・ダーク・自動）や言語（日本語・English）、レポートに表示するセクションまで選べます。"
          },
          {
            label: "通知",
            text: "習慣ごとの通知時刻に加えて、月・年の振り返りのタイミングも通知で知らせてくれます。"
          },
          {
            label: "セキュリティ",
            text: "生体認証でアプリをロックして、大切な記録を守れます。"
          },
          {
            label: "データ",
            text: "バックアップの書き出し・復元、履歴のCSV書き出し、習慣一覧のテキストコピーに対応。復元は無料版でも利用できます。"
          },
          {
            label: "iCloud自動バックアップ",
            text: "プレミアムなら、習慣・記録・日別メモ・振り返りをiCloudへ自動でバックアップ。機種変更やアプリの入れ直しのときは、復元の案内が表示されます。"
          }
        ],
        note: "レポートの表示セクションの変更はプレミアムで利用できます。iCloudからの復元は無料版でも行えます。",
        visual: {
          type: "phone",
          src: "assets/habit-06_settings.png",
          alt: "習慣アプリの設定画面。表示・通知・プライバシー・データの項目が並んでいる"
        }
      }
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
    premium: {
      title: "もっと続けたくなる、\nプレミアム。",
      text: "習慣の記録やお休み券、ウィジェット、Apple Watchなどの基本機能は無料で使えます。プレミアムにすると広告がなくなり、習慣を好きなだけ登録でき、過去のレポートや詳しい分析まで使えるようになります。",
      plans: [
        { name: "月額プラン", text: "月280円。毎月自動で更新されるサブスクリプション" },
        { name: "年額プラン", text: "年1,480円。1年ごとに自動で更新されるサブスクリプション" },
        { name: "買い切り", text: "2,980円の一度の支払いで、ずっと使い続けられる" }
      ]
    },
    pricing: {
      free: [
        "習慣を5個まで登録（毎週の習慣）",
        "週間グリッド・お休み券・スキップ・日別メモ",
        "回数・時間で記録する習慣（1日N回・何分）",
        "今月・先月の達成率とカレンダー、AIによる振り返り文",
        "レポートのコピー・共有・画像での共有（見られる期間のもの）",
        "ウィジェット（小・中サイズ）、ロック画面ウィジェット、Siri・ショートカット",
        "Apple Watch",
        "バックアップの書き出し・復元（iCloudからの復元も含む）",
        "広告が表示されます"
      ],
      premium: [
        "広告を非表示にできる",
        "習慣の登録数が無制限になる",
        "毎月・毎年の習慣を追加できる",
        "過去のレポートや詳しい分析が見られる",
        "レポートのカードを並べ替え・非表示にできる",
        "ウィジェットの大サイズが使える",
        "アプリアイコンにバッジを表示できる",
        "カテゴリ・時間帯を追加・並べ替えできる",
        "iCloudに自動でバックアップできる",
        "共有カードのすべてのテーマ・スタンプが使える"
      ],
      note: "月額280円・年額1,480円・買い切り2,980円（2026年9月時点）。最新の料金はアプリ内の購入画面でご確認ください。"
    }
  },
  {
    id: "goal",
    name: "目標アプリ",
    tagline: "かなえたいことに、\n一歩ずつ近づく。",
    shortDescription: "座右の銘から今年の目標まで、カードで一覧管理するアプリ。数値目標の進み具合や、週・月・年・人生の振り返りにも対応しています。",
    description: "これからの自分に、目指すものを。座右の銘・人生・今年の目標などをカードで整理し、数値目標で進み具合を見える化。週・月・年・人生の振り返りと、AIによる要約・来月の目標案、iCloudへの自動バックアップで、目標に向かう日々を応援します。",
    icon: "assets/goal-icon.png",
    accent: "goal",
    status: "preparing",
    platforms: ["iPhone"],
    storeUrl: null,
    privacyUrl: "https://atsushi-ito6.github.io/goal-tracker-privacy/",
    supportUrl: null,
    stack: {
      main: "assets/goal-01_list.png"
    },
    features: [
      {
        title: "目標をカードで一覧",
        text: "座右の銘から人生・今年・今月の目標まで、カテゴリーごとのカードで整理できます。"
      },
      {
        title: "数字で測る目標と進み具合",
        text: "目標に数値目標（回数・冊数・kmなど）を設定すると、進み具合がひと目で分かり、振り返りでは達成状況が自動で入ります。"
      },
      {
        title: "週・月・年・人生の振り返り",
        text: "週ごと・月ごと・年ごとの振り返りに加えて、人生の目標の振り返りもできます。振り返りたいタイミングで、必要な単位を選べます。"
      },
      {
        title: "AIによる要約と来月の目標案",
        text: "対応端末では、月の振り返りをAI（Apple Intelligence）が要約し、来月の目標案も提示します。処理は端末内で行われ、外部には送信されません。"
      },
      {
        title: "自由にカスタマイズ",
        text: "カードのスタイルやフォントを、好みに合わせて変えられます（エレガント・和紙・メモ帳などのスタイルはプレミアム）。"
      },
      {
        title: "ウィジェット対応",
        text: "ロック画面・ホーム画面のウィジェットで、目標と進捗をいつでも目にできます。ホーム画面ウィジェットは小・中サイズが無料、大サイズはプレミアムです。"
      },
      {
        title: "iCloud自動バックアップ",
        text: "プレミアムなら、目標・振り返りをiCloudへ自動でバックアップ。機種変更やアプリの入れ直しのときは、復元の案内が表示されます（復元は無料版でも利用できます）。"
      }
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
    premium: {
      title: "もっと使いこなす、\nプレミアム。",
      text: "カードでの一覧管理や数値目標、週・月・年の振り返り、AIによる要約などの基本機能は無料で使えます。プレミアムにすると広告がなくなり、目標を好きなだけ登録でき、振り返り履歴やすべてのカードスタイルまで使えるようになります。",
      plans: [
        { name: "月額プラン", text: "月280円。毎月自動で更新されるサブスクリプション" },
        { name: "年額プラン", text: "年1,480円。7日間の無料お試し付き。1年ごとに自動で更新されるサブスクリプション" },
        { name: "買い切り", text: "2,980円の一度の支払いで、ずっと使い続けられる" }
      ]
    },
    pricing: {
      free: [
        "座右の銘・人生の目標を各1件まで登録",
        "年・月の目標を、時期ごとに3件まで登録",
        "数値目標と進み具合の表示",
        "週・月の振り返り、直近の年次振り返り",
        "見られる期間の振り返りは、カードとして共有できる",
        "AIによる要約と来月の目標案（対応端末）",
        "ウィジェット（小・中サイズ）",
        "バックアップの書き出し・復元（iCloudからの復元も含む）",
        "広告が表示されます"
      ],
      premium: [
        "広告を非表示にできる",
        "年・月の目標の登録数が無制限になる",
        "人生の目標・大切な言葉が無制限に登録できる",
        "過去の年・人生の振り返りを閲覧できる",
        "振り返り履歴を無制限に閲覧できる",
        "カテゴリー別の達成率ランキングが見られる",
        "振り返り履歴のカードを並べ替え・非表示にできる",
        "読み返し・振り返り通知が使える",
        "ウィジェットの大サイズが使える",
        "アプリアイコンにバッジを表示できる",
        "カテゴリーを追加・並べ替えできる（カテゴリー管理）",
        "iCloudに自動でバックアップできる",
        "すべてのスタイルが使える（エレガント・和紙・メモ帳など）"
      ],
      note: "月額280円・年額1,480円（7日間無料お試し）・買い切り2,980円（2026年9月時点）。最新の料金はアプリ内の購入画面でご確認ください。"
    }
  }
];
