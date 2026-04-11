import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fs-5 bg-primary-500 shadow-sm">
      <div className="container py-2">
        {/* Logo 區 */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="images/logo-nav.png"
            alt="台南市生涯及技藝教育資源網"
            className="me-2"
          />
          {/* <span className="fs-4 fw-bold text-neutral-100">
            台南市國民中學
            <br />
            生涯及技藝教育資源網
          </span> */}
        </Link>

        {/* 漢堡選單按鈕 */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="切換導航選單"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* 導航選單 */}
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            {[
              {
                to: "/news-coverage",
                label: "新聞露出",
                className: "nav-item-news",
              },
              {
                to: "/skills-education",
                label: "技藝教育",
                className: "nav-item-skills",
              },
              {
                to: "/career-exploration-center",
                label: "職探中心",
                className: "nav-item-career",
              },
              {
                to: "/job-clusters",
                label: "職群介紹",
                className: "nav-item-clusters",
              },
              {
                to: "/vocational-expo",
                label: "技職博覽會專區",
                className: "nav-item-expo",
              },
              {
                to: "/other-resources",
                label: "其他資源",
                className: "nav-item-resources",
              },
              {
                to: "/related-links",
                label: "相關連結",
                className: "nav-item-links",
              },
            ].map(({ to, label, className, end }) => (
              <li className={`nav-item ${className}`} key={to}>
                <NavLink
                  className={({ isActive }) =>
                    `me-3 nav-link fw-medium text-white${isActive ? " active" : ""}`
                  }
                  to={to}
                  end={end}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
