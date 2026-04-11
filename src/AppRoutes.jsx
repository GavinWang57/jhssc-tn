import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewsCoverage from "./pages/NewsCoverage";
import SkillsEducation from "./pages/SkillsEducation";
import CareerExplorationCenter from "./pages/CareerExplorationCenter";
import JobClusters from "./pages/JobClusters";
import VocationalExpo from "./pages/VocationalExpo";
import OtherResources from "./pages/OtherResources";
import RelatedLinks from "./pages/RelatedLinks";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news-coverage" element={<NewsCoverage />} />
      <Route path="/skills-education" element={<SkillsEducation />} />
      <Route
        path="/career-exploration-center"
        element={<CareerExplorationCenter />}
      />
      <Route path="/job-clusters" element={<JobClusters />} />
      <Route path="/vocational-expo" element={<VocationalExpo />} />
      <Route path="/other-resources" element={<OtherResources />} />
      <Route path="/related-links" element={<RelatedLinks />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default AppRoutes;
