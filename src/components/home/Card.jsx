import { Link } from "react-router-dom";
import "./_card.scss";

const Card = ({ icon, title, description, buttonText, link, color }) => {
  return (
    <div className="custom-card" style={{ backgroundColor: color }}>
      {/* 頂部顏色區域的間距 (控制色條粗細) */}
      <div className="custom-card__top-bar"></div>

      {/* 白色主體內容區 */}
      <div className="card-body bg-white custom-card__body p-3">
        {/* 圖標容器 */}
        <div className="custom-card__icon">
          <img src={icon} alt={title} />
        </div>

        {/* 卡片標題 */}
        <h5 className="custom-card__title">{title}</h5>

        {/* 卡片描述 */}
        <p className="custom-card__description">{description}</p>

        {/* 按鈕連結 */}
        <Link
          to={link}
          className="custom-card__button"
          style={{ color: color }}
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default Card;
