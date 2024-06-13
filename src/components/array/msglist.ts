function msglist() {
  const msgImage = [
    {
      name: "12指腸",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/12指腸_サイト用.webp",
    },
    {
      name: "13bird",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/13bird_サイト用.webp",
    },
    {
      name: "atforce",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/atforce_サイト用.webp",
    },
    {
      name: "chikin",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/chikin_サイト用.webp",
    },
    {
      name: "Cynops",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/Cynops_サイト用.webp",
    },
    {
      name: "DesperateSkeleton",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/DesperateSkeleton_サイト用.webp",
    },
    {
      name: "Hikomuro",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/Hikomuro_サイト用.webp",
    },
    {
      name: "KAZUN",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/KAZUN_サイト用.webp",
    },
    {
      name: "KYO",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/KYO_サイト用.webp",
    },
    {
      name: "Niharu",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/Niharu_サイト用.webp",
    },
    {
      name: "Theory",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/Theory_サイト用.webp",
    },
    {
      name: "wahoo",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/wahoo_サイト用.webp",
    },
    {
      name: "あませ みはり",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/あませ_みはり_サイト用.webp",
    },
    {
      name: "おしぼり",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/おしぼり_サイト用.webp",
    },
    {
      name: "からあげステーキハンバーグ定食",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/からあげステーキハンバーグ定食_サイト用.webp",
    },
    {
      name: "きと",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/きと_サイト用.webp",
    },
    {
      name: "きとちん",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/きとちん‗サイト用.webp",
    },
    {
      name: "きま",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/きま_サイト用.webp",
    },
    {
      name: "げつΩ",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/げつΩ_サイト用.webp",
    },
    {
      name: "ゴラニ",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/ゴラニ_サイト用.webp",
    },
    {
      name: "さがみぃ",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/さがみぃ_サイト用.webp",
    },
    {
      name: "ざわざわ",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/ざわざわ_サイト用.webp",
    },
    {
      name: "しゃふの植杉",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/しゃふの植杉_サイト用.webp",
    },
    {
      name: "スミス",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/スミス_サイト用.webp",
    },
    {
      name: "タクまんじゅうの天ぷら",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/タクまんじゅうの天ぷら_サイト用.webp",
    },
    {
      name: "たでぃ",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/たでぃ_サイト用.webp",
    },
    {
      name: "たまきゅー",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/たまきゅー_サイト用.webp",
    },
    {
      name: "ちなり",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/ちなり_サイト用.webp",
    },
    {
      name: "トーヤ",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/トーヤ_サイト用.webp",
    },
    {
      name: "とかちん",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/とかちん_サイト用.webp",
    },
    {
      name: "どくろ9号",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/どくろ9号_サイト用.webp",
    },
    {
      name: "なおけさ",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/なおけさ_サイト用.webp",
    },
    {
      name: "なごみみかん",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/なごみみかん_サイト用.webp",
    },
    {
      name: "にゃっぴー",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/にゃっぴー_サイト用.webp",
    },
    {
      name: "ぱっくん",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/ぱっくん_サイト用.webp",
    },
    {
      name: "ばれりあ",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/ばれりあ_サイト用.webp",
    },
    {
      name: "ヒデ",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/ヒデ_サイト用.webp",
    },
    {
      name: "ピポ モリナガ",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/ピポ_モリナガ_サイト用.webp",
    },
    {
      name: "ぷっちょ",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/ぷっちょ_サイト用.webp",
    },
    {
      name: "ブラボー和尚",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/ブラボー和尚_サイト用.webp",
    },
    {
      name: "まおれー",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/まおれー_サイト用.webp",
    },
    {
      name: "マグロ",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/マグロ_サイト用.webp",
    },
    {
      name: "みやけ",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/みやけ_サイト用.webp",
    },
    {
      name: "もこもけ",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/もこもけ_サイト用.webp",
    },
    {
      name: "もてぃお",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/もてぃお_サイト用.webp",
    },
    {
      name: "ゆきんこ",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/ゆきんこ_サイト用.webp",
    },
    {
      name: "よりしろ",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/よりしろ_サイト用.webp",
    },
    {
      name: "らぴす",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/らぴす_サイト用.webp",
    },
    {
      name: "りく",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/りく_サイト用.webp",
    },
    {
      name: "リュウ",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/リュウ_サイト用.webp",
    },
    {
      name: "永劫回帰",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/永劫回帰_サイト用.webp",
    },
    {
      name: "夏影なお",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/夏影なお_サイト用.webp",
    },
    {
      name: "暇人のへちま",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/暇人のへちま_サイト用.webp",
    },
    {
      name: "犬神 じゅしわん",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/犬神_じゅしわん_サイト用.webp",
    },
    {
      name: "賢宮瑞希",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/賢宮瑞希_サイト用.webp",
    },
    {
      name: "山内ナッツ",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/山内ナッツ_サイト用.webp",
    },
    {
      name: "趣味優先人",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/趣味優先人_サイト用.webp",
    },
    {
      name: "赤砂糖",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/赤砂糖_サイト用.webp",
    },
    {
      name: "草彅健太",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/草彅健太_サイト用.webp",
    },
    {
      name: "不知火エンキ",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/不知火エンキ_サイト用.webp",
    },
    {
      name: "野菜とお肉",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/野菜とお肉_サイト用.webp",
    },
    {
      name: "侑サブろぽーと",
      icon: "img/icon/popopiyo.webp",
      img: "img/message/侑サブろぽーと_サイト用.webp",
    },
  ];
  return msgImage;
}
export default msglist;
