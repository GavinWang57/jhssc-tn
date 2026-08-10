import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import "../assets/scss/pages/_job-clusters.scss";
import jobClusterCategories, { comprehensiveIntro } from "../data/jobClusters";

const SITE_NAME = "台南市國民中學生涯及技藝教育資源網";

function VideoThumbnail({ videoId }) {
  return (
    <div className="job-clusters__thumb">
      <img
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
        alt=""
        loading="lazy"
      />
      <i className="bi bi-play-circle-fill job-clusters__thumb-icon"></i>
    </div>
  );
}

function VideoModal({ video, onClose }) {
  useEffect(() => {
    if (!video) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.classList.add("modal-open");

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("modal-open");
    };
  }, [video, onClose]);

  if (!video) return null;

  return (
    <>
      <div
        className="modal fade show job-clusters__modal"
        style={{ display: "block" }}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        onClick={onClose}
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{video.name}</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body p-0">
              <div className="job-clusters__player">
                <iframe
                  src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0`}
                  title={video.name}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </>
  );
}

function JobClusters() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <>
      <Helmet>
        <title>職群介紹 | {SITE_NAME}</title>
      </Helmet>

      <div className="container py-5 job-clusters">
        <h1 className="h1 job-clusters__title mb-4">職群介紹</h1>

        <section className="job-clusters__section mb-5">
          <button
            type="button"
            className="job-clusters__intro-card"
            onClick={() => setActiveVideo(comprehensiveIntro)}
          >
            <VideoThumbnail videoId={comprehensiveIntro.videoId} />
            <span className="job-clusters__intro-name">
              {comprehensiveIntro.name}
            </span>
          </button>
        </section>

        {jobClusterCategories.map((group) => (
          <section className="job-clusters__section mb-5" key={group.category}>
            <h2 className="h4 job-clusters__category-title mb-3">
              {group.category}
            </h2>
            <div className="row g-3 g-md-4">
              {group.clusters.map((cluster) => (
                <div className="col-6 col-md-4 col-lg-3" key={cluster.name}>
                  <button
                    type="button"
                    className="job-clusters__card"
                    onClick={() => setActiveVideo(cluster)}
                  >
                    <VideoThumbnail videoId={cluster.videoId} />
                    <span className="job-clusters__card-name">
                      {cluster.name}
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </>
  );
}

export default JobClusters;
