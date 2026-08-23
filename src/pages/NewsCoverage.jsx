import { Helmet } from "react-helmet-async";
import "../assets/scss/pages/_news-coverage.scss";
import newsCoverage from "../data/newsCoverage.json";

const SITE_NAME = "臺南市國民中學生涯及技藝教育資源網";

function NewsCoverage() {
  return (
    <>
      <Helmet>
        <title>新聞露出 | {SITE_NAME}</title>
        <meta
          name="description"
          content="彙整臺南市生涯及技藝教育相關新聞報導，掌握最新教育動態。"
        />
      </Helmet>

      <div className="container py-5 news-coverage">
        <h1 className="h1 news-coverage__title mb-4">新聞露出</h1>

        <section className="news-coverage__section">
          <div className="row g-3 g-md-4">
            {newsCoverage.map((news) => (
              <div className="col-md-6 col-lg-4" key={news.id}>
                <a
                  href={news.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="news-coverage__card"
                >
                  <div className="news-coverage__card-thumb">
                    <img src={news.thumbnail} alt="" loading="lazy" />
                  </div>
                  <div className="news-coverage__card-body">
                    <span className="news-coverage__card-date">
                      {news.date}
                    </span>
                    <span className="news-coverage__card-title">
                      {news.title}
                    </span>
                    <span className="news-coverage__card-link">
                      詳閱報導
                      <i className="bi bi-arrow-right"></i>
                    </span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default NewsCoverage;
