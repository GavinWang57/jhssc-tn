import { Helmet } from "react-helmet-async";
import "../assets/scss/pages/_related-links.scss";
import relatedLinks from "../data/relatedLinks";

const SITE_NAME = "台南市國民中學生涯及技藝教育資源網";

function RelatedLinks() {
  return (
    <>
      <Helmet>
        <title>相關連結 | {SITE_NAME}</title>
      </Helmet>

      <div className="container py-5 related-links">
        <h1 className="h1 related-links__title mb-4">相關連結</h1>

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
                <span className="related-links__name">{link.name}</span>
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
