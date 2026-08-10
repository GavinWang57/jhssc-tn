import { Helmet } from "react-helmet-async";
import "../assets/scss/pages/_career-exploration-center.scss";
import careerExplorationCenters from "../data/careerExplorationCenters.json";

const SITE_NAME = "台南市國民中學生涯及技藝教育資源網";

function CareerExplorationCenter() {
  return (
    <>
      <Helmet>
        <title>職探中心 | {SITE_NAME}</title>
      </Helmet>

      <div className="container py-5 career-exploration-center">
        <h1 className="h1 career-exploration-center__title mb-4">職探中心</h1>

        <section className="career-exploration-center__section mb-4">
          <div className="career-exploration-center__intro-card">
            <p className="career-exploration-center__intro-text">
              為增進國民中小學學生對職業與工作世界之認識，並提供興趣及職業探索之機會，特設職業試探與體驗示範中心，辦理職業試探課程及體驗活動。
            </p>
            <p className="career-exploration-center__intro-text">
              本市目前成立後甲職業試探與體驗示範中心(電機與電子、餐旅職群)、六甲職業試探與體驗示範中心(設計、食品職群)、安順職業試探與體驗示範中心(農業、藝術職群)及佳里技職教育及職業試探推動中心(水產、醫護職群)。
            </p>
          </div>
        </section>

        <section className="career-exploration-center__section">
          <div className="row g-3 g-md-4">
            {careerExplorationCenters.map((center) => (
              <div className="col-md-6" key={center.url}>
                <a
                  href={center.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="career-exploration-center__card"
                >
                  <div className="career-exploration-center__card-header">
                    <span className="career-exploration-center__card-name">
                      {center.name}
                    </span>
                    <i className="bi bi-box-arrow-up-right career-exploration-center__card-arrow"></i>
                  </div>
                  <div className="career-exploration-center__card-clusters">
                    {center.clusters.map((cluster) => (
                      <span
                        key={cluster}
                        className="career-exploration-center__card-cluster"
                      >
                        {cluster}
                      </span>
                    ))}
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

export default CareerExplorationCenter;
