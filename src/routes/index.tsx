import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout'; // <-- यहाँ change
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import ServicesDetail from '@/pages/ServicesDetail';
import Projects from '@/pages/Projects';
import ProjectDetail from '@/pages/ProjectDetail';
import Pricing from '@/pages/Pricing';
import Blog from '@/pages/Blog';
import BlogDetail from '@/pages/BlogDetail';
import Careers from '@/pages/Careers';
import Contact from '@/pages/Contact';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import Terms from '@/pages/Terms';
import NotFound from '@/pages/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:slug" element={<ServicesDetail />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:slug" element={<ProjectDetail />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogDetail />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<PrivacyPolicy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}