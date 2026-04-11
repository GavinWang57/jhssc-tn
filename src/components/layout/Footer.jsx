import { div } from "framer-motion/client";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-600 text-neutral-100 py-5 mt-5">
      <div className="container">
        <div className="row">
          {/* Logo 與機關資訊 */}
          <div className="col-lg-2 mb-1">
            <img
              src="/images/logo-nav.png"
              alt="台南市生涯及技藝教育資源網"
              height="75"
              className="me-2"
            />
          </div>
          <div className="row col-lg-10">
            <div className="col-lg-4">
              主辦單位：台南市政府教育局
              <br />
              708201臺南市永華路二段6號7樓
            </div>
            <div className="col-lg-4">
              聯絡電話：(06) 2991111
              <br />
              電子郵件：
              <a href="mailto:example@example.com" className="text-neutral-100">
                example@example.com
              </a>
            </div>
            <div className="col-lg-4">
              <Link to="/related-links" className="text-neutral-100">
                其它連結
              </Link>
              <p className="mb-0">© {currentYear} 台南市政府教育局 版權所有</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
