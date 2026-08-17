import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import "../assets/scss/pages/_vocational-expo.scss";
import vocationalExpoData from "../data/vocationalExpo.json";

const { speakerTalks, promoVideos, handbooks } = vocationalExpoData;

const SITE_NAME = "臺南市國民中學生涯及技藝教育資源網";

// 依「學年度」欄位分組，並維持資料原本由新到舊的排序
function groupByYear(items) {
  const years = [...new Set(items.map((item) => item.year))];
  return years.map((year) => ({
    year,
    items: items.filter((item) => item.year === year),
  }));
}

// 播放/瀏覽彈窗，支援 YouTube 影片與 Google 雲端硬碟 PDF、影片
function MediaModal({ media, onClose }) {
  useEffect(() => {
    if (!media) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.classList.add("modal-open");

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("modal-open");
    };
  }, [media, onClose]);

  if (!media) return null;

  const src =
    media.provider === "drive"
      ? `https://drive.google.com/file/d/${media.fileId}/preview`
      : `https://www.youtube.com/embed/${media.videoId}?autoplay=1&rel=0`;

  return (
    <>
      <div
        className="modal fade show vocational-expo__modal"
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
              <h5 className="modal-title">{media.title}</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body p-0">
              <div className="vocational-expo__player">
                <iframe
                  src={src}
                  title={media.title}
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

// 學年度分頁頁籤，供各區塊共用
function YearTabs({ groups, activeYear, onChange, idPrefix }) {
  return (
    <div className="vocational-expo__year-tabs" role="tablist">
      {groups.map(({ year }) => (
        <button
          type="button"
          role="tab"
          aria-selected={year === activeYear}
          key={`${idPrefix}-tab-${year}`}
          className={`vocational-expo__year-tab${
            year === activeYear ? " vocational-expo__year-tab--active" : ""
          }`}
          onClick={() => onChange(year)}
        >
          {year} 學年度
        </button>
      ))}
    </div>
  );
}

// 依 provider 取得影片縮圖，Drive 影片抓不到時由 SpeakerCard 內的 onError 顯示備用圖示
function getTalkThumbnail(talk) {
  return talk.provider === "drive"
    ? `https://drive.google.com/thumbnail?id=${talk.fileId}&sz=w400`
    : `https://img.youtube.com/vi/${talk.videoId}/hqdefault.jpg`;
}

// 技職達人卡片：縮圖 + 播放圖示 + 姓名/頭銜 + 觀看按鈕，固定寬高排成格狀
function SpeakerCard({ talk, onSelect }) {
  const [imgError, setImgError] = useState(false);

  return (
    <button type="button" className="vocational-expo__card" onClick={onSelect}>
      <span className="vocational-expo__card-thumb">
        {imgError ? (
          <span className="vocational-expo__card-thumb-fallback">
            <i className="bi bi-mic-fill"></i>
          </span>
        ) : (
          <img
            src={getTalkThumbnail(talk)}
            alt={talk.speaker}
            loading="lazy"
            onError={() => setImgError(true)}
          />
        )}
        <span className="vocational-expo__card-play">
          <i className="bi bi-play-fill"></i>
        </span>
      </span>
      <span className="vocational-expo__card-body">
        <span className="vocational-expo__card-name">{talk.speaker}</span>
        <span className="vocational-expo__card-sub">
          {talk.title || "\u00A0"}
        </span>
        <span className="vocational-expo__card-cta">
          <i className="bi bi-play-circle-fill"></i> 立即觀看
        </span>
      </span>
    </button>
  );
}

// 宣傳影片卡片：縮圖 + 播放圖示 + 片名 + 觀看按鈕
function PromoVideoCard({ video, onSelect }) {
  const [imgError, setImgError] = useState(false);

  return (
    <button type="button" className="vocational-expo__card" onClick={onSelect}>
      <span className="vocational-expo__card-thumb">
        {imgError ? (
          <span className="vocational-expo__card-thumb-fallback">
            <i className="bi bi-play-circle-fill"></i>
          </span>
        ) : (
          <img
            src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
            alt={video.name}
            loading="lazy"
            onError={() => setImgError(true)}
          />
        )}
        <span className="vocational-expo__card-play">
          <i className="bi bi-play-fill"></i>
        </span>
      </span>
      <span className="vocational-expo__card-body">
        <span className="vocational-expo__card-name">{video.name}</span>
        <span className="vocational-expo__card-cta">
          <i className="bi bi-play-circle-fill"></i> 立即觀看
        </span>
      </span>
    </button>
  );
}

// 宣導成果手冊卡片：PDF 圖示 + 名稱 + 線上瀏覽/下載雙按鈕
function HandbookCard({ book, onView }) {
  return (
    <div className="vocational-expo__card vocational-expo__card--pdf">
      <span className="vocational-expo__card-thumb vocational-expo__card-thumb--pdf">
        <i className="bi bi-file-earmark-pdf-fill"></i>
      </span>
      <span className="vocational-expo__card-body">
        <span className="vocational-expo__card-name">{book.name}</span>
        <span className="vocational-expo__card-actions">
          <button
            type="button"
            className="vocational-expo__card-btn vocational-expo__card-btn--primary"
            onClick={onView}
          >
            <i className="bi bi-eye-fill"></i> 線上瀏覽
          </button>
          <a
            href={`https://drive.google.com/uc?export=download&id=${book.fileId}`}
            className="vocational-expo__card-btn vocational-expo__card-btn--outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-download"></i> 下載
          </a>
        </span>
      </span>
    </div>
  );
}

function VocationalExpo() {
  const [activeMedia, setActiveMedia] = useState(null);

  const speakerTalksByYear = groupByYear(speakerTalks);
  const promoVideosByYear = groupByYear(promoVideos);
  const handbooksByYear = groupByYear(handbooks);

  const [activeTalkYear, setActiveTalkYear] = useState(
    speakerTalksByYear[0]?.year,
  );
  const activeTalkGroup =
    speakerTalksByYear.find((group) => group.year === activeTalkYear) ??
    speakerTalksByYear[0];

  const [activePromoYear, setActivePromoYear] = useState(
    promoVideosByYear[0]?.year,
  );
  const activePromoGroup =
    promoVideosByYear.find((group) => group.year === activePromoYear) ??
    promoVideosByYear[0];

  const [activeHandbookYear, setActiveHandbookYear] = useState(
    handbooksByYear[0]?.year,
  );
  const activeHandbookGroup =
    handbooksByYear.find((group) => group.year === activeHandbookYear) ??
    handbooksByYear[0];

  return (
    <>
      <Helmet>
        <title>技職博覽會專區 | {SITE_NAME}</title>
      </Helmet>

      <div className="container py-5 vocational-expo">
        <h1 className="h1 vocational-expo__title mb-4">技職博覽會專區</h1>

        <section className="vocational-expo__section mb-5">
          <h2 className="h4 vocational-expo__section-title mb-3">
            技職達人宣講影片
          </h2>
          <YearTabs
            groups={speakerTalksByYear}
            activeYear={activeTalkGroup?.year}
            onChange={setActiveTalkYear}
            idPrefix="talk"
          />
          {activeTalkGroup && (
            <div className="vocational-expo__card-grid">
              {activeTalkGroup.items.map((talk) => (
                <SpeakerCard
                  talk={talk}
                  key={`${activeTalkGroup.year}-${talk.speaker}`}
                  onSelect={() =>
                    setActiveMedia({ ...talk, title: talk.speaker })
                  }
                />
              ))}
            </div>
          )}
        </section>

        <section className="vocational-expo__section mb-5">
          <h2 className="h4 vocational-expo__section-title mb-3">宣傳影片</h2>
          <YearTabs
            groups={promoVideosByYear}
            activeYear={activePromoGroup?.year}
            onChange={setActivePromoYear}
            idPrefix="promo"
          />
          {activePromoGroup && (
            <div className="vocational-expo__card-grid">
              {activePromoGroup.items.map((video) => (
                <PromoVideoCard
                  video={video}
                  key={video.videoId}
                  onSelect={() =>
                    setActiveMedia({
                      provider: "youtube",
                      videoId: video.videoId,
                      title: video.name,
                    })
                  }
                />
              ))}
            </div>
          )}
        </section>

        <section className="vocational-expo__section">
          <h2 className="h4 vocational-expo__section-title mb-3">
            宣導成果手冊
          </h2>
          <YearTabs
            groups={handbooksByYear}
            activeYear={activeHandbookGroup?.year}
            onChange={setActiveHandbookYear}
            idPrefix="handbook"
          />
          {activeHandbookGroup && (
            <div className="vocational-expo__card-grid">
              {activeHandbookGroup.items.map((book) => (
                <HandbookCard
                  book={book}
                  key={book.fileId}
                  onView={() =>
                    setActiveMedia({
                      provider: "drive",
                      fileId: book.fileId,
                      title: book.name,
                    })
                  }
                />
              ))}
            </div>
          )}
        </section>
      </div>

      <MediaModal media={activeMedia} onClose={() => setActiveMedia(null)} />
    </>
  );
}

export default VocationalExpo;
