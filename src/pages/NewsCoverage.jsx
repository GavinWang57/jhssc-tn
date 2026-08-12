import { Helmet } from "react-helmet-async";
import "../assets/scss/pages/_news-coverage.scss";
import newsCoverage from "../data/newsCoverage.json";

const SITE_NAME = "臺南市國民中學生涯及技藝教育資源網";

function NewsCoverage() {
  return (
    <>
      <Helmet>
        <title>新聞露出 | {SITE_NAME}</title>
      </Helmet>

      <div className="container py-5 news-coverage">
        <h1 className="h1 news-coverage__title mb-4">新聞露出</h1>

        <div className="news-coverage__table-wrapper">
          <table className="news-coverage__table">
            <thead>
              <tr>
                <th className="news-coverage__date-col">日期</th>
                <th>標題</th>
              </tr>
            </thead>
            <tbody>
              {newsCoverage.map((news) => (
                <tr key={news.id}>
                  <td className="news-coverage__date">{news.date}</td>
                  <td>
                    <a
                      href={news.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="news-coverage__link"
                    >
                      {news.title}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default NewsCoverage;
