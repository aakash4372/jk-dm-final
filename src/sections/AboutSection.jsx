import React, { useState, useRef, useEffect } from "react";
import Explorevideo from "./serviceimage/explore.mp4";
import Exploreimage from "./serviceimage/explore.png";
import "./css/explore.css";

const AboutSection = () => {
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!videoEnded && videoRef.current) {
        setVideoEnded(true);
      }
    }, 30000);

    return () => clearTimeout(timer);
  }, [videoEnded]);

  // Generate floating bubbles
  const bubbles = Array.from({ length: 60 }).map((_, i) => {
    const size = Math.random() * 20 + 10;
    const delay = Math.random() * 10;
    const duration = Math.random() * 25 + 15;
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const opacity = Math.random() * 0.6 + 0.2;
    
    const colors = [
      'rgba(154, 74, 156, OPACITY)',
      'rgba(192, 68, 153, OPACITY)',
      'rgba(62, 73, 91, OPACITY)',
      'rgba(255, 107, 107, OPACITY)',
      'rgba(75, 192, 192, OPACITY)',
      'rgba(255, 206, 86, OPACITY)',
      'rgba(54, 162, 235, OPACITY)',
      'rgba(153, 102, 255, OPACITY)'
    ];
    const color = colors[Math.floor(Math.random() * colors.length)].replace('OPACITY', opacity);

    return (
      <div 
        key={i}
        className="bubble"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `${top}%`,
          left: `${left}%`,
          background: color,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
          animationName: 'float',
          borderRadius: '50%',
          zIndex: 2
        }}
      />
    );
  });

  return (
    <div className="section explore-section py-5 position-relative">
      <div className="bubbles-background">{bubbles}</div>
      <div className="container px-4">
        <h2 className="text-center mb-5 fw-bold">Explore Us</h2>
        <div className="row d-flex align-items-center">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <div className="ratio ratio-16x9" style={{zIndex:'3'}}>
              {!videoEnded ? (
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  onEnded={handleVideoEnd}
                  className="w-100 h-100 object-fit-cover rounded"
                >
                  <source src={Explorevideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={Exploreimage}
                  alt="Explore Us"
                  className="w-100 h-100 object-fit-cover rounded"
                />
              )}
            </div>
          </div>
          <div className="col-12 col-md-6">
            <h3 className="mb-3">About Us</h3>
            <p className="lead">
              We are a passionate team dedicated to creating amazing experiences.
            </p>
            <h3 className="mt-4">Our Mission</h3>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.
            </p>
            <h3 className="mt-4">Our Vision</h3>
            <p className="lead">
              Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
