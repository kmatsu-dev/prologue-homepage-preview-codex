import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "./components/layout/Layout";
import { siteContent } from "./data/siteContent";
import { AnalyticsPage } from "./pages/AnalyticsPage";
import { CompanyPage } from "./pages/CompanyPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { PlatinumPartnerPage } from "./pages/PlatinumPartnerPage";
import { ReasonsPage } from "./pages/ReasonsPage";
import { ResultsPage } from "./pages/ResultsPage";
import { ServicesPage } from "./pages/ServicesPage";

function MetaUpdater() {
  const location = useLocation();

  useEffect(() => {
    const page = siteContent.pages.find((item) => item.path === location.pathname) ?? siteContent.pages[0];
    document.title = page.seo.title;
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute("content", page.seo.description);
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <Layout>
      <MetaUpdater />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/" element={<ServicesPage />} />
        <Route path="/results/" element={<ResultsPage />} />
        <Route path="/analytics/" element={<AnalyticsPage />} />
        <Route path="/reasons/" element={<ReasonsPage />} />
        <Route path="/contact/" element={<ContactPage />} />
        <Route path="/company/" element={<CompanyPage />} />
        <Route path="/platinum-partner/" element={<PlatinumPartnerPage />} />
      </Routes>
    </Layout>
  );
}
