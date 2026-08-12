import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./_news-coverage.scss";
import newsCoverage from "../data/newsCoverage.json";

const SITE_NAME = "臺南市國民中學生涯及技藝教育資源網";

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
  return (
    <>
      <Helmet>
        <title>新聞露出 ─ {SITE_NAME}</title>
        <meta
          name="description"
          content="彙整臺南市生涯及技藝教育相關新聞報導，掌握最新教育動態。"
        />
      </Helmet>

      {/* ================================================================ */}
      {/* 第一區塊 — 頁面橫幅                                              */}
      {/* ================================================================ */}
      <section className="nc-hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
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
                讓您隨時掌握最新教育政策動態與活動成果。
              </p>
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
      {/* 第二區塊 — 媒體報導瀏覽                                        */}
      {/* ================================================================ */}
      <section className="nc-grid-section" id="news-grid">
        <div className="container">
          <SectionHeading badge="報導" title="媒體報導瀏覽" />

          <div className="nc-grid-section__grid">
            {newsCoverage.map((news) => (
              <div className="nc-grid-section__card" key={news.id}>
                <div className="nc-grid-section__card-thumb nc-grid-section__card-thumb--tv">
                  <i className="bi bi-newspaper" />
                </div>
                <div className="nc-grid-section__card-body">
                  <div className="nc-grid-section__card-meta">
                    <span className="nc-grid-section__card-date">
                      {news.date}
                    </span>
                  </div>
                  <h4 className="nc-grid-section__card-title">
                    {news.title}
                  </h4>
                  <a
                    href={news.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nc-grid-section__card-link"
                  >
                    詳閱報導
                    <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default NewsCoverage;
