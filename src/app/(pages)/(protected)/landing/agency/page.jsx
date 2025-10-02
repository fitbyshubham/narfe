import ModernNavbar from '@/components/layout/ModernNavbar';
import Hero from './components/Hero';

import { blogPosts, jobDetails, projects, services } from './data';
import Portfolios from './components/Portfolios';

import Footer from './components/Footer';
export const metadata = {
  title: 'Agency Landing'
};
const Agency = () => {
  return <>
      <div className="header-4">
        <ModernNavbar buttonVariant="outline-secondary" />
        <Hero />
      </div>
     
      <Portfolios portfolios={projects} />
=      {/* <Blogs blogs={blogPosts} />
      <Vacancies jobDetails={jobDetails} /> */}
      <Footer />
    </>;
};
export default Agency;