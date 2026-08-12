import { useState } from "react";
import { Helmet } from "react-helmet-async";
import "../assets/scss/pages/_skills-education.scss";
import skillsEducationCourses from "../data/skillsEducationCourses.json";

const SITE_NAME = "臺南市國民中學生涯及技藝教育資源網";

const JOB_CLUSTERS = [
  "機械職群",
  "動力機械職群",
  "電機與電子職群",
  "土木與建築職群",
  "化工職群",
  "商業與管理職群",
  "設計職群",
  "農業職群",
  "食品職群",
  "家政職群",
  "餐旅職群",
  "水產職群",
  "海事職群",
  "藝術職群",
  "醫護職群",
];

// 依「職群」欄位合併連續相同項目所需的 rowSpan
function withClusterRowSpan(courses) {
  const rows = [];
  let i = 0;
  while (i < courses.length) {
    let span = 1;
    while (
      i + span < courses.length &&
      courses[i + span].cluster === courses[i].cluster
    ) {
      span++;
    }
    rows.push({ ...courses[i], rowSpan: span });
    for (let j = 1; j < span; j++) {
      rows.push({ ...courses[i + j], rowSpan: 0 });
    }
    i += span;
  }
  return rows;
}

const YEARS = Object.keys(skillsEducationCourses).sort((a, b) => b - a);

function SkillsEducation() {
  const [activeYear, setActiveYear] = useState(YEARS[0]);

  const rows = withClusterRowSpan(skillsEducationCourses[activeYear] ?? []);

  return (
    <>
      <Helmet>
        <title>技藝教育 | {SITE_NAME}</title>
      </Helmet>

      <div className="container py-5 skills-education">
        <h1 className="h1 skills-education__title mb-4">技藝教育</h1>

        <section className="skills-education__section">
          <h2 className="h4 skills-education__section-title mb-3">
            技藝課程介紹
          </h2>
          <div className="skills-education__intro-card">
            <p className="skills-education__intro-text">
              學生能從技能學習導向的教學中，發掘自我興趣與潛能，並能瞭解技職教育職群概況，進而規劃未來生涯進路之選擇，以達成職群試探及適性發展之目標。
            </p>
            <p className="skills-education__intro-text">
              國民中學技藝教育職群歸類為下列 15 職群：
            </p>
            <ul className="skills-education__cluster-list">
              {JOB_CLUSTERS.map((cluster) => (
                <li key={cluster} className="skills-education__cluster-item">
                  {cluster}
                </li>
              ))}
            </ul>
            <p className="skills-education__intro-source mt-3">
              （以上文字出自「教育部－國民中學技藝教育課程實施參考指引」）
            </p>
          </div>
        </section>

        <section className="skills-education__section">
          <h2 className="h4 skills-education__section-title mb-3">
            本市技藝教育課程近3年辦理情形
          </h2>

          <div className="skills-education__tabs">
            {YEARS.map((year) => (
              <button
                key={year}
                type="button"
                className={`skills-education__tab${
                  year === activeYear ? " active" : ""
                }`}
                onClick={() => setActiveYear(year)}
              >
                {year} 學年度
              </button>
            ))}
          </div>

          <div className="skills-education__table-wrapper">
            <table className="skills-education__table">
              <thead>
                <tr>
                  <th className="skills-education__cluster-col">職群</th>
                  <th>合作學校</th>
                  <th>辦理國中</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr key={`${row.cluster}-${row.partnerSchool}-${index}`}>
                    {row.rowSpan > 0 && (
                      <td
                        className="skills-education__cluster-col"
                        rowSpan={row.rowSpan}
                      >
                        {row.cluster}
                      </td>
                    )}
                    <td>{row.partnerSchool}</td>
                    <td>{row.hostSchools}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
}

export default SkillsEducation;
