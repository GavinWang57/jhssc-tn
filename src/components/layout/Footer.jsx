import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-600 text-neutral-100 py-5 mt-5">
      <div className="container">
        <div className="row">
          {/* Logo 與機關資訊 */}
          <div className="col-md-2 mb-2 text-center text-md-start">
            <img
              src="images/logo-nav.png"
              alt="臺南市生涯及技藝教育資源網"
              height="75"
              className="mb-0"
            />
          </div>
          <div className="row col-md-10 text-center text-md-start">
            <div className="col-md-4">
              <div className="mb-3">主辦單位：臺南市政府教育局</div>
              <div className="mb-1">708201臺南市永華路二段6號7樓</div>
            </div>
            <div className="col-md-4 mb-1">
              <div className="mb-1">聯絡電話：(06) 2991111#1245</div>
              <div className="mb-1">
               
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-1">
                <Link to="/related-links" className="text-neutral-100">
                  其它連結
                </Link>
              </div>
              <div>© {currentYear} 臺南市政府教育局 版權所有</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
