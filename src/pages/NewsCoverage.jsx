import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./_news-coverage.scss";

// ==========================================================================
// 模擬資料
// ==========================================================================

// 網站名稱常數
const SITE_NAME = "臺南市國民中學生涯及技藝教育資源網";

// 橫幅統計資料
const STATS = [
  { icon: "bi-newspaper", num: "120+", label: "媒體報導篇數" },
  { icon: "bi-broadcast", num: "35", label: "合作媒體單位" },
  { icon: "bi-calendar3", num: "2024", label: "資源網創辦年份" },
];

// 精選報導
const FEATURED_NEWS = {
  source: "自由時報",
  date: "2026-03-28",
  category: "電視媒體",
  title: "臺南市技藝教育博覽會盛大登場，逾千名學生參與職涯探索體驗",
  excerpt:
    "臺南市教育局主辦之「2026 年度技職博覽會」於臺南市立體育場正式開幕，活動匯集全市 42 所國中學生參與，透過互動式職探攤位、師傅現場示範及職群體驗工作坊，引導學生提前接觸多元職涯路徑，培養生涯規劃能力。",
};

// 側欄快訊
const SIDEBAR_NEWS = [
  {
    type: "tv",
    source: "民視新聞",
    date: "2026-03-15",
    title: "南市推廣技藝教育成效卓著，全國職業技能競賽再創佳績",
  },
  {
    type: "paper",
    source: "聯合報",
    date: "2026-02-22",
    title: "職探中心體驗課程火熱，國中生搶報名體驗十五大職群",
  },
  {
    type: "online",
    source: "ETtoday",
    date: "2026-01-18",
    title: "技藝教育新里程碑，臺南市率先建置跨校選修制度榮獲全國表揚",
  },
  {
    type: "tv",
    source: "TVBS新聞",
    date: "2025-12-10",
    title: "升學多元選擇，臺南學子透過技藝學程找到人生方向",
  },
];

// 媒體報導分類
const NEWS_CATEGORIES = [
  { key: "all", label: "全部", icon: "bi-grid-fill" },
  { key: "tv", label: "電視媒體", icon: "bi-tv" },
  { key: "paper", label: "報紙雜誌", icon: "bi-newspaper" },
  { key: "online", label: "網路媒體", icon: "bi-globe" },
];

// 媒體報導列表
const NEWS_ITEMS = [
  {
    id: 1,
    type: "tv",
    source: "公視新聞網",
    date: "2026-03-20",
    title: "臺南市職探中心預約體驗場次爆滿，職業探索需求持續升溫",
    excerpt:
      "全市 8 處職業探索中心今年預約體驗場次已全數額滿，教育局宣布加開暑期梯次因應。",
    icon: "bi-tv",
  },
  {
    id: 2,
    type: "paper",
    source: "中華日報",
    date: "2026-03-05",
    title: "職群介紹資源網上線，一站掌握 15 大職群完整資訊",
    excerpt:
      "新版職群介紹專區收錄各職群課程說明、就業前景及競賽資訊，協助家長與學生做出更明智的選擇。",
    icon: "bi-newspaper",
  },
  {
    id: 3,
    type: "online",
    source: "Yahoo 奇摩新聞",
    date: "2026-02-14",
    title: "第 15 屆全國職業技能競賽南區選拔賽，臺南代表隊勇奪 7 金",
    excerpt:
      "臺南市選手在水電、電腦輔助設計、廚藝等七個項目奪金，充分展現技藝教育扎根成果。",
    icon: "bi-globe",
  },
  {
    id: 4,
    type: "tv",
    source: "三立電視",
    date: "2026-01-30",
    title: "百工技藝傳承計畫啟動，老師傅進校園分享傳統職人精神",
    excerpt:
      "教育局與在地行業公會合作，邀請職人師傅進入國中課堂，透過實作教學深化學生對技藝職業的認同感。",
    icon: "bi-tv",
  },
  {
    id: 5,
    type: "paper",
    source: "臺南人報",
    date: "2025-12-22",
    title: "生涯規劃向下扎根，臺南市提前於七年級導入職業探索課程",
    excerpt:
      "新教學模式將職業興趣測驗與課程規劃整合，七年級學生即可透過系統化引導探索個人興趣方向。",
    icon: "bi-newspaper",
  },
  {
    id: 6,
    type: "online",
    source: "NOWnews",
    date: "2025-11-28",
    title: "技職博覽會亮點回顧：從農業到數位科技，30 個職群現場體驗",
    excerpt:
      "2025 年度技職博覽會圓滿落幕，逾 2,000 名師生參與，現場設置 30 個職群體驗站備受熱烈迴響。",
    icon: "bi-globe",
  },
];

const VIDEO_NEWS = [
  {
    id: 1,
    source: "臺南市教育局官方頻道",
    date: "2026-03-28",
    duration: "04:35",
    title: "2026 技職博覽會精華回顧｜臺南市國中生涯教育成果展",
    icon: "bi-play-circle",
  },
  {
    id: 2,
    source: "公視新聞",
    date: "2026-02-10",
    duration: "03:12",
    title: "走進職探中心｜學生第一手體驗航空維修、烘焙及電競三大職群",
    icon: "bi-play-circle",
  },
  {
    id: 3,
    source: "民視新聞專題",
    date: "2025-12-05",
    duration: "06:48",
    title: "技藝教育紮根臺南 30 年特別報導：職人精神傳承下一代",
    icon: "bi-play-circle",
  },
];

// ==========================================================================
// 子元件
// ==========================================================================

const SectionHeading = ({ badge, title }) => (
  <div className="nc-section-heading">
    <span className="nc-section-heading__badge">{badge}</span>
    <h2>{title}</h2>
    <div className="nc-section-heading__line" />
  </div>
);

// ==========================================================================
// 主元件
// ==========================================================================

function NewsCoverage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? NEWS_ITEMS
      : NEWS_ITEMS.filter((n) => n.type === activeFilter);

  return (
    <>
      <Helmet>
        <title>新聞露出 ─ {SITE_NAME}</title>
        <meta
          name="description"
          content="彙整臺南市生涯及技藝教育相關新聞報導，包含電視、報紙及網路媒體，掌握最新教育動態。"
        />
      </Helmet>

      {/* ================================================================ */}
      {/* 第一區塊 — 頁面橫幅                                              */}
      {/* ================================================================ */}
      <section className="nc-hero">
        <div className="container">
          <div className="row align-items-center">
            {/* 左側：標題文字 */}
            <div className="col-lg-7 mb-4 mb-lg-0">
              <nav className="nc-hero__breadcrumb" aria-label="麵包屑">
                <Link to="/">首頁</Link>
                <i className="bi bi-chevron-right" />
                <span>新聞露出</span>
              </nav>

              <div className="nc-hero__title-group">
                <div className="nc-hero__accent-bar" />
                <h1 className="nc-hero__title">
                  <span>媒體報導</span>
                  新聞露出
                </h1>
              </div>

              <p className="nc-hero__desc">
                彙整臺南市國民中學生涯及技藝教育相關新聞報導，
                涵蓋電視、平面及數位媒體，讓您隨時掌握
                最新教育政策動態與活動成果。
              </p>
            </div>

            {/* 右側：統計玻璃卡 */}
            <div className="col-lg-5">
              <div className="nc-hero__stats">
                {STATS.map((s) => (
                  <div className="nc-hero__stat-card" key={s.label}>
                    <div className="nc-hero__stat-icon">
                      <i className={`bi ${s.icon}`} />
                    </div>
                    <div className="nc-hero__stat-num">{s.num}</div>
                    <div className="nc-hero__stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SVG Wave 分隔 */}
        <svg
          className="nc-hero__wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
        >
          <path
            fill="#fbf8ef"
            d="M0,48 C240,80 480,16 720,48 C960,80 1200,16 1440,48 L1440,80 L0,80 Z"
          />
        </svg>
      </section>

      {/* ================================================================ */}
      {/* 第二區塊 — 精選報導                                             */}
      {/* ================================================================ */}
      <section className="nc-featured">
        <div className="container">
          <SectionHeading badge="精選" title="焦點報導" />

          <div className="row g-4">
            {/* 主卡 */}
            <div className="col-lg-7">
              <div className="nc-featured__main-card">
                <div className="nc-featured__main-thumb">
                  <i className="bi bi-newspaper" />
                  <span className="nc-featured__main-source-badge">
                    {FEATURED_NEWS.source}
                  </span>
                  <span className="nc-featured__main-date-badge">
                    <i className="bi bi-calendar3 me-1" />
                    {FEATURED_NEWS.date}
                  </span>
                </div>
                <div className="nc-featured__main-body">
                  <div className="nc-featured__main-category">
                    <i className="bi bi-tag me-1" />
                    {FEATURED_NEWS.category}
                  </div>
                  <h3 className="nc-featured__main-title">
                    {FEATURED_NEWS.title}
                  </h3>
                  <p className="nc-featured__main-excerpt">
                    {FEATURED_NEWS.excerpt}
                  </p>
                  <a
                    href="#!"
                    className="nc-featured__main-cta"
                    onClick={(e) => e.preventDefault()}
                  >
                    閱讀全文
                    <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
            </div>

            {/* 側欄快訊 */}
            <div className="col-lg-5">
              <div className="nc-featured__sidebar">
                <div className="nc-featured__sidebar-header">
                  <i className="bi bi-lightning-charge-fill" />
                  最新快訊
                </div>

                <ul className="nc-featured__sidebar-list">
                  {SIDEBAR_NEWS.map((item, idx) => (
                    <li
                      key={idx}
                      className={`nc-featured__sidebar-item nc-featured__sidebar-item--${item.type}`}
                    >
                      <div className="nc-featured__sidebar-meta">
                        <span className="nc-featured__sidebar-source">
                          {item.source}
                        </span>
                        <span className="nc-featured__sidebar-date">
                          {item.date}
                        </span>
                      </div>
                      <p className="nc-featured__sidebar-title">{item.title}</p>
                    </li>
                  ))}
                </ul>

                <div className="nc-featured__sidebar-cta">
                  <a href="#news-grid">
                    查看所有報導
                    <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 第三區塊 — 媒體報導瀏覽                                        */}
      {/* ================================================================ */}
      <section className="nc-grid-section" id="news-grid">
        <div className="container">
          <SectionHeading badge="報導" title="媒體報導瀏覽" />

          {/* 篩選標籤 */}
          <div className="nc-grid-section__filters">
            {NEWS_CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                className={`nc-grid-section__filter-btn${activeFilter === cat.key ? " is-active" : ""}`}
                onClick={() => setActiveFilter(cat.key)}
              >
                <i className={`bi ${cat.icon}`} />
                {cat.label}
              </button>
            ))}
          </div>

          {/* 報導卡片網格 */}
          <div className="nc-grid-section__grid">
            {filtered.map((news) => (
              <div className="nc-grid-section__card" key={news.id}>
                <div
                  className={`nc-grid-section__card-thumb nc-grid-section__card-thumb--${news.type}`}
                >
                  <i className={`bi ${news.icon}`} />
                  <span
                    className={`nc-grid-section__card-badge nc-grid-section__card-badge--${news.type}`}
                  >
                    {NEWS_CATEGORIES.find((c) => c.key === news.type)?.label}
                  </span>
                </div>
                <div className="nc-grid-section__card-body">
                  <div className="nc-grid-section__card-meta">
                    <span className="nc-grid-section__card-source">
                      {news.source}
                    </span>
                    <span className="nc-grid-section__card-date">
                      {news.date}
                    </span>
                  </div>
                  <h4 className="nc-grid-section__card-title">{news.title}</h4>
                  <p className="nc-grid-section__card-excerpt">
                    {news.excerpt}
                  </p>
                  <a
                    href="#!"
                    className="nc-grid-section__card-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    閱讀更多
                    <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 第四區塊 — 影音報導                                             */}
      {/* ================================================================ */}
      <section className="nc-video">
        <div className="container">
          <SectionHeading badge="影音" title="影音報導專區" />

          <div className="row g-4">
            {VIDEO_NEWS.map((v) => (
              <div className="col-md-6 col-lg-4" key={v.id}>
                <div className="nc-video__card">
                  <div className="nc-video__thumb">
                    <div className="nc-video__play-btn">
                      <i className="bi bi-play-fill" />
                    </div>
                    <span className="nc-video__duration">{v.duration}</span>
                  </div>
                  <div className="nc-video__body">
                    <div className="nc-video__source">
                      <i className="bi bi-camera-video" />
                      {v.source}
                    </div>
                    <div className="nc-video__date">{v.date}</div>
                    <h4 className="nc-video__title">{v.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="nc-video__cta-row">
            <a href="#!" onClick={(e) => e.preventDefault()}>
              <i className="bi bi-collection-play" />
              查看更多影音報導
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default NewsCoverage;
