
import ModernNavbar from '@/components/layout/ModernNavbar';
import Hero from '../../(protected)/landing/agency/components/Hero';
import { blogPosts, jobDetails, projects, services } from '../../(protected)/landing/agency/data';
import Clients from '../../(protected)/landing/agency/components/Clients';
//import Blogs from '../../(protected)/landing/agency/components/Blogs';
import Features2 from '../../(protected)/landing/app/components/Features2';
import EarlyAccessSection from '../../(protected)/landing/agency/components/EarlyAccessSection';
import RegulatedGradeData from '../../(protected)/landing/coworking/components/RegulatedGradeData';
import CreatorApplicationForm from '../../(protected)/landing/coworking/components/CreatorApplicationForm';
import Footer from '../../(protected)/landing/agency/components/Footer';
import NarfeTripPreview from '../../(protected)/landing/agency/components/NarfeTripPreview';
export const metadata = {
  title: 'Home'
};
const Home = () => {
  return <>
      <div className="header-4">
        <ModernNavbar buttonVariant="outline-secondary" />
        <Hero />
      </div>
      <NarfeTripPreview />
      <EarlyAccessSection /> 
      <CreatorApplicationForm/>
      {/* < DataOffering/>
      <RegulatedGradeData /> */}
      {/* <Clients /> */}
      {/* <Features2 /> */}
      {/* <Blogs blogs={blogPosts} /> */}
      {/* <Footer /> */}
    </>;
};
export default Home;