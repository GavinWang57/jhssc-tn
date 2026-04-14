function FooterOfficeInfo() {
  return (
    <>
      <h5 className="fw-bold mb-3">臺南市政府教育局</h5>
      <p className="text-neutral-100">
        <i className="bi bi-geo-alt-fill me-2"></i>
        708201臺南市永華路二段6號7樓
        <br />
        <span className="text-neutral-300">臺南市永華市政中心</span>
      </p>
      <a
        href="https://maps.google.com/?q=700 臺南市永華路二段6號7樓"
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-100 text-decoration-none"
      >
        <i className="bi bi-map me-2 text-warning"></i>
        查看地圖
      </a>
    </>
  );
}

export default FooterOfficeInfo;
