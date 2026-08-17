import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import "../assets/scss/pages/_other-resources.scss";
import otherResourcesData from "../data/otherResources.json";

const { sections } = otherResourcesData;

// 職群漫畫圖片實際存放於 assets，JSON 只存檔名，需在此對應成建置後路徑
const comicImageModules = import.meta.glob(
  "../assets/images/OtherResources/*.{jpg,png}",
  { eager: true, import: "default" },
);

function resolveComicImage(fileName) {
  const entry = Object.entries(comicImageModules).find(([path]) =>
    path.endsWith(`/${fileName}`),
  );
  return entry ? entry[1] : "";
}

const SITE_NAME = "臺南市國民中學生涯及技藝教育資源網";

// 資源檢視彈窗，依 type 顯示 PDF 預覽、YouTube 影片或漫畫圖片捲動清單
function ResourceModal({ resource, onClose }) {
  useEffect(() => {
    if (!resource) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.classList.add("modal-open");

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("modal-open");
    };
  }, [resource, onClose]);

  if (!resource) return null;

  return (
    <>
      <div
        className="modal fade show other-resources__modal"
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
              <h5 className="modal-title">{resource.name}</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body p-0">
              {resource.type === "pdf" && (
                <iframe
                  className="other-resources__pdf-frame"
                  src={`https://drive.google.com/file/d/${resource.fileId}/preview`}
                  title={resource.name}
                  allow="autoplay"
                ></iframe>
              )}
              {resource.type === "video" && (
                <div className="other-resources__player">
                  <iframe
                    src={`https://www.youtube.com/embed/${resource.videoId}?autoplay=1&rel=0`}
                    title={resource.name}
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
              {resource.type === "comic" && (
                <div className="other-resources__comic-scroll">
                  {resource.images.map((fileName) => (
                    <img
                      src={resolveComicImage(fileName)}
                      alt={resource.name}
                      key={fileName}
                      loading="lazy"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </>
  );
}

// 單一檔案資源卡片（PDF 名單 / 宣導動畫），橫式呈現名稱與更新頻率
function FileResourceCard({ icon, name, note, onSelect }) {
  return (
    <button
      type="button"
      className="other-resources__file-card"
      onClick={onSelect}
    >
      <span className="other-resources__file-icon">
        <i className={`bi ${icon}`}></i>
      </span>
      <span className="other-resources__file-body">
        <span className="other-resources__file-name">{name}</span>
        <span className="other-resources__file-note">{note}</span>
      </span>
      <i className="bi bi-chevron-right other-resources__file-arrow"></i>
    </button>
  );
}

// 職群漫畫卡片：以壓縮縮圖顯示，點選後才載入完整漫畫圖片
function ComicCard({ comic, onSelect }) {
  return (
    <button type="button" className="other-resources__card" onClick={onSelect}>
      <span className="other-resources__card-thumb">
        <img
          src={resolveComicImage(comic.thumb)}
          alt={comic.name}
          loading="lazy"
        />
      </span>
      <span className="other-resources__card-body">
        <span className="other-resources__card-name">{comic.name}</span>
        <span className="other-resources__card-cta">
          <i className="bi bi-book-fill"></i> 查看漫畫
        </span>
      </span>
    </button>
  );
}

function OtherResources() {
  const [activeResource, setActiveResource] = useState(null);

  return (
    <>
      <Helmet>
        <title>其他資源 | {SITE_NAME}</title>
      </Helmet>

      <div className="container py-5 other-resources">
        <h1 className="h1 other-resources__title mb-4">其他資源</h1>

        {sections.map((section, index) => (
          <section
            className={`other-resources__section${
              index < sections.length - 1 ? " mb-5" : ""
            }`}
            key={section.id}
          >
            <h2 className="h4 other-resources__section-title mb-3">
              {section.title}
              {section.note && (
                <span className="other-resources__section-note">
                  {" "}
                  （{section.note}）
                </span>
              )}
            </h2>

            {section.layout === "file" && (
              <FileResourceCard
                icon={section.icon}
                name={section.resource.name}
                note={section.resource.note}
                onSelect={() => setActiveResource(section.resource)}
              />
            )}

            {section.layout === "grid" && (
              <div className="other-resources__card-grid">
                {section.items.map((item) => (
                  <ComicCard
                    comic={item}
                    key={item.name}
                    onSelect={() => setActiveResource(item)}
                  />
                ))}
              </div>
            )}
          </section>
        ))}
      </div>

      <ResourceModal
        resource={activeResource}
        onClose={() => setActiveResource(null)}
      />
    </>
  );
}

export default OtherResources;
