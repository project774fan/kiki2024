function msglist() {
  const msgImage = [
    {
      name: "12指腸",
      icon: "img/message/icon/12指腸.webp",
      img: "img/message/12指腸_サイト用.webp",
    },
    {
      name: "13bird",
      icon: "img/message/icon/13bird.webp",
      img: "img/message/13bird_サイト用.webp",
    },
    {
      name: "atforce",
      icon: "img/message/icon/atforce.webp",
      img: "img/message/atforce_サイト用.webp",
    },
    {
      name: "chikin",
      icon: "img/message/icon/chikin.webp",
      img: "img/message/chikin_サイト用.webp",
    },
    {
      name: "Cynops",
      icon: "img/message/icon/Cynops.webp",
      img: "img/message/Cynops_サイト用.webp",
    },
    {
      name: "DesperateSkeleton",
      icon: "img/message/icon/DesperateSkeleton.webp",
      img: "img/message/DesperateSkeleton_サイト用.webp",
    },
    {
      name: "Hikomuro",
      icon: "img/message/icon/Hikomuro.webp",
      img: "img/message/Hikomuro_サイト用.webp",
    },
    {
      name: "KAZUN",
      icon: "img/message/icon/KAZUN.webp",
      img: "img/message/KAZUN_サイト用.webp",
    },
    {
      name: "KYO",
      icon: "img/message/icon/KYO.webp",
      img: "img/message/KYO_サイト用.webp",
    },
    {
      name: "Niharu",
      icon: "img/message/icon/Niharu.webp",
      img: "img/message/Niharu_サイト用.webp",
    },
    {
      name: "Theory",
      icon: "img/message/icon/Theory.webp",
      img: "img/message/Theory_サイト用.webp",
    },
    {
      name: "wahoo",
      icon: "img/message/icon/wahoo.webp",
      img: "img/message/wahoo_サイト用.webp",
    },

    {
      name: "アウラ",
      icon: "img/message/icon/アウラ.webp",
      img: "img/message/アウラ_サイト用.webp",
    },
    {
      name: "あませ みはり",
      icon: "img/message/icon/あませみはり.webp",
      img: "img/message/あませ_みはり_サイト用.webp",
    },
    {
      name: "おしぼり",
      icon: "img/message/icon/おしぼり.webp",
      img: "img/message/おしぼり_サイト用.webp",
    },
    {
      name: "からあげステーキハンバーグ定食",
      icon: "img/message/icon/からあげステーキハンバーグ定食.webp",
      img: "img/message/からあげステーキハンバーグ定食_サイト用.webp",
    },
    {
      name: "きと",
      icon: "img/message/icon/きと.webp",
      img: "img/message/きと_サイト用.webp",
    },
    {
      name: "きとちん",
      icon: "img/message/icon/きとちん.webp",
      img: "img/message/きとちん‗サイト用.webp",
    },
    {
      name: "きま",
      icon: "img/message/icon/きま.webp",
      img: "img/message/きま_サイト用.webp",
    },
    {
      name: "こぶりん",
      icon: "img/message/icon/こぶりん.webp",
      img: "img/message/こぶりん_サイト用.webp",
    },
    {
      name: "げつΩ",
      icon: "img/message/icon/げつΩ.webp",
      img: "img/message/げつΩ_サイト用.webp",
    },
    {
      name: "ゴラニ",
      icon: "img/message/icon/ゴラニ.webp",
      img: "img/message/ゴラニ_サイト用.webp",
    },
    {
      name: "さがみぃ",
      icon: "img/message/icon/さがみぃ.webp",
      img: "img/message/さがみぃ_サイト用.webp",
    },
    {
      name: "ざわざわ",
      icon: "img/message/icon/ざわざわ.webp",
      img: "img/message/ざわざわ_サイト用.webp",
    },
    {
      name: "しゃふの植杉",
      icon: "img/message/icon/しゃふの植杉.webp",
      img: "img/message/しゃふの植杉_サイト用.webp",
    },
    {
      name: "スミス",
      icon: "img/message/icon/スミス.webp",
      img: "img/message/スミス_サイト用.webp",
    },
    {
      name: "タクまんじゅうの天ぷら",
      icon: "img/message/icon/タクまんじゅうの天ぷら.webp",
      img: "img/message/タクまんじゅうの天ぷら_サイト用.webp",
    },
    {
      name: "たでぃ",
      icon: "img/message/icon/たでぃ.webp",
      img: "img/message/たでぃ_サイト用.webp",
    },
    {
      name: "たまきゅー",
      icon: "img/message/icon/たまきゅー.webp",
      img: "img/message/たまきゅー_サイト用.webp",
    },
    {
      name: "ちくわ屋",
      icon: "img/message/icon/ちくわ屋.webp",
      img: "img/message/ちくわ屋_サイト用.webp",
    },
    {
      name: "ちなり",
      icon: "img/message/icon/ちなり.webp",
      img: "img/message/ちなり_サイト用.webp",
    },
    {
      name: "ディアトレーネ",
      icon: "img/message/icon/ディアトレーネ.webp",
      img: "img/message/ディアトレーネ_サイト用.webp",
    },
    {
      name: "テリオス",
      icon: "img/message/icon/テリオス.webp",
      img: "img/message/テリオス_サイト用.webp",
    },
    {
      name: "トーヤ",
      icon: "img/message/icon/トーヤ.webp",
      img: "img/message/トーヤ_サイト用.webp",
    },
    {
      name: "とかちん",
      icon: "img/message/icon/とかちん.webp",
      img: "img/message/とかちん_サイト用.webp",
    },
    {
      name: "どくろ9号",
      icon: "img/message/icon/どくろ9号.webp",
      img: "img/message/どくろ9号_サイト用.webp",
    },
    {
      name: "なおけさ",
      icon: "img/message/icon/なおけさ.webp",
      img: "img/message/なおけさ_サイト用.webp",
    },
    {
      name: "なごみみかん",
      icon: "img/message/icon/なごみみかん.webp",
      img: "img/message/なごみみかん_サイト用.webp",
    },
    {
      name: "にゃっぴー",
      icon: "img/message/icon/にゃっぴー.webp",
      img: "img/message/にゃっぴー_サイト用.webp",
    },
    {
      name: "ぱっくん",
      icon: "img/message/icon/ぱっくん.webp",
      img: "img/message/ぱっくん_サイト用.webp",
    },
    {
      name: "ばれりあ",
      icon: "img/message/icon/ばれりあ.webp",
      img: "img/message/ばれりあ_サイト用.webp",
    },
    {
      name: "ヒデ",
      icon: "img/message/icon/ヒデ.webp",
      img: "img/message/ヒデ_サイト用.webp",
    },
    {
      name: "ピポ モリナガ",
      icon: "img/message/icon/ピポモリナガ.webp",
      img: "img/message/ピポ_モリナガ_サイト用.webp",
    },
    {
      name: "ヒロ",
      icon: "img/message/icon/ヒロ.webp",
      img: "img/message/ヒロ_サイト用.webp",
    },
    {
      name: "ぷっちょ",
      icon: "img/message/icon/ぷっちょ.webp",
      img: "img/message/ぷっちょ_サイト用.webp",
    },
    {
      name: "ブラボー和尚",
      icon: "img/message/icon/ブラボー和尚.webp",
      img: "img/message/ブラボー和尚_サイト用.webp",
    },
    {
      name: "まおれー",
      icon: "img/message/icon/まおれー.webp",
      img: "img/message/まおれー_サイト用.webp",
    },
    {
      name: "マグロ",
      icon: "img/message/icon/マグロ.webp",
      img: "img/message/マグロ_サイト用.webp",
    },
    {
      name: "みやけ",
      icon: "img/message/icon/みやけ.webp",
      img: "img/message/みやけ_サイト用.webp",
    },
    {
      name: "もこもけ",
      icon: "img/message/icon/もこもけ.webp",
      img: "img/message/もこもけ_サイト用.webp",
    },
    {
      name: "もてぃお",
      icon: "img/message/icon/もてぃお.webp",
      img: "img/message/もてぃお_サイト用.webp",
    },
    {
      name: "ゆきんこ",
      icon: "img/message/icon/ゆきんこ.webp",
      img: "img/message/ゆきんこ_サイト用.webp",
    },
    {
      name: "よりしろ",
      icon: "img/message/icon/よりしろ.webp",
      img: "img/message/よりしろ_サイト用.webp",
    },
    {
      name: "らぴす",
      icon: "img/message/icon/らぴす.webp",
      img: "img/message/らぴす_サイト用.webp",
    },
    {
      name: "りく",
      icon: "img/message/icon/りく.webp",
      img: "img/message/りく_サイト用.webp",
    },
    {
      name: "リュウ",
      icon: "img/message/icon/リュウ.webp",
      img: "img/message/リュウ_サイト用.webp",
    },
    {
      name: "永劫回帰",
      icon: "img/message/icon/永劫回帰.webp",
      img: "img/message/永劫回帰_サイト用.webp",
    },
    {
      name: "夏影なお",
      icon: "img/message/icon/夏影なお.webp",
      img: "img/message/夏影なお_サイト用.webp",
    },
    {
      name: "暇人のへちま",
      icon: "img/message/icon/暇人のへちま.webp",
      img: "img/message/暇人のへちま_サイト用.webp",
    },
    {
      name: "犬神 じゅしわん",
      icon: "img/message/icon/犬神.webp",
      img: "img/message/犬神_じゅしわん_サイト用.webp",
    },
    {
      name: "賢宮瑞希",
      icon: "img/message/icon/賢宮瑞希.webp",
      img: "img/message/賢宮瑞希_サイト用.webp",
    },
    {
      name: "山内ナッツ",
      icon: "img/message/icon/山内ナッツ.webp",
      img: "img/message/山内ナッツ_サイト用.webp",
    },
    {
      name: "趣味優先人",
      icon: "img/message/icon/趣味優先人.webp",
      img: "img/message/趣味優先人_サイト用.webp",
    },
    {
      name: "赤砂糖",
      icon: "img/message/icon/赤砂糖.webp",
      img: "img/message/赤砂糖_サイト用.webp",
    },
    {
      name: "草彅健太",
      icon: "img/message/icon/草彅健太.webp",
      img: "img/message/草彅健太_サイト用.webp",
    },
    {
      name: "不知火エンキ",
      icon: "img/message/icon/不知火エンキ.webp",
      img: "img/message/不知火エンキ_サイト用.webp",
    },
    {
      name: "野菜とお肉",
      icon: "img/message/icon/野菜とお肉.webp",
      img: "img/message/野菜とお肉_サイト用.webp",
    },
    {
      name: "侑サブろぽーと",
      icon: "img/message/icon/侑サブろぽーと.webp",
      img: "img/message/侑サブろぽーと_サイト用.webp",
    },
  ];
  return msgImage;
}
export default msglist;
