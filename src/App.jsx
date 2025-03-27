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

const FullpageWrapper = () => (
  <ReactFullpage
    licenseKey={'YOUR_KEY_HERE'}
    scrollingSpeed={1000}
    navigation
    navigationPosition="right"
    anchors={['home', 'about', 'contact']}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <HomeSection />
          <OurStory/>
          <Whatwedo/>
          <AboutSection />
          <Footer/>
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
          <Route path="/" element={<FullpageWrapper />} />
          <Route path="/services/:serviceName" element={<ServicePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;