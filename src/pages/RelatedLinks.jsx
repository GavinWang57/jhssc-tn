import { Helmet } from "react-helmet-async";
import "../assets/scss/pages/_related-links.scss";
import relatedLinks from "../data/relatedLinks";
import headBg from "../assets/images/related-links/head-bg.jpg";

const SITE_NAME = "臺南市國民中學生涯及技藝教育資源網";

function RelatedLinks() {
  return (
    <>
      <Helmet>
        <title>相關連結 | {SITE_NAME}</title>
      </Helmet>

      <div className="container py-5 related-links">
        <div
          className="related-links__header"
          style={{ backgroundImage: `url(${headBg})` }}
        >
          <h1 className="h1 related-links__title mb-3">相關連結</h1>
          <p className="related-links__subtitle mb-4">
            提供與技職教育、升學與就業相關的重要資源，
            <br />
            協助您獲得最新資訊與實用服務。
          </p>
        </div>

        <div className="row g-3 g-md-4">
          {relatedLinks.map((link) => (
            <div className="col-md-6" key={link.url}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="related-links__item"
              >
                <img
                  src={link.icon}
                  alt=""
                  className="related-links__icon"
                />
                <div className="related-links__content">
                  <span className="related-links__name">{link.name}</span>
                  <p className="related-links__desc">{link.description}</p>
                </div>
                <i className="bi bi-box-arrow-up-right related-links__arrow"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default RelatedLinks;
