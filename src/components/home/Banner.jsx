import "./_banner.scss";

const Banner = () => {
  return (
    <div className="banner">
      <img
        src="/images/home/banner.png"
        alt="探索未來，掌握技職新藍圖 - 整合技職資源，點亮學生多元未來"
        className="banner-image img-fluid"
      />
      <button className="explore-btn fs-5 px-36 py-12" type="button">
        [ 開始探索你的技職之路 → ]
      </button>
    </div>
  );
};

export default Banner;
