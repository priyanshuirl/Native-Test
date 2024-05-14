import {
  DetailsCareerBgImage,
  DetailsKidsBgImage,
  DetailsLoveBgImage,
  NativeCareerLongImg,
  NativeCareerShortImg,
  NativeKidsLongImg,
  NativeKidsShortImg,
  NativeLoveLongImg,
  NativeLoveShortImg,
} from "@/assets/images";

export const NATIVE_DETAILS_LOVE = {
  header: {
    title: "native. for Love について",
    goBackRoute: "/",
  },
  title: "native. for Love",
  description:
    "職歴、年収のような表層情報に囚われず、肩の力を抜いて、native. (自然体の姿）な自分で、深層心理で分かち合える出逢いを",
  bgImage: DetailsLoveBgImage,
  cardVersions: [
    {
      id: "1",
      title: "short ver. の特徴",
      img: NativeLoveShortImg,
      infoTitle: "Short ver.のトリセツ",
      price: "¥ 300",
      featureList: [
        "月、太陽、海等、10パターンの自然資源から構成",
        "自身のタイプの特徴は、パーソナリティ項目に記載",
        "相性GOODの2タイプは、Fitする可能性が高い",
        "native.スコアは価値観、金銭感覚を表す",
        "スコアが±5以内であれば、Fitする可能性が高い",
        "友達とcardをシェアしてベストパートナーを探そう",
      ],
    },
    {
      id: "2",
      title: "long ver. の特徴",
      img: NativeLoveLongImg,
      infoTitle: "Long ver.のトリセツ",
      price: "¥ 500",
      featureList: [
        "上記のShort ver. に4つの重要項目を追加",
        "恋愛に限らず、結婚についての価値観を表記",
        "SEXライフについて、性癖等について表記",
        "喧嘩した時の対応法を表記。お相手に見せよう",
        "あなたの口説き方テクニックを公開",
        "既にfor Love short ver.を発行済の方は、1チケット追加で発行可能",
      ],
    },
  ],
};

export const NATIVE_DETAILS_CAREER = {
  header: {
    title: "native. for Career について",
    goBackRoute: "/",
  },
  title: "native. for Career",
  description:
    "年収、社会的認知のような表層情報に囚われず、肩の力を抜いて、native. (自然体の姿）な自分で、心から楽しめるシゴトを",
  bgImage: DetailsCareerBgImage,
  cardVersions: [
    {
      id: "1",
      title: "short ver. の特徴",
      img: NativeCareerShortImg,
      infoTitle: "Short ver.のトリセツ",
      price: "¥ 300",
      featureList: [
        "成長心強いリーダー等、10パターンの種別から構成",
        "自身のタイプの特徴は、パーソナリティ項目に記載",
        "相性GOODの2タイプは、Fitする可能性が高い",
        "native.スコアは研究型、リーダー型等の属性を表す",
        "スコアが高いとリーダー型、低いと研究型が多い",
        "友達とcardをシェアしてベストキャリアを探そう",
      ],
    },
    {
      id: "2",
      title: "long ver. の特徴",
      img: NativeCareerLongImg,
      infoTitle: "Long ver.のトリセツ",
      price: "¥ 500",
      featureList: [
        "上記のShort ver. に3つの重要項目を追加",
        "あなたの長所、短所についても徹底分析",
        "理想のカルチャーについても、表記",
        "Short ver.の項目も文章量を増やし、具体化",
        "既にfor Career short ver.を発行済の方は、1チケット追加で発行可能",
      ],
    },
  ],
};

export const NATIVE_DETAILS_KIDS = {
  header: {
    title: "native. for Kids について",
    goBackRoute: "/",
  },
  title: "native. for Kids",
  description:
    "メディア情報、トレンドの教育方式に惑わされず、子供のnative. (自然体の姿）に気付き、ポテンシャルを最大化する子育てを",
  bgImage: DetailsKidsBgImage,
  cardVersions: [
    {
      id: "1",
      title: "short ver. の特徴",
      img: NativeKidsShortImg,
      infoTitle: "Short ver.のトリセツ",
      price: "¥ 300",
      featureList: [
        "成長心強いリーダー等、10パターンの種別から構成",
        "子供にFitする習い事、得意/不得意をアドバイス",
        "相性GOODの2タイプは、Fitする可能性が高い",
        "native.スコアはコミュニティでの立ち位置を表す",
        "高い場合はリーダー気質、低い場合オタク気質",
        "家族内でシェアして子供のポテンシャルを探ろう",
      ],
    },
    {
      id: "2",
      title: "long ver. の特徴",
      img: NativeKidsLongImg,
      infoTitle: "Long ver.のトリセツ",
      price: "¥ 500",
      featureList: [
        "上記のShort ver. に3つの重要項目を追加",
        "将来、興味を持つオシゴトを推測",
        "今のうちから、準備を進めよう",
        "あ",
        "既にfor Kids short ver.を発行済の方は、1チケット追加で発行可能",
      ],
    },
  ],
};

export type NativeCardDetailsT = typeof NATIVE_DETAILS_LOVE;
