function creditlist() {
  const creditImage = [
    {
      name: "12指腸",
      url: "https://x.com/Duodenana4",
    },
    {
      name: "13bird",
      url: "https://x.com/13bird_mp",
    },
    {
      name: "atforce",
      url: "https://x.com/atforce10",
    },
    {
      name: "chikin",
      url: "https://x.com/chikin_hatayan",
    },
    {
      name: "Cynops",
      url: "https://x.com/pCynops",
    },
    {
      name: "DesperateSkeleton",
      url: "https://x.com/DeathDSkeleton",
    },
    {
      name: "Hikomuro",
      url: "https://x.com/Hikomuro357",
    },
    {
      name: "KAZUN",
      url: "https://x.com/Kazun20Drums",
    },
    {
      name: "KYO",
      url: "https://x.com/eraMinA_KYO",
    },
    {
      name: "Niharu",
      url: "https://x.com/Niharu13",
    },
    {
      name: "Theory",
      url: "https://x.com/Theory_774",
    },
    {
      name: "wahoo",
      url: "https://x.com/wahoo_ppt",
    },
    {
      name: "Yu-ki",
      url: "https://x.com/yu_ki0939",
    },
    {
      name: "アウラ",
      url: "https://x.com/aura_yagg",
    },
    {
      name: "あませ みはり",
      url: "https://x.com/pripara_pricure",
    },
    {
      name: "おしぼり",
      url: "https://x.com/YbtT9HPJaGH4MDA",
    },
    {
      name: "からあげステーキハンバーグ定食",
      url: "https://x.com/HukennKoutai",
    },
    {
      name: "きと",
      url: "https://x.com/chito3k2",
    },
    {
      name: "きとちん",
      url: "https://x.com/1500ks",
    },
    {
      name: "きま",
      url: "https://x.com/_16in",
    },
    {
      name: "げつΩ",
      url: "https://x.com/wsl1228",
    },
    {
      name: "こぶりん",
      url: "https://x.com/kendou_kobu",
    },
    {
      name: "ゴラニ",
      url: "https://x.com/G0R4N1",
    },
    {
      name: "さがみぃ",
      url: "https://x.com/sagamii119096",
    },
    {
      name: "ざわざわ",
      url: "https://x.com/Zawazawav1",
    },
    {
      name: "しゃふの植杉",
      url: "https://x.com/sz_molulu",
    },
    {
      name: "スミス",
      url: "https://x.com/S_Smith_330",
    },
    {
      name: "タクまんじゅうの天ぷら",
      url: "https://x.com/Takumannzyu_2",
    },
    {
      name: "たでぃ",
      url: "https://x.com/oekaki_t722",
    },
    {
      name: "たまきゅー",
      url: "https://x.com/tamakyukarakida",
    },
    {
      name: "ちくわ屋",
      url: "https://x.com/nerikiri_tikuwa",
    },
    {
      name: "ちなり",
      url: "https://x.com/chinari819",
    },
    {
      name: "ディアトレーネ",
      url: "https://x.com/pipi_oshikatsu",
    },
    {
      name: "テリオス@AALIYAH",
      url: "https://x.com/AARIYAH_Terios",
    },
    {
      name: "トーヤ",
      url: "https://x.com/Touya_khyt",
    },
    {
      name: "とかちん",
      url: "https://x.com/asapongc8sti3",
    },
    {
      name: "どくろ9号",
      url: "https://x.com/Sag7RTo3aTXjrfV",
    },
    {
      name: "なおけさ",
      url: "https://x.com/nao_kesa",
    },
    {
      name: "なごみみかん",
      url: "https://x.com/Nag0mikan",
    },
    {
      name: "にゃっぴー",
      url: "https://x.com/nyappy288",
    },
    {
      name: "ぱっくん",
      url: "https://x.com/packn_v",
    },
    {
      name: "ばれりあ",
      url: "https://x.com/bvaleria",
    },
    {
      name: "ヒデ",
      url: "https://x.com/hide246_",
    },
    {
      name: "ピポ モリナガ",
      url: "https://x.com/AoH5xoDzjyKaZo5",
    },
    {
      name: "ヒロ",
      url: "https://x.com/hiro7110_vtuber",
    },
    {
      name: "ぷっちょ",
      url: "https://x.com/mr_ngn",
    },
    {
      name: "ブラボー和尚",
      url: "https://x.com/bravo_osho",
    },
    {
      name: "まおれー",
      url: "https://x.com/Maor_mmd",
    },
    {
      name: "マグロ",
      url: "https://x.com/tekka_don3",
    },
    {
      name: "みやけ",
      url: "https://x.com/miya_Ran774oshi",
    },
    {
      name: "もこもけ",
      url: "https://x.com/MokoMoke_V",
    },
    {
      name: "もてぃお",
      url: "https://x.com/moti_o_tb_ouen",
    },
    {
      name: "ゆきんこ",
      url: "https://x.com/yukinko_account",
    },
    {
      name: "よりしろ",
      url: "https://x.com/Yorishiro_La",
    },
    {
      name: "らぴす",
      url: "https://x.com/lapis777",
    },
    {
      name: "りく",
      url: "https://x.com/riku_HNSK",
    },
    {
      name: "リュウ",
      url: "https://x.com/Ryu90290",
    },
    {
      name: "永劫回帰",
      url: "https://x.com/WiederkehrenEw",
    },
    {
      name: "夏影なお",
      url: "https://x.com/nao_oneshota",
    },
    {
      name: "暇人のへちま",
      url: "https://x.com/himajin2064192",
    },
    {
      name: "犬神 じゅしわん",
      url: "https://x.com/RlH5IPmIJ5icM8d",
    },
    {
      name: "賢宮瑞希",
      url: "https://x.com/Mizuki_Sakamiya",
    },
    {
      name: "山内ナッツ",
      url: "https://x.com/Natu_maya1022",
    },
    {
      name: "趣味優先人",
      url: "https://x.com/syumiyuusen",
    },
    {
      name: "赤砂糖",
      url: "https://x.com/RedSugarTrpg",
    },
    {
      name: "組込式鯵フライ",
      url: "https://x.com/automateeedAzi",
    },
    {
      name: "草彅健太",
      url: "https://x.com/KusanagiKenta",
    },
    {
      name: "不知火エンキ",
      url: "https://x.com/Shiranui_enki",
    },
    {
      name: "野菜とお肉",
      url: "https://x.com/OyasaiTeaTime",
    },
    {
      name: "侑サブろぽーと",
      url: "https://x.com/yukichi_Zport",
    },
  ];
  return creditImage;
}
export default creditlist;
