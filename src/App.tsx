import './App.scss';
import Brands from './components/Brands/Brands';
import CaseStudies from './components/CaseStudies/CaseStudies';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar/Navbar';
import PageSection from './components/PageSection/PageSection';
import ServiceList from './components/ServiceList/ServiceList';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <PageSection title="What we do" id="services">
        <ServiceList />
      </PageSection>
      <PageSection title="Case studies" id="case-studies">
        <CaseStudies />
      </PageSection>
      <PageSection title="You’ll be in good company">
        <Brands />
      </PageSection>
      <div className="footer-wrapper">
        <PageSection title="Contact Us" id="contact">
          <Footer />
        </PageSection>
      </div>
    </div>
  );
}

export default App;
