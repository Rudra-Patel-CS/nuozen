import { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import Home from './pages/Home.jsx';
import Services from './pages/services/Services.jsx';
import ServiceDetail from './pages/services/ServiceDetail.jsx';
import HireUs from './pages/services/HireUs.jsx';
import Industries from './pages/industries/Industries.jsx';
import IndustryDetail from './pages/industries/IndustryDetail.jsx';
import CloudHosting from './pages/cloud/CloudHosting.jsx';
import CloudMigration from './pages/cloud/CloudMigration.jsx';
import Firewall from './pages/cloud/Firewall.jsx';
import Pricing from './pages/cloud/Pricing.jsx';
import About from './pages/company/About.jsx';
import Careers from './pages/company/Careers.jsx';
import Clients from './pages/company/Clients.jsx';
import Contact from './pages/company/Contact.jsx';
import Blog from './pages/company/Blog.jsx';
import BlogPost from './pages/company/BlogPost.jsx';
import Legal from './pages/company/Legal.jsx';
import NotFound from './pages/NotFound.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="page">
      <div className="dotgrid" />
      <ScrollToTop />
      <Header />
      <main className="grow" style={{ position: 'relative', zIndex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/hire-us" element={<HireUs />} />

          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/:slug" element={<IndustryDetail />} />

          <Route path="/cloud-hosting" element={<CloudHosting />} />
          <Route path="/cloud-migration" element={<CloudMigration />} />
          <Route path="/firewall" element={<Firewall />} />
          <Route path="/pricing" element={<Pricing />} />

          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />

          <Route path="/privacy-policy" element={<Legal doc="privacy" />} />
          <Route path="/terms-of-service" element={<Legal doc="terms" />} />
          <Route path="/refund-policy" element={<Legal doc="refunds" />} />
          <Route path="/csae-policy" element={<Legal doc="csae" />} />

          {/* legacy WordPress URLs → new homes */}
          <Route path="/about-us" element={<Navigate to="/about" replace />} />
          <Route path="/contact-us" element={<Navigate to="/contact" replace />} />
          <Route path="/careers-3" element={<Navigate to="/careers" replace />} />
          <Route path="/our-clients" element={<Navigate to="/clients" replace />} />
          <Route path="/our-services" element={<Navigate to="/services" replace />} />
          <Route path="/firewall-service" element={<Navigate to="/firewall" replace />} />
          <Route path="/cloud-hosting-2" element={<Navigate to="/cloud-hosting" replace />} />
          <Route path="/shop" element={<Navigate to="/pricing" replace />} />
          <Route path="/gas" element={<Navigate to="/industries/natural-gas" replace />} />
          <Route path="/electricity" element={<Navigate to="/industries/electricity" replace />} />
          <Route path="/water" element={<Navigate to="/industries/water" replace />} />
          <Route path="/natural-gas" element={<Navigate to="/industries/natural-gas" replace />} />
          <Route path="/utilities" element={<Navigate to="/industries" replace />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
