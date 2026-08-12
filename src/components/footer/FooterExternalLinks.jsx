function FooterExternalLinks() {
  const externalLinks = [
    {
      name: "生涯發展教育",
      url: "https://cirn.moe.edu.tw/Module/index.aspx?sid=1182",
    },
    {
      name: "國中技藝教育",
      url: "https://cirn.moe.edu.tw/WebContent/index.aspx?sid=1204&mid=13918",
    },
    { name: "技職大玩JOB", url: "https://www.twmakers.com.tw/" },
    {
      name: "國中畢業生適性入學宣導網站",
      url: "https://shs.k12ea.gov.tw/site/adapt-k12ea",
    },
    {
      name: "技專校院招生策略委員會",
      url: "https://www.techadmi.edu.tw/manual.php",
    },
    { name: "技專校院招生委員會聯合會", url: "https://www.jctv.ntut.edu.tw/" },
    { name: "臺南市政府", url: "https://www.tainan.gov.tw/" },
    { name: "臺南市政府教育局", url: "https://www.tn.edu.tw/" },
  ];

  return (
    <>
      {" "}
      <div className="col-lg-8">
        <h5 className="fw-bold mb-3 text-neutral-100 fw-500">相關連結</h5>
        <div className="row">
          {externalLinks.map((link, index) => (
            <div className="col-md-6 mb-2" key={index}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-neutral-100 d-block"
              >
                <i className="bi bi-arrow-right-circle me-2"></i>
                {link.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FooterExternalLinks;
