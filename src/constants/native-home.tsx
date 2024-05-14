import {
  AboutCardBg1,
  AboutCardBg2,
  AboutCardBg3,
  NatiLoveBg,
  NativeCareerBg,
  NativeCareerImg,
  NativeKidsBg,
  NativeKidsImg,
  NativeLoveImg,
} from "@/assets/images";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
// import { ContactEmail, ContactInstagram, ContactX } from "~/assets/icons";

export const NATIVE_CARD_TYPES = [
  {
    id: "1",
    title: "native. for Love",
    description:
      "職歴、年収のような表層情報に囚われず、肩の力を抜いて、native. (自然体の姿）な自分で、深層心理で分かち合える出逢いを",
    img: NativeLoveImg.src,
    bgImage: NatiLoveBg.src,
    path: "details/love",
  },
  {
    id: "2",
    title: "native. for Carrer",
    description:
      "年収、社会的認知のような表層情報に囚われず、肩の力を抜いて、native. (自然体の姿）な自分で、心から楽しめるシゴトを",
    img: NativeCareerImg.src,
    bgImage: NativeCareerBg.src,
    path: "details/career",
  },
  {
    id: "3",
    title: "native. for Kids",
    description:
      "メディア情報、トレンドの教育方式に惑わされず、子供のnative. (自然体の姿）に気付き、ポテンシャルを最大化する子育てを",
    img: NativeKidsImg.src,
    bgImage: NativeKidsBg.src,
    path: "details/kids",
  },
];

export const ABOUT_CARDS = [
  {
    id: "01",
    primaryTitle: "THE ONLY INFORMATION REQUIRED IS YOUR DATE OF BIRTH.",
    secondaryTitle1: "生年月日入力のみで",
    secondaryTitle2: "１秒発行",
    description:
      "入力項目は、生年月日のみ。心理テストのように、10分間かけずに、3タップで濃密な情報が一定の正確性で表現される新感覚の体験を提供。",
    bgImage: AboutCardBg1.src,
  },
  {
    id: "02",
    primaryTitle: "CARD IS ISSUED IN 1 SECOND AND CAN BE SEEN INMMEDIATELY.",
    secondaryTitle1: "診断結果は",
    secondaryTitle2: "10,000パターン以上",
    description:
      "約20万以上存在する統計ベースの生年月日を用いたパーソナルパターン、10,000人超の個別分析データを統合し、一定正確性の高い深層情報を提供。",
    bgImage: AboutCardBg2.src,
  },
  {
    id: "03",
    primaryTitle: "DIAGNOSIS RESULTS MORE THAN 10,000 PATTERNS",
    secondaryTitle1: "クリエイティブ×エンタメ",
    secondaryTitle2: "のプロ集団がデザイン",
    description:
      "native. cardは、クリエイティブ、エンタメ領域に見識の深いプロ集団が、独自の観点で、思わずクスッと笑えて納得できる内容を設計。",
    bgImage: AboutCardBg3.src,
  },
];

export const TICKET_CATEGORIES = [
  {
    id: "1",
    price: 300,
    tag: "5 チケット",
    title: "1枚分無料",
    subtitle: "240円/枚",
    description:
      "大切な家族、パートナー、チームメンバーの新たな一面を深く知りたい方向け",
  },
  {
    id: "2",
    price: 1200,
    specialTicketTitle: "１番人気",
    tag: "5 チケット",
    title: "1枚分無料",
    subtitle: "240円/枚",
    description:
      "大切な家族、パートナー、チームメンバーの新たな一面を深く知りたい方向け",
  },
  {
    id: "3",
    price: 3300,
    tag: "15 チケット",
    title: "4枚分無料",
    subtitle: "220円/枚",
    description:
      "プライベート、キャリアあらゆる面で、周囲の方の理解を深めたい方向け",
  },
  {
    id: "4",
    price: 6300,
    tag: "30 チケット",
    title: "9枚分無料",
    subtitle: "210円/枚",
    description:
      "常に、新たな人との出逢いを探索し、好奇心を刺激続けているnative.マスター向け",
  },
];

export const FAQ_ACCORDIAN_DATA = [
  {
    id: "1",
    title: "native. cardとは？",
    description:
      "約20万以上存在する統計ベースの生年月日を用いた個別グラフ、10,000人超の個別分析データを統合し、一定正確性の高い深層レベルの価値観情報を提供するパーソナリティカードです。",
  },
  {
    id: "2",
    title: "今後はどのような新カードが出ますか？",
    description:
      "native. cardはあらゆるライフシーンに沿って、新ジャンルを提供します。今後は、子育て、暮らし、旅行、ヘルスケア、ペット等のジャンルで毎月新種類を提供予定です。",
  },
  {
    id: "3",
    title: "同じ生年月日であれば結果は同じ？",
    description:
      "インプット情報は生年月日のみの為、結果のカードは同じです。育成環境、親、学校、就いている職業等々により、元来の性格が発露するかは変動する為、違った人柄になり得ます。",
  },
  {
    id: "4",
    title: "支払い方法はどの種類がありますか?",
    description:
      "現状、Stripeのみとなっております。順次、PayPay、LINE Pay等、簡便な決済手段を増やしていく予定です。",
  },
  {
    id: "5",
    title: "発行後キャンセルや変更はできますか?",
    description:
      " 申し訳ございません。発行後のキャンセル、変更は承っておりません。入力間違えの無いように、慎重に入力いただけると幸いです。",
  },
];

export const FOOTER_LINKS = [
  {
    title: "native.について",
    link: "/",
  },
  {
    title: "native. card について",
    link: "/",
  },
  {
    title: "native. card のチケット購入",
    link: "/",
  },
  {
    title: "よくある質問",
    link: "/",
  },
  {
    title: "返金ポリシー",
    link: "/",
  },
  {
    title: "プライバシーポリシー",
    link: "/",
  },
  {
    title: "利用規約",
    link: "/",
  },
];

export const CONTACT_US_MEDIA = [
  {
    id: "1",
    title: "Email",
    link: "mailto:someone@example.com",
    Icon: <MdEmail />,
  },
  {
    id: "2",
    title: "X",
    link: "/",
    Icon: <FaXTwitter />,
  },
  {
    id: "3",
    title: "Instagram",
    link: "/",
    Icon: <FaInstagram />,
  },
];
