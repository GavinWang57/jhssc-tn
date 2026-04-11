import { Helmet } from "react-helmet-async";
import "../assets/scss/pages/_home.scss";
import Banner from "../components/home/Banner";
import Card from "../components/home/Card";

const SITE_NAME = "台南市國民中學生涯及技藝教育資源網";

// 卡片資料陣列
const cardsData = [
  {
    id: 1,
    icon: "images/home/1.png",
    title: "新聞露出",
    description: "彙整本市生涯及技藝教育相關新聞報導，讓您隨時掌握最新動態。",
    buttonText: "【了解詳情】",
    link: "/news-coverage",
    color: "#4A90E2",
  },
  {
    id: 2,
    icon: "images/home/2.png",
    title: "技藝教育",
    description: "提供台南市國中技藝教育課程、競賽及成果資訊，發掘學生潛能。",
    buttonText: "【深入了解】",
    link: "/skills-education",
    color: "#B565D8",
  },
  {
    id: 3,
    icon: "images/home/3.png",
    title: "職探中心",
    description: "介紹各職業試探中心，提供預約體驗服務，協助學生探索職業興趣。",
    buttonText: "【預約體驗】",
    link: "/career-exploration-center",
    color: "#4ECDC4",
  },
  {
    id: 4,
    icon: "images/home/4.png",
    title: "職群介紹",
    description: "詳細介紹十五大職群內容，協助學生了解不同職業領域的發展方向。",
    buttonText: "【探索職群】",
    link: "/job-clusters",
    color: "#8BC34A",
  },
  {
    id: 5,
    icon: "images/home/5.png",
    title: "技職博覽會專區",
    description: "提供年度技職博覽會的最新消息、活動詳情及線上展覽資源。",
    buttonText: "【查看展會】",
    link: "/vocational-expo",
    color: "#FF9800",
  },
  {
    id: 6,
    icon: "images/home/6.png",
    title: "其他資源",
    description: "整合生涯發展與技藝教育相關的多元學習資源，提供下載與參考。",
    buttonText: "【下載資源】",
    link: "/other-resources",
    color: "#9E9E9E",
  },
  {
    id: 7,
    icon: "images/home/7.png",
    title: "相關連結",
    description: "彙集教育部、勞動部及各大專院校等生涯與技職教育相關網站連結。",
    buttonText: "【跳轉連結】",
    link: "/related-links",
    color: "#2196F3",
  },
];

function Home() {
  return (
    <>
      <Helmet>
        <title>{SITE_NAME}</title>
      </Helmet>

      {/* banner */}
      <section className="container">
        <Banner />
      </section>

      {/* 快速連結卡片區 */}
      <section id="quick-links-cards" className="container px-4 px-md-0 py-5">
        <div className="row g-3 g-md-4 justify-content-center">
          {cardsData.map((card) => (
            <div key={card.id} className="col-md-3">
              <Card {...card} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
