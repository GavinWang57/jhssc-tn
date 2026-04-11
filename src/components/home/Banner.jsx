import "./_banner.scss";

const Banner = () => {
  return (
    <div className="banner py-40 py-md-2">
      <img
        src="images/home/banner.png"
        alt="探索未來，掌握技職新藍圖 - 整合技職資源，點亮學生多元未來"
        className="banner-image img-fluid py-2 py-md-0"
      />
      <button className="explore-btn fs-6 fs-md-5 px-4 px-md-36 py-2 py-md-12" type="button">
        [ 開始探索你的技職之路 → ]
      </button>
    </div>
  );
};

export default Banner;
