import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import Navbar from './components/Navbar';
import HomeSection from './sections/HomeSection';
import AboutSection from './sections/AboutSection';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cursor from './components/Cursor';
import OurStory from './sections/Ourstory';
import Whatwedo from './sections/Whatwedo';
import Footer from './sections/footer';
import ServicePage from './sections/ServicePage';
import ContactForm from './sections/Contactform';

const Fullpage = () => (
  <ReactFullpage
    scrollingSpeed={1000}
    navigation
    navigationPosition="right"
    anchors={['home', 'our-story', 'what-we-do', 'explore-us', 'footer']}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <HomeSection />
          <OurStory />
          <Whatwedo />
          <AboutSection />
          <Footer />
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Cursor/>
        <Routes>
          <Route path="/" element={<Fullpage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/contact" element={<ContactForm/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;